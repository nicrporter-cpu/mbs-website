import { corsHeaders, handlePreflight, jsonResponse } from './lib/cors.js';
import { looksLikeSpam } from './lib/spam.js';
import { validate } from './lib/validate.js';
import { storeJoinFiles, getStoredFile } from './lib/files.js';
import { appendRow } from './lib/sheets.js';
import { sendEmail } from './lib/email.js';
import { joinNotification, contactNotification, newsletterNotification } from './templates/notify.js';
import { confirmationFor } from './templates/confirm.js';

const EMAIL_FIELD = { join: 'email', contact: 'email', newsletter: 'news_email' };

function nowIso() {
  return new Date().toISOString();
}

async function handleSubmit(request, env) {
  let formData;
  try {
    formData = await request.formData();
  } catch (e) {
    return jsonResponse({ ok: false, error: 'bad_request' }, 400, request, env);
  }

  const formType = String(formData.get('formType') || '');
  if (!['join', 'contact', 'newsletter'].includes(formType)) {
    return jsonResponse({ ok: false, error: 'unknown_form_type' }, 400, request, env);
  }

  // Spam: pretend success, do nothing. See lib/spam.js.
  if (looksLikeSpam(formData)) {
    return jsonResponse({ ok: true }, 200, request, env);
  }

  const { valid, errors } = validate(formType, formData);
  if (!valid) {
    return jsonResponse({ ok: false, errors }, 400, request, env);
  }

  const submissionId = crypto.randomUUID();
  const submittedAt = nowIso();
  const lang = String(formData.get('mbs_lang') || 'en') === 'de' ? 'de' : 'en';

  let files = { cv: null, enrollment: null };
  if (formType === 'join') {
    try {
      const baseUrl = new URL(request.url).origin;
      files = await storeJoinFiles(env, formData, submissionId, env.ADMIN_FILE_TOKEN, baseUrl);
    } catch (e) {
      console.error('File storage failed:', e);
      // Non-fatal: continue without file links rather than losing the whole
      // application over a storage hiccup.
    }
  }

  let sheetOk = false;
  try {
    if (env.SPREADSHEET_ID) {
      const row = buildSheetRow(formType, formData, submittedAt, files);
      await appendRow(env, sheetTabFor(formType), row);
      sheetOk = true;
    }
  } catch (e) {
    console.error('Sheet append failed:', e);
  }

  let notifyOk = false;
  try {
    const html = buildNotificationHtml(formType, formData, files);
    await sendEmail(env, {
      to: env.NOTIFY_TO_EMAIL,
      subject: notificationSubject(formType),
      html,
      replyTo: String(formData.get(EMAIL_FIELD[formType]) || '') || undefined
    });
    notifyOk = true;
  } catch (e) {
    console.error('Notification email failed:', e);
  }

  // Auto-reply is a nice-to-have; its failure never changes the response.
  try {
    const confirmation = confirmationFor(formType, lang);
    const submitterEmail = String(formData.get(EMAIL_FIELD[formType]) || '').trim();
    if (confirmation && submitterEmail) {
      await sendEmail(env, {
        to: submitterEmail,
        subject: confirmation.subject,
        html: confirmation.html
      });
    }
  } catch (e) {
    console.error('Auto-reply failed:', e);
  }

  if (!sheetOk && !notifyOk) {
    // Genuinely nothing succeeded — tell the frontend so it can show the
    // "please email us directly" fallback instead of a false success.
    return jsonResponse({ ok: false, error: 'delivery_failed' }, 502, request, env);
  }

  return jsonResponse({ ok: true }, 200, request, env);
}

function sheetTabFor(formType) {
  return { join: 'Join', contact: 'Contact', newsletter: 'Newsletter' }[formType];
}

function notificationSubject(formType) {
  return {
    join: 'New membership application',
    contact: 'New contact form message',
    newsletter: 'New newsletter signup'
  }[formType];
}

function buildNotificationHtml(formType, formData, files) {
  if (formType === 'join') return joinNotification(formData, files);
  if (formType === 'contact') return contactNotification(formData);
  return newsletterNotification(formData);
}

function buildSheetRow(formType, formData, submittedAt, files) {
  if (formType === 'join') {
    return [
      submittedAt,
      formData.get('firstname') || '',
      formData.get('lastname') || '',
      formData.get('email') || '',
      formData.get('university') || '',
      formData.get('level') || '',
      formData.get('studyprogram') || '',
      formData.get('language') || '',
      formData.get('motivation') || '',
      formData.get('interests') || '',
      files.cv ? files.cv.url : '',
      files.enrollment ? files.enrollment.url : ''
    ];
  }
  if (formType === 'contact') {
    return [
      submittedAt,
      formData.get('firstname') || '',
      formData.get('lastname') || '',
      formData.get('email') || '',
      formData.get('role') || '',
      formData.get('message') || ''
    ];
  }
  // newsletter
  return [submittedAt, formData.get('news_email') || ''];
}

async function handleGetFile(request, env, key) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || '';
  if (!env.ADMIN_FILE_TOKEN || token !== env.ADMIN_FILE_TOKEN) {
    return new Response('Forbidden', { status: 403, headers: corsHeaders(request, env) });
  }

  const object = await getStoredFile(env, key);
  if (!object) {
    return new Response('Not found', { status: 404, headers: corsHeaders(request, env) });
  }

  const headers = new Headers(corsHeaders(request, env));
  headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
  const originalName = object.customMetadata?.originalName;
  headers.set('Content-Disposition', `attachment${originalName ? `; filename="${originalName.replace(/"/g, '')}"` : ''}`);
  return new Response(object.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return handlePreflight(request, env);

    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/submit') {
      try {
        return await handleSubmit(request, env);
      } catch (e) {
        console.error('Unhandled /submit error:', e);
        return jsonResponse({ ok: false, error: 'server_error' }, 500, request, env);
      }
    }

    if (request.method === 'GET' && url.pathname.startsWith('/files/')) {
      const key = decodeURIComponent(url.pathname.slice('/files/'.length));
      return handleGetFile(request, env, key);
    }

    return new Response('Not found', { status: 404, headers: corsHeaders(request, env) });
  }
};
