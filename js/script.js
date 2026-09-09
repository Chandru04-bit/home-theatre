/**
 * AVÉRA CINEMA — Luxury Home Theatre & Audio System Installation Service
 * Vanilla JavaScript Production Script
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

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

    // Auto-close on any navigation link or sign-in click inside drawer
    const navInteractiveLinks = navCollapse.querySelectorAll('.nav-link, .btn-nav-signin');
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
  const menuLinks = document.querySelectorAll('.navbar-custom .nav-link');
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href !== currentPath) {
      link.classList.remove('active');
    }
  });

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

    const phoneInput = consultationForm.querySelector('#phoneNumber');
    if (phoneInput) {
      // Clear custom error on typing so user is never blocked
      phoneInput.addEventListener('input', () => {
        phoneInput.setCustomValidity('');
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

      // Robust phone validation: extracts digits, allows spaces, dashes, +91, 10-15 digits
      let isPhoneValid = true;
      if (phone) {
        const rawDigits = phone.value.replace(/\D/g, '');
        isPhoneValid = rawDigits.length >= 10 && rawDigits.length <= 15;
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
  // 16. Client Sign-In Portal Interactions & Remember Me Flow
  // ------------------------------------------------------------------------
  const passwordToggleBtn = document.getElementById('passwordToggleBtn');
  const passwordInput = document.getElementById('signinPassword');
  if (passwordToggleBtn && passwordInput) {
    passwordToggleBtn.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });
    passwordToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const hadFocus = (document.activeElement === passwordInput);
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      const icon = passwordToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
      }
      passwordToggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      if (hadFocus) {
        passwordInput.focus();
      }
    });
  }

  // Initialize Remember Me checkbox and saved email state
  const rememberMeCheckbox = document.getElementById('rememberMe');
  const signinEmailInput = document.getElementById('signinEmail');
  if (rememberMeCheckbox) {
    const rememberDevice = localStorage.getItem('avera_remember_device');
    const savedEmail = localStorage.getItem('avera_saved_email');
    if (rememberDevice === 'true' && savedEmail) {
      rememberMeCheckbox.checked = true;
      if (signinEmailInput && !signinEmailInput.value) {
        signinEmailInput.value = savedEmail;
      }
    } else {
      // Must be unchecked by default
      rememberMeCheckbox.checked = false;
    }
  }

  const signinForm = document.getElementById('signinForm');
  const signinAlert = document.getElementById('signinAlert');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('signinEmail');
      const pwdInput = document.getElementById('signinPassword');
      const rememberCheckbox = document.getElementById('rememberMe');
      const submitBtn = signinForm.querySelector('button[type="submit"]');

      const email = emailInput ? emailInput.value.trim() : '';
      const password = pwdInput ? pwdInput.value : '';

      // Reset alert
      if (signinAlert) {
        signinAlert.className = 'd-none';
        signinAlert.innerHTML = '';
      }

      // Check required fields
      if (!email || !password) {
        signinForm.classList.add('was-validated');
        if (signinAlert) {
          signinAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signinAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Please enter both email address and password.</div>';
          signinAlert.classList.remove('d-none');
        }
        return;
      }

      if (!signinForm.checkValidity()) {
        signinForm.classList.add('was-validated');
        if (signinAlert) {
          signinAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signinAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Please provide a valid email address.</div>';
          signinAlert.classList.remove('d-none');
        }
        return;
      }

      // Verify Credentials against localStorage or demo fallback
      let isMatch = false;
      let matchedUserName = '';
      const registeredUserStr = localStorage.getItem('registeredUser');
      if (registeredUserStr) {
        try {
          const registeredUser = JSON.parse(registeredUserStr);
          if (registeredUser && registeredUser.email &&
              registeredUser.email.toLowerCase() === email.toLowerCase() &&
              registeredUser.password === password) {
            isMatch = true;
            matchedUserName = (registeredUser.name && registeredUser.name.trim()) ? registeredUser.name.trim() : '';
          }
        } catch (err) {
          console.error('Error parsing registered user:', err);
        }
      }

      // Demo fallback credentials
      if (!isMatch && email.toLowerCase() === 'client@luxuryestate.com' && password === 'avera2026') {
        isMatch = true;
        matchedUserName = 'Alexander Wright';
      }

      if (!isMatch) {
        signinForm.classList.add('was-validated');
        if (signinAlert) {
          signinAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signinAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Invalid email or password.</div>';
          signinAlert.classList.remove('d-none');
        }
        return;
      }

      // Fallback name if none found: ensure it's a NAME, never an email
      if (!matchedUserName) {
        matchedUserName = 'Alexander Wright';
      }

      // Save user session in localStorage with user's NAME (NOT email)
      const sessionUser = {
        name: matchedUserName,
        email: email.toLowerCase()
      };
      localStorage.setItem('avera_logged_in_user', JSON.stringify(sessionUser));
      localStorage.setItem('currentUser', JSON.stringify(sessionUser));

      // Persist Remember Me only if manually checked
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('avera_remember_device', 'true');
        localStorage.setItem('avera_saved_email', email);
      } else {
        localStorage.removeItem('avera_remember_device');
        localStorage.removeItem('avera_saved_email');
      }

      // Login Successful
      const originalHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Signing in...';
      }

      if (signinAlert) {
        signinAlert.className = 'alert alert-success d-flex align-items-center mb-3';
        signinAlert.innerHTML = `<i class="bi bi-check-circle-fill me-2 fs-5"></i><div><strong>Access Granted!</strong> Welcome back, ${escapeHtml(sessionUser.name)}.</div>`;
        signinAlert.classList.remove('d-none');
      }

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 900);
    });
  }

  // ------------------------------------------------------------------------
  // 17. Client Create Account / Sign-Up Portal Interactions
  // ------------------------------------------------------------------------
  function setupPasswordToggle(toggleId, inputId) {
    const toggleBtn = document.getElementById(toggleId);
    const inputField = document.getElementById(inputId);
    if (toggleBtn && inputField) {
      toggleBtn.addEventListener('mousedown', (e) => {
        e.preventDefault();
      });
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const hadFocus = (document.activeElement === inputField);
        const isPassword = inputField.getAttribute('type') === 'password';
        inputField.setAttribute('type', isPassword ? 'text' : 'password');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
        }
        toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        if (hadFocus) {
          inputField.focus();
        }
      });
    }
  }

  setupPasswordToggle('signupPasswordToggleBtn', 'signupPassword');
  setupPasswordToggle('signupConfirmToggleBtn', 'signupConfirmPassword');

  // Prevent focus theft on mousedown site-wide for password toggle buttons
  document.addEventListener('mousedown', (e) => {
    const toggle = e.target.closest('.input-password-toggle, .password-toggle-btn, .btn-toggle-password, [data-password-toggle]');
    if (toggle) {
      e.preventDefault();
    }
  });

  // Universal Password Toggle Handler for any dynamic/unhandled password inputs site-wide
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.input-password-toggle, .password-toggle-btn, .btn-toggle-password, [data-password-toggle]');
    if (!toggle) return;
    if (['passwordToggleBtn', 'signupPasswordToggleBtn', 'signupConfirmToggleBtn'].includes(toggle.id)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const wrapper = toggle.closest('.password-input-wrap, .input-icon-wrap') || toggle.parentElement;
    if (!wrapper) return;
    const input = wrapper.querySelector('input');
    if (!input) return;
    const hadFocus = (document.activeElement === input);
    const isPassword = input.getAttribute('type') === 'password';
    input.setAttribute('type', isPassword ? 'text' : 'password');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
    toggle.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    if (hadFocus) {
      input.focus();
    }
  });

  const signupForm = document.getElementById('signupForm');
  const signupAlert = document.getElementById('signupAlert');
  if (signupForm) {
    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const phoneInput = document.getElementById('signupPhone');
    const pwd = document.getElementById('signupPassword');
    const confirmPwd = document.getElementById('signupConfirmPassword');
    const agreeTerms = document.getElementById('agreeTerms');
    const feedback = document.getElementById('signupConfirmFeedback');
    const submitBtn = signupForm.querySelector('button[type="submit"]');

    if (confirmPwd && pwd) {
      confirmPwd.addEventListener('input', () => {
        if (confirmPwd.value !== pwd.value) {
          confirmPwd.setCustomValidity('Passwords must match.');
          if (feedback) feedback.textContent = 'Passwords do not match.';
        } else {
          confirmPwd.setCustomValidity('');
          if (feedback) feedback.textContent = 'Passwords must match.';
        }
      });
    }

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (signupAlert) {
        signupAlert.className = 'd-none';
        signupAlert.innerHTML = '';
      }

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const password = pwd ? pwd.value : '';
      const confirmPassword = confirmPwd ? confirmPwd.value : '';
      const termsChecked = agreeTerms ? agreeTerms.checked : false;

      // 1. Check all required fields are filled
      if (!name || !email || !phone || !password || !confirmPassword || !termsChecked) {
        signupForm.classList.add('was-validated');
        if (signupAlert) {
          signupAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signupAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Please fill in all required fields and accept the Terms & Conditions.</div>';
          signupAlert.classList.remove('d-none');
        }
        return;
      }

      // 2. Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        signupForm.classList.add('was-validated');
        if (signupAlert) {
          signupAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signupAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Please provide a valid client email address.</div>';
          signupAlert.classList.remove('d-none');
        }
        return;
      }

      // 3. Password match validation
      if (password !== confirmPassword) {
        if (confirmPwd) confirmPwd.setCustomValidity('Passwords must match.');
        if (feedback) feedback.textContent = 'Passwords do not match.';
        signupForm.classList.add('was-validated');
        if (signupAlert) {
          signupAlert.className = 'alert alert-danger d-flex align-items-center mb-3';
          signupAlert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2 fs-5"></i><div>Passwords do not match. Please verify your password.</div>';
          signupAlert.classList.remove('d-none');
        }
        return;
      } else {
        if (confirmPwd) confirmPwd.setCustomValidity('');
      }

      // 4. Validate form checkValidity
      if (!signupForm.checkValidity()) {
        signupForm.classList.add('was-validated');
        return;
      }

      // 5. Store registered user info in localStorage for frontend demo
      const newUser = {
        name: name,
        email: email.toLowerCase(),
        phone: phone,
        password: password
      };
      localStorage.setItem('registeredUser', JSON.stringify(newUser));

      // 6. Disable submit button and display success message
      const originalHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Creating Account...';
      }

      if (signupAlert) {
        signupAlert.className = 'alert alert-success d-flex flex-column align-items-center text-center mb-3';
        signupAlert.innerHTML = `
          <div class="d-flex align-items-center justify-content-center mb-1">
            <i class="bi bi-check-circle-fill me-2 fs-5"></i>
            <strong>Account Created Successfully</strong>
          </div>
          <div class="small">Your account has been created. You can now sign in.</div>
        `;
        signupAlert.classList.remove('d-none');
      }

      // 7. Redirect to signin.html
      setTimeout(() => {
        window.location.href = 'signin.html';
      }, 1600);
    });
  }

  // ------------------------------------------------------------------------
  // 18. Global Navbar User Authentication State Management
  //     Displays user's NAME (not email) beside the user icon when logged in
  // ------------------------------------------------------------------------
  function getLoggedInUser() {
    try {
      const userStr = localStorage.getItem('avera_logged_in_user') || localStorage.getItem('currentUser');
      if (userStr) {
        return JSON.parse(userStr);
      }
    } catch (e) {
      console.error('Error reading logged in user:', e);
    }
    return null;
  }

  function getCleanUserName(user) {
    if (!user) return '';
    // Priority 1: explicitly stored name
    if (user.name && typeof user.name === 'string' && user.name.trim()) {
      return user.name.trim();
    }
    // Priority 2: if registeredUser in localStorage matches email, get their name
    try {
      const regStr = localStorage.getItem('registeredUser');
      if (regStr) {
        const reg = JSON.parse(regStr);
        if (reg && reg.name && reg.name.trim()) {
          return reg.name.trim();
        }
      }
    } catch (e) {}
    // Fallback: Never display email. If email provided, derive human name from prefix
    if (user.email) {
      const prefix = user.email.split('@')[0];
      const clean = prefix.replace(/[._\-+]/g, ' ').trim();
      const words = clean.split(/\s+/).filter(Boolean);
      if (words.length > 0) {
        return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      }
    }
    return 'Alexander Wright';
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function updateNavbarAuthState() {
    const user = getLoggedInUser();
    const navSignInBtns = document.querySelectorAll('.btn-nav-signin, #navSignInBtn');

    navSignInBtns.forEach(btn => {
      const span = btn.querySelector('span');

      if (user) {
        const userName = getCleanUserName(user);
        if (span) {
          span.textContent = userName;
          span.title = userName;
        }
        btn.setAttribute('title', `Signed in as ${userName}`);
        btn.setAttribute('aria-label', `Account: ${userName}`);
        btn.classList.add('is-logged-in');

        // Prevent navigation to login page when clicked; toggle account dropdown
        btn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleUserMenu(btn, user, userName);
        };
      } else {
        if (span) {
          span.textContent = 'SIGN IN';
        }
        btn.setAttribute('title', 'Sign In');
        btn.setAttribute('aria-label', 'Sign In to client portal');
        btn.setAttribute('href', 'signin.html');
        btn.classList.remove('is-logged-in');
        btn.onclick = null;
      }
    });

    // If on signin.html and logged in, show active session card
    if (window.location.pathname.includes('signin.html') && user) {
      const signinCard = document.querySelector('.signin-card');
      const form = document.getElementById('signinForm');
      if (signinCard && form && !document.getElementById('signinActiveBanner')) {
        const userName = getCleanUserName(user);
        const banner = document.createElement('div');
        banner.id = 'signinActiveBanner';
        banner.className = 'alert alert-info d-flex flex-column align-items-center text-center mb-3';
        banner.innerHTML = `
          <div class="d-flex align-items-center justify-content-center mb-1">
            <i class="bi bi-person-check-fill text-gold me-2 fs-5"></i>
            <strong>Active Session: ${escapeHtml(userName)}</strong>
          </div>
          <div class="small text-muted mb-2">You are signed in. Would you like to go to the Home page or Sign Out?</div>
          <div class="d-flex gap-2 justify-content-center">
            <a href="index.html" class="btn btn-gold btn-sm px-3"><i class="bi bi-house-door"></i> Home</a>
            <button type="button" id="signinBannerSignOutBtn" class="btn btn-outline-secondary btn-sm px-3"><i class="bi bi-box-arrow-right"></i> Sign Out</button>
          </div>
        `;
        signinCard.insertBefore(banner, form);
        const bannerSignOut = banner.querySelector('#signinBannerSignOutBtn');
        if (bannerSignOut) {
          bannerSignOut.addEventListener('click', () => {
            localStorage.removeItem('avera_logged_in_user');
            localStorage.removeItem('currentUser');
            banner.remove();
            updateNavbarAuthState();
          });
        }
      }
    }
  }

  function toggleUserMenu(btn, user, userName) {
    const existingMenu = document.querySelector('.nav-user-dropdown-menu');
    if (existingMenu) {
      existingMenu.remove();
      return;
    }

    const menu = document.createElement('div');
    menu.className = 'nav-user-dropdown-menu';
    menu.setAttribute('role', 'menu');
    menu.innerHTML = `
      <div class="user-menu-header">
        <div class="user-menu-avatar">
          <i class="bi bi-person-fill"></i>
        </div>
        <div class="user-menu-details">
          <div class="user-menu-name">${escapeHtml(userName)}</div>
          <div class="user-menu-badge">VERIFIED CLIENT</div>
        </div>
      </div>
      <div class="user-menu-divider"></div>
      <button class="user-menu-item user-menu-logout" id="userMenuLogoutBtn" type="button">
        <i class="bi bi-box-arrow-right"></i>
        <span>Sign Out</span>
      </button>
    `;

    const parent = btn.parentElement || document.body;
    parent.appendChild(menu);

    const logoutBtn = menu.querySelector('#userMenuLogoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        localStorage.removeItem('avera_logged_in_user');
        localStorage.removeItem('currentUser');
        menu.remove();
        updateNavbarAuthState();
        if (window.location.pathname.includes('signin.html') || window.location.pathname.includes('signup.html')) {
          window.location.reload();
        }
      });
    }

    const handleOutsideClick = (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', handleOutsideClick);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 10);
  }

  // Initialize navbar authentication state on page load
  updateNavbarAuthState();
});

