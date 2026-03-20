/* ================================================================
   LAUENBURG & KOLLEGEN — Main JavaScript
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Header scroll behavior ──────────────────────────────────
  const header = document.getElementById('header');
  if (header) {
    // Pages with a dark hero get a transparent header that becomes solid on scroll.
    // Pages without a dark hero (no .hero or .page-hero--navy) start solid immediately.
    const hasDarkHero = !!document.querySelector('.hero, .page-hero--navy');
    if (!hasDarkHero) header.classList.add('scrolled');

    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else if (hasDarkHero) {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  // ── 2. Desktop dropdown menus ──────────────────────────────────
  document.querySelectorAll('.nav-item').forEach(item => {
    let timer;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => item.classList.remove('open'), 100);
    });
  });

  // ── 3. Mobile menu ─────────────────────────────────────────────
  const hamburger   = document.querySelector('.hamburger');
  const mobileMenu  = document.querySelector('.mobile-menu');
  const closeBtn    = document.querySelector('.close-btn');

  function openMenu()  {
    mobileMenu?.classList.add('open');
    hamburger?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu?.classList.remove('open');
    hamburger?.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  // Mobile sub-menus
  document.querySelectorAll('.mobile-nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-nav-item');
      item.classList.toggle('open');
    });
  });

  // Close on link click
  document.querySelectorAll('.mobile-sub a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // ── 4. Scroll animations ───────────────────────────────────────
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => {
    animObserver.observe(el);
  });

  // ── 5. Accordion (tipps page) ──────────────────────────────────
  // Native <details> handles this — just add chevron animation via CSS

  // ── 6. Contact form ────────────────────────────────────────────
  document.querySelectorAll('form.contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn    = form.querySelector('[type="submit"]');
      const orig   = btn.innerHTML;
      btn.innerHTML = 'Nachricht gesendet ✓';
      btn.disabled  = true;
      btn.style.background = 'rgba(201,168,76,.2)';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled  = false;
        btn.style.background = '';
        form.reset();
      }, 4000);
    });
  });

  // ── 7. Active nav link ─────────────────────────────────────────
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.style.color = 'var(--gold)';
    }
  });

  // ── 8. Smooth anchor scrolling ─────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
