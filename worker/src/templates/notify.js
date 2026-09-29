// Internal notification emails, sent to env.NOTIFY_TO_EMAIL. English only
// (read by the board, not the submitter) — see the plan's decision table.

function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function wrap(title, rowsHtml) {
  return `<div style="font-family:sans-serif;font-size:14px;color:#273F63;line-height:1.6">
    <h2 style="margin:0 0 16px">${esc(title)}</h2>
    <table cellpadding="6" style="border-collapse:collapse">${rowsHtml}</table>
  </div>`;
}

function row(label, value) {
  if (!value) return '';
  return `<tr><td style="font-weight:600;vertical-align:top;padding-right:12px">${esc(label)}</td><td>${value}</td></tr>`;
}

export function joinNotification(formData, files) {
  const rows = [
    row('Name', `${esc(formData.get('firstname'))} ${esc(formData.get('lastname'))}`),
    row('Email', esc(formData.get('email'))),
    row('University', esc(formData.get('university'))),
    row('Level', esc(formData.get('level'))),
    row('Programme', esc(formData.get('studyprogram'))),
    row('Preferred language', esc(formData.get('language'))),
    row('Motivation', esc(formData.get('motivation')).replace(/\n/g, '<br>')),
    row('Interests', esc(formData.get('interests')).replace(/\n/g, '<br>')),
    row('CV', files.cv ? `<a href="${files.cv.url}">${esc(files.cv.name)}</a>` : '&ndash;'),
    row('Enrollment certificate', files.enrollment ? `<a href="${files.enrollment.url}">${esc(files.enrollment.name)}</a>` : '&ndash;')
  ].join('');
  return wrap('New membership application', rows);
}

export function contactNotification(formData) {
  const rows = [
    row('Name', esc(formData.get('name'))),
    row('Email', esc(formData.get('email'))),
    row('I’m a…', esc(formData.get('role'))),
    row('Message', esc(formData.get('message')).replace(/\n/g, '<br>'))
  ].join('');
  return wrap('New contact form message', rows);
}

export function newsletterNotification(formData) {
  const rows = row('Email', esc(formData.get('news_email')));
  return wrap('New newsletter signup', rows);
}
