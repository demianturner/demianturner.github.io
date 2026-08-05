/* ============================================================
   MinkNote — partials.js
   Defines <mn-nav> and <mn-footer> custom elements.
   Edit here once; every page updates automatically.
   ============================================================ */

(function () {
  'use strict';

  /* Detect path prefix: features/ pages are one directory down */
  var R = /\/features\//.test(window.location.pathname) ? '../' : '';
  var HOME_HREF = '/apps/minknote/';

  var SITE_BANNER = {
    enabled: true,
    startsAt: '2026-07-27T00:00:00+01:00',
    endsAt: '2026-07-30T17:27:00+01:00',
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
    '      <img src="' + R + 'images/mink-small.png" height="36" alt="MinkNote" style="width:auto;display:block;">',
    '      MinkNote',
    '    </a>',
    '    <ul class="nav-links" id="nav-links" role="list">',
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
    '      <div class="footer-brand">',
    '        <a href="' + HOME_HREF + '" class="footer-logo" aria-label="MinkNote home">',
    '          <img src="' + R + 'images/mink-small.png" height="28" alt="MinkNote" style="width:auto;display:block;">',
    '          MinkNote',
    '        </a>',
    '        <p class="footer-tagline">Privacy focused macOS Notes app.</p>',
    '        <a href="https://buildlist.io/?ref=a556a4d3-d811-4c5e-8066-26d8d457e3c6" class="footer-badge" target="_blank" rel="noopener">',
    '          <img src="https://buildlist.io/badge-dark.svg" alt="Featured on Buildlist" height="40" style="height:40px;width:auto;">',
    '        </a>',
    '      </div>',
    '      <nav class="footer-link-groups" aria-label="Footer navigation">',
    '        <div class="footer-link-group">',
    '          <h2>Product</h2>',
    '          <a href="' + HOME_HREF + '">Home</a>',
    '          <a href="' + R + 'features.html">Features</a>',
    '          <a href="' + R + 'pricing.html">Pricing</a>',
    '          <a href="' + HOME_HREF + '#faq">FAQ</a>',
    '          <a href="' + R + 'accessibility.html">Accessibility</a>',
    '          <a href="' + R + 'roadmap.html">Roadmap</a>',
    '          <a href="' + R + 'changelog.html">Changelog</a>',
    '          <a href="https://minknote.featurebase.app/?sortBy=upvotes%3Adesc" target="_blank" rel="noopener">Vote for Features</a>',
    '        </div>',
    '        <div class="footer-link-group">',
    '          <h2>Company</h2>',
    '          <a href="/about/">About</a>',
    '          <a href="https://buildlist.io/contact">Contact</a>',
    '          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Terms of Service</a>',
    '        </div>',
    '        <div class="footer-link-group">',
    '          <h2>Values</h2>',
    '          <a href="' + R + 'manifesto.html">Manifesto</a>',
    '          <a href="' + R + 'privacy.html">Privacy</a>',
    '          <a href="' + R + 'security.html">Security</a>',
    '        </div>',
    '        <div class="footer-link-group">',
    '          <h2>Socials</h2>',
    '          <a href="https://x.com/MinkNoteApp" target="_blank" rel="noopener">Twitter</a>',
    '          <a href="https://www.tiktok.com/@minknoteapp" target="_blank" rel="noopener">TikTok</a>',
    '        </div>',
    '      </nav>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <p class="footer-copy">&copy; 2026 MinkNote. Built natively for macOS.</p>',
    '    </div>',
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
