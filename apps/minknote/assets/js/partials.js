/* ============================================================
   MinkNote — partials.js
   Defines <mn-nav> and <mn-footer> custom elements.
   Edit here once; every page updates automatically.
   ============================================================ */

(function () {
  'use strict';

  /* Detect path prefix: features/ pages are one directory down */
  var R = /\/features\//.test(window.location.pathname) ? '../' : '';
  var HOME_HREF = R + 'index.html';

  var SITE_BANNER = {
    enabled: true,
    startsAt: '2026-07-27T00:00:00+01:00',
    endsAt: '2026-07-31T23:59:59+01:00',
    href: 'https://indieappsales.com#app-45EF1B39-0B84-4E7D-9C1D-3F4092B8ED5A',
    label: 'Indie App Sales 2026: Save 50% for 3 months if you subscribe today'
  };

  function isBannerEnabled(config) {
    if (!config || !config.enabled) return false;

    var now = Date.now();
    var start = config.startsAt ? Date.parse(config.startsAt) : null;
    var end = config.endsAt ? Date.parse(config.endsAt) : null;

    if (start && now < start) return false;
    if (end && now > end) return false;

    return true;
  }

  function syncBannerHeight() {
    var banner = document.getElementById('site-banner');
    var root = document.documentElement;
    var navBase = parseFloat(getComputedStyle(root).getPropertyValue('--nav-base-h')) || 64;
    var bannerHeight = banner ? Math.ceil(banner.getBoundingClientRect().height) : 0;

    root.style.setProperty('--site-banner-h', bannerHeight + 'px');
    root.style.setProperty('--nav-h', (navBase + bannerHeight) + 'px');
    if (document.body) {
      document.body.classList.toggle('has-site-banner', bannerHeight > 0);
    }
  }

  var BANNER_HTML = isBannerEnabled(SITE_BANNER) ? [
    '<a class="site-banner" id="site-banner" href="' + SITE_BANNER.href + '" target="_blank" rel="noopener" aria-label="' + SITE_BANNER.label + '">',
    '  <span class="site-banner-title">Indie App Sales 2026 <span aria-hidden="true">🎁</span></span>',
    '  <span class="site-banner-copy">Save 50% for 3 months if you subscribe today&nbsp;&rarr;</span>',
    '</a>'
  ].join('\n') : '';

  /* ── Nav ─────────────────────────────────────────────────── */
  var NAV_HTML = [
    BANNER_HTML,
    '<nav class="site-nav" id="site-nav">',
    '  <div class="nav-inner">',
    '    <a href="' + HOME_HREF + '" class="nav-logo" aria-label="MinkNote home">',
    '      <img src="' + R + 'images/mink-small.png" height="36" alt="" aria-hidden="true" style="width:auto;display:block;">',
    '      MinkNote',
    '    </a>',
    '    <ul class="nav-links" id="nav-links" role="list">',
    '      <li><a href="' + HOME_HREF + '">Home</a></li>',
    '      <li><a href="' + R + 'features.html">Features</a></li>',
    '      <li><a href="' + R + 'pricing.html">Pricing</a></li>',
    '      <li><a href="' + R + 'changelog.html">Changelog</a></li>',
    '      <li><a href="' + R + 'roadmap.html">Roadmap</a></li>',
    '    </ul>',
    '    <button class="nav-menu-btn" id="menu-btn" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-links">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '</nav>'
  ].join('\n');

  /* ── Footer ──────────────────────────────────────────────── */
  var FOOTER_HTML = [
    '<footer class="site-footer">',
    '  <div class="container">',
    '    <div class="footer-inner">',
    '      <a href="' + HOME_HREF + '" class="footer-logo" aria-label="MinkNote home">',
    '        <img src="' + R + 'images/mink-small.png" height="28" alt="" aria-hidden="true" style="width:auto;display:block;">',
    '        MinkNote',
    '      </a>',
    '      <nav class="footer-links" aria-label="Footer navigation">',
    '        <a href="' + HOME_HREF + '">Home</a>',
    '        <a href="' + R + 'features.html">Features</a>',
    '        <a href="' + R + 'pricing.html">Pricing</a>',
    '        <a href="' + R + 'changelog.html">Changelog</a>',
    '        <a href="' + R + 'privacy.html">Privacy</a>',
    '        <a href="' + R + 'accessibility.html">Accessibility</a>',
    '        <a href="mailto:minknote@muse23.com">Contact</a>',
    '      </nav>',
    '    </div>',
    '    <p class="footer-copy">&copy; 2026 MinkNote. Built natively for macOS.</p>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ── Helper: replace custom element with real HTML ────────── */
  function replaceWith(el, html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    var fragment = document.createDocumentFragment();
    while (tmp.firstChild) {
      fragment.appendChild(tmp.firstChild);
    }
    el.parentNode.insertBefore(fragment, el);
    el.parentNode.removeChild(el);
  }

  /* ── Register custom elements ─────────────────────────────── */
  if (window.customElements) {
    customElements.define('mn-nav', /** @type {any} */ (class extends HTMLElement {
      connectedCallback() {
        replaceWith(this, NAV_HTML);
        syncBannerHeight();
      }
    }));

    customElements.define('mn-footer', /** @type {any} */ (class extends HTMLElement {
      connectedCallback() { replaceWith(this, FOOTER_HTML); }
    }));
  }

  window.addEventListener('resize', syncBannerHeight, { passive: true });
  window.addEventListener('load', syncBannerHeight, { once: true });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncBannerHeight);
  }

}());
