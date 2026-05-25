/* ============================================================
   MinkNote — main.js
   ① Nav: frosted-glass on scroll
   ② Mobile menu toggle
   ============================================================ */

(function () {
  'use strict';

  const nav     = document.getElementById('site-nav');
  const menuBtn = document.getElementById('menu-btn');
  const links   = document.getElementById('nav-links');

  /* ── ① Scroll-shrink / frosted glass ── */
  function handleScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 36);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once immediately on load

  /* ── ② Mobile menu toggle ── */
  if (menuBtn && links) {

    menuBtn.addEventListener('click', function () {
      const isOpen = links.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));

      // Animate hamburger → X
      const spans = menuBtn.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        links.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      }
    });
  }

  /* ── ③ Feature detail keyboard navigation (← / →) ── */
  (function () {
    var prevLink = document.querySelector('.fd-nav-prev');
    var nextLink = document.querySelector('.fd-nav-next');
    if (!prevLink && !nextLink) return;

    function flash(el) {
      if (!el) return;
      el.classList.add('is-pressed');
      setTimeout(function () { el.classList.remove('is-pressed'); }, 180);
    }

    document.addEventListener('keydown', function (e) {
      // Don't fire when typing in an input or textarea
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (document.querySelector('.fd-lightbox.is-open')) return;

      if (e.key === 'ArrowLeft' && prevLink) {
        flash(prevLink);
        setTimeout(function () { window.location.href = prevLink.href; }, 160);
      } else if (e.key === 'ArrowRight' && nextLink) {
        flash(nextLink);
        setTimeout(function () { window.location.href = nextLink.href; }, 160);
      }
    });
  }());

  /* ── ④ Active nav link (highlight current page) ── */
  (function () {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      const href = a.getAttribute('href').split('/').pop();
      if (href === page) {
        a.style.color      = 'var(--text)';
        a.style.fontWeight = '700';
      }
    });
  }());

  /* ── ⑤ Feature screenshot lightbox ── */
  (function () {
    var screenshots = document.querySelectorAll('.fd-screen-image');
    if (!screenshots.length) return;

    var prevLink = document.querySelector('.fd-nav-prev');
    var nextLink = document.querySelector('.fd-nav-next');

    var overlay = document.createElement('div');
    overlay.className = 'fd-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Screenshot preview');
    overlay.innerHTML = [
      '<button class="fd-lightbox-close" type="button" aria-label="Close screenshot preview">&times;</button>',
      '<a class="fd-lightbox-nav fd-lightbox-prev" aria-label="Previous feature screenshot" hidden>',
      '  <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
      '</a>',
      '<img class="fd-lightbox-image" alt="" />',
      '<a class="fd-lightbox-nav fd-lightbox-next" aria-label="Next feature screenshot" hidden>',
      '  <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
      '</a>'
    ].join('');
    document.body.appendChild(overlay);

    var closeBtn = overlay.querySelector('.fd-lightbox-close');
    var image = overlay.querySelector('.fd-lightbox-image');
    var prev = overlay.querySelector('.fd-lightbox-prev');
    var next = overlay.querySelector('.fd-lightbox-next');

    if (prevLink) {
      prev.href = prevLink.href;
      prev.hidden = false;
    }
    if (nextLink) {
      next.href = nextLink.href;
      next.hidden = false;
    }

    function closeLightbox() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('fd-lightbox-open');
      image.removeAttribute('src');
    }

    screenshots.forEach(function (screenshot) {
      screenshot.setAttribute('tabindex', '0');
      screenshot.setAttribute('role', 'button');
      screenshot.setAttribute('aria-label', 'Open screenshot full size');

      function openLightbox() {
        image.src = screenshot.currentSrc || screenshot.src;
        image.alt = screenshot.alt || '';
        overlay.classList.add('is-open');
        document.body.classList.add('fd-lightbox-open');
        closeBtn.focus();
      }

      screenshot.addEventListener('click', openLightbox);
      screenshot.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox();
        }
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (event) {
      if (!overlay.classList.contains('is-open')) return;

      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft' && prev.href) {
        event.preventDefault();
        window.location.href = prev.href;
      } else if (event.key === 'ArrowRight' && next.href) {
        event.preventDefault();
        window.location.href = next.href;
      }
    });
  }());

})();
