// CORS only stops browsers from letting another site's page call this
// endpoint silently on a visitor's behalf — it does nothing against a direct
// curl call with a forged Origin header. The actual abuse defense is
// spam.js's honeypot/timing check plus validate.js, not this file. See
// README.md's "Security model" section.

export function corsHeaders(request, env) {
  const allowed = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map(o => o.trim())
    .filter(Boolean);
  const origin = request.headers.get('Origin') || '';
  const headers = {
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin'
  };
  if (allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

export function handlePreflight(request, env) {
  return new Response(null, { status: 204, headers: corsHeaders(request, env) });
}

export function jsonResponse(body, status, request, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(request, env)
    }
  });
}
