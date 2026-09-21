/* ==========================================================================
   Playersoft — HTML templates
   Pure functions: content JSON in, HTML string out. No dependencies.
   Used by build.mjs. Every page in site/ was generated from this file.
   ========================================================================== */

/* ---------- helpers ---------- */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* Content copy may legitimately contain — and " so we escape only the
   structural characters, leaving typographic punctuation intact. */
const text = (s) => String(s == null ? '' : s)
  .replace(/&(?!(?:[a-z]+|#\d+);)/gi, '&amp;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;');

const nl2br = (s) => text(s).replace(/\n/g, '<br>');

/* Base path — GitHub Pages project repos serve from /repo-name/, so every
   absolute path needs that prefix. Set site.site.basePath in site.json:
     ""            → user/org site or custom domain (playersoft.com)
     "/repo-name"  → project site (username.github.io/repo-name/)
   Only rewrites root-absolute paths; mailto:, tel:, and https: pass through. */
let BASE = '';
const setBase = (b) => { BASE = (b || '').replace(/\/$/, ''); };
const bp = (u) => (BASE && typeof u === 'string' && u.startsWith('/') ? BASE + u : u);

/* Lucide icon subset (ISC). stroke=currentColor so icons inherit text color. */
const ICONS = {
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
  star: '<path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h.01M21 21v-4M17 21h1"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>',
  phone: '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M18 12a1 1 0 0 0 0 2h3v-2z"/>'
};

function icon(name, size = 24) {
  const path = ICONS[name] || ICONS.star;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function button(b) {
  if (!b) return '';
  const size = b.size === 'lg' ? ' ps-btn--lg' : b.size === 'sm' ? ' ps-btn--sm' : '';
  const variant = ` ps-btn--${b.variant || 'primary'}`;
  return `<a class="ps-btn${variant}${size}" href="${esc(bp(b.url))}">${text(b.label)}</a>`;
}

function eyebrow(s) {
  return s ? `<span class="ps-eyebrow">${text(s)}</span>` : '';
}

function statBlock(s, size) {
  const cls = size === 'lg' ? 'ps-stat ps-stat--lg' : 'ps-stat ps-stat--sm';
  const initial = `${s.value.toLocaleString()}${s.suffix || ''}`;
  return `<div>
          <span class="${cls}" data-countup="${esc(s.value)}"${s.suffix ? ` data-suffix="${esc(s.suffix)}"` : ''}>${text(initial)}</span>
          <span class="ps-stat-label">${text(s.label)}</span>
        </div>`;
}

function decoDivs(list) {
  if (!list || !list.length) return '';
  return list.map((d) => `<span class="ps-deco ps-deco--${esc(d)}" aria-hidden="true"></span>`).join('\n      ');
}

/* ---------- chrome ---------- */

function header(site, page) {
  const links = site.nav.map((n) => {
    const active = n.key === page.navKey;
    return `<a class="ps-nav__link" href="${esc(bp(n.url))}"${active ? ' aria-current="page"' : ''}>${text(n.label)}</a>`;
  }).join('\n        ');

  const showSub = page.navKey === 'solutions';
  const sub = showSub ? `
  <div class="ps-subnav">
    <div class="ps-subnav__bar">
      <span class="ps-subnav__label">${text(site.subnav.label)}</span>
      ${site.subnav.items.map((s) => {
        const active = s.key === page.subnavKey;
        return `<a class="ps-subnav__link" href="${esc(bp(s.url))}"${active ? ' aria-current="page"' : ''}>${text(s.label)}</a>`;
      }).join('\n      ')}
    </div>
  </div>` : '';

  return `<header class="ps-header">
  <div class="ps-rule ps-rule--thin"></div>
  <div class="ps-header__bar">
    <a class="ps-header__logo" href="${esc(bp('/'))}" aria-label="${esc(site.site.name)} home">
      <img src="${esc(bp(site.site.logo))}" alt="${esc(site.site.logoAlt)}" width="180" height="40">
    </a>
    <button class="ps-burger" type="button" data-nav-toggle aria-expanded="false" aria-controls="ps-nav" aria-label="Toggle navigation"><span></span></button>
    <nav class="ps-nav" id="ps-nav" data-nav aria-label="Main">
        ${links}
        <a class="ps-btn ps-btn--primary ps-btn--sm" href="${esc(bp(site.navButton.url))}">${text(site.navButton.label)}</a>
    </nav>
  </div>${sub}
</header>`;
}

function footer(site) {
  const cols = site.footer.columns.map((c) => `
      <div class="ps-footer__col">
        <span class="ps-eyebrow" style="color:var(--text-muted)">${text(c.heading)}</span>
        ${c.links.map((l) => l.url
          ? `<a href="${esc(bp(l.url))}">${nl2br(l.label)}</a>`
          : `<span class="ps-body">${nl2br(l.label)}</span>`).join('\n        ')}
      </div>`).join('');

  return `<footer class="ps-footer">
  <div class="ps-footer__grid">
      <div class="ps-footer__col">
        <div class="ps-footer__brand">
          <img src="${esc(bp(site.site.logo))}" alt="${esc(site.site.logoAlt)}" width="144" height="32">
        </div>
        <p class="ps-small" style="max-width:280px">${text(site.site.description)}</p>
      </div>${cols}
  </div>
  <div class="ps-footer__bottom">
    <span class="ps-small">${text(site.footer.copyright)}</span>
  </div>
  <div class="ps-rule"></div>
</footer>`;
}

/* ---------- phone mockup ---------- */

function phoneMockup(screens) {
  const slides = screens.map((s) => `
            <div class="ps-phone__slide" data-screen="${esc(s.name)}">
              <img src="${esc(bp(s.src))}" alt="${esc(s.alt)}" width="402" height="874" loading="lazy">
            </div>`).join('');

  return `<div class="ps-phone" data-phone data-phone-start="Identify" tabindex="0" role="group" aria-label="Playersoft ONE app screens">
        <div class="ps-phone__stage">
          <button class="ps-phone__nav ps-phone__nav--prev" type="button" data-phone-prev aria-label="Previous screen">&#8592;</button>
          <div class="ps-phone__device">
            <div class="ps-phone__rail">
              <span class="ps-phone__btn ps-phone__btn--l" style="top:138px;height:32px" aria-hidden="true"></span>
              <span class="ps-phone__btn ps-phone__btn--l" style="top:190px;height:58px" aria-hidden="true"></span>
              <span class="ps-phone__btn ps-phone__btn--l" style="top:262px;height:58px" aria-hidden="true"></span>
              <span class="ps-phone__btn ps-phone__btn--r" style="top:210px;height:92px" aria-hidden="true"></span>
              <span class="ps-phone__btn ps-phone__btn--cam" style="top:330px;height:46px" aria-hidden="true"></span>
              <div class="ps-phone__screen">
                <div class="ps-phone__track" data-phone-track>${slides}
                </div>
              </div>
            </div>
          </div>
          <button class="ps-phone__nav ps-phone__nav--next" type="button" data-phone-next aria-label="Next screen">&#8594;</button>
        </div>
        <div class="ps-phone__caption">
          <span class="ps-phone__brand">PLAYERSOFT - ONE</span>
          <span class="ps-phone__label" data-phone-label></span>
          <div class="ps-phone__dots" data-phone-dots></div>
        </div>
      </div>`;
}

/* ---------- sections ---------- */

function sHero(s, ctx) {
  const inner = s.variant === 'page' ? 'ps-hero__inner ps-hero__inner--page' : 'ps-hero__inner';
  const stats = s.stats
    ? `<div class="ps-stat-row" style="margin-top:8px">${s.stats.map((x) => statBlock(x, 'sm')).join('\n        ')}</div>`
    : '';
  const chips = s.chips
    ? `<div class="ps-chip-row" style="margin-top:10px">${s.chips.map((c) => `<span class="ps-chip">${text(c)}</span>`).join('')}</div>`
    : '';
  const btns = s.buttons
    ? `<div class="ps-btn-row" style="margin-top:8px">${s.buttons.map(button).join('')}</div>`
    : '';
  const lede = s.lede ? `<p class="ps-lede">${text(s.lede)}</p>` : '';

  const copy = `<div class="ps-stack">
        ${eyebrow(s.eyebrow)}
        <h1>${text(s.heading)}</h1>
        ${lede}
        ${btns}
        ${stats}
        ${chips}
      </div>`;

  const body = s.media && s.media.type === 'phone'
    ? `<div class="ps-split ps-split--hero">
      ${copy}
      <div>${phoneMockup(ctx.screens)}</div>
    </div>`
    : copy;

  return `<section class="ps-hero">
  ${decoDivs(s.deco)}
  <div class="${inner}">
    <div class="ps-container">
    ${body}
    </div>
  </div>
  <div class="ps-rule"></div>
</section>`;
}

function sCardGrid(s) {
  const cards = s.cards.map((c, i) => {
    const cls = `ps-card${s.strip ? ' ps-card--strip' : ''}`;
    const head = s.numbered
      ? `<span class="ps-card__numeral${i % 2 === 1 ? ' ps-card__numeral--alt' : ''}">${i + 1}</span>`
      : (c.icon ? `<span class="ps-card__icon">${icon(c.icon)}</span>` : '');
    const eb = c.eyebrow ? eyebrow(c.eyebrow) : '';
    const list = c.list
      ? `<ul class="ps-card__list">${c.list.map((l) => `<li>${text(l)}</li>`).join('')}</ul>`
      : '';
    const btn = c.button ? `<div>${button(c.button)}</div>` : '';
    return `    <div class="${cls}" data-reveal data-lift>
      ${head}
      ${eb}
      <h3>${text(c.title)}</h3>
      <p class="ps-body">${text(c.body)}</p>
      ${list}
      ${btn}
    </div>`;
  }).join('\n');

  const head = (s.eyebrow || s.heading) ? `<div class="ps-stack">
      ${eyebrow(s.eyebrow)}
      ${s.heading ? `<h2>${text(s.heading)}</h2>` : ''}
    </div>` : '';

  const outro = s.outro ? `<p class="ps-lede" style="max-width:720px">${text(s.outro)}</p>` : '';
  const outroBtn = s.outroButton ? `<div>${button(s.outroButton)}</div>` : '';

  return `<section class="ps-section${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container ps-stack ps-stack--lg">
    ${head}
    <div class="ps-grid ps-grid--${s.columns || 3}">
${cards}
    </div>
    ${outro}
    ${outroBtn}
  </div>
</section>`;
}

function sSplitMedia(s) {
  const paras = (s.paragraphs || []).map((p) => `<p class="ps-body" style="font-size:16px">${text(p)}</p>`).join('\n        ');
  const stats = s.stats
    ? `<div class="ps-stat-row" style="margin-top:8px">${s.stats.map((x) => statBlock(x, 'sm')).join('')}</div>`
    : '';
  const btn = s.button ? `<div>${button(s.button)}</div>` : '';
  const media = `<div class="ps-split__media" style="height:${s.image.height || 380}px">
        <img src="${esc(bp(s.image.src))}" alt="${esc(s.image.alt)}" loading="lazy">
      </div>`;
  const copy = `<div class="ps-stack">
        ${eyebrow(s.eyebrow)}
        ${s.heading ? `<h2>${text(s.heading)}</h2>` : ''}
        ${paras}
        ${stats}
        ${btn}
      </div>`;

  return `<section class="ps-section${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container">
    <div class="ps-split">
      ${s.reverse ? media + '\n      ' + copy : copy + '\n      ' + media}
    </div>
  </div>
</section>`;
}

function sModuleBlocks(s) {
  const blocks = s.blocks.map((b) => {
    const copy = `<div class="ps-stack">
        ${eyebrow(b.eyebrow)}
        <h2 style="font-size:30px">${text(b.heading)}</h2>
        <p class="ps-body" style="font-size:16px">${text(b.body)}</p>
      </div>`;
    const media = `<div class="ps-split__media" style="height:${b.image.height || 280}px">
        <img src="${esc(bp(b.image.src))}" alt="${esc(b.image.alt)}" loading="lazy">
      </div>`;
    return `    <div class="ps-split">
      ${b.reverse ? media + '\n      ' + copy : copy + '\n      ' + media}
    </div>`;
  }).join('\n');

  return `<section class="ps-section">
  <div class="ps-container ps-stack" style="gap:56px">
${blocks}
  </div>
</section>`;
}

function sStatStrip(s) {
  return `<section class="ps-section ps-section--tight${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container ps-stack ps-stack--lg">
    ${s.heading ? `<h2>${text(s.heading)}</h2>` : ''}
    <div class="ps-statstrip">
      ${s.stats.map((x) => `<div class="ps-statstrip__item">${statBlock(x, 'lg')}</div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function sFeatureList(s) {
  return `<section class="ps-section${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container ps-stack ps-stack--lg">
    <div class="ps-stack">
      ${eyebrow(s.eyebrow)}
      <h2 style="font-size:32px">${text(s.heading)}</h2>
    </div>
    <ul class="ps-features">
      ${s.items.map((i) => `<li>${text(i)}</li>`).join('\n      ')}
    </ul>
  </div>
</section>`;
}

function sTestimonials(s) {
  return `<section class="ps-section${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container ps-stack ps-stack--lg">
    <div class="ps-stack">
      ${eyebrow(s.eyebrow)}
      <h2>${text(s.heading)}</h2>
    </div>
    <div class="ps-grid ps-grid--3" style="align-items:start">
      ${s.items.map((q) => `<figure class="ps-card ps-quote" style="margin:0" data-reveal data-lift>
        <span class="ps-quote__mark" aria-hidden="true">&ldquo;</span>
        <blockquote class="ps-quote__text" style="margin:0">${text(q.quote)}</blockquote>
        <figcaption class="ps-quote__from">${text(q.from)}</figcaption>
      </figure>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function sColumns(s) {
  return `<section class="ps-section">
  <div class="ps-container ps-stack ps-stack--lg">
    <h2>${text(s.heading)}</h2>
    <div class="ps-cols">
      ${s.items.map((i) => `<div class="ps-cols__item">
        <h3>${text(i.title)}</h3>
        <p class="ps-body">${text(i.body)}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function sRichColumns(s) {
  return `<section class="ps-section${s.sunken ? ' ps-section--sunken' : ''}">
  <div class="ps-container ps-stack">
    ${eyebrow(s.eyebrow)}
    <h2 style="max-width:800px">${text(s.heading)}</h2>
    <div class="ps-grid ps-grid--2" style="gap:48px;margin-top:8px">
      ${s.paragraphs.map((p) => `<p class="ps-body" style="font-size:16px">${text(p)}</p>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function sLivePanel(s) {
  return `<section style="padding:56px 0 0">
  <div class="ps-container">
    <div class="ps-live" data-live-floor>
      <div class="ps-live__head">
        <span class="ps-live__title">${text(s.title || 'Tonight on the floor')}</span>
        <span class="ps-live__status"><span class="ps-live__dot" aria-hidden="true"></span>Live</span>
      </div>
      <div class="ps-live__grid" data-live-grid></div>
    </div>
  </div>
</section>`;
}

/* Confirmation panel. Occupies the same slot as the form card, so revealing it
   reads as the page responding rather than a new page. Rendered on both the
   Contact page (hidden, revealed by JS) and /contact/thank-you/ (visible), so
   the two paths cannot drift apart. */
/* Formspree and friends want an absolute URL in _next. */
const site0 = (ctx) => (ctx.site.site.baseUrl || '').replace(/\/$/, '');

function successPanel(s) {
  const su = s.success || {};
  const hidden = !s.showSuccess;
  const check = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
  const next = (su.next || []).map((n) => `<li>${text(n)}</li>`).join('\n            ');

  return `<div class="ps-card ps-card--strip" id="ps-form-success" role="status" aria-live="polite"${hidden ? ' hidden' : ''} style="padding:36px;gap:18px">
        <span style="display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--radius-pill);background:var(--color-accent-soft);color:var(--aqua-700)">${check}</span>
        <h2 style="font-size:28px">${text(su.heading || 'Thank you')}</h2>
        <p class="ps-lede" style="max-width:none">${text(su.body || '')}</p>
        ${next ? `<div class="ps-stack" style="gap:10px;border-top:1px solid var(--border-subtle);padding-top:20px">
          ${eyebrow(su.nextEyebrow || 'What happens next')}
          <ul class="ps-card__list">
            ${next}
          </ul>
        </div>` : ''}
        ${su.buttons ? `<div class="ps-btn-row" style="margin-top:4px">${su.buttons.map(button).join('')}</div>` : ''}
      </div>`;
}

function sContact(s, ctx) {
  const f = s.form;
  const halves = f.fields.filter((x) => x.half);
  const rest = f.fields.filter((x) => !x.half);

  const field = (x) => {
    const id = `f-${x.name}`;
    const req = x.required ? ' required' : '';
    const label = `<label class="ps-label" for="${id}">${text(x.label)}${x.required ? '*' : ''}</label>`;
    if (x.type === 'select') {
      return `<div class="ps-field">
          ${label}
          <select class="ps-select" id="${id}" name="${esc(x.name)}"${req}>
            <option value="">Select…</option>
            ${x.options.map((o) => `<option value="${esc(o)}">${text(o)}</option>`).join('\n            ')}
          </select>
        </div>`;
    }
    if (x.type === 'textarea') {
      return `<div class="ps-field">
          ${label}
          <textarea class="ps-textarea" id="${id}" name="${esc(x.name)}" placeholder="${esc(x.placeholder || '')}"${req}></textarea>
        </div>`;
    }
    return `<div class="ps-field">
          ${label}
          <input class="ps-input" id="${id}" type="${esc(x.type)}" name="${esc(x.name)}" placeholder="${esc(x.placeholder || '')}"${req}>
        </div>`;
  };

  const aside = s.aside.map((a) => {
    if (a.items) {
      return `<div class="ps-stack" style="gap:14px">
        ${eyebrow(a.eyebrow)}
        <div class="ps-stack" style="gap:10px">
          ${a.items.map((i) => {
            const style = i.strong ? 'font:700 18px var(--font-display);color:var(--text-strong)' : 'font:400 16px/1.55 var(--font-body);color:var(--text-body)';
            return i.url
              ? `<a href="${esc(bp(i.url))}" style="${style}">${nl2br(i.text)}</a>`
              : `<span style="${style}">${nl2br(i.text)}</span>`;
          }).join('\n          ')}
        </div>
      </div>`;
    }
    return `<div class="ps-stack" style="gap:12px;border-top:1px solid var(--border-subtle);padding-top:24px">
        ${eyebrow(a.eyebrow)}
        <p class="ps-body" style="font-size:16px">${text(a.body)}</p>
        ${a.button ? `<div>${button(a.button)}</div>` : ''}
      </div>`;
  }).join('\n      ');

  return `<section class="ps-section">
  <div class="ps-container">
    <div class="ps-split ps-split--form">
      <div>
      <div class="ps-card ps-card--strip" id="ps-form-card" style="padding:36px;gap:20px"${s.showSuccess ? ' hidden' : ''}>
        <h2 style="font-size:24px">${text(f.heading)}</h2>
        <form action="${esc(f.action || '')}" method="post" class="ps-stack" style="gap:20px" name="contact" data-contact-form data-success-url="${esc(bp(f.successUrl || '/contact/thank-you/'))}">
          <div class="ps-form-grid">
            ${halves.map(field).join('\n            ')}
          </div>
          ${rest.map(field).join('\n          ')}
          ${f.successUrl ? `<input type="hidden" name="_next" value="${esc(site0(ctx) + bp(f.successUrl))}">` : ''}
          <div><button class="ps-btn ps-btn--${f.button.variant} ps-btn--${f.button.size}" type="submit">${text(f.button.label)}</button></div>
          <p class="ps-small" id="ps-form-error" role="alert" hidden style="color:var(--red-500)">Something went wrong sending that. Please try again, or email <a href="mailto:Info@playersoft.com">Info@playersoft.com</a>.</p>
        </form>
      </div>
      ${successPanel(s)}
      </div>
      <div class="ps-stack" style="gap:32px">
      ${aside}
      </div>
    </div>
  </div>
</section>`;
}

function sCta(s) {
  return `<section class="ps-hero ps-cta">
  ${decoDivs(s.deco)}
  <div class="ps-container">
    ${eyebrow(s.eyebrow)}
    <h2 style="font-size:40px">${text(s.heading)}</h2>
    <p class="ps-lede">${text(s.body)}</p>
    <div style="margin-top:8px">${button(s.button)}</div>
  </div>
</section>`;
}

const RENDERERS = {
  hero: sHero,
  cardGrid: sCardGrid,
  splitMedia: sSplitMedia,
  moduleBlocks: sModuleBlocks,
  statStrip: sStatStrip,
  featureList: sFeatureList,
  testimonials: sTestimonials,
  columns: sColumns,
  richColumns: sRichColumns,
  livePanel: sLivePanel,
  contact: sContact,
  cta: sCta
};

/* ---------- structured data (JSON-LD) ----------
   One @graph per page: Organization + WebSite everywhere, a BreadcrumbList on
   inner pages, and a SoftwareApplication on pages whose JSON has a "schema"
   block. Organization details live in site.json → "organization". */

function structuredData(page, site) {
  const origin = site.site.baseUrl.replace(/\/$/, '') + BASE;
  const abs = (u) => origin + u;
  const org = site.organization || {};
  const orgId = abs('/#organization');
  const pageName = (t) => String(t || '').split(' | ')[0].trim();

  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: site.site.name,
      legalName: org.legalName,
      url: abs('/'),
      logo: { '@type': 'ImageObject', url: abs(site.site.logo) },
      description: site.site.description,
      email: org.email,
      telephone: org.telephone,
      address: org.address ? { '@type': 'PostalAddress', ...org.address } : undefined,
      contactPoint: org.telephone ? {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: org.telephone,
        email: org.email,
        availableLanguage: 'English'
      } : undefined,
      sameAs: org.sameAs && org.sameAs.length ? org.sameAs : undefined
    },
    {
      '@type': 'WebSite',
      '@id': abs('/#website'),
      name: site.site.name,
      url: abs('/'),
      publisher: { '@id': orgId }
    }
  ];

  /* Breadcrumbs: Home › Section › Page, using nav labels where they exist. */
  if (page.url !== '/' && !page.noindex) {
    const navLabel = (url) => (site.nav.find((n) => n.url === url) || {}).label;
    const parts = page.url.split('/').filter(Boolean);
    const crumbs = [{ name: 'Home', url: '/' }];
    let path = '/';
    parts.forEach((seg, i) => {
      path += seg + '/';
      const last = i === parts.length - 1;
      const name = last
        ? ((page.schema && page.schema.name) || navLabel(path) || pageName(page.title))
        : (navLabel(path) || seg);
      crumbs.push({ name, url: path });
    });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url)
      }))
    });
  }

  if (page.schema && page.schema.type === 'SoftwareApplication') {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': abs(page.url) + '#software',
      name: page.schema.name || pageName(page.title),
      description: page.description,
      url: abs(page.url),
      applicationCategory: page.schema.applicationCategory || 'BusinessApplication',
      operatingSystem: page.schema.operatingSystem,
      publisher: { '@id': orgId },
      provider: { '@id': orgId }
    });
  }

  const data = { '@context': 'https://schema.org', '@graph': graph };
  /* JSON.stringify drops undefined fields; escaping < keeps "</script>" safe. */
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
}

