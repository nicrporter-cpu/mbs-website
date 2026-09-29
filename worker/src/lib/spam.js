// Two cheap, server-side-only checks run before anything else in the
// /submit handler. Either one being tripped means: pretend success, do
// nothing. That's deliberate — a bot that sees the same "it worked" response
// as a real visitor has no signal to adapt on. See README.md's "Security
// model" section for why this replaces a CAPTCHA for v1.

const MIN_FILL_SECONDS = 2;

// formData: the parsed multipart body. Field names must match what
// screens/data.js's window.MBS_SUBMIT_FORM appends to every form (see that
// file) — mbs_hp_field (honeypot, must stay empty) and mbs_rendered_at
// (ms timestamp captured when the form first rendered).
export function looksLikeSpam(formData) {
  const honeypot = String(formData.get('mbs_hp_field') || '').trim();
  if (honeypot) return true;

  const renderedAt = Number(formData.get('mbs_rendered_at') || 0);
  if (!renderedAt || Number.isNaN(renderedAt)) return true; // missing entirely -> not a real browser submit
  const elapsedSeconds = (Date.now() - renderedAt) / 1000;
  if (elapsedSeconds < MIN_FILL_SECONDS) return true;

  return false;
}
