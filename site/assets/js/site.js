/* ==========================================================================
   Playersoft — site behavior
   Count-up stats · scroll reveal · phone carousel · live floor panel · nav
   Vanilla JS, no dependencies, no build step.
   ==========================================================================

   TWO HARD-WON RULES BAKED IN — do not regress these:

   1. Content is NEVER hidden by JS waiting on an observer that might not
      fire. An earlier build set opacity:0 and relied on IntersectionObserver;
      when it didn't fire, entire pages rendered blank. Here motion is purely
      additive — if this file fails to load, the site still looks correct.

   2. No MutationObserver on the document. It can feed back into itself and
      lock the main thread. Static HTML doesn't need it anyway.
   ========================================================================== */

(function () {
  'use strict';

  var reduce = window.matchMedia &&
               window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- 1. NAV */
  function initNav() {
    var burger = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-nav]');
    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
      var open = nav.hasAttribute('data-open');
      if (open) {
        nav.removeAttribute('data-open');
        burger.setAttribute('aria-expanded', 'false');
      } else {
        nav.setAttribute('data-open', '');
        burger.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ----------------------------------------------------------- 2. COUNT-UP
     900ms, ease-out cubic, fires once. Tabular mono figures, so digits
     don't change width mid-animation.                                     */
  function countUp(el) {
    if (el.__done) return;
    el.__done = true;

    var to = parseFloat(el.getAttribute('data-countup'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var final = prefix + (isFinite(to) ? to.toLocaleString() : '') + suffix;

    if (reduce || !isFinite(to)) { el.textContent = final; return; }

    var dur = 900, t0 = null;
    function step(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(to * e).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = final;            /* land exactly on target */
    }
    requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------ 3. REVEAL
     Fade + rise 10px, 320ms, staggered 80ms across siblings.             */
  function reveal(el) {
    if (el.__shown) return;
    el.__shown = true;
    if (reduce) return;
    el.style.animation = 'psRise 320ms cubic-bezier(.2,0,0,1) both';
    el.style.animationDelay = el.getAttribute('data-reveal-delay') || '0ms';
  }

  function initScrollEffects() {
    var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'));
    var counters = [].slice.call(document.querySelectorAll('[data-countup]'));

    /* Auto-stagger siblings sharing a parent: 0, 80, 160ms... */
    var seen = new Map();
    reveals.forEach(function (el) {
      if (el.hasAttribute('data-reveal-delay')) return;
      var p = el.parentElement;
      var i = seen.get(p) || 0;
      el.setAttribute('data-reveal-delay', (i * 80) + 'ms');
      seen.set(p, i + 1);
    });

    if (!('IntersectionObserver' in window)) {
      counters.forEach(countUp);
      reveals.forEach(reveal);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        if (entry.target.hasAttribute('data-countup')) countUp(entry.target);
        if (entry.target.hasAttribute('data-reveal')) reveal(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    counters.concat(reveals).forEach(function (el) { io.observe(el); });

    /* Fail-safe: force-complete anything still pending after 5s so nothing
       is ever stuck mid-animation. */
    setTimeout(function () {
      counters.forEach(countUp);
      reveals.forEach(reveal);
    }, 5000);
  }

  /* --------------------------------------------------- 4. PHONE CAROUSEL
     Screens: Login · Identify · Events · Groups · Floor
     Defaults to Identify — it best represents the product.
     The "More / Settings" screen was deliberately removed.              */
  function initPhone() {
    var root = document.querySelector('[data-phone]');
    if (!root) return;

    var track = root.querySelector('[data-phone-track]');
    var slides = [].slice.call(root.querySelectorAll('.ps-phone__slide'));
    var label = root.querySelector('[data-phone-label]');
    var dotsBox = root.querySelector('[data-phone-dots]');
    var prev = root.querySelector('[data-phone-prev]');
    var next = root.querySelector('[data-phone-next]');
    if (!track || !slides.length) return;

    var names = slides.map(function (s) { return s.getAttribute('data-screen') || ''; });
    var index = Math.max(0, names.indexOf(root.getAttribute('data-phone-start') || 'Identify'));

    var dots = [];
    if (dotsBox) {
      slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'ps-phone__dot';
        d.setAttribute('aria-label', 'Show ' + names[i] + ' screen');
        d.addEventListener('click', function () { index = i; render(); });
        dotsBox.appendChild(d);
        dots.push(d);
      });
    }

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      if (label) label.textContent = names[index];
      slides.forEach(function (s, i) { s.setAttribute('aria-hidden', i === index ? 'false' : 'true'); });
      dots.forEach(function (d, i) {
        if (i === index) d.setAttribute('data-active', '');
        else d.removeAttribute('data-active');
      });
    }

    if (prev) prev.addEventListener('click', function () {
      index = (index - 1 + slides.length) % slides.length;   /* wraps */
      render();
    });
    if (next) next.addEventListener('click', function () {
      index = (index + 1) % slides.length;
      render();
    });

    /* Keyboard support */
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && prev) prev.click();
      if (e.key === 'ArrowRight' && next) next.click();
    });

    render();
  }

  /* ------------------------------------------------- 5. LIVE FLOOR PANEL
     ⚠️ ILLUSTRATIVE FIGURES, NOT LIVE DATA.
     This is a marketing device that makes "real time" legible. Wiring it
     to genuine numbers needs a cached backend proxy — never point a
     marketing page straight at a production casino system on a 2.6s poll. */
  function initLiveFloor() {
    var root = document.querySelector('[data-live-floor]');
    if (!root) return;

    var METRICS = [
      { label: 'Enrollments today', base: 248,  spread: 40, step: 7,  pct: [58, 30, 7] },
      { label: 'Carded play',       base: 72,   spread: 12, step: 3,  pct: [62, 24, 11], suffix: '%' },
      { label: 'Hosts on floor',    base: 9,    spread: 5,  step: 1,  pct: [44, 40, 13] },
      { label: 'Event check-ins',   base: 1180, spread: 90, step: 17, pct: [51, 34, 9] }
    ];

    var grid = root.querySelector('[data-live-grid]');
    if (!grid) return;

    var tiles = METRICS.map(function (m) {
      var tile = document.createElement('div');
      tile.className = 'ps-live__tile';
      tile.innerHTML =
        '<span class="ps-live__label"></span>' +
        '<span class="ps-live__value"></span>' +
        '<span class="ps-live__track"><span class="ps-live__fill"></span></span>';
      tile.querySelector('.ps-live__label').textContent = m.label;
      grid.appendChild(tile);
      return {
        value: tile.querySelector('.ps-live__value'),
        fill: tile.querySelector('.ps-live__fill')
      };
    });

    var tick = 0;
    function render() {
      METRICS.forEach(function (m, i) {
        var n = m.base + ((tick * m.step) % m.spread);
        var p = m.pct[0] + ((tick * m.pct[2]) % m.pct[1]);
        tiles[i].value.textContent = n.toLocaleString() + (m.suffix || '');
        tiles[i].fill.style.width = p + '%';
      });
    }

    render();

    if (reduce) {
      var dot = root.querySelector('.ps-live__dot');
      if (dot) dot.style.animation = 'none';
      return;
    }

    setInterval(function () { tick += 1; render(); }, 2600);
  }

  /* --------------------------------------------------- 6. CONTACT FORM
     Posts via fetch and reveals the confirmation panel in place, so the
     visitor never leaves the Contact page.

     Three deliberate fallbacks — the visitor must never be stranded:
       • No action set yet      → don't intercept; let the browser do its thing
       • No fetch support       → don't intercept; the _next field redirects
       • Request fails          → submit natively so the form service handles it

     On success the URL is swapped to /contact/thank-you/ via replaceState, so
     a refresh or a shared link lands on the real confirmation page rather than
     an empty form.                                                          */
  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var card = document.getElementById('ps-form-card');
    var panel = document.getElementById('ps-form-success');
    var errBox = document.getElementById('ps-form-error');
    var action = form.getAttribute('action');
    var successUrl = form.getAttribute('data-success-url');

    if (!card || !panel) return;
    if (!action || !window.fetch || !window.FormData) return;   /* let it post natively */

    form.addEventListener('submit', function (e) {
      if (form.__bypass) return;                                /* our own retry */
      if (typeof form.checkValidity === 'function' && !form.checkValidity()) return;

      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var was = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (errBox) errBox.hidden = true;

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);

          card.hidden = true;
          panel.hidden = false;
          panel.focus && panel.setAttribute('tabindex', '-1');
          panel.focus && panel.focus();                         /* move screen readers to it */

          if (successUrl && window.history && history.replaceState) {
            history.replaceState(null, '', successUrl);
          }
        })
        .catch(function () {
          /* Hand off to a real submission rather than losing their message. */
          if (btn) { btn.disabled = false; btn.textContent = was; }
          form.__bypass = true;
          if (typeof form.requestSubmit === 'function') form.requestSubmit();
          else form.submit();
        });
    });
  }

  /* ---------------------------------------------------------------- BOOT */
  function boot() {
    initNav();
    initScrollEffects();
    initPhone();
    initLiveFloor();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
