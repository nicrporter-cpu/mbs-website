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
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'mbs-website-standalone.html'

# Screens, in nav order. (route, nav id, component, JSX element). Each screen
# takes the active-language content object C, passed in at render time.
SCREENS = [
    ('/',              'home',       'HomeScreen',       '<HomeScreen C={C} />'),
    ('/about',         'about',      'AboutScreen',      '<AboutScreen C={C} openEvent={openEvent} />'),
    ('/calendar',      'calendar',   'CalendarScreen',   '<CalendarScreen C={C} openEvent={openEvent} />'),
    ('/membership',    'membership', 'MembershipScreen', '<MembershipScreen C={C} />'),
    ('/for-companies', 'companies',  'CompaniesScreen',  '<CompaniesScreen C={C} />'),
    ('/team',          'team',       'TeamScreen',       '<TeamScreen C={C} />'),
    ('/faq',           'faq',        'FaqScreen',        '<FaqScreen C={C} />'),
    ('/join',          'join',       'JoinScreen',       '<JoinScreen C={C} />'),
    ('/contact',       'contact',    'ContactScreen',    '<ContactScreen C={C} />'),
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


IMAGE_MIMES = {'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml'}


def inline_root_assets(text):
    """screens/data.js references images as root-relative "/assets/<file>" —
    correct for the live, multi-page site, where every page can reach the
    site root, but meaningless once inlined into a single portable file with
    no server underneath it. Swap each one for the same base64 data URI the
    logo/favicon already use, so the standalone bundle stays self-contained."""
    def repl(m):
        rel = 'assets/' + m.group(1)
        mime = IMAGE_MIMES.get(pathlib.Path(rel).suffix.lower(), 'application/octet-stream')
        return data_uri(rel, mime)
    return re.sub(r'/assets/([\w.-]+)', repl, text)


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

/* One file, both languages. The screens are each sealed in their own IIFE, so
   the shell takes the shared pieces itself; the active-language content object C
   is computed here and handed to every screen at render time. `ROUTES` maps to
   hashes because there are no sibling files to navigate to. */
const { SiteHeader, SiteFooter, Modal, Button, Icon } = window.MBSDesignSystem_f206f7;
const ROUTES = window.MBS_ROUTES;
const go = id => { window.location.hash = (ROUTES[id] || ROUTES.home).replace(/^#/, '') || '/'; };

const SCREEN_BY_ROUTE = {
__ROUTE_MAP__
};

/* Routes always start with "/", so "#main" from the skip link is an in-page
   anchor, not navigation — parseHash returns null and the route is left alone
   while the browser still jumps to the target. "#/what-we-do?event=launch"
   keeps the deep link the multi-page build had. */
function parseHash() {
  const raw = (window.location.hash || '').replace(/^#/, '');
  if (!raw) return { path: '/', event: null };
  if (raw[0] !== '/') return null;
  const [path, query] = raw.split('?');
  const ev = query ? new URLSearchParams(query).get('event') : null;
  return { path: SCREEN_BY_ROUTE[path] ? path : '/', event: ev };
}

function Page() {
  const [lang, setLangState] = React.useState(window.MBS_GET_LANG());
  const C = window.MBS_CONTENT[lang];
  const setLang = l => { window.MBS_SET_LANG(l); setLangState(l); };

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

  const ev = C.events.find(e => e.id === eventId);
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
    document.documentElement.lang = lang;
    document.title = 'Munich Business Society, ' + C.title[current.nav];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', C.brand.metaDescription);
  }, [current, lang]);

  const dlg = C.ui.dialog;

  return (
    <div style={{ position: 'relative' }}>
      <a className="mbs-skip" href="#main">{C.ui.skip}</a>
      <SiteHeader links={C.nav} active={current.nav} logoSrc={window.MBS_LOGO}
        applyLabel={C.ui.join} lang={lang} setLang={setLang} ui={C.ui} />
      <main id="main">{current.render(openEvent, C)}</main>
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
<title>Munich Business Society, Munich's first cross-university case club</title>
<meta name="description" content="Munich's first cross-university case club.">
<link rel="icon" type="image/png" href="__FAVICON__">
<link rel="apple-touch-icon" href="__APPLE_ICON__">
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
    favicon = data_uri('assets/favicon.png', 'image/png')
    apple_icon = data_uri('assets/apple-touch-icon.png', 'image/png')

    js_blocks = []
    for rel in JS_ORDER:
        text = read(rel)
        if rel == 'screens/data.js':
            text = inline_root_assets(text)
        js_blocks.append('<script>\n%s\n</script>' % guard(rel, text))

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

    # Titles now come from the active-language C.title in the shell, so the route
    # map only needs the nav id and the render function.
    route_map = ',\n'.join(
        "  '%s': { nav: '%s', render: (openEvent, C) => (%s) }"
        % (route, nav, el)
        for route, nav, _c, el in SCREENS
    )
    babel.append(SHELL.replace('__ROUTE_MAP__', route_map).strip())

    html = (PAGE
            .replace('__CSS__', css_bundle())
            .replace('__FAVICON__', favicon)
            .replace('__APPLE_ICON__', apple_icon)
            .replace('__JS__', '\n'.join(js_blocks))
            .replace('__BABEL__', '\n\n'.join(babel)))

    OUT.write_text(html, encoding='utf-8')
    print('%s  %.2f MB' % (OUT.name, len(html.encode('utf-8')) / 1048576))


if __name__ == '__main__':
    build()
