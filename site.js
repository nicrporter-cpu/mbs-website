/* MBS local site — routing glue shared by every page.
   Loaded as plain JS before the Babel-compiled page script. */

/* Nav id (from screens/data.js) -> the file that renders that screen. */
window.MBS_ROUTES = {
  home: 'index.html',
  about: 'about.html',
  membership: 'membership.html',
  companies: 'for-companies.html',
  team: 'team.html',
  faq: 'faq.html',
  join: 'join.html',
  contact: 'contact.html'
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
