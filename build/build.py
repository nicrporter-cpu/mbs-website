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

# file, nav id, screen component, <title>, JSX element for the screen
PAGES = [
    ('index.html',        'home',       'HomeScreen',       "Munich's Student Business Network",
     '<HomeScreen />'),
    ('about.html',        'about',      'AboutScreen',      'About',
     '<AboutScreen />'),
    ('network.html',      'network',    'NetworkScreen',    'The Network',
     '<NetworkScreen />'),
    ('what-we-do.html',   'whatwedo',   'WhatWeDoScreen',   'What We Do',
     '<WhatWeDoScreen openEvent={openEvent} />'),
    ('membership.html',   'membership', 'MembershipScreen', 'Membership',
     '<MembershipScreen />'),
    ('for-companies.html', 'companies', 'CompaniesScreen',  'For Companies',
     '<CompaniesScreen />'),
    ('team.html',         'team',       'TeamScreen',       'Team',
     '<TeamScreen />'),
    ('faq.html',          'faq',        'FaqScreen',        'FAQ',
     '<FaqScreen />'),
    ('join.html',         'join',       'JoinScreen',       'Join MBS',
     '<JoinScreen />'),
    ('contact.html',      'contact',    'ContactScreen',    'Contact',
     '<ContactScreen />'),
]

SHELL = '''
/* ---------- page shell -----------------------------------------------------
   Navigation is plain hrefs (see screens/_patches.jsx), so the header works
   without JavaScript and every nav item is keyboard reachable. `go` remains for
   the one place a script still has to navigate: the dialog's own CTA. */

const ROUTES = window.MBS_ROUTES;
const go = id => { window.location.href = ROUTES[id] || ROUTES.home; };

/* A destination with href: null is not set up yet. The footer renders those as
   marked plain text rather than as links that go nowhere. */
const SOCIAL = [
  { label: 'LinkedIn', icon: 'linkedin', href: null },
  { label: 'Instagram', icon: 'instagram', href: null },
  { label: 'Email us', icon: 'mail', href: 'mailto:hello@' + D.brand.domain }
];
const FOOTER_COLUMNS = [
  { title: 'Society', items: [
    { label: 'About', href: ROUTES.about },
    { label: 'The Network', href: ROUTES.network },
    { label: 'Team', href: ROUTES.team },
    { label: 'What We Do', href: ROUTES.whatwedo }
  ] },
  { title: 'Get involved', items: [
    { label: 'Membership', href: ROUTES.membership },
    { label: 'Events', href: ROUTES.whatwedo },
    { label: 'Open roles', href: null },
    { label: 'Contact', href: ROUTES.contact }
  ] },
  { title: 'Companies', items: [
    { label: 'For Companies', href: ROUTES.companies },
    { label: 'Partner pack', href: null },
    { label: 'partners@' + D.brand.domain, href: 'mailto:partners@' + D.brand.domain }
  ] },
  { title: 'Legal', items: [
    { label: 'Imprint', href: null },
    { label: 'Privacy policy', href: null },
    { label: 'Statutes', href: null }
  ] }
];

function Page() {
  const [eventId, setEventId] = React.useState(window.MBS_INITIAL_EVENT);
  const ev = D.events.find(e => e.id === eventId);

  const openEvent = id => { setEventId(id); window.MBS_SET_EVENT_PARAM(id); };
  const closeEvent = () => { setEventId(null); window.MBS_SET_EVENT_PARAM(null); };

  React.useEffect(() => {
    if (!ev) return;
    const onKey = e => { if (e.key === 'Escape') closeEvent(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [ev]);

  return (
    <div style={{ position: 'relative' }}>
      <a className="mbs-skip" href="#main">Skip to content</a>
      <SiteHeader links={D.nav} active="__ACTIVE__" logoSrc="assets/mbs-logo-horizontal.png" />
      <main id="main">
        __SCREEN__
      </main>
      <SiteFooter descriptor={D.brand.footerDescriptor} columns={FOOTER_COLUMNS} social={SOCIAL}
        copyright="© 2026 Munich Business Society" tagline={D.brand.tagline} />
      {ev && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300 }}>
          <Modal tag={ev.tag} title={ev.title} onClose={closeEvent}
            meta={[ev.date, ev.time, ev.location]}
            footer={<Button variant="gold" block onClick={() => { closeEvent(); go('join'); }}>Join MBS &amp; attend →</Button>}>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '0 0 8px' }}>About this event</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.8 }}>{ev.about}</p>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '24px 0 8px' }}>What to expect</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.8 }}>{ev.expect}</p>
            <h3 style={{ fontFamily: 'var(--mbs-font-sans)', fontSize: '14px', margin: '24px 0 8px' }}>Who's it for?</h3>
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
<title>MBS — __TITLE__</title>
<link rel="icon" href="assets/mbs-mark.svg">
<link rel="stylesheet" href="design-system/styles.css?v=__STAMP__">
<link rel="stylesheet" href="site.css?v=__STAMP__">
<style>html,body{margin:0}body{background:var(--mbs-white)}#root{min-height:100vh}</style>
</head>
<body>
<!-- Generated by build/build.py from screens/__SCREEN_FILE__ — edit that file, not this one. -->
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
                    .replace('__SCREEN_FILE__', component + '.jsx')
                    .replace('__PATCHES__', patches)
                    .replace('__SOURCE__', source)
                    .replace('__SHELL__', shell.strip()))
        (ROOT / filename).write_text(html, encoding='utf-8')
        print(f'{filename:<20} {component:<17} {len(html):>7} bytes')


if __name__ == '__main__':
    build()
