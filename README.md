# Playersoft.com — GitHub Pages

The 2026 redesign as static HTML, ready to publish on GitHub Pages.
**7 pages. No blog. No dependencies. No framework.**

`site/` is already built — you can publish it in about five minutes.

```bash
npm run dev      # http://localhost:3000
```

> ### 📘 Deploying for the first time? Read **[DEPLOY.md](DEPLOY.md)** instead.
>
> It's the step-by-step version: empty GitHub account → live on
> `www.playersoft.com`, including moving the domain off Wix and repointing DNS
> at GoDaddy. This README is the reference manual; DEPLOY.md is the runbook.

---

## Read this first: the one thing that breaks GitHub Pages

GitHub Pages serves a repo two different ways, and they need different settings:

| How you publish | URL | `basePath` |
|---|---|---|
| Custom domain (`playersoft.com`) | `/` | `""` ← **shipped default** |
| User/org site (`playersoft.github.io`) | `/` | `""` |
| Project site (`playersoft.github.io/website`) | `/website/` | `"/website"` |

On a **project site** every absolute path — CSS, JS, logos, nav links — resolves
against the domain root and 404s. The site loads as unstyled HTML.

The fix is one line in `content/site.json`:

```json
"site": {
  "basePath": "/your-repo-name"
}
```

Then rebuild. That rewrites every asset path, internal link, canonical tag, and
sitemap URL. Leave it `""` if you're using a custom domain — which you almost
certainly are.

---

## Option A — Publish with GitHub Actions (recommended)

The workflow is already written. It builds from `content/` on every push, so
content edits go live without anyone running a build locally.

1. **Create the repo and push**

   ```bash
   cd playersoft-github-pages
   git init
   git add .
   git commit -m "Playersoft 2026 redesign"
   git branch -M main
   git remote add origin https://github.com/YOUR-ORG/YOUR-REPO.git
   git push -u origin main
   ```

2. **Turn on Pages**
   Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**

   This step is easy to miss. Without it the workflow runs, goes green, and
   publishes nothing.

3. **Set `basePath`** if this is a project site (see the table above), commit,
   push.

4. Watch the **Actions** tab. First run takes about a minute.

---

## Option B — Publish the pre-built folder, no Actions

If you'd rather not use Actions, GitHub can serve a folder directly.

The catch: Pages only serves from the repo root or `/docs`, not `/site`. So
rename it:

```bash
mv site docs
git add . && git commit -m "Serve from docs/" && git push
```

Then **Settings → Pages → Source: Deploy from a branch → main → /docs**.

You can delete `.github/`, `build/`, and `package.json` in this setup — but
you'll be hand-editing HTML from then on, which is why Option A is better.

---

## Step 4 — Wire up the forms

**GitHub Pages cannot process form submissions.** It serves static files and
nothing else. Right now the contact and newsletter forms validate in the browser
and then do nothing.

Pick a third-party endpoint:

| Service | Free tier | Setup |
|---|---|---|
| **Formspree** | 50/mo | Set the form `action` to your endpoint URL |
| **Basin** | 100/mo | Same |
| **Getform** | 50/mo | Same |

Set it in `content/pages/contact.json`:

```json
"form": {
  "action": "https://formspree.io/f/YOUR_FORM_ID"
}
```

Then rebuild. **Nothing else needs configuring** — the confirmation flow below
picks it up automatically.

**Test a real submission before launch.** A demo-request form that silently
discards leads is worse than no form.

### The confirmation flow

You asked for a thank-you that feels like the visitor never left the Contact
page. There are two paths, and they share one panel:

**With JavaScript** (the normal case) — the form posts in the background and the
confirmation is revealed in the form's exact position. No navigation, no reload,
hero and contact details untouched. The URL is then swapped to
`/contact/thank-you/` via `replaceState`, so a refresh or a shared link lands
somewhere sensible instead of an empty form.

**Without JavaScript**, or if your form service insists on redirecting — a
hidden `_next` field sends them to `/contact/thank-you/`, a real page that is
byte-for-byte the Contact page with the confirmation already showing. Same hero,
same nav state, same aside. It reads as the same place because it *is* the same
page.

Both paths render from one `success` block in `content/pages/contact.json`, so
they can't drift apart. Edit the copy there:

```json
"success": {
  "heading": "Thank you — we got it",
  "body": "Your request is in…",
  "next": ["A member of our team reaches out within one business day.", "…"]
}
```

