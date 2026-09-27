# Munich Business Society — local website

Ten pages wired into a browsable website, **bilingual (English EN-GB + German)**,
with the cross-university positioning from the copy deck (v1.0). Every nav item,
logo, and in-page button loads a real page; the event dialog opens, closes on Esc,
and can be deep-linked. Nothing is fetched from the internet — React, Babel and both
webfonts are vendored locally.

**Language switch.** The header carries a DE/EN tab. Both languages ship inside every
page (`screens/data.js` holds `MBS_CONTENT.en` and `MBS_CONTENT.de`), so the switch
re-renders in place — no navigation, no reload — and the choice is remembered in
`localStorage`, carrying across page loads. The home hero shows the "Munich Business
Society" wordmark in both languages.

Everything a bracket marks — `[X]`, `[date]`, member quotes, the fee, board roles —
is a board placeholder the deck says must not be invented. It renders with a dashed
gold underline so it's visibly a fill-in, in both languages.

## Open it

**Double-click `index.html`.** No server, no build step, no connection needed — the
pages carry their own React, Babel and fonts, and nothing is loaded over XHR.

If your browser is locked down for local files (some Chrome policies block scripts on
`file://`), or you want clean URLs or access from another device, serve it instead:

```bash
/Users/np/projects/mbs-website/serve.sh
```

`uebersicht.html` is a working contents page listing every page — handy for review.
It is deliberately not linked from the site itself.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `network.html` | The Network |
| `what-we-do.html` | What We Do (formats, partner projects, programme) |
| `membership.html` | Membership |
| `for-companies.html` | For Companies |
| `team.html` | Team |
| `faq.html` | FAQ |
| `join.html` | Join MBS — the application form, with validation + success state |
| `contact.html` | Contact — three routes and a working contact form |
| `impressum.html` | Impressum — board draft, German only, `[...]` fields still to fill in |
| `datenschutz.html` | Datenschutzerklärung — board draft, German only, `[...]` fields still to fill in |
| `uebersicht.html` | Contents page (review aid, not part of the site) |

Interactive bits worth clicking: event rows on What We Do open the event dialog;
`what-we-do.html?event=launch` opens one directly; the Join and Contact forms
validate and switch to a success state; the footer newsletter confirms inline.

## How it is put together

```
index.html …                 one generated page per screen
site.css                     site-owned layer: AA contrast, responsive grid, focus
site.js                      nav id → filename routing, ?event= deep link
screens/_patches.jsx         site fixes to design-system components (see below)
screens/                     the design system's screen sources (JSX) + data.js
design-system/               styles.css, base.css, tokens/, _ds_bundle.js
assets/                      MBS logos
fonts/fonts.css              Fraunces + DM Sans, embedded as data URIs
vendor/                      react, react-dom, babel
build/build.py               regenerates the pages from screens/
build/build_single.py        bundles the whole site into one portable file
build/extract_assets.py      re-extracts vendor/ and fonts/ from the design system
```

Each page inlines the patch layer, one screen, and a small shell (header, footer,
event dialog) into a single `<script type="text/babel">` block. That is deliberate:
Babel fetches external `src` files over XHR, which `file://` forbids, so inlining is
what makes double-click work. It also keeps all three in one lexical scope, which
they need — every screen destructures the same design-system names.

### The two site-owned files

`_ds_bundle.js` and `screens/*.jsx` are vendored copies that a design-system refresh
overwrites wholesale. So the fixes this site needs live in two files that a refresh
never touches:

- **`site.css`** — text colours lifted to WCAG AA (the brand gold is kept for fills,
  rules and dividers; only its use *as text* moves to a darker value), the responsive
  grid classes the screens compose with, and the browser surfaces: focus ring, skip
  link, selection, caret, scrollbar.
- **`screens/_patches.jsx`** — replaces about a dozen design-system components on the
  shared namespace before any screen reads it. Navigation and footer links became real
  `href`s, the event dialog got dialog semantics and a focus trap, form labels got
  bound to their controls, four cards stopped skipping a heading level, and the event
  rows became keyboard-operable. Each patch carries a comment saying what it fixes.

A refreshed design system that fixes any of these upstream makes the matching patch
redundant — delete it from `_patches.jsx` and its export, then rebuild.

The original mockups in `~/Downloads/MBS Design System/mockups/` load React and Babel
from unpkg.com and the fonts from Google Fonts, and their navigation is stubbed out
(`go={()=>{}}`). Both are fixed here.

## One file to send someone

`build/build_single.py` bundles everything — React, Babel, both webfonts, the
design system, the logo, all seven screens — into a single 4.7 MB
`mbs-website-standalone.html` with no external references at all:

```bash
python3 /Users/np/projects/mbs-website/build/build_single.py
```

That file opens by double-click, needs no server and no network, and can be
emailed or put behind any URL. Navigation switches to hash routes
(`#/ueber-uns`, `#/events`, …); `#/events?event=launch` still deep-links into an
event dialog. Rebuild it after any change to `screens/` or `site.css` — it does
not update itself when `build.py` runs.

## Changing things

Edit the copies in `screens/`, then regenerate:

```bash
python3 /Users/np/projects/mbs-website/build/build.py
```

To pull a fresh design system — **tokens and the component bundle only**. The
`screens/` and `screens/data.js` in this repo are project-owned now (bilingual copy,
the new page structure), so the old snippet that copied `ui_kits/website/*.jsx` over
them would wipe the whole site — don't. Refresh just the system:

```bash
cd "/Users/np/Downloads/MBS Design System" && cp styles.css base.css _ds_bundle.js /Users/np/projects/mbs-website/design-system/ && cp tokens/*.css /Users/np/projects/mbs-website/design-system/tokens/ && cp assets/* /Users/np/projects/mbs-website/assets/
```

Then restore the local font override (that copy overwrites it) and rebuild:

```bash
cd /Users/np/projects/mbs-website && printf '@import url("../../fonts/fonts.css");\n' > design-system/tokens/fonts.css && python3 build/extract_assets.py && python3 build/build.py
```

## Known gaps

- **No photography.** The navy `BILD` / `FOTO` boxes and the dashed `Partnerlogo`
  slots are intentional placeholders; no photos or partner logos exist yet. The
  design system's own README asks that they ship as-is rather than be filled with
  stock imagery.
- **Impressum and Datenschutzerklärung are board drafts, not final.** Both pages
  exist (`impressum.html`, `datenschutz.html`, sourced from `MBS_LEGAL_IMPRESSUM`
  and `MBS_LEGAL_DATENSCHUTZ` in `screens/data.js`) and are linked from the footer
  and the Join form's consent checkbox, but every `[...]` field — address, board
  names, register number, hosting provider, whether Google Analytics/Fonts/Maps
  are actually used — still needs the board to fill in or strike before this goes
  public. Statutes (Satzung) still show *(in Vorbereitung)* in the footer; add that
  page and its `to:` once the statutes are ready to publish.
- **No social accounts yet.** The LinkedIn and Instagram tiles in the footer and on
  Kontakt are marked *(in Vorbereitung)*. Add the URLs to `SOCIAL` in
  `build/build.py` and `CHANNELS` in `screens/ContactScreen.jsx`, then rebuild.
- The application form validates and shows its success state, but sends nothing
  anywhere — it still needs a backend or form service.
- **First load is ~4.7 MB**, almost all of it Babel (3.1 MB) plus React's development
  builds (1.2 MB), because JSX is compiled in the browser to keep double-click
  working. Pre-compiling the JSX in `build.py` would remove Babel entirely and keep
  `file://` support, but that needs Node on the build machine.
