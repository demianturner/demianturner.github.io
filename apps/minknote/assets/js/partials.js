/* ============================================================
   MinkNote — partials.js
   Defines <mn-nav> and <mn-footer> custom elements.
   Edit here once; every page updates automatically.
   ============================================================ */

(function () {
  'use strict';

  /* Detect path prefix: features/ pages are one directory down */
  var R = /\/features\//.test(window.location.pathname) ? '../' : '';

  /* ── Nav ─────────────────────────────────────────────────── */
  var NAV_HTML = [
    '<nav class="site-nav" id="site-nav">',
    '  <div class="nav-inner">',
    '    <a href="' + R + 'index.html" class="nav-logo" aria-label="MinkNote home">',
    '      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">',
    '        <rect width="28" height="28" rx="8" fill="#0A84FF"/>',
    '        <path d="M7 20V9l5 7 5-7v11" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    '        <path d="M19 9v11" stroke="white" stroke-width="2.2" stroke-linecap="round"/>',
    '      </svg>',
    '      MinkNote',
    '    </a>',
    '    <ul class="nav-links" id="nav-links" role="list">',
    '      <li><a href="' + R + 'features.html">Features</a></li>',
    '      <li><a href="' + R + 'pricing.html">Pricing</a></li>',
    '      <li><a href="' + R + 'changelog.html">Changelog</a></li>',
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
    '      <a href="' + R + 'index.html" class="footer-logo" aria-label="MinkNote home">',
    '        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">',
    '          <rect width="28" height="28" rx="8" fill="#0A84FF"/>',
    '          <path d="M7 20V9l5 7 5-7v11" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    '          <path d="M19 9v11" stroke="white" stroke-width="2.2" stroke-linecap="round"/>',
    '        </svg>',
    '        MinkNote',
    '      </a>',
    '      <nav class="footer-links" aria-label="Footer navigation">',
    '        <a href="' + R + 'features.html">Features</a>',
    '        <a href="' + R + 'pricing.html">Pricing</a>',
    '        <a href="' + R + 'changelog.html">Changelog</a>',
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
    var real = tmp.firstElementChild;
    el.parentNode.insertBefore(real, el);
    el.parentNode.removeChild(el);
  }

  /* ── Register custom elements ─────────────────────────────── */
  if (window.customElements) {
    customElements.define('mn-nav', /** @type {any} */ (class extends HTMLElement {
      connectedCallback() { replaceWith(this, NAV_HTML); }
    }));

    customElements.define('mn-footer', /** @type {any} */ (class extends HTMLElement {
      connectedCallback() { replaceWith(this, FOOTER_HTML); }
    }));
  }

}());