Three fallbacks are built in so a visitor is never stranded: no endpoint set →
the form behaves natively; no `fetch` support → the `_next` redirect handles
it; request fails → it re-submits natively rather than losing their message,
with an inline error naming `Info@playersoft.com` as a fallback.

`/contact/thank-you/` carries `noindex` and is excluded from `sitemap.xml` —
it shouldn't appear in search results.

---

## Step 5 — Custom domain

1. Rename `site/CNAME.example` to `site/CNAME` and put your domain in it
   (one line, no protocol — `www.playersoft.com`)
2. At your DNS provider, add a `CNAME` record for `www` →
   `YOUR-ORG.github.io`
3. Repo → Settings → Pages → Custom domain → enter it → **check Enforce HTTPS**
4. Set `baseUrl` in `content/site.json` to the final URL and rebuild — it drives
   canonical tags and `sitemap.xml`
5. Make sure `basePath` is `""`

Certificates take a few minutes to issue.

**Keep the current site live until this one is verified.** Check the
`github.io` URL first, then move DNS.

---

## Step 6 — Get the images in

Logos and the Vegas skyline are included. **Photography and app screenshots are
not** — they live on the current playersoft.com.

`content/image-manifest.json` maps every expected file to its source URL:

```bash
curl -o site/assets/img/photo-team-floor.jpg \
  "https://static.wixstatic.com/media/11062b_672318ddebff4b38bb2b9816ad4ca954~mv2.jpg"
```

Those images are already licensed and in use — re-host them rather than
hotlinking Wix.

The **five app screenshots are genuine placeholders**. The phone mockup on the
home hero expects `app-login.png` through `app-floor.png` at 402×874. Ask
Playersoft for real ones. Until then those slots 404, but the layout holds —
every image slot has a fixed height, so nothing collapses.

---

## Editing content

Everything lives in `content/*.json`. No HTML editing needed.

```
content/
├── site.json          header, footer, navigation, basePath
├── image-manifest.json
└── pages/
    ├── home.json
    ├── about.json
    ├── solutions.json
    ├── one-mobile-app.json
    ├── one-messaging-loyalty.json
    ├── host-player-management.json
    └── contact.json
```

Edit, commit, push. Actions rebuilds and publishes.

Each page is a list of **sections**, each with a `type` that selects a renderer
in `build/templates.mjs`. Twelve types cover the site: `hero`, `cardGrid`,
`splitMedia`, `moduleBlocks`, `statStrip`, `featureList`, `testimonials`,
`columns`, `richColumns`, `livePanel`, `contact`, `cta`.

`contact-thank-you.json` is a deliberate near-duplicate of `contact.json` with
`showSuccess: true`. Keeping the hero copy identical is what makes the
confirmation read as the same page — if you edit one hero, edit both.

The build also **validates internal links** and warns about any that don't
resolve — which is how you'll notice the policy pages are still missing.

> **Want a CMS UI for marketing?** GitHub Pages has no auth backend, so
> Git-based editors like Decap need a separate OAuth proxy to work here. If
> non-technical editing matters more than staying on Pages, Netlify or
> Cloudflare Pages make that considerably easier — happy to revisit.

---

## What's in the box

```
playersoft-github-pages/
├── README.md                   ← this file
├── package.json
├── .github/workflows/deploy.yml    ← builds + publishes on push
│
├── site/                       ← THE PUBLISHED OUTPUT (pre-built)
│   ├── index.html
│   ├── about/
│   ├── solutions/
│   │   ├── index.html
│   │   ├── one-mobile-app/
│   │   ├── one-messaging-loyalty/
│   │   └── host-player-management/
│   ├── contact/
│   │   └── thank-you/          ← confirmation; mirrors Contact exactly
│   ├── partners/               ← redirect stub → /contact/
│   ├── news/                   ← redirect stub → /
│   ├── blog/                   ← redirect stub → /
│   ├── 404.html                ← branded, on-system
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── .nojekyll               ← stops Jekyll eating _-prefixed files
│   ├── CNAME.example           ← rename to CNAME for a custom domain
│   └── assets/
│       ├── css/playersoft.css      ~25KB — the whole design system
│       ├── js/site.js              ~9KB — motion, carousel, live panel
│       └── img/
│
├── content/                    ← EDIT HERE
├── build/                      ← content JSON → static HTML
└── design_files/               ← original design mockups, for reference
```

---

## Retired pages

GitHub Pages has no server-side redirects, so retired URLs get real files that
bounce the visitor client-side, with a `canonical` tag so search engines treat
it as a soft 301. That's the best this host allows.

