# MinkNote — Marketing Site Plan

## Approach: Vanilla HTML/CSS + AOS.js (CDN)

**The one tool you need beyond raw HTML/CSS/JS:** [AOS — Animate On Scroll](https://michalsnik.github.io/aos/) (~7 KB gzip, CDN, zero config). That's it.

### Why this stack wins

| Option | Verdict |
|---|---|
| GSAP | Overkill — ~100 KB, complex API for a marketing page |
| Alpine.js | Useful, but 50 lines of vanilla JS covers all accordion/tabs needed |
| Astro / Eleventy | Requires Node — excluded |
| React / Vue | Excluded |
| **AOS.js + vanilla CSS/JS** | ✅ 7 KB, CDN, data-attribute driven, GitHub Pages perfect |

AOS handles every scroll-reveal and stagger animation via `data-aos="fade-up"` attributes — no JS to write. The rest is CSS custom properties, Grid, and ~60 lines of vanilla JS for the mobile nav + tabs.

---

## Folder Structure

```
minknote/                          ← GitHub Pages repo root
├── index.html                     ← Homepage
├── features.html                  ← (future) Features page
├── pricing.html                   ← (future) Pricing page
├── changelog.html                 ← (future) Changelog page
│
├── assets/
│   ├── fonts/
│   │   ├── SNPro-Regular.woff2    ← self-hosted (GitHub releases)
│   │   └── SNPro-Italic.woff2
│   │
│   ├── css/
│   │   ├── tokens.css             ← CSS custom properties (colours, spacing, type scale)
│   │   ├── reset.css              ← modern CSS reset
│   │   ├── layout.css             ← nav, grid wrappers, section spacing
│   │   ├── components.css         ← buttons, cards, feature grid, badges
│   │   └── animations.css         ← hero entrance, AOS overrides, hover states
│   │
│   ├── js/
│   │   ├── nav.js                 ← mobile menu toggle, scroll-shrink nav
│   │   └── tabs.js                ← feature tabs / accordion
│   │
│   └── images/
│       ├── logo.svg
│       ├── og-image.png           ← social share preview
│       ├── hero-app.png           ← macOS app screenshot
│       └── icons/                 ← feature grid SVG icons
│
└── README.md
```

---

## Design Tokens (`tokens.css`)

```css
:root {
  /* Palette — dark base like Supernotes */
  --color-bg:          #0f0f11;
  --color-surface:     #18181c;
  --color-surface-2:   #222228;
  --color-border:      rgba(255,255,255,0.08);
  --color-text:        #f0eff4;
  --color-text-muted:  #8b8a99;
  --color-accent:      #6b5ce7;   /* adjust to MinkNote brand */
  --color-accent-2:    #a78bfa;

  /* Type */
  --font-sans: "SN Pro", "Nunito", system-ui, sans-serif;
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-5xl:  3rem;
  --text-6xl:  3.75rem;

  /* Spacing scale */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;   --space-16: 4rem;   --space-24: 6rem;

  /* Radii */
  --radius-sm: 6px;  --radius-md: 12px;  --radius-lg: 20px;
  --radius-xl: 28px;

  /* Shadows */
  --shadow-card: 0 2px 24px rgba(0,0,0,0.4);
  --shadow-glow: 0 0 80px rgba(107,92,231,0.18);
}
```

---

## Homepage Sections (in order)

```
1. <nav>          — Logo left | Changelog · Features · Pricing right
2. <section#hero> — H1 + subtext + platform badge row + app screenshot
3. <section#knowledge>    — "Build your knowledge" (feature highlight, 2-col)
4. <section#private>      — "Private by Design"  (2-col, reversed)
5. <section#busy>         — "Built for Busy People" + feature grid + "View all features →"
6. <footer>       — Minimal: logo + links + © MinkNote
```

---

## Minimal Code Examples

### `index.html` — skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MinkNote — Native macOS. Private by Design.</title>

  <!-- SN Pro (self-hosted) -->
  <style>
    @font-face {
      font-family: "SN Pro";
      src: url("assets/fonts/SNPro-Regular.woff2") format("woff2");
      font-weight: 100 900;
      font-style: normal;
    }
    @font-face {
      font-family: "SN Pro";
      src: url("assets/fonts/SNPro-Italic.woff2") format("woff2");
      font-weight: 100 900;
      font-style: italic;
    }
  </style>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/css/tokens.css" />
  <link rel="stylesheet" href="assets/css/reset.css" />
  <link rel="stylesheet" href="assets/css/layout.css" />
  <link rel="stylesheet" href="assets/css/components.css" />
  <link rel="stylesheet" href="assets/css/animations.css" />

  <!-- AOS -->
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
</head>
<body>

  <!-- ═══ NAV ═══ -->
  <nav class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="MinkNote home">
        <img src="assets/images/logo.svg" alt="MinkNote" width="32" height="32" />
        <span>MinkNote</span>
      </a>
      <ul class="nav-links">
        <li><a href="/changelog.html">Changelog</a></li>
        <li><a href="/features.html">Features</a></li>
        <li><a href="/pricing.html">Pricing</a></li>
      </ul>
      <button class="nav-menu-btn" aria-label="Open menu" id="menu-btn">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="hero">
    <div class="container">

      <!-- Badge row — no email input -->
      <div class="platform-badge" data-aos="fade-up" data-aos-delay="100">
        <svg><!-- Apple logo --></svg>
        Available for macOS
      </div>

      <h1 class="hero-title" data-aos="fade-up" data-aos-delay="150">
        Native macOS.<br />Private by Design.
      </h1>

      <p class="hero-sub" data-aos="fade-up" data-aos-delay="200">
        Native to macOS, private by default, and built on plain Markdown files.
        No databases, no lock-in, just your files.
      </p>

      <div class="hero-cta" data-aos="fade-up" data-aos-delay="250">
        <a href="/pricing.html" class="btn btn-primary">Download Free</a>
        <a href="/features.html" class="btn btn-ghost">See Features →</a>
      </div>

      <!-- App screenshot with glow -->
      <div class="hero-app-wrap" data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
        <img src="assets/images/hero-app.png" alt="MinkNote app on macOS" class="hero-app-img" />
      </div>

    </div>
  </section>

  <!-- ═══ SECTION 1: Build your knowledge ═══ -->
  <section class="feature-split" id="knowledge">
    <div class="container">
      <div class="split-content" data-aos="fade-right">
        <p class="section-eyebrow">Your second brain</p>
        <h2>Build your knowledge,<br />not a backlog.</h2>
        <p>Plain Markdown files mean your notes are readable by any app — today and in ten years. No proprietary formats, no exports, no surprises.</p>
        <ul class="feature-list">
          <li>Files live on your disk, in your iCloud</li>
          <li>Open in any editor, any time</li>
          <li>Full-text search powered by the OS</li>
        </ul>
      </div>
      <div class="split-visual" data-aos="fade-left" data-aos-delay="150">
        <!-- Screenshot or illustration -->
        <div class="app-card">
          <img src="assets/images/feature-knowledge.png" alt="" />
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SECTION 2: Private by Design ═══ -->
  <section class="feature-split feature-split--reversed" id="private">
    <div class="container">
      <div class="split-visual" data-aos="fade-right">
        <div class="app-card">
          <img src="assets/images/feature-private.png" alt="" />
        </div>
      </div>
      <div class="split-content" data-aos="fade-left" data-aos-delay="150">
        <p class="section-eyebrow">Privacy first</p>
        <h2>Private by Design,<br />not by policy.</h2>
        <p>There is no server that holds your notes. No account required. No analytics on your writing. Your thoughts stay yours.</p>
        <ul class="feature-list">
          <li>Zero telemetry, zero sign-up</li>
          <li>End-to-end iCloud sync (Apple's encryption)</li>
          <li>Works fully offline</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ═══ SECTION 3: Built for Busy People + Feature Grid ═══ -->
  <section class="feature-split" id="busy">
    <div class="container">
      <div class="split-content" data-aos="fade-right">
        <p class="section-eyebrow">Built for flow</p>
        <h2>Built for Busy People.</h2>
        <p>Instant launch. Global search. Keyboard-first. MinkNote gets out of your way so you can focus on thinking.</p>
      </div>
      <div class="split-visual" data-aos="fade-left" data-aos-delay="150">
        <div class="app-card">
          <img src="assets/images/feature-busy.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="container">
      <div class="feature-grid">

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="0">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>Instant Search</h3>
          <p>Find any note in milliseconds with native macOS Spotlight integration.</p>
        </div>

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="50">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>Keyboard First</h3>
          <p>Every action has a shortcut. Never leave the keyboard.</p>
        </div>

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>Pure Markdown</h3>
          <p>Standard CommonMark with syntax highlighting and live preview.</p>
        </div>

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="150">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>iCloud Sync</h3>
          <p>Your files sync via iCloud — the same files you own.</p>
        </div>

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>Offline Always</h3>
          <p>No internet required. Ever. Your notes work on a plane.</p>
        </div>

        <div class="feature-grid-item" data-aos="fade-up" data-aos-delay="250">
          <div class="feature-icon"><!-- SVG --></div>
          <h3>Folders & Tags</h3>
          <p>Organise your way with nested folders and multi-tags.</p>
        </div>

      </div>

      <div class="feature-grid-cta" data-aos="fade-up">
        <a href="/features.html" class="link-arrow">View all 24 features →</a>
      </div>
    </div>
  </section>

  <!-- ═══ FOOTER ═══ -->
  <footer class="site-footer">
    <div class="container">
      <a href="/" class="footer-logo">
        <img src="assets/images/logo.svg" alt="MinkNote" width="24" />
        MinkNote
      </a>
      <nav class="footer-links">
        <a href="/changelog.html">Changelog</a>
        <a href="/features.html">Features</a>
        <a href="/pricing.html">Pricing</a>
      </nav>
      <p class="footer-copy">© 2026 MinkNote. Built for macOS.</p>
    </div>
  </footer>

  <!-- AOS init -->
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 60 });
  </script>
  <script src="assets/js/nav.js"></script>
