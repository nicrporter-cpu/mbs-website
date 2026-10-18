/* MBS local site — routing glue shared by every page.
   Loaded as plain JS before the Babel-compiled page script. */

/* Nav id (from screens/data.js) -> the clean, extension-less URL that serves
   that screen (build.py writes each one to <name>/index.html on disk so the
   .html never shows up in the address bar). Root-relative so a link works
   the same from any page, not just from files that live at the site root. */
window.MBS_ROUTES = {
  home: '/',
  about: '/about/',
  calendar: '/calendar/',
  membership: '/membership/',
  companies: '/for-companies/',
  team: '/team/',
  join: '/join/',
  contact: '/contact/',
  impressum: '/impressum/',
  datenschutz: '/datenschutz/'
};

/* ?event=<id> deep-links straight into an event dialog, e.g. what-we-do.html?event=launch */
window.MBS_INITIAL_EVENT = (function () {
  try { return new URLSearchParams(window.location.search).get('event'); } catch (e) { return null; }
})();

/* Keep the URL in step with the open dialog. Silently a no-op on file:// , where
   some browsers refuse replaceState — the dialog itself still works. */
window.MBS_SET_EVENT_PARAM = function (id) {
  try {
    var url = new URL(window.location.href);
    if (id) url.searchParams.set('event', id); else url.searchParams.delete('event');
    window.history.replaceState(null, '', url);
  } catch (e) { /* file:// — leave the URL alone */ }
};

/* Render a content string with its board placeholders marked up. Any `[...]`
   run in screens/data.js copy becomes a .mbs-ph span (dashed gold underline,
   "not final"), so a fill-in can live inside an ordinary sentence instead of
   needing its own JSX. Strings without brackets come back unchanged. */
window.MBS_PH = function (text) {
  if (typeof text !== 'string' || text.indexOf('[') === -1) return text;
  return text.split(/(\[[^\]]+\])/).map(function (part, i) {
    return /^\[[^\]]+\]$/.test(part)
      ? React.createElement('span', { key: i, className: 'mbs-ph' }, part)
      : part;
  });
};

/* Deep links into a section (/membership/#how-to-join) arrive before React has
   rendered that section, so the browser's own jump finds nothing. Wait for
   the target to appear, then scroll to it once. Gives up after 5 s. */
(function () {
  var hash = window.location.hash;
  if (!hash || hash.length < 2 || !('MutationObserver' in window)) return;
  var id = decodeURIComponent(hash.slice(1));
  var done = false;
  function go() {
    var el = document.getElementById(id);
    if (!el || done) return !!el;
    done = true;
    obs.disconnect();
    /* a beat later, so layout has settled (a timer, not rAF: rAF can be
       paused in background or embedded views and the jump would never run) */
    setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 60);
    return true;
  }
  var obs = new MutationObserver(go);
  document.addEventListener('DOMContentLoaded', function () {
    if (!go()) obs.observe(document.body, { childList: true, subtree: true });
  });
  setTimeout(function () { obs.disconnect(); }, 5000);
})();
