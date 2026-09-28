#!/usr/bin/env python3
"""Generate the MBS website pages.

Each page is one HTML file that inlines the shared patch layer, exactly one screen
from ../screens, and a small shell (header, footer, event dialog). The sources are
inlined rather than loaded with <script type="text/babel" src="..."> for two reasons:

  * Babel fetches `src` over XHR, which file:// forbids — inlining keeps the site
    openable by double-click, with no server at all.
  * The patch layer, the screen and the shell share one lexical scope on purpose:
    every screen destructures the same design-system names, so they cannot live in
    separate <script> blocks without colliding.

Run after changing anything in ../screens:  python3 build/build.py
"""

import hashlib
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SCREENS = ROOT / 'screens'
PATCHES = SCREENS / '_patches.jsx'

# Initial <meta description> (English; JS updates it on lang switch, same as the title).
DESCRIPTION = "Munich's cross-university case club."

# file, nav id, screen component, initial <title> (English; JS updates on lang
# switch), JSX element for the screen. Every screen takes the active-language
# content object C, computed in the shell.
PAGES = [
    ('index.html',        'home',       'HomeScreen',       "Munich's Student Business Network",
     '<HomeScreen C={C} />'),
    ('about.html',        'about',      'AboutScreen',      'About',
     '<AboutScreen C={C} openEvent={openEvent} />'),
    ('calendar.html',     'calendar',   'CalendarScreen',   'Events',
     '<CalendarScreen C={C} openEvent={openEvent} />'),
    ('membership.html',   'membership', 'MembershipScreen', 'Membership',
     '<MembershipScreen C={C} />'),
    ('for-companies.html', 'companies', 'CompaniesScreen',  'For Companies',
     '<CompaniesScreen C={C} />'),
    ('team.html',         'team',       'TeamScreen',       'Team',
     '<TeamScreen C={C} />'),
    ('faq.html',          'faq',        'FaqScreen',        'FAQ',
     '<FaqScreen C={C} />'),
    ('join.html',         'join',       'JoinScreen',       'Join Munich Business Society',
     '<JoinScreen C={C} />'),
    ('contact.html',      'contact',    'ContactScreen',    'Contact',
     '<ContactScreen C={C} />'),
    ('impressum.html',    'impressum',  'ImpressumScreen',  'Impressum',
     '<ImpressumScreen C={C} />'),
    ('datenschutz.html',  'datenschutz', 'DatenschutzScreen', 'Datenschutzerklärung',
     '<DatenschutzScreen C={C} />'),
]

SHELL = '''
/* ---------- page shell -----------------------------------------------------
   Navigation is plain hrefs (see screens/_patches.jsx), so the header works
   without JavaScript and every nav item is keyboard reachable. `go` remains for
   the one place a script still has to navigate: the dialog's own CTA.

   Both languages ship in data.js; the shell holds the active language in state,
   the header's DE/EN tab flips it in place, and the choice persists in
   localStorage so it carries across page loads. */

const ROUTES = window.MBS_ROUTES;
const ACTIVE = '__ACTIVE__';
const go = id => { window.location.href = ROUTES[id] || ROUTES.home; };

function Page() {
  const lang = window.MBS_GET_LANG();
  const C = window.MBS_CONTENT[lang];
  /* Full reload rather than an in-place re-render: persist the choice, then
     reload so the whole page — including anything outside React's tree —
     comes back fresh in the new language. */
  const setLang = l => { window.MBS_SET_LANG(l); window.location.reload(); };

  const [eventId, setEventId] = React.useState(window.MBS_INITIAL_EVENT);
  const ev = C.events.find(e => e.id === eventId);

  const openEvent = id => { setEventId(id); window.MBS_SET_EVENT_PARAM(id); };
  const closeEvent = () => { setEventId(null); window.MBS_SET_EVENT_PARAM(null); };

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.title = 'Munich Business Society, ' + C.title[ACTIVE];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', C.brand.metaDescription);
  }, [lang]);

  React.useEffect(() => {
    if (!ev) return;
    const onKey = e => { if (e.key === 'Escape') closeEvent(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [ev]);

  const dlg = C.ui.dialog;

  return (
    <div style={{ position: 'relative' }}>
      <a className="mbs-skip" href="#main">{C.ui.skip}</a>
      <SiteHeader links={C.nav} active={ACTIVE} logoSrc="assets/mbs-logo-horizontal.png"
        applyLabel={C.ui.join} lang={lang} setLang={setLang} ui={C.ui} />
      <main id="main">
        __SCREEN__
      </main>
      <SiteFooter descriptor={C.brand.footerDescriptor} columns={C.ui.footerCols} social={C.ui.social}
        newsletter={C.ui.newsletter} inPrep={C.ui.inPrep}
        copyright={C.ui.copyright} tagline={C.brand.tagline} />
      {ev && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300 }}>
          <Modal tag={ev.tag} title={ev.title} onClose={closeEvent} closeLabel={dlg.close}
            meta={[ev.date, ev.time, ev.location]}
            footer={<Button variant="gold" block onClick={() => { closeEvent(); go('join'); }}>{dlg.cta}</Button>}>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '0 0 8px' }}>{dlg.about}</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.8 }}>{ev.about}</p>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '24px 0 8px' }}>{dlg.expect}</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.8 }}>{ev.expect}</p>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '24px 0 8px' }}>{dlg.who}</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.8 }}>{ev.audience}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--mbs-border)', fontSize: '13px', color: 'var(--mbs-gray)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name="pin" size="15px" />{ev.location}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name="clock" size="15px" />{ev.time}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name="users" size="15px" />{ev.capacity}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name="star" size="15px" />{ev.price}</span>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
'''

