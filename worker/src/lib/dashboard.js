// Renders the /dashboard page: Cloudflare Web Analytics visits next to form
// submission counts, so a visit-to-application conversion rate is a glance
// instead of two manual lookups. See index.js's handleDashboard for the data
// fetching this just displays.

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

export function renderDashboard({ days, pageVisits, submissions, cfError, sheetsError }) {
  const joinVisits = pageVisits.find(p => p.path === '/join' || p.path === '/join/')?.visits || 0;
  const joinSubmissions = submissions.Join || 0;
  const joinRate = joinVisits > 0 ? ((joinSubmissions / joinVisits) * 100).toFixed(1) + '%' : '—';

  const visitRows = pageVisits
    .map(p => `<tr><td>${esc(p.path)}</td><td>${p.visits}</td></tr>`)
    .join('');

  const subRows = Object.entries(submissions)
    .map(([tab, n]) => `<tr><td>${esc(tab)}</td><td>${n}</td></tr>`)
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MBS — Traffic &amp; form stats</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 16px; color: #1a1a1a; }
  h1 { font-size: 20px; }
  h2 { font-size: 15px; margin-top: 32px; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  td, th { padding: 6px 8px; border-bottom: 1px solid #e0e0e0; text-align: left; font-size: 14px; }
  .stat { background: #f6f6f6; border-radius: 8px; padding: 16px; margin-top: 16px; }
  .err { background: #fff0f0; border: 1px solid #f3b4b4; border-radius: 8px; padding: 12px; margin-top: 16px; font-size: 13px; white-space: pre-wrap; }
</style>
</head>
<body>
<h1>Last ${days} days</h1>

<div class="stat">
  <strong>Join page &rarr; applications:</strong>
  ${joinVisits} visit${joinVisits === 1 ? '' : 's'} to /join,
  ${joinSubmissions} submission${joinSubmissions === 1 ? '' : 's'}
  ${joinVisits > 0 ? `(${joinRate} conversion)` : ''}
</div>

<h2>Page visits</h2>
<table><tr><th>Path</th><th>Visits</th></tr>${visitRows || '<tr><td colspan="2">No data</td></tr>'}</table>

<h2>Form submissions</h2>
<table><tr><th>Form</th><th>Submissions</th></tr>${subRows}</table>

${cfError ? `<h2>Cloudflare Analytics error</h2><div class="err">${esc(cfError)}</div>` : ''}
${sheetsError ? `<h2>Google Sheets error</h2><div class="err">${esc(sheetsError)}</div>` : ''}
</body>
</html>`;
}