</body>
</html>
```

---

### `nav.js` — scroll-shrink + mobile toggle

```js
const nav = document.getElementById('site-nav');
const menuBtn = document.getElementById('menu-btn');

// Shrink nav on scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
});
```

---

### Key CSS patterns

```css
/* ── layout.css: Nav ── */
.site-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  transition: background 0.3s, backdrop-filter 0.3s, padding 0.3s;
  padding: var(--space-4) 0;
}
.site-nav.is-scrolled {
  background: rgba(15,15,17,0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex; align-items: center; justify-content: space-between;
}

/* ── components.css: Feature Grid ── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}
.feature-grid-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: transform 0.2s, border-color 0.2s;
}
.feature-grid-item:hover {
  transform: translateY(-3px);
  border-color: rgba(107,92,231,0.3);
}
.feature-icon {
  width: 40px; height: 40px;
  background: rgba(107,92,231,0.15);
  border-radius: var(--radius-md);
  display: grid; place-items: center;
  margin-bottom: var(--space-4);
}

/* ── animations.css: Hero entrance ── */
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-title {
  animation: heroFadeUp 0.7s ease-out both;
  animation-delay: 0.1s;
}
.hero-sub {
  animation: heroFadeUp 0.7s ease-out both;
  animation-delay: 0.22s;
}
/* AOS overrides for smoother feel */
[data-aos] { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important; }
```

---

## GitHub Pages Deployment

```bash
# One-time setup (already done per your note)
# Just push — GitHub Pages serves from main branch / root

git add .
git commit -m "Initial MinkNote site"
git push origin main
```

No `gh-pages` branch or Actions workflow needed — static files in repo root → live at `https://demian.github.io/minknote` (or your custom domain).

---

## Font Setup (SN Pro)

1. Download the latest release from [github.com/supernotes/sn-pro/releases](https://github.com/supernotes/sn-pro/releases)
2. Grab `SNPro-Regular.woff2` and `SNPro-Italic.woff2`
3. Drop into `assets/fonts/`
4. Use the `@font-face` declarations shown in `index.html` above

> ⚠️ Do NOT use the variable font (`SNPro-Variable.woff2`) — officially deprecated for web use since Sept 2024 due to Safari/WebKit italic bugs.

---

## Phase 2 (after homepage)

- `/features.html` — full feature grid with categories/tabs
- `/pricing.html` — 2–3 tier cards
- `/changelog.html` — reverse-chronological, minimal, beautiful
