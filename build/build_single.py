#!/usr/bin/env python3
"""Build mbs-website-standalone.html — the whole site as one portable file.

The normal build (build.py) makes seven pages that link to each other and load
their CSS, fonts, React and screens from disk. That needs the folder to travel
with it. This build inlines every one of those into a single HTML file and swaps
file-to-file navigation for hash routing, so the result can be emailed, opened
from a phone, or published on its own.

Two things make the inlining work:

  * Each screen file opens with the same `const { Button, ... } = ...`
    destructure. Seven of those in one scope is a redeclaration error, so every
    screen is wrapped in its own IIFE — the destructure becomes local and the
    `Object.assign(window, { Screen })` at the foot still publishes it.
  * `@import` cannot reach a file that no longer exists beside the HTML, so the
    stylesheet chain (tokens → base → site.css → the data-URI fonts) is expanded
    by hand, in the order the browser would have loaded it.

Run:  python3 build/build_single.py
"""

import base64
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'mbs-website-standalone.html'

# Screens, in nav order. (route, nav id, component, JSX element)
SCREENS = [
    ('/',              'home',       'HomeScreen',       '<HomeScreen />'),
    ('/about',         'about',      'AboutScreen',      '<AboutScreen />'),
    ('/network',       'network',    'NetworkScreen',    '<NetworkScreen />'),
    ('/what-we-do',    'whatwedo',   'WhatWeDoScreen',   '<WhatWeDoScreen openEvent={openEvent} />'),
    ('/membership',    'membership', 'MembershipScreen', '<MembershipScreen />'),
    ('/for-companies', 'companies',  'CompaniesScreen',  '<CompaniesScreen />'),
    ('/team',          'team',       'TeamScreen',       '<TeamScreen />'),
    ('/faq',           'faq',        'FaqScreen',        '<FaqScreen />'),
    ('/join',          'join',       'JoinScreen',       '<JoinScreen />'),
    ('/contact',       'contact',    'ContactScreen',    '<ContactScreen />'),
]

# The stylesheet chain, flattened in load order. styles.css is skipped: it is
# nothing but the @import list this replaces.
CSS_ORDER = [
    'fonts/fonts.css',
    'design-system/tokens/colors.css',
    'design-system/tokens/typography.css',
    'design-system/tokens/spacing.css',
    'design-system/tokens/elevation.css',
    'design-system/tokens/motion.css',
    'design-system/base.css',
    'site.css',
]

JS_ORDER = [
    'vendor/react.development.js',
    'vendor/react-dom.development.js',
    'vendor/babel.min.js',
    'design-system/_ds_bundle.js',
    'screens/data.js',
]


def read(rel):
    return (ROOT / rel).read_text(encoding='utf-8')


def data_uri(rel, mime):
    return 'data:%s;base64,%s' % (mime, base64.b64encode((ROOT / rel).read_bytes()).decode())


def guard(name, text):
    if '</script' in text.lower():
        sys.exit('%s contains a literal </script and cannot be inlined.' % name)
    return text


def css_bundle():
    out = []
    for rel in CSS_ORDER:
        css = read(rel)
        # tokens/fonts.css is a one-line @import of the real font file, which is
        # already inlined ahead of it.
        css = re.sub(r'@import\s+url\([^)]*\);\s*', '', css)
        out.append('/* ===== %s ===== */\n%s' % (rel, css.strip()))
    return '\n\n'.join(out)