PAGE = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Munich Business Society, __TITLE__</title>
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<meta name="description" content="__DESCRIPTION__">
<link rel="stylesheet" href="design-system/styles.css?v=__STAMP__">
<link rel="stylesheet" href="site.css?v=__STAMP__">
<style>html,body{margin:0}body{background:var(--mbs-white)}#root{min-height:100vh}</style>
</head>
<body>
<!-- Generated by build/build.py from screens/__SCREEN_FILE__, edit that file, not this one. -->
<div id="root"></div>
<script src="vendor/react.development.js"></script>
<script src="vendor/react-dom.development.js"></script>
<script src="vendor/babel.min.js"></script>
<script src="design-system/_ds_bundle.js?v=__STAMP__"></script>
<script src="screens/data.js?v=__STAMP__"></script>
<script src="site.js?v=__STAMP__"></script>
<script type="text/babel" data-presets="react">
__PATCHES__
__SOURCE__
__SHELL__
</script>
</body>
</html>
'''


def read_source(path):
    source = path.read_text(encoding='utf-8')
    if '</script' in source.lower():
        sys.exit(f'{path.name} contains a literal </script — it cannot be inlined as-is.')
    return source.rstrip()


def stamp():
    """Fingerprint the shared assets so a rebuild busts the browser cache.

    Without this the pages are re-fetched but styles.css, site.css, data.js and
    the bundle are served from cache — the page then runs new markup against old
    data, which is worse than no reload at all.
    """
    h = hashlib.sha256()
    for rel in ('design-system/styles.css', 'design-system/base.css', 'site.css',
                'site.js', 'screens/data.js', 'design-system/_ds_bundle.js'):
        f = ROOT / rel
        if f.exists():
            h.update(f.read_bytes())
    for f in sorted((ROOT / 'design-system' / 'tokens').glob('*.css')):
        h.update(f.read_bytes())
    return h.hexdigest()[:10]


def build():
    patches = read_source(PATCHES)
    version = stamp()
    for filename, active, component, title, element in PAGES:
        source = read_source(SCREENS / (component + '.jsx'))
        shell = SHELL.replace('__ACTIVE__', active).replace('__SCREEN__', element)
        html = (PAGE.replace('__STAMP__', version)
                    .replace('__TITLE__', title)
                    .replace('__DESCRIPTION__', DESCRIPTION)
                    .replace('__SCREEN_FILE__', component + '.jsx')
                    .replace('__PATCHES__', patches)
                    .replace('__SOURCE__', source)
                    .replace('__SHELL__', shell.strip()))
        (ROOT / filename).write_text(html, encoding='utf-8')
        print(f'{filename:<20} {component:<17} {len(html):>7} bytes')


if __name__ == '__main__':
    build()
