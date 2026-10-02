// Portfolio - Interaction & Animations (Vanilla JS)

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const toast = document.getElementById('toast');
  const yearEl = document.getElementById('year');

  // Set current year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Navbar scroll effect & active section indicator -----
  const onScroll = () => {
    if (navbar) {
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }

    // Active section indicator
    let current = '';
    const scrollPos = window.scrollY + 140;
    sections.forEach(s => {
      const top = s.offsetTop;
      const height = s.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = s.getAttribute('id') || '';
      }
    });

    if (current) {
      navLinkItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('active');
        }
      });
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile menu — hamburger, sticky, glass -----
  const closeMenu = () => {
    if (navLinks) navLinks.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('menu-open');
  };
  const openMenu = () => {
    if (navLinks) navLinks.classList.add('open');
    if (hamburger) {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('menu-open');
  };

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navLinks.classList.contains('open')) closeMenu();
      else openMenu();
    });
  }

  // Close menu on link click
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      navLinkItems.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (navbar && navLinks && navLinks.classList.contains('open') && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // ----- Smooth scrolling — offset for sticky navbar -----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1 && id.startsWith('#')) {
        try {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            const navH = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        } catch (err) {
          // Ignore invalid CSS selector queries safely
        }
      }
    });
  });

  // ----- Typing effect for hero -----
  const phrases = ['Computer Science Student', 'Full-Stack Developer', 'Problem Solver', 'Tech Explorer'];
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    let pIndex = 0, cIndex = 0, deleting = false;
    const typeSpeed = 90, deleteSpeed = 45, pauseEnd = 1600, pauseStart = 500;

    function type() {
      const current = phrases[pIndex];
      if (!deleting) {
        typedEl.textContent = current.slice(0, cIndex + 1);
        cIndex++;
        if (cIndex === current.length) {
          setTimeout(() => { deleting = true; type(); }, pauseEnd);
          return;
        }
      } else {
        typedEl.textContent = current.slice(0, cIndex - 1);
        cIndex--;
        if (cIndex === 0) {
          deleting = false;
          pIndex = (pIndex + 1) % phrases.length;
          setTimeout(type, pauseStart);
          return;
        }
      }
      setTimeout(type, deleting ? deleteSpeed : typeSpeed);
    }
    setTimeout(type, 1200);
  }

  // ----- Scroll reveal (IntersectionObserver) -----
  const revealEls = document.querySelectorAll(
    '.section-header, .about-text, .about-interests, .currently-learning, .about-stats, .interest-card, .stat-card, .skill-card, .project-card, .timeline-item, .contact-card, .contact-form'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ----- Contact form validation -----
  function showError(input, msg) {
    if (!input) return;
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.add('error');
    const errEl = group.querySelector('.error-msg');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(input) {
    if (!input) return;
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.remove('error');
    const errEl = group.querySelector('.error-msg');
    if (errEl) errEl.textContent = '';
  }

  function showToast(msg, duration = 3000) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  if (contactForm) {
    contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (name) clearError(name);
      if (email) clearError(email);
      if (message) clearError(message);

      if (!name || !name.value.trim() || name.value.trim().length < 2) {
        showError(name, 'Please enter your name (at least 2 characters).');
        valid = false;
      }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRe.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        valid = false;
      }
      if (!message || !message.value.trim() || message.value.trim().length < 10) {
        showError(message, 'Message should be at least 10 characters.');
        valid = false;
      }

      if (!valid) {
        if (formStatus) {
          formStatus.textContent = 'Please fix the errors above.';
          formStatus.className = 'form-status error';
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Sending...';
        formStatus.className = 'form-status';
      }
      const btn = contactForm.querySelector('button[type="submit"]');
      const origText = btn ? btn.textContent : 'Send Message';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }

      setTimeout(() => {
        if (formStatus) {
          formStatus.textContent = '✓ Message sent! (Demo — no backend connected)';
          formStatus.className = 'form-status success';
        }
        showToast('Message validated! Connect a backend to actually send.');
        contactForm.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = origText;
        }
        setTimeout(() => {
          if (formStatus) formStatus.textContent = '';
        }, 4000);
      }, 900);
    });
  }

  // ----- Back to top smooth handling -----
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- Console easter egg -----
  console.log('%c👋 Hey there, fellow developer!', 'font-size:16px; font-weight:700; color:#6366F1');
  console.log('%cThanks for checking the console. This portfolio is built with vanilla HTML/CSS/JS — clean, fast & beginner-friendly.', 'color:#8B92A8');
});