SHELL = '''
/* ---------- standalone shell ------------------------------------------------
   Same header, footer and dialog as the multi-page build. The only difference
   is the router: there are no sibling files to navigate to, so the active
   screen comes from location.hash and MBS_ROUTES points at hashes. */

/* In the multi-page build the shell borrows `D` and the component names from the
   screen's top-level destructure. Here each screen is sealed in its own IIFE, so
   the shell takes what it needs itself. `ROUTES` stays top-level and the screens
   close over it at render time. */
const { SiteHeader, SiteFooter, Modal, Button, Icon } = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const ROUTES = window.MBS_ROUTES;
const go = id => { window.location.hash = (ROUTES[id] || ROUTES.home).replace(/^#/, '') || '/'; };

const SCREEN_BY_ROUTE = {
__ROUTE_MAP__
};

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

/* Routes always start with "/", so "#main" from the skip link is an in-page
   anchor, not navigation — parseHash returns null and the route is left alone
   while the browser still jumps to the target. "#/events?event=launch" keeps
   the deep link the multi-page build had. */
function parseHash() {
  const raw = (window.location.hash || '').replace(/^#/, '');
  if (!raw) return { path: '/', event: null };
  if (raw[0] !== '/') return null;
  const [path, query] = raw.split('?');
  const ev = query ? new URLSearchParams(query).get('event') : null;
  return { path: SCREEN_BY_ROUTE[path] ? path : '/', event: ev };
}

function Page() {
  const [route, setRoute] = React.useState(() => parseHash() || { path: '/', event: null });
  const [eventId, setEventId] = React.useState(route.event);

  React.useEffect(() => {
    const onHash = () => {
      const next = parseHash();
      if (!next) return; // in-page anchor, not a route change
      setRoute(next);
      setEventId(next.event);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const ev = D.events.find(e => e.id === eventId);
  const openEvent = id => setEventId(id);
  const closeEvent = () => setEventId(null);

  React.useEffect(() => {
    if (!ev) return;
    const onKey = e => { if (e.key === 'Escape') closeEvent(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [ev]);

  const current = SCREEN_BY_ROUTE[route.path];

  React.useEffect(() => {
    document.title = 'MBS — ' + current.title;
  }, [current]);

  return (
    <div style={{ position: 'relative' }}>
      <a className="mbs-skip" href="#main">Skip to content</a>
      <SiteHeader links={D.nav} active={current.nav} logoSrc={window.MBS_LOGO} />
      <main id="main">{current.render(openEvent)}</main>
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
<title>MBS — Munich's Student Business Network</title>
<meta name="description" content="The cross-university business network for students in Munich. Build your network, grow real skills and get noticed by companies hiring here.">
<link rel="icon" href="__FAVICON__">
<style>
html,body{margin:0}
body{background:var(--mbs-white)}
#root{min-height:100vh}
__CSS__
</style>
</head>
<body>
<!-- Munich Business Society — standalone build.
     Generated by build/build_single.py. Everything (React, Babel, both webfonts,
     the design system, all seven screens) is inlined; this file needs no server
     and no network. Edit screens/ and rebuild rather than editing this file. -->
<div id="root"></div>
__JS__
<script type="text/babel" data-presets="react">
__BABEL__
</script>
</body>
</html>
'''


def build():
    logo = data_uri('assets/mbs-logo-horizontal.png', 'image/png')
    favicon = data_uri('assets/mbs-mark.svg', 'image/svg+xml')

    js_blocks = []
    for rel in JS_ORDER:
        js_blocks.append('<script>\n%s\n</script>' % guard(rel, read(rel)))

    # Routing table and the logo travel as plain globals, the way site.js
    # supplied them in the multi-page build.
    routes = ',\n  '.join("%s: '#%s'" % (nav, route) for route, nav, _c, _e in SCREENS)
    js_blocks.append(
        '<script>\n'
        'window.MBS_ROUTES = {\n  %s\n};\n'
        'window.MBS_LOGO = "%s";\n'
        '</script>' % (routes, logo)
    )

    # Patch layer first, then each screen sealed in its own scope.
    babel = [guard('_patches.jsx', read('screens/_patches.jsx'))]
    for _route, _nav, comp, _el in SCREENS:
        src = guard(comp, read('screens/%s.jsx' % comp))
        babel.append(
            '/* ----- %s.jsx (scoped: every screen declares the same consts) ----- */\n'
            '(() => {\n%s\n})();' % (comp, src.rstrip())
        )

    titles = {'home': "Munich's Student Business Network", 'about': 'About', 'network': 'The Network',
              'whatwedo': 'What We Do', 'membership': 'Membership', 'companies': 'For Companies',
              'team': 'Team', 'faq': 'FAQ', 'join': 'Join MBS', 'contact': 'Contact'}
    route_map = ',\n'.join(
        "  '%s': { nav: '%s', title: %s, render: openEvent => (%s) }"
        % (route, nav, json.dumps(titles[nav]), el)
        for route, nav, _c, el in SCREENS
    )
    babel.append(SHELL.replace('__ROUTE_MAP__', route_map).strip())

    html = (PAGE
            .replace('__CSS__', css_bundle())
            .replace('__FAVICON__', favicon)
            .replace('__JS__', '\n'.join(js_blocks))
            .replace('__BABEL__', '\n\n'.join(babel)))

    OUT.write_text(html, encoding='utf-8')
    print('%s  %.2f MB' % (OUT.name, len(html.encode('utf-8')) / 1048576))


if __name__ == '__main__':
    build()
