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

  /* ── ③ Active nav link (highlight current page) ── */
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

})();
