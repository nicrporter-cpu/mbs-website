# MBS forms backend

A Cloudflare Worker that receives the three website forms (Join, Contact,
Newsletter — see `../screens/JoinScreen.jsx`, `../screens/ContactScreen.jsx`,
`../screens/_patches.jsx`'s `Newsletter`), then:

- emails a notification to `munichbusinesssociety@gmail.com` (via Resend)
- appends a row to a Google Sheet
- for Join, stores the CV/enrollment-certificate uploads in R2
- sends the person who submitted a short auto-reply, in their site language

This is a separate, independently-deployed project. It has nothing to do
with `../build/build.py` or GitHub Pages — deploying the Worker and
publishing the static site are two unrelated steps.

## One-time setup

You'll need three external accounts. Do them in this order:

### 1. Cloudflare (free)

Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) if you don't
already have an account. Then, from this directory:

```bash
npm install
npx wrangler login
npx wrangler r2 bucket create mbs-form-uploads
```

### 2. Resend (free tier: 3,000 emails/month, 100/day — plenty for this)

1. Sign up at [resend.com](https://resend.com).
2. Add `munich-business-society.com` as a sending domain (or better, an
   isolated subdomain like `mail.munich-business-society.com`, so the DNS
   changes below can't affect the records GitHub Pages needs).
3. Resend will show you SPF/DKIM DNS records to add. Add them **at your
   domain registrar's own DNS panel** — this is separate from both the
   `CNAME` file in the repo root and from Cloudflare (this Worker
   deliberately doesn't move any DNS onto Cloudflare, see the plan).
4. Wait for the domain to show as verified in Resend, then create an API key.

### 3. Google Sheets

1. Create a Google Cloud project.
2. Enable the **Google Sheets API** for it.
3. Create a **Service Account**, then create and download its JSON key file.
4. Create a Google Sheet named "MBS Form Submissions" with three tabs, named
   exactly `Join`, `Contact`, `Newsletter`. Give each a header row matching
   the columns `index.js`'s `buildSheetRow()` writes (timestamp first, then
   the form's fields in order — check that function if unsure).
5. Share the Sheet with the service account's `client_email` address, with
   **Editor** access.
6. Copy the Sheet's ID from its URL (`.../spreadsheets/d/THIS_PART/edit`).

## Configuration

Edit `wrangler.toml`'s `[vars]` block: set `SPREADSHEET_ID` from step 3.6
above. `NOTIFY_TO_EMAIL`, `ALLOWED_ORIGINS` and `FROM_EMAIL` already have
sensible production defaults — change `FROM_EMAIL` if you verified a
different sending domain/subdomain in Resend than the default.

Set secrets (never committed, never appear in `wrangler.toml`):

```bash
npx wrangler secret put RESEND_API_KEY
# paste the key from Resend step 2.4

npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_B64
# paste the base64 of the ENTIRE downloaded service-account JSON file, one line:
#   macOS/Linux: base64 -i path/to/key.json | tr -d '\n'

npx wrangler secret put ADMIN_FILE_TOKEN
# a long random string used to gate /files/:key downloads, e.g.:
#   openssl rand -hex 32
```

## Local development

```bash
cp .dev.vars.example .dev.vars
# fill in test/sandbox values

npm run dev
# Worker runs at http://localhost:8787, R2 emulated locally
```

In a second terminal, run the site's existing dev server (`../serve.sh`, or
the `.claude/launch.json` config) so the frontend runs from a real HTTP
origin at `http://localhost:8765` — required for CORS to behave like
production. Opening the site by double-clicking the HTML files (`file://`)
cannot be used to test form submission, since `file://` has no CORS-
compatible origin. `screens/data.js`'s `window.MBS_API_ENDPOINT` already
points at `http://localhost:8787/submit` automatically whenever the site is
served from `localhost`.

## Deploy

```bash
npm run deploy
```

This publishes to `https://mbs-forms.<your-account>.workers.dev`. Confirm
that exact URL matches the production branch of `window.MBS_API_ENDPOINT` in
`../screens/data.js` — if your Worker subdomain differs, update it there and
rerun `../build/build.py` and `../build/build_single.py`.

## Security model

- **CORS** (`ALLOWED_ORIGINS` in `wrangler.toml`) only stops a browser from
  letting some *other* website's page call this endpoint silently on a
  visitor's behalf. It does **not** stop a direct `curl`/script call with a
  forged `Origin` header — CORS is enforced by browsers, not by this server.
- The actual spam/abuse defense is `lib/spam.js`: a hidden honeypot field
  and a minimum time-since-the-form-rendered check, both verified
  server-side. A submission that trips either check gets a fake `{ok:true}`
  response and is otherwise ignored — a bot that sees the same "success" a
  real visitor gets has no signal to adapt on.
- `lib/validate.js` re-checks required fields and file types/sizes
  server-side, since the frontend's own validation can always be bypassed by
  calling `/submit` directly.
- Uploaded files (`GET /files/:key`) are never public — every link requires
  `?token=` to match the `ADMIN_FILE_TOKEN` secret. If you want per-person
  access control instead of one shared token, Cloudflare Access is the
  natural upgrade — not implemented here.

## Known limits

- The required-field list in `lib/validate.js` is hand-duplicated from the
  frontend (`screens/JoinScreen.jsx`, `screens/ContactScreen.jsx`,
  `screens/_patches.jsx`) and will silently drift if one side changes
  without the other. Worth a periodic manual check.
- File size cap is 10 MB per file (`lib/validate.js`'s `MAX_FILE_BYTES`);
  raise it there if needed.
