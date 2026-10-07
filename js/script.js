/**
 * AVÉRA CINEMA — Luxury Home Theatre & Audio System Installation Service
 * Vanilla JavaScript Production Script
 */

const initApp = () => {
  'use strict';

  // Shared validation for every form on this static site. The same rules must
  // also be enforced by an API when a backend is added.
  const validationRules = {
    name: /^[\p{L}]+(?: [\p{L}]+)*$/u,
    email: /^[^\s@]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/,
    digits: /^\d+$/
  };
  const validationMessage = (field) => {
    if (field.validity.valueMissing) return 'This field is required.';
    if (field.type === 'email' && !validationRules.email.test(field.value.trim())) {
      return 'Enter a valid email address, such as name@example.com.';
    }
    if (field.matches('[data-validate-name]') && !validationRules.name.test(field.value.trim())) {
      return 'Use letters and spaces only.';
    }
    if (field.matches('[data-validate-phone]') && !/^\d{10}$/.test(field.value)) {
      return 'Enter exactly 10 digits.';
    }
    if (field.matches('[data-validate-digits]') && field.value && !validationRules.digits.test(field.value)) {
      return 'Enter numbers only.';
    }
    if (field.validity.typeMismatch || field.validity.patternMismatch || field.validity.badInput) {
      return field.dataset.validationMessage || 'Enter a valid value.';
    }
    return '';
  };
  const getFeedback = (field) => {
    const parent = field.parentElement;
    let feedback = parent && parent.querySelector(':scope > .invalid-feedback');
    if (!feedback && parent) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      feedback.setAttribute('aria-live', 'polite');
      field.insertAdjacentElement('afterend', feedback);
    }
    if (feedback && !feedback.id) {
      feedback.id = `${field.id || field.name || 'field'}-validation-message`;
    }
    if (feedback && feedback.id) {
      const describedBy = new Set((field.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
      describedBy.add(feedback.id);
      field.setAttribute('aria-describedby', [...describedBy].join(' '));
    }
    return feedback;
  };
  const validateField = (field, showMessage = false) => {
    const message = validationMessage(field);
    field.setCustomValidity(message);
    const feedback = getFeedback(field);
    if (feedback) feedback.textContent = message;
    if (showMessage && message) field.classList.add('is-invalid');
    else if (!message || showMessage) field.classList.remove('is-invalid');
    return !message;
  };

  document.querySelectorAll('form').forEach((form) => {
    const fields = [...form.querySelectorAll('input, select, textarea')].filter((field) => field.type !== 'hidden');
    fields.forEach((field) => {
      const key = `${field.id} ${field.name}`.toLowerCase();
      if (/fullname|clientname|commentname|firstname|lastname/.test(key) || key.trim() === 'name') {
        field.dataset.validateName = 'true';
        field.autocomplete = field.autocomplete || 'name';
      }
      if (/phone|mobile|telephone/.test(key)) {
        field.dataset.validatePhone = 'true';
        field.type = 'tel';
        field.inputMode = 'numeric';
        field.maxLength = 10;
        field.pattern = '[0-9]{10}';
        field.autocomplete = field.autocomplete || 'tel-national';
        field.dataset.validationMessage = 'Enter exactly 10 digits.';
      }
      if (field.type === 'number' || /amount|quantity|age/.test(key)) {
        field.dataset.validateDigits = 'true';
        field.inputMode = 'numeric';
        if (field.type === 'number') {
          field.step = '1';
          field.min = '0';
        }
        field.dataset.validationMessage = 'Enter numbers only.';
      }
      if (field.type === 'email') field.autocomplete = field.autocomplete || 'email';

      field.addEventListener('input', () => {
        if (field.matches('[data-validate-phone], [data-validate-digits]')) {
          const digits = field.value.replace(/\D/g, '');
          if (field.value !== digits) field.value = digits;
        }
        validateField(field, field.classList.contains('is-invalid') || form.classList.contains('was-validated'));
      });
      field.addEventListener('change', () => validateField(field, form.classList.contains('was-validated')));
    });
    form.addEventListener('submit', (event) => {
      let valid = true;
      fields.forEach((field) => {
        if (!validateField(field, true)) valid = false;
      });
      if (!valid) {
        event.preventDefault();
        event.stopImmediatePropagation();
        form.classList.add('was-validated');
        const firstInvalid = fields.find((field) => !field.validity.valid);
        if (firstInvalid) firstInvalid.focus();
      }
    }, true);
  });

  // ------------------------------------------------------------------------
  // Social Media Configuration Variables (Easy placeholder configuration)
  // ------------------------------------------------------------------------
  const SOCIAL_CONFIG = {
    INSTAGRAM_URL: 'https://instagram.com',
    LINKEDIN_URL: 'https://linkedin.com',
    FACEBOOK_URL: 'https://facebook.com',
    YOUTUBE_URL: 'https://youtube.com'
  };

  // ------------------------------------------------------------------------
  // 1. Sticky Navbar & Scroll Background
  // ------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-custom');
  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Run initially

  // ------------------------------------------------------------------------
  // 2. Mobile Navigation Off-Canvas Drawer Management
  // ------------------------------------------------------------------------
  const navCollapse = document.getElementById('navbarContent');
  const navbarToggler = document.querySelector('.navbar-toggler-custom');

  // Ensure backdrop element exists in DOM
  let backdrop = document.getElementById('navDrawerBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'navDrawerBackdrop';
    backdrop.className = 'nav-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  if (navCollapse && window.bootstrap) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });

    // Helper to safely close the drawer
    const closeDrawer = () => {
      navCollapse.classList.remove('drawer-open');
      document.body.classList.remove('nav-drawer-open');
      if (backdrop) backdrop.classList.remove('active');
      try {
        if (navCollapse.classList.contains('show') || navCollapse.classList.contains('collapsing')) {
          bsCollapse.hide();
        }
      } catch (err) {
        navCollapse.classList.remove('show');
      }
    };

    // Synchronize drawer opening state and backdrop
    navCollapse.addEventListener('show.bs.collapse', () => {
      navCollapse.classList.add('drawer-open');
      document.body.classList.add('nav-drawer-open');
      if (backdrop) backdrop.classList.add('active');
    });

    navCollapse.addEventListener('shown.bs.collapse', () => {
      navCollapse.classList.add('drawer-open');
      document.body.classList.add('nav-drawer-open');
      if (backdrop) backdrop.classList.add('active');
    });

    // Synchronize drawer closing state and backdrop
    navCollapse.addEventListener('hide.bs.collapse', () => {
      navCollapse.classList.remove('drawer-open');
      document.body.classList.remove('nav-drawer-open');
      if (backdrop) backdrop.classList.remove('active');
    });

    navCollapse.addEventListener('hidden.bs.collapse', () => {
      navCollapse.classList.remove('drawer-open');
      document.body.classList.remove('nav-drawer-open');
      if (backdrop) backdrop.classList.remove('active');
    });

    // Close button delegated event handler
    navCollapse.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('#drawerCloseBtn, .btn-drawer-close');
      if (closeBtn) {
        e.preventDefault();
        closeDrawer();
      }
    });

    // Clicking dimmed backdrop closes drawer
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        closeDrawer();
      });
    }

    // Clicking anywhere outside drawer closes it
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 992 && (navCollapse.classList.contains('show') || navCollapse.classList.contains('drawer-open'))) {
        if (!navCollapse.contains(e.target) && (!navbarToggler || !navbarToggler.contains(e.target))) {
          closeDrawer();
        }
      }
    });

    // Pressing ESC key closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && (navCollapse.classList.contains('show') || navCollapse.classList.contains('drawer-open'))) {
        closeDrawer();
      }
    });

    // Auto-close on navigation links inside the drawer
    // Keep the drawer open when the Home dropdown is tapped so its submenu
    // (including the Home 2 destination) remains available on mobile.
    const navInteractiveLinks = navCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navInteractiveLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          closeDrawer();
        }
      });
    });

    // Clean up when resizing back to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        closeDrawer();
        navCollapse.classList.remove('drawer-open');
        document.body.classList.remove('nav-drawer-open');
        if (backdrop) backdrop.classList.remove('active');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. Dynamic Active Navigation Highlighting
  // ------------------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const menuLinks = document.querySelectorAll('.navbar-custom .nav-link:not(.dropdown-toggle)');
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Handle Home dropdown toggle and dropdown items
  const homeDropdown = document.getElementById('homeDropdown');
  const dropdownItems = document.querySelectorAll('.navbar-custom .dropdown-item');
  let hasActiveDropdownItem = false;
  dropdownItems.forEach(item => {
    const href = item.getAttribute('href');
    const isHome2 = (href === 'home-2.html' || href === 'index-2.html') && (currentPath === 'home-2.html' || currentPath === 'index-2.html');
    const isHome1 = href === 'index.html' && (currentPath === 'index.html' || currentPath === '');
    if (isHome2 || isHome1 || href === currentPath) {
      item.classList.add('active');
      hasActiveDropdownItem = true;
    } else {
      item.classList.remove('active');
    }
  });

  if (homeDropdown) {
    if (hasActiveDropdownItem || currentPath === 'index.html' || currentPath === 'home-2.html' || currentPath === 'index-2.html' || currentPath === '') {
      homeDropdown.classList.add('active');
    } else {
      homeDropdown.classList.remove('active');
    }
  }

  // ------------------------------------------------------------------------
  // 4. Animated Number Counters (Stats Section)
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-counter');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const countUp = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 2000; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(ease * target);
        el.textContent = currentCount.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  } else {
    // Fallback if observer not supported
    statNumbers.forEach(el => {
      el.textContent = el.getAttribute('data-target');
    });
  }

  // ------------------------------------------------------------------------
  // 5. Products Page Filtering (Brand & Category)
  // ------------------------------------------------------------------------
  const brandFilterBtns = document.querySelectorAll('.brand-filter-btn');
  const categoryFilterBtns = document.querySelectorAll('.category-filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  let activeBrand = 'all';
  let activeCategory = 'all';

  const filterProducts = () => {
    productCards.forEach(card => {
      const itemBrand = card.getAttribute('data-brand') || '';
      const itemCategory = card.getAttribute('data-category') || '';

      const matchBrand = activeBrand === 'all' || itemBrand.toLowerCase() === activeBrand.toLowerCase();
      const matchCategory = activeCategory === 'all' || itemCategory.toLowerCase() === activeCategory.toLowerCase();

      if (matchBrand && matchCategory) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });
  };

  if (brandFilterBtns.length > 0) {
    brandFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        brandFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeBrand = btn.getAttribute('data-filter-brand');
        filterProducts();
      });
    });
  }

  if (categoryFilterBtns.length > 0) {
    categoryFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter-category');
        filterProducts();
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Gallery Page Filtering
  // ------------------------------------------------------------------------
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');

  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (filter === 'all' || itemCat === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. Interactive Gallery Modal Data Populator
  // ------------------------------------------------------------------------
  const galleryModalEl = document.getElementById('galleryModal');
  if (galleryModalEl) {
    const modalImage = galleryModalEl.querySelector('#galleryModalImage');
    const modalTitle = galleryModalEl.querySelector('#galleryModalTitle');
    const modalLocation = galleryModalEl.querySelector('#galleryModalLocation');
    const modalDesc = galleryModalEl.querySelector('#galleryModalDesc');
    const modalSpecsAudio = galleryModalEl.querySelector('#galleryModalAudio');
    const modalSpecsDisplay = galleryModalEl.querySelector('#galleryModalDisplay');
    const modalSpecsAcoustic = galleryModalEl.querySelector('#galleryModalAcoustic');

    const triggerCards = document.querySelectorAll('[data-bs-target="#galleryModal"]');
    triggerCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title') || 'Private Cinema Project';
        const location = card.getAttribute('data-location') || 'India';
        const desc = card.getAttribute('data-desc') || 'A bespoke residential cinema installation engineered for reference acoustic performance.';
        const imgSrc = card.getAttribute('data-img') || 'images/hero/hero-home-theatre.webp';
        const audio = card.getAttribute('data-audio') || 'Dolby Atmos 7.2.4';
        const display = card.getAttribute('data-display') || '4K HDR Laser Projection (150" Screen)';
        const acoustic = card.getAttribute('data-acoustic') || 'Diffusion & Absorption Panels, Bass Trapping';

        if (modalImage) modalImage.src = imgSrc;
        if (modalTitle) modalTitle.textContent = title;
        if (modalLocation) modalLocation.innerHTML = `<i class="bi bi-geo-alt text-gold me-1"></i> ${location}`;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalSpecsAudio) modalSpecsAudio.textContent = audio;
        if (modalSpecsDisplay) modalSpecsDisplay.textContent = display;
        if (modalSpecsAcoustic) modalSpecsAcoustic.textContent = acoustic;
      });
    });
  }

  // ------------------------------------------------------------------------
  // 8. Product Card Click Redirection & Modal Handler
  // ------------------------------------------------------------------------
  // Handle clicks anywhere on .product-card
  const clickableProductCards = document.querySelectorAll('.product-card[data-product-url]');
  clickableProductCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // If user clicked inside an <a> tag directly, allow default navigation
      if (e.target.closest('a')) {
        return;
      }
      const url = card.getAttribute('data-product-url');
      if (url) {
        window.location.href = url;
      }
    });
  });

  const productEnquiryModalEl = document.getElementById('productEnquiryModal');
  if (productEnquiryModalEl) {
    const enquireBtns = document.querySelectorAll('.btn-enquire-product[data-product-name]');
    const modalProductName = productEnquiryModalEl.querySelector('#enquiryProductName');
    const modalProductInput = productEnquiryModalEl.querySelector('#enquiryProductInput');

    enquireBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const prodName = btn.getAttribute('data-product-name') || 'Premium AV Equipment';
        if (modalProductName) modalProductName.textContent = prodName;
        if (modalProductInput) modalProductInput.value = prodName;
      });
    });

    // Enquiry form submission
    const enquiryForm = document.getElementById('productEnquiryForm');
    if (enquiryForm) {
      enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!enquiryForm.checkValidity()) {
          e.stopPropagation();
          enquiryForm.classList.add('was-validated');
          return;
        }

        // Hide enquiry modal
        const bsEnquiryModal = bootstrap.Modal.getInstance(productEnquiryModalEl);
        if (bsEnquiryModal) bsEnquiryModal.hide();

        // Show generic confirmation modal
        const successModalEl = document.getElementById('consultationSuccessModal');
        if (successModalEl) {
          const successTitle = successModalEl.querySelector('#successModalTitle');
          const successMsg = successModalEl.querySelector('#successModalMessage');
          if (successTitle) successTitle.textContent = 'Enquiry Received';
          if (successMsg) {
            successMsg.textContent = `Thank you! Our audio specialists will contact you with comprehensive specs and pricing for ${modalProductInput ? modalProductInput.value : 'your selected product'}.`;
          }
          const bsSuccess = new bootstrap.Modal(successModalEl);
          bsSuccess.show();
        }
        enquiryForm.reset();
        enquiryForm.classList.remove('was-validated');
      });
    }
  }

  // Auto-prefill contact.html with product, service, or cinema project if passed in query params
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const prodParam = urlParams.get('product');
    const serviceParam = urlParams.get('service');
    const projectParam = urlParams.get('project');

    const msgInput = document.getElementById('projectMessage');
    const serviceSelect = document.getElementById('serviceRequired');
    const cityInput = document.getElementById('cityLocation');

    // Curated private cinema project metadata for high-fidelity pre-fill
    const CINEMA_PROJECT_MAP = {
      'timber-acoustics-kochi': {
        title: 'Timber Acoustics & Architectural Cinema',
        city: 'Kochi',
        service: 'Complete Home Theatre'
      },
      'private-cinema-chennai': {
        title: 'Private Cinema',
        city: 'Chennai',
        service: 'Complete Home Theatre'
      },
      'acoustic-sanctuary-mumbai': {
        title: 'The Acoustic Sanctuary',
        city: 'Mumbai',
        service: 'Complete Home Theatre'
      },
      'lumina-penthouse-bengaluru': {
        title: 'The Lumina Penthouse',
        city: 'Bengaluru',
        service: 'Complete Home Theatre'
      },
      'celestial-starlight-delhi': {
        title: 'The Celestial Starlight Cinema',
        city: 'Delhi',
        service: 'Complete Home Theatre'
      },
      'audiophile-listening-room': {
        title: 'Audiophile Listening Room',
        city: 'Hyderabad',
        service: 'Acoustic Treatment'
      },
      'audiophile-listening-room-hyderabad': {
        title: 'Audiophile Listening Room',
        city: 'Hyderabad',
        service: 'Acoustic Treatment'
      }
    };

    if (prodParam) {
      // If products data catalog is loaded, look up nice name
      let pTitle = prodParam;
      if (typeof findProductById === 'function') {
        const found = findProductById(prodParam);
        if (found) pTitle = found.name;
      }
      if (msgInput && !msgInput.value) {
        msgInput.value = `Equipment Enquiry: ${pTitle}\n\nI would like to request an official quote, compatibility assessment, and availability for this item.`;
      }
      if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.includes('Upgrade') || serviceSelect.options[i].value.includes('Other')) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    } else if (serviceParam && serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value.toLowerCase() === serviceParam.toLowerCase()) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    } else if (projectParam) {
      const projectInfo = CINEMA_PROJECT_MAP[projectParam];
      if (projectInfo) {
        if (msgInput && !msgInput.value) {
          msgInput.value = `Project Enquiry: Regarding ${projectInfo.title} (${projectInfo.city})\n\nI am interested in designing a cinema room with similar aesthetics and performance.`;
        }
        if (cityInput && !cityInput.value) {
          cityInput.value = projectInfo.city;
        }
        if (serviceSelect) {
          for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value === projectInfo.service) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }
      } else {
        const formattedTitle = projectParam
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        if (msgInput && !msgInput.value) {
          msgInput.value = `Project Enquiry: Regarding ${formattedTitle}\n\nI am interested in designing a cinema room with similar aesthetics and performance.`;
        }
        if (serviceSelect) {
          for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value.includes('Home Theatre')) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn('URL param prefill error:', err);
  }

  // ------------------------------------------------------------------------
  // 9. Contact & Consultation Form Validation & Success Modal
  // ------------------------------------------------------------------------
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    // Set min date to local today
    const dateInput = consultationForm.querySelector('#preferredDate');
    if (dateInput) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      dateInput.min = `${year}-${month}-${day}`;

      // Open native calendar picker when user clicks anywhere on the input
      dateInput.addEventListener('click', () => {
        try {
          if (typeof dateInput.showPicker === 'function') {
            dateInput.showPicker();
          }
        } catch (e) {
          // Graceful fallback if programmatic invocation is blocked by browser policy
        }
      });
    }

    consultationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const fullName = consultationForm.querySelector('#fullName');
      const phone = consultationForm.querySelector('#phoneNumber');
      const email = consultationForm.querySelector('#emailAddress');
      const city = consultationForm.querySelector('#cityLocation');
      const service = consultationForm.querySelector('#serviceRequired');
      const preferredDate = consultationForm.querySelector('#preferredDate');

      // The shared validator accepts exactly 10 digits with no formatting characters.
      let isPhoneValid = true;
      if (phone) {
        isPhoneValid = /^\d{10}$/.test(phone.value);
        if (!isPhoneValid) {
          phone.setCustomValidity('Please enter a valid 10-digit mobile number.');
        } else {
          phone.setCustomValidity('');
        }
      }

      if (!consultationForm.checkValidity() || !isPhoneValid) {
        consultationForm.classList.add('was-validated');
        return;
      }

      // Valid form
      consultationForm.classList.remove('was-validated');

      // Populate Success Modal
      const successModalEl = document.getElementById('consultationSuccessModal');
      if (successModalEl) {
        const summaryName = successModalEl.querySelector('#summaryName');
        const summaryService = successModalEl.querySelector('#summaryService');
        const summaryDate = successModalEl.querySelector('#summaryDate');
        const summaryCity = successModalEl.querySelector('#summaryCity');

        if (summaryName && fullName) summaryName.textContent = fullName.value.trim();
        if (summaryService && service && service.selectedIndex >= 0) {
          summaryService.textContent = service.options[service.selectedIndex].text;
        }
        if (summaryDate && preferredDate) summaryDate.textContent = preferredDate.value || 'To be scheduled';
        if (summaryCity && city) summaryCity.textContent = city.value.trim();

        const bsSuccessModal = new bootstrap.Modal(successModalEl);
        bsSuccessModal.show();
      }

      consultationForm.reset();
      consultationForm.classList.remove('was-validated');
    });
  }

  // ------------------------------------------------------------------------
  // 10. Multi-Directional Scroll Reveal & Card Stagger Engine
  // ------------------------------------------------------------------------
  const setupScrollReveals = () => {
    const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Auto-tag Split Layout Columns for directional entrance
    const splitContainers = document.querySelectorAll('.intro-split-layout, .intro-split-row, .detailed-service-row .row');
    splitContainers.forEach(container => {
      const cols = container.querySelectorAll(':scope > div[class*="col-"], :scope > .intro-split-col');
      if (cols.length >= 2) {
        cols[0].classList.remove('reveal-on-scroll');
        cols[0].classList.add('reveal-left');
        cols[1].classList.remove('reveal-on-scroll');
        cols[1].classList.add('reveal-right');
      }
    });

    // 2. Auto-tag and stagger multi-card grids
    const cardGridSelectors = [
      '.sensory-cards-grid',
      '.brand-cards-grid',
      '.brands-grid-row',
      '.gallery-grid',
      '.process-steps-row',
      '.products-grid-row',
      '.row:has(> .product-item)',
      '.row:has(> .service-card)',
      '.row:has(> .gallery-grid-item)',
      '.row:has(> .testimonial-card)'
    ];

    try {
      cardGridSelectors.forEach(sel => {
        const containers = document.querySelectorAll(sel);
        containers.forEach(container => {
          const items = container.querySelectorAll(':scope > div, :scope > .product-item, :scope > .gallery-grid-item, :scope > .sensory-card-col, :scope > .col');
          items.forEach((item, index) => {
            if (!item.classList.contains('reveal-on-scroll') && !item.classList.contains('reveal-left') && !item.classList.contains('reveal-right')) {
              item.classList.add('reveal-on-scroll');
            }
            // Add stagger delay (0.07s increments, looping modulo 4)
            const delayMod = (index % 4) + 1;
            item.classList.add(`stagger-delay-${delayMod}`);
          });
        });
      });
    } catch (e) {
      // Fallback if :has selector isn't supported in older engine
    }

    // 3. Direct card elements across all pages
    const directCardSelectors = [
      '.stat-item',
      '.product-item',
      '.gallery-grid-item',
      '.portfolio-card',
      '.service-card',
      '.brand-card',
      '.sensory-card-col',
      '.process-step-card',
      '.testimonial-card',
      '.cinema-spec-card',
      '.cinema-narrative-card',
      '.form-card',
      '.contact-info-card',
      '.signin-card',
      '.signup-card'
    ];

    directCardSelectors.forEach(sel => {
      const elements = document.querySelectorAll(sel);
      elements.forEach(el => {
        if (!el.classList.contains('reveal-on-scroll') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-scale')) {
          el.classList.add('reveal-on-scroll');
        }
      });
    });

    // 4. Collect all reveal elements across the page
    const allRevealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale');

    // Immediately reveal elements that are already within or near the viewport
    allRevealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -50) {
        el.classList.add('is-visible');
      }
    });

    if (isReducedMotion || !('IntersectionObserver' in window)) {
      allRevealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 80px 0px' });

    allRevealElements.forEach(el => {
      if (!el.classList.contains('is-visible')) {
        revealObserver.observe(el);
      }
    });

    // Safety fallback: reveal any remaining unrevealed elements after a brief duration
    setTimeout(() => {
      allRevealElements.forEach(el => el.classList.add('is-visible'));
    }, 800);
  };

  setupScrollReveals();

  // ------------------------------------------------------------------------
  // 10b. Smooth Luxury Page Transitions
  // ------------------------------------------------------------------------
  const setupPageTransitions = () => {
    // Ensure body is visible immediately
    document.body.classList.remove('page-transitioning');

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Intercept qualifying internal page links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      // Ignore if modified click (Ctrl, Cmd, Shift, Alt) or right/middle click
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // Ignore modal triggers, collapses, or product/gallery filters
      if (
        link.hasAttribute('data-bs-toggle') ||
        link.hasAttribute('data-filter') ||
        link.classList.contains('gallery-filter-btn') ||
        link.classList.contains('category-filter-btn') ||
        link.classList.contains('brand-filter-btn') ||
        link.classList.contains('btn-drawer-close') ||
        link.id === 'drawerCloseBtn'
      ) {
        return;
      }

      // Ignore downloads or new window targets
      if (link.target === '_blank' || link.hasAttribute('download')) {
        return;
      }

      try {
        const targetUrl = new URL(link.href, window.location.href);

        // Same origin only (or file protocol with same pathname)
        if (targetUrl.origin !== window.location.origin && window.location.protocol !== 'file:') {
          return;
        }

        // Ignore same page anchor links
        if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
          return;
        }

        // Trigger smooth transition out with auto-recovery timeout
        e.preventDefault();
        document.body.classList.add('page-transitioning');

        const navTimer = setTimeout(() => {
          window.location.href = targetUrl.href;
        }, 150);

        // Safety fallback: if navigation is cancelled or delayed, restore visibility
        setTimeout(() => {
          document.body.classList.remove('page-transitioning');
        }, 500);
      } catch (err) {
        document.body.classList.remove('page-transitioning');
      }
    });

    // Reset transition state on pageshow (e.g. bfcache)
    window.addEventListener('pageshow', () => {
      document.body.classList.remove('page-transitioning');
    });

    window.addEventListener('load', () => {
      document.body.classList.remove('page-transitioning');
    });
  };

  setupPageTransitions();

  // ------------------------------------------------------------------------
  // 11. Subtle Parallax Experience Scroll
  // ------------------------------------------------------------------------
  const parallaxBg = document.querySelector('.experience-bg');
  if (parallaxBg) {
    window.addEventListener('scroll', () => {
      const rect = parallaxBg.parentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.08;
        parallaxBg.style.transform = `translateY(${offset}px)`;
      }
    }, { passive: true });
  }

  // ------------------------------------------------------------------------
  // 12. Back-to-Top Button
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 13. Dynamic Current Year in Footer
  // ------------------------------------------------------------------------
  const yearSpans = document.querySelectorAll('.current-year');
  const curYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = curYear >= 2026 ? curYear : '2026';
  });

  // ------------------------------------------------------------------------
  // 14. Theme Toggle (Light / Dark Mode)
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  const applyTheme = (theme) => {
    document.querySelectorAll('.brand-logo-img').forEach((logo) => {
      const source = logo.getAttribute('src') || '';
      const logoFile = theme === 'dark' ? 'avera-cinema-logo-dark.png' : 'avera-cinema-logo.png';
      logo.setAttribute('src', source.replace(/avera-cinema-logo(?:-dark)?\.png$/, logoFile));
    });

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
      if (themeIcon) {
        themeIcon.className = 'bi bi-sun';
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode (Currently Dark)');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.body.classList.remove('dark-mode');
      if (themeIcon) {
        themeIcon.className = 'bi bi-moon';
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode (Currently Light)');
      }
    }
  };

  // Initialize theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.warn('Unable to persist theme to localStorage', e);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 15. Language Direction Toggle (LTR / RTL)
  // ------------------------------------------------------------------------
  const dirToggleBtn = document.getElementById('dirToggleBtn');
  const dirLabel = document.getElementById('dirLabel');

  const applyDirection = (dir) => {
    document.documentElement.dir = dir;
    if (dir === 'rtl') {
      if (dirLabel) dirLabel.textContent = 'RTL';
      if (dirToggleBtn) {
        dirToggleBtn.setAttribute('aria-label', 'Switch to LTR direction');
        dirToggleBtn.setAttribute('title', 'Switch to LTR direction (Currently RTL)');
      }
    } else {
      if (dirLabel) dirLabel.textContent = 'LTR';
      if (dirToggleBtn) {
        dirToggleBtn.setAttribute('aria-label', 'Switch to RTL direction');
        dirToggleBtn.setAttribute('title', 'Switch to RTL direction (Currently LTR)');
      }
    }
  };

  // Initialize direction from localStorage or default to 'ltr'
  const savedDir = localStorage.getItem('direction') || 'ltr';
  applyDirection(savedDir);

  if (dirToggleBtn) {
    dirToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      try {
        localStorage.setItem('direction', newDir);
      } catch (e) {
        console.warn('Unable to persist direction to localStorage', e);
      }
    });
  }

  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  // 17. Live Countdown Timer (Coming Soon Page)
  // ------------------------------------------------------------------------
  const daysEl = document.getElementById('countdownDays');
  const hoursEl = document.getElementById('countdownHours');
  const minutesEl = document.getElementById('countdownMinutes');
  const secondsEl = document.getElementById('countdownSeconds');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    // Target date 45 days in future from current
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);
    targetDate.setHours(18, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = d < 10 ? '0' + d : d;
      hoursEl.textContent = h < 10 ? '0' + h : h;
      minutesEl.textContent = m < 10 ? '0' + m : m;
      secondsEl.textContent = s < 10 ? '0' + s : s;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 19. Coming Soon VIP Waitlist Form Simulation
  // ------------------------------------------------------------------------
  const waitlistForm = document.getElementById('comingSoonWaitlistForm');
  const waitlistAlert = document.getElementById('waitlistAlert');

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!waitlistForm.checkValidity()) {
        waitlistForm.classList.add('was-validated');
        return;
      }

      const emailInput = document.getElementById('waitlistEmail');
      const emailVal = emailInput ? emailInput.value.trim() : '';

      if (waitlistAlert) {
        waitlistAlert.className = 'alert alert-success mt-3 py-2 small';
        waitlistAlert.innerHTML = `<i class="bi bi-shield-check me-2"></i>VIP invitation registered for <strong>${escapeHtml(emailVal)}</strong>. You will receive priority launch access!`;
        waitlistAlert.classList.remove('d-none');
        waitlistForm.reset();
        waitlistForm.classList.remove('was-validated');
      }
    });
  }

};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
