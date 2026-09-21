// Playersoft site motion — count-up, scroll reveal, card lift.
// Fail-safe: content is always visible; motion is additive only.
(function () {
  if (window.__psMotion) return;
  window.__psMotion = true;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    if (el.__psCounted) return;
    el.__psCounted = true;
    var to = parseFloat(el.getAttribute('data-countup'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var done = prefix + to.toLocaleString() + suffix;
    if (reduce || !isFinite(to)) { el.textContent = done; return; }
    el.style.fontVariantNumeric = 'tabular-nums';
    var dur = 900, t0 = null;
    function step(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(to * e).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = done;
    }
    requestAnimationFrame(step);
  }

  function reveal(el) {
    if (el.__psRevealed) return;
    el.__psRevealed = true;
    if (reduce) return;
    // animation only — the element is never left hidden by JS
    el.style.animation = 'psRise 320ms cubic-bezier(0.2,0,0,1) both';
    el.style.animationDelay = el.getAttribute('data-reveal-delay') || '0ms';
  }

  function armLift(el) {
    if (el.__psLift) return;
    el.__psLift = true;
    var base = el.style.boxShadow || 'var(--shadow-sm)';
    el.style.transition = 'transform 120ms cubic-bezier(0.2,0,0,1), box-shadow 120ms cubic-bezier(0.2,0,0,1)';

    var first = el.firstElementChild;
    var fs = (first && first.getAttribute('style')) || '';
    var rule = null;
    if (!(/height:\s*3px/.test(fs) && /gradient-aqua/.test(fs))) {
      var cs = window.getComputedStyle(el);
      if (cs.position === 'static') el.style.position = 'relative';
      if (cs.overflow === 'visible') el.style.overflow = 'hidden';
      rule = document.createElement('span');
      rule.setAttribute('aria-hidden', 'true');
      rule.style.cssText = 'position:absolute;left:0;top:0;right:0;height:3px;background:var(--gradient-aqua);' +
        'transform:scaleX(0);transform-origin:left;transition:transform 200ms cubic-bezier(0.2,0,0,1);pointer-events:none;z-index:2';
      el.insertBefore(rule, el.firstChild);
    }

    el.addEventListener('mouseenter', function () {
      if (reduce) return;
      el.style.transform = 'translateY(-2px)';
      el.style.boxShadow = 'var(--shadow-md)';
      if (rule) rule.style.transform = 'scaleX(1)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = '';
      el.style.boxShadow = base;
      if (rule) rule.style.transform = 'scaleX(0)';
    });
  }

  var io = null;
  function observer() {
    if (io || !('IntersectionObserver' in window)) return io;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target.hasAttribute('data-countup')) countUp(e.target);
        if (e.target.hasAttribute('data-reveal')) reveal(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    return io;
  }

  function scan() {
    var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'));
    var groups = new Map();
    reveals.forEach(function (el) {
      if (el.hasAttribute('data-reveal-delay')) return;
      var p = el.parentElement, i = groups.get(p) || 0;
      el.setAttribute('data-reveal-delay', (i * 80) + 'ms');
      groups.set(p, i + 1);
    });

    [].slice.call(document.querySelectorAll('[data-lift]')).forEach(armLift);

    var watch = [].slice.call(document.querySelectorAll('[data-countup]')).concat(reveals);
    var ob = observer();
    watch.forEach(function (el) {
      if (el.__psWatched) return;
      el.__psWatched = true;
      if (ob) ob.observe(el);
      else { if (el.hasAttribute('data-countup')) countUp(el); reveal(el); }
    });
  }

  function boot() {
    scan();
    // DCs stream in — re-scan a bounded number of times instead of observing mutations.
    var n = 0;
    var id = setInterval(function () {
      scan();
      if (++n >= 12) clearInterval(id);
    }, 400);
    // absolute fail-safe: nothing stays un-animated/hidden
    setTimeout(function () {
      [].slice.call(document.querySelectorAll('[data-countup]')).forEach(countUp);
      [].slice.call(document.querySelectorAll('[data-reveal]')).forEach(reveal);
    }, 5000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
