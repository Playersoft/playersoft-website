#!/usr/bin/env node
/* ==========================================================================
   Playersoft — static site build
   Reads content/*.json → writes site/**\/index.html + sitemap.xml + robots.txt

   Usage:
     node build/build.mjs                    # build from local content/
     node build/build.mjs --cms=sanity       # build from a headless CMS

   No dependencies for the local build. The CMS path is a single fetch you
   implement in loadFromCMS() below — everything downstream is unchanged.
   ========================================================================== */

import { readFile, writeFile, mkdir, readdir, cp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPage, renderSitemap } from './templates.mjs';

/* Retired URLs. GitHub Pages has no server-side redirect rules, so each one
   needs a real file that bounces the visitor client-side. */
const RETIRED = [
  { at: 'partners', to: '/contact/', why: 'Partners was removed from this redesign; the client is reworking it.' },
  { at: 'news',     to: '/',         why: 'The News page ("The Play" blog) was removed from this redesign.' },
  { at: 'blog',     to: '/',         why: 'The old blog fed the News page, which was removed.' }
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT = join(ROOT, 'content');
const SITE = join(ROOT, 'site');

/* Page order matters: it drives sitemap priority and nav sanity checks. */
const PAGE_FILES = [
  'home.json',
  'about.json',
  'solutions.json',
  'one-mobile-app.json',
  'one-messaging-loyalty.json',
  'host-player-management.json',
  'contact.json',
  'contact-thank-you.json'
];

/* The five app screens inside the phone mockup.
   ⚠️ PLACEHOLDERS — these are recreations of the current production UI,
   built to demonstrate the frame. Swap in real screenshots at 402×874. */
const PHONE_SCREENS = [
  { name: 'Login',    src: '/assets/img/app-login.png',    alt: 'Playersoft ONE login screen' },
  { name: 'Identify', src: '/assets/img/app-identify.png', alt: 'Identify Guest screen' },
  { name: 'Events',   src: '/assets/img/app-events.png',   alt: 'Events list screen' },
  { name: 'Groups',   src: '/assets/img/app-groups.png',   alt: 'Groups list screen' },
  { name: 'Floor',    src: '/assets/img/app-floor.png',    alt: 'Live floor screen' }
];

const json = async (p) => JSON.parse(await readFile(p, 'utf8'));

/* -------------------------------------------------------------- CMS HOOK
   Replace the body of this function with your CMS query. It must return
   { site, pages } in the same shape as content/*.json.
   Field-for-field mappings for Sanity, Contentful, and Strapi are in
   cms/README.md.                                                        */
async function loadFromCMS(which) {
  throw new Error(
    `CMS adapter "${which}" not implemented yet.\n` +
    `Implement loadFromCMS() in build/build.mjs — see cms/README.md for the\n` +
    `field mappings. Until then, run without --cms to build from content/.`
  );
}

async function loadLocal() {
  const site = await json(join(CONTENT, 'site.json'));
  const pages = [];
  for (const f of PAGE_FILES) {
    pages.push(await json(join(CONTENT, 'pages', f)));
  }
  return { site, pages };
}

/* Basic integrity checks — catches broken internal links before deploy. */
function validate({ site, pages }) {
  const known = new Set(pages.map((p) => p.url));
  const problems = [];

  const walk = (node, where) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach((n) => walk(n, where));
    if (typeof node.url === 'string' &&
        node.url.startsWith('/') &&
        !node.url.startsWith('/assets/') &&
        !known.has(node.url)) {
      problems.push(`${where}: link to ${node.url} has no matching page`);
    }
    Object.values(node).forEach((v) => walk(v, where));
  };

  pages.forEach((p) => walk(p.sections, p.url || '/'));
  walk(site.nav, 'site.nav');
  walk(site.footer, 'site.footer');

  return problems;
}

async function build() {
  const useCMS = process.argv.find((a) => a.startsWith('--cms='));
  const data = useCMS ? await loadFromCMS(useCMS.split('=')[1]) : await loadLocal();

  const problems = validate(data);
  if (problems.length) {
    console.warn('\n⚠️  Link warnings (these are expected until the policy pages exist):');
    problems.forEach((p) => console.warn('   • ' + p));
    console.warn('');
  }

  const ctx = { site: data.site, screens: PHONE_SCREENS };

  let count = 0;
  for (const page of data.pages) {
    const html = renderPage(page, ctx);
    const outDir = page.slug ? join(SITE, page.slug) : SITE;
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
    console.log(`  ✓ ${page.url}`);
    count++;
  }

  /* sitemap.xml */
  await writeFile(join(SITE, 'sitemap.xml'), renderSitemap(data.pages, data.site), 'utf8');

  /* GitHub Pages extras: .nojekyll, 404, and redirect stubs.
     All of these honour basePath so a project-site deploy still resolves. */
  const base = (data.site.site.basePath || '').replace(/\/$/, '');
  const bp = (u) => (base && u.startsWith('/') ? base + u : u);

  await writeFile(join(SITE, '.nojekyll'), '', 'utf8');
    /* 404.html is hand-written with root-relative paths; prefix them with basePath.
     The lookahead skips paths already prefixed, so re-running the build is safe. */
  if (base) {
    const p404 = join(SITE, '404.html');
    const esc = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(href|src)="/(?!/|${esc}/)`, 'g');
    const html404 = await readFile(p404, 'utf8');
    await writeFile(p404, html404.replace(re, `$1="${base}/`), 'utf8');
    console.log('  ✓ 404.html paths prefixed with basePath');
  }

  for (const r of RETIRED) {
    const dest = bp(r.to);
    await mkdir(join(SITE, r.at), { recursive: true });
    await writeFile(join(SITE, r.at, 'index.html'),
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${dest}">
<link rel="canonical" href="${dest}">
<meta name="robots" content="noindex">
<title>Moved — Playersoft</title>
<!-- ${r.why}
     GitHub Pages serves static files only, so a retired URL needs a real file
     that bounces the visitor. The canonical tag makes search engines treat it
     as a soft 301 — the best available on this host. On a host with server
     redirects, replace these stubs with proper 301s. -->
</head>
<body style="margin:0;font:400 16px/1.5 system-ui,sans-serif;color:#26303f;background:#f6f8fa;display:flex;align-items:center;justify-content:center;min-height:100vh">
<p>Redirecting to <a href="${dest}" style="color:#009fc0">${dest}</a>&hellip;</p>
</body>
</html>
`, 'utf8');
    console.log(`  ✓ /${r.at}/ → ${dest} (redirect stub)`);
  }

  /* robots.txt */
  const origin = data.site.site.baseUrl.replace(/\/$/, '');
  await writeFile(
    join(SITE, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}/sitemap.xml\n`,
    'utf8'
  );

  console.log(`\n✅ Built ${count} pages + ${RETIRED.length} redirect stubs + sitemap.xml + robots.txt → site/`);
  console.log(`   basePath: "${base || '(root)'}"\n`);
}

build().catch((err) => {
  console.error('\n❌ Build failed:\n', err.message, '\n');
  process.exit(1);
});
