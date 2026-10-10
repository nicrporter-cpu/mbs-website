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
