// Short auto-reply sent to whoever submitted a form, in whichever site
// language they were using (lang: 'en' | 'de', sent by
// window.MBS_SUBMIT_FORM). Tone matches the existing on-site success copy
// in screens/data.js (successTitle/sentTitle/nl.done) — keep it that short
// and direct if you edit this later.

function wrap(bodyHtml) {
  return `<div style="font-family:sans-serif;font-size:14px;color:#273F63;line-height:1.6">
    <p style="font-weight:700;font-size:16px;margin:0 0 4px">Munich Business Society</p>
    ${bodyHtml}
    <p style="margin-top:24px;color:#6b7280;font-size:12px">munichbusinesssociety@gmail.com</p>
  </div>`;
}

const COPY = {
  join: {
    en: { subject: "You're on the list", body: "<p>Thanks for applying — no interview, no waiting. You're in.</p><p>Keep an eye on your inbox for what's coming up, or come straight to the next open event.</p>" },
    de: { subject: 'Du bist auf der Liste', body: '<p>Danke für deine Bewerbung — kein Interview, kein Warten. Du bist dabei.</p><p>Behalt dein Postfach im Auge oder komm direkt zum nächsten offenen Event.</p>' }
  },
  contact: {
    en: { subject: 'Message received', body: "<p>Thanks for writing in — we've got your message and will get back to you soon.</p>" },
    de: { subject: 'Nachricht erhalten', body: '<p>Danke für deine Nachricht — wir melden uns bald bei dir.</p>' }
  },
  newsletter: {
    en: { subject: "You're on the list", body: "<p>You're on the list. First email lands at the start of next month.</p>" },
    de: { subject: 'Du bist auf der Liste', body: '<p>Du bist auf der Liste. Die erste E-Mail kommt Anfang nächsten Monats.</p>' }
  }
};

// Returns { subject, html } or null if formType/lang is unrecognized (caller
// should skip sending the auto-reply rather than throw).
export function confirmationFor(formType, lang) {
  const entry = COPY[formType];
  if (!entry) return null;
  const localized = entry[lang] || entry.en;
  return { subject: localized.subject, html: wrap(localized.body) };
}
