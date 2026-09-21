# Deploying playersoft.com

Fresh deployment, start to finish — from an empty GitHub account to
`https://www.playersoft.com` served by GitHub Pages, with the domain moved off
Wix.

Two halves, and **the order matters**:

- **Part 1 — Publish** (30 min). Get the site live at a `github.io` URL.
  Zero risk. The current Wix site stays up and untouched the whole time.
- **Part 2 — Cut over DNS** (30 min + waiting). Point playersoft.com at the new
  site. This is the part your visitors see.

Do Part 1, verify everything, *then* do Part 2. Don't interleave them.

---

# Part 1 — Publish to GitHub Pages

## Before you start

| You need | Notes |
|---|---|
| A GitHub account | Free tier is fine. Pages is free on public repos. |
| Git installed | `git --version` to check. [git-scm.com](https://git-scm.com) |
| GoDaddy login | The account holding playersoft.com. Needed in Part 2. |
| Wix login | To confirm how the domain is currently connected. |
| ~1 hour | Plus DNS propagation, which is waiting, not working. |

Node is **not** required — GitHub builds the site for you. You only need it if
you want to preview locally.

> **A note on public vs private.** GitHub Pages on a *private* repo requires a
> paid plan. On the free tier the repo must be public. Nothing in this package
> is secret — it's the same HTML you'd serve to the world anyway — but if
> company policy forbids public repos, budget for GitHub Team.

---

## Step 1 — Create the repository

On github.com: **+ → New repository**

| Field | Value |
|---|---|
| Owner | Your organization (or personal account) |
| Name | `playersoft-website` |
| Visibility | **Public** (see note above) |
| Initialize with README | **No** — leave every checkbox empty |

That last row matters. An auto-created README makes your first push conflict.

Copy the repo URL from the next screen.

---

## Step 2 — Push this package

Open a terminal in the unzipped `playersoft-github-pages` folder:

```bash
cd playersoft-github-pages

git init
git add .
git commit -m "Playersoft 2026 redesign"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/playersoft-website.git
git push -u origin main
```

Replace `YOUR-ORG` with your account or org name.

If GitHub asks for a password, it wants a **personal access token**, not your
login password — GitHub → Settings → Developer settings → Personal access
tokens → Fine-grained → generate one with `Contents: read and write`. Or install
[GitHub Desktop](https://desktop.github.com) and skip the terminal entirely.

---

## Step 3 — Turn Pages on

Repo → **Settings** → **Pages** → Build and deployment → **Source: GitHub Actions**

**This step is silently load-bearing.** Skip it and the build still runs, still
goes green, and publishes nothing. Most "my Pages site is blank" reports are
this.

---

## Step 4 — Watch the first build

**Actions** tab → the "Deploy to GitHub Pages" run → about 60 seconds.

Green check → your site is live at:

```
https://YOUR-ORG.github.io/playersoft-website/
```

It will look **completely unstyled** right now. That's expected, and Step 5
fixes it.

---

## Step 5 — Set `basePath`

The site ships configured for a custom domain, where everything sits at the
domain root. Right now it's in a subfolder (`/playersoft-website/`), so every
CSS, image, and nav path is resolving one level too high.

Edit `content/site.json`:

```json
"site": {
  "basePath": "/playersoft-website"
}
```

Match your repo name exactly. Leading slash, no trailing slash.

```bash
git add content/site.json
git commit -m "Set basePath for project site"
git push
```

Wait for Actions, reload. Fully styled now.

> **You'll undo this in Part 2.** Once the custom domain is attached, the site
> moves back to the root and `basePath` goes back to `""`. Two edits, and
> they're both one line. Setting it now is what lets you review the real site
> before touching DNS.

---

## Step 6 — Review the staging site

This is your last checkpoint before the public sees it. Click every page:

- [ ] Home — stats count up on scroll; phone carousel arrows and dots work
- [ ] About, Solutions, and all three product pages
- [ ] Contact — form renders, Solutions dropdown lists all 8 products
- [ ] `/partners/`, `/news/`, `/blog/` each redirect (not 404)
- [ ] A made-up URL like `/nope/` shows the branded 404
- [ ] Check it on a phone

**Show the board this URL.** It's the real site.

---

## Step 7 — Connect the contact form

GitHub Pages serves files and nothing else — it cannot process a form
submission. Until you do this, the form validates and then discards the lead.

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50/mo)
2. Create a form, point notifications at the right inbox, copy the endpoint URL
3. Edit `content/pages/contact.json`:

   ```json
   "form": {
     "action": "https://formspree.io/f/YOUR_FORM_ID"
   }
   ```

4. Commit and push.

**Then submit the form yourself and confirm the email arrives.** A demo-request
form that quietly drops leads is worse than having no form.

---

Part 1 is done. The site is live, correct, and reviewable — and playersoft.com
still points at Wix. Nothing is at risk yet.

---

# Part 2 — Move the domain

## First: find out how the domain is actually connected

Wix connects domains two different ways, and **they need completely different
fixes**. Guessing wrong wastes a day of propagation.

Log in to **GoDaddy → My Products → playersoft.com → DNS**, and look at
**Nameservers**:

| What you see | What it means | Go to |
|---|---|---|
| `ns1.wixdns.net` / `ns2.wixdns.net` (or similar non-GoDaddy names) | **Nameserver method.** Wix controls your DNS entirely. GoDaddy is just the registrar. | Scenario A |
| `ns__.domaincontrol.com` (GoDaddy's own) | **Pointing method.** GoDaddy controls DNS; there are just A records aimed at Wix. | Scenario B |
| No `playersoft.com` in your GoDaddy account at all | The domain was **bought through Wix**. | Scenario C |

Take a screenshot of the current DNS records before changing anything. If
something breaks, that screenshot is how you put it back.

---

## Scenario A — Nameservers point to Wix

You're taking DNS control back to GoDaddy, then pointing it at GitHub.

**1. Note anything you'd lose.** In the Wix DNS panel, write down every record
that isn't the website itself — especially:

- **MX records** (email — Google Workspace, Microsoft 365, etc.)
- **TXT** records (SPF, DKIM, domain verification)
- Any subdomains in use (`mail.`, `app.`, `vpn.`)

> ⚠️ **This is the one step that can genuinely hurt.** Switching nameservers
> without recreating your MX records **stops company email**, usually within the
> hour. If Playersoft email runs on this domain, copy every MX and TXT record
> out of Wix *first* and re-enter them in GoDaddy in Step 3 below.

**2. Switch nameservers back to GoDaddy**

GoDaddy → playersoft.com → **Nameservers** → **Change** → **GoDaddy
nameservers** (the "default" option) → Save.

Propagation: usually under an hour, occasionally up to 48.

**3. Recreate your email records in GoDaddy DNS**

Before adding anything for the website, re-enter every MX and TXT record you
copied in Step 1. Do this first.

**4. Add the GitHub Pages records** → continue to *"The records to add"* below.

---

## Scenario B — GoDaddy nameservers, A records point to Wix

The easy path. You're just swapping which IPs the records point to.

GoDaddy → playersoft.com → **DNS** → and:

1. **Delete** the existing `A` record for `@` (currently a Wix IP such as
   `23.236.62.147`)
2. **Delete or edit** the `CNAME` for `www` (currently something like
   `www###.wixdns.net`)
3. Leave **MX and TXT records alone** — you're not touching email in this
   scenario
4. Continue to *"The records to add"* below

---

## Scenario C — The domain is registered at Wix

The domain lives in your Wix account, so GoDaddy isn't involved yet. Two ways
forward:

**Option 1 — Transfer the domain to GoDaddy** (cleanest; you wanted it at
GoDaddy anyway)

1. In Wix: Domains → playersoft.com → **Advanced → Transfer away from Wix** →
   unlock the domain and request the **authorization/EPP code** (arrives by
   email)
2. In GoDaddy: **Domains → Transfer a domain** → enter playersoft.com and the
   auth code → pay the transfer fee (about $20, which adds a year of
   registration)
3. Approve the confirmation email
4. **Transfers take 5–7 days.** Your site stays up on Wix throughout — DNS
   doesn't change until the transfer completes
5. When it lands in GoDaddy, follow *"The records to add"* below

⚠️ A domain can't be transferred within **60 days** of registration or a
previous transfer. If it was registered recently, use Option 2 now and transfer
later.

**Option 2 — Leave it at Wix, point it at GitHub**

Wix → Domains → playersoft.com → **Advanced → Edit DNS / Custom records**, then
add the same records from the section below, in Wix's DNS panel instead of
GoDaddy's. Works fine — you just keep managing DNS in Wix.

---

## The records to add

Same for every scenario; only the control panel differs.

**Four A records** — `@` (the apex, `playersoft.com`). Add all four; GitHub
load-balances across them.

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |

**One CNAME** — for `www`:

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `YOUR-ORG.github.io` | 600 |

Substitute your GitHub org/username. It ends in `.github.io` — **not** your repo
name, and **not** the full project URL. Trailing dot optional; GoDaddy adds it.

*Optional, for IPv6 visitors — four AAAA records on `@`:*
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
`2606:50c0:8003::153`

Set TTL low (600s / 10 min) **before** the cutover if you can. It means a
mistake takes ten minutes to fix instead of a day. Raise it to 1 hour once
you're settled.

---

## Tell GitHub about the domain

DNS now points at GitHub, but GitHub doesn't yet know which repo answers for
playersoft.com.

**1. Add the CNAME file**

Rename `site/CNAME.example` to `site/CNAME`. It should contain exactly one line:

```
www.playersoft.com
```

No `https://`, no trailing slash.

**2. Reset `basePath` and `baseUrl`** in `content/site.json` — the site is at
the domain root now, not in a subfolder:

```json
"site": {
  "basePath": "",
  "baseUrl": "https://www.playersoft.com"
}
```

`baseUrl` drives canonical tags and `sitemap.xml`; wrong values quietly hurt
search ranking.

```bash
git add site/CNAME content/site.json
git commit -m "Custom domain: www.playersoft.com"
git push
```

**3. Set it in the repo**

Settings → Pages → **Custom domain** → `www.playersoft.com` → Save.

GitHub runs a DNS check. A red error here usually just means DNS hasn't
propagated — wait and re-check rather than changing anything.

**4. Enforce HTTPS**

Same page, once the check passes: tick **Enforce HTTPS**.

The checkbox stays greyed out until GitHub issues your Let's Encrypt
certificate — typically 15 minutes, occasionally a few hours. **Don't skip
this.** Without it visitors get browser security warnings.

> **Apex vs www.** These records serve both `playersoft.com` and
> `www.playersoft.com`. Setting the custom domain to the `www` version makes
> GitHub redirect the bare domain to it automatically — which is what you want,
> and matches how the site is configured today.

---

## Verify

```bash
dig playersoft.com +short          # → the four 185.199.x.x addresses
dig www.playersoft.com +short      # → YOUR-ORG.github.io
```

Or use [dnschecker.org](https://dnschecker.org) to watch it propagate
worldwide.

Then, in a browser:

- [ ] `https://www.playersoft.com` loads the new site
- [ ] `https://playersoft.com` redirects to `www`
- [ ] `http://` versions redirect to `https://`
- [ ] Padlock icon, no certificate warning
- [ ] Every page loads with styling (if it's unstyled, `basePath` is still set)
- [ ] Contact form submits and the email arrives
- [ ] **Company email still works** — send yourself one

Propagation is typically 1–4 hours and can take 48. Some visitors will see the
old Wix site during this window; that's normal and resolves itself.

---

## Finally: cancel Wix

**Wait a week.** Confirm the new site is stable and email is fine before you
give up the ability to fall back.

Then: Wix → Subscriptions → cancel the premium plan. If the domain is still
registered at Wix (Scenario C, Option 2), **don't let the domain registration
lapse** — cancelling the site plan and dropping the domain are different
actions, and losing the domain would be catastrophic.

---

# If something goes wrong

**Site is unstyled / no CSS**
`basePath` doesn't match reality. Custom domain → `""`. Project site →
`/repo-name`. Edit, push, wait for Actions.

**404 on every page**
Settings → Pages → Source isn't set to **GitHub Actions**. Set it and re-run
the last workflow.

**Actions green but nothing changed**
Hard-refresh (Cmd/Ctrl + Shift + R). Pages caches aggressively.

**"Domain does not resolve to the GitHub Pages server"**
DNS hasn't propagated. Verify with `dig`, wait, click Save again. If it persists
past a few hours, check for a leftover Wix A record on `@`.

**HTTPS checkbox stays greyed out**
Certificate hasn't issued. Wait an hour. If it's still stuck, remove the custom
domain, save, re-add it — this re-triggers issuance.

**Company email stopped**
MX records were lost in the nameserver switch. Re-add them in GoDaddy DNS from
the screenshot you took. Mail queues and retries for a day or two, so messages
sent during the outage usually still arrive.

**You need to roll back**
Revert the DNS records to their previous values (that screenshot again) and
un-cancel Wix if needed. Nothing about the GitHub repo blocks this — which is
why cancelling Wix comes last.

---

# Quick reference

| | |
|---|---|
| Repo | `github.com/YOUR-ORG/playersoft-website` |
| Staging URL | `YOUR-ORG.github.io/playersoft-website/` |
| Production | `https://www.playersoft.com` |
| Pages source | Settings → Pages → **GitHub Actions** |
| A records (apex) | `185.199.108.153` · `.109.153` · `.110.153` · `.111.153` |
| CNAME (www) | `YOUR-ORG.github.io` |
| `basePath` staging | `/playersoft-website` |
| `basePath` production | `""` |
| Edit content | `content/*.json` → commit → push |

Ongoing edits: change a JSON file in `content/`, commit, push. Actions rebuilds
and republishes in about a minute. See `README.md` for the content model.