| Old URL | Goes to | Why |
|---|---|---|
| `/partners/` | `/contact/` | Removed from this redesign — client is reworking it |
| `/news/` | `/` | "The Play" blog removed from this redesign |
| `/blog/*` | `/` | Fed the News page |

`build/build.mjs` regenerates these on every build, and they honour `basePath`.

**Crawl the current site before launch** (`curl https://www.playersoft.com/sitemap.xml`
or Screaming Frog) and add a stub for any other URL that's disappearing. The
`RETIRED` array at the top of `build/build.mjs` is where they go. Unmapped URLs
that 404 will cost you search rankings.

---

## Design system

Implements the **Playersoft Design System** — navy `#003366` + pale cyan
`#CCFFFF`, compiled into `site/assets/css/playersoft.css` as CSS custom
properties.

| | |
|---|---|
| **Primary** | Navy `#003366` |
| **Accent** | Aqua `#009fc0` / `#1cc0db` |
| **Display type** | Sora 700–800, tight tracking |
| **Body type** | Figtree 400–600 |
| **Numeric type** | JetBrains Mono, tabular |
| **Cards** | White, 1px hairline, 8px radius, cool navy shadow |
| **Motion** | 120 / 200 / 320ms, `cubic-bezier(.2,0,0,1)` |

Red appears **only** as the error semantic and in the logo — the legacy
red/gold brand is retired. The header and footer logo stays the original red
lockup at the client's request.

Fonts load from Google Fonts; icons are Lucide (ISC), inlined as SVG. Both are
documented substitutions — swap in official brand assets if they exist.

---

## Motion

Four treatments, all gated on `prefers-reduced-motion`:

- **Count-up** — proof stats tick from zero when scrolled into view, 900ms ease-out
- **Scroll reveal** — cards fade in and rise 10px, staggered 80ms across siblings
- **Card hover** — lift 2px, shadow `sm → md`, aqua rule wipes across the top
- **Live floor panel** — figures step on a 2.6s cadence with animated bars

Two rules in `site/assets/js/site.js` are load-bearing, both from real bugs
found during the build:

1. **Content is never hidden by JS.** An earlier version set `opacity: 0` and
   waited on IntersectionObserver; when it didn't fire, whole pages rendered
   blank. Motion here is additive — if `site.js` fails to load, the site still
   looks right.
2. **No MutationObserver on the document.** It can feed back into itself and
   lock the main thread. Static HTML doesn't need it.

---

## Before you publish

**Content**
- [ ] Photography downloaded per `content/image-manifest.json`
- [ ] Real app screenshots in the phone mockup
- [ ] Policy pages exist — Terms, Privacy, Accessibility (linked, currently missing)
- [ ] `baseUrl` set to the production domain
- [ ] `basePath` correct for how you're publishing

**Functionality**
- [ ] Contact form submits to a real endpoint and notifies the right inbox
- [ ] Confirmation panel appears in place after submitting (no page jump)
- [ ] `/contact/thank-you/` loads directly and looks like Contact
- [ ] Every nav link resolves — run `npm run build` and read the warnings
- [ ] Stat numbers count up on scroll
- [ ] Phone carousel arrows, dots, and arrow keys work
- [ ] `/partners/`, `/news/`, `/blog/` all redirect

**Technical**
- [ ] Tested at 1440 / 1024 / 390px
- [ ] Keyboard-navigable with visible focus rings
- [ ] OS "reduce motion" stops all animation
- [ ] Lighthouse 95+ — static HTML should get there without tuning
- [ ] `sitemap.xml` submitted to Google Search Console
- [ ] Enforce HTTPS enabled

**Design**
- [ ] Skyline bands show no bright strip along the top edge
- [ ] Red logo legible everywhere it appears
- [ ] Text over skyline bands passes contrast

---

## Deliberate scope decisions

- **No News page and no newsletter.** "The Play" blog and its email signup were
  both removed from this redesign. The contact form is now the only thing on the
  site that collects an email address.
- **No Partners page.** It exists on the current site but the client is
  reworking it. Its traffic goes to Contact.
- **No dark mode.** An earlier version had a light/dark toggle; removed from
  scope. The navy skyline bands carry the dark contrast instead.
- **ONE Card, Hotel Enrollment, and Loyalty Kiosk were removed** from the
  Messaging + Loyalty page. Exactly three products belong there.
- **The live floor panel figures are illustrative, not live data.** They make
  "real time" legible to a visitor. Making them real needs a cached backend
  proxy — never point a marketing page at a production casino system on a
  2.6-second poll.
