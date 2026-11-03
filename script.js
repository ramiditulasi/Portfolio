/**
 * TULASI REDDY RAMIDI - PROFESSIONAL PORTFOLIO SCRIPT
 * Handles theme toggling, typing animation, filtering, modals, copy to clipboard, and interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypingEffect();
  initScrollEffects();
  initMobileNav();
  initSkillFilters();
  initProjectFilters();
  initProjectModals();
  initCopyButtons();
  initStatsCounter();
});

/* -----------------------------
   THEME TOGGLE (DARK / LIGHT)
   ----------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* -----------------------------
   HERO TYPING EFFECT
   ----------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const phrases = [
    'Software Solutions',
    'Machine Learning Pipelines',
    'Business Analytics Dashboards',
    'Fast & Scalable APIs',
    'Data-Driven Insights',
    'Full-Stack Applications'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -----------------------------
   SCROLL EFFECTS & PROGRESS
   ----------------------------- */
function initScrollEffects() {
  const header = document.getElementById('header');
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Header scroll background
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll progress bar
    if (progressBar && docHeight > 0) {
      const scrollPercent = (scrollY / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active link highlighting
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* -----------------------------
   MOBILE MENU TOGGLE
   ----------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/* -----------------------------
   SKILLS FILTER
   ----------------------------- */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('#skills-filter .filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* -----------------------------
   PROJECTS FILTER
   ----------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('#projects-filter .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* -----------------------------
   PROJECT CASE STUDY MODALS
   ----------------------------- */
function initProjectModals() {
  const openButtons = document.querySelectorAll('.view-details-btn');
  const closeElements = document.querySelectorAll('[data-close-modal]');

  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeElements.forEach((el) => {
    el.addEventListener('click', () => {
      const activeModal = el.closest('.modal');
      if (activeModal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    }
  });
}

/* -----------------------------
   COPY TO CLIPBOARD & TOAST
   ----------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-clipboard');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* -----------------------------
   CONTACT FORM HANDLER
   ----------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const subject = document.getElementById('form-role').value || 'Portfolio Inquiry';
  const message = document.getElementById('form-message').value;

  if (submitBtn) {
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
  }

  // Generate mailto link for direct sending as fallback
  const mailtoBody = encodeURIComponent(`Hi Tulasi,\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:ramiditulasi@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

  setTimeout(() => {
    if (status) {
      status.className = 'form-status success';
      status.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been prepared. Opening your default mail client to dispatch...`;
    }
    
    // Trigger user's mail client
    window.location.href = mailtoUrl;

    if (submitBtn) {
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Ready!';
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>';
        submitBtn.disabled = false;
      }
    }, 4000);
  }, 600);

  return false;
}

/* -----------------------------
   ANIMATED STATS COUNTER
   ----------------------------- */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach((stat) => {
          const rawCount = stat.getAttribute('data-count');
          if (!rawCount) return;

          if (rawCount.includes('.')) {
            // Decimal counter (e.g. 7.23)
            animateDecimal(stat, parseFloat(rawCount));
          } else {
            // Integer counter (e.g. 4 or 540)
            const target = parseInt(rawCount, 10);
            animateInteger(stat, target);
          }
        });
      }
    });
  }, { threshold: 0.5 });

  const profileCard = document.querySelector('.profile-card');
  if (profileCard) {
    observer.observe(profileCard);
  }

  function animateInteger(element, target) {
    let current = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target === 540 ? '540K+' : target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (target === 540 ? 'K+' : '');
      }
    }, stepTime);
  }

  function animateDecimal(element, target) {
    let current = 0.0;
    const duration = 1200;
    const stepTime = 35;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toFixed(2);
        clearInterval(timer);
      } else {
        element.textContent = current.toFixed(2);
      }
    }, stepTime);
  }
}