/* ---------- page shell ---------- */

function renderPage(page, ctx) {
  const site = ctx.site;
  setBase(site.site.basePath);
  const body = page.sections.map((s) => {
    const fn = RENDERERS[s.type];
    if (!fn) throw new Error(`Unknown section type: ${s.type}`);
    return fn(s, ctx);
  }).join('\n\n');

  const canonical = site.site.baseUrl.replace(/\/$/, '') + BASE + page.url;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${text(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${esc(canonical)}">${page.noindex ? '\n<meta name="robots" content="noindex, follow">' : ''}

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta name="twitter:card" content="summary_large_image">

<script type="application/ld+json">
${structuredData(page, site)}
</script>

<link rel="icon" href="${esc(bp(site.site.favicon))}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap">
<link rel="stylesheet" href="${esc(bp('/assets/css/playersoft.css'))}">
</head>
<body>
<a class="ps-skip" href="#main">Skip to content</a>

${header(site, page)}

<main id="main">
${body}
</main>

${footer(site)}

<script src="${esc(bp('/assets/js/site.js'))}" defer></script>
</body>
</html>
`;
}

function renderSitemap(pages, site) {
  setBase(site.site.basePath);
  const base = site.site.baseUrl.replace(/\/$/, '') + BASE;
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => ({ loc: base + p.url, pri: p.url === '/' ? '1.0' : '0.8' }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.pri}</priority></url>`).join('\n')}
</urlset>
`;
}

export { renderPage, renderSitemap, esc, text };
