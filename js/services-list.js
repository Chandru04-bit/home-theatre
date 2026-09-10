/**
 * AVÉRA CINEMA — Services Catalog Page Controller
 * Manages category filtering and dynamic rendering of all 15 official services on services.html.
 */

(function () {
  'use strict';

  let currentCategory = 'all';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function filterServices() {
    if (typeof AV_SERVICES === 'undefined') return [];
    if (currentCategory === 'all') return AV_SERVICES;
    return AV_SERVICES.filter(s => s.categorySlug.toLowerCase() === currentCategory.toLowerCase());
  }

  function renderServices() {
    const grid = document.getElementById('allServicesGrid');
    const countBadge = document.getElementById('servicesCountBadge');
    const allBtn = document.querySelector('.service-filter-btn[data-category="all"]');
    if (!grid) return;

    if (allBtn && typeof AV_SERVICES !== 'undefined') {
      allBtn.textContent = `All Services (${AV_SERVICES.length})`;
    }

    const services = filterServices();

    if (countBadge) {
      countBadge.textContent = `Showing ${services.length} of ${AV_SERVICES.length} Services`;
    }

    grid.innerHTML = services.map(service => {
      const baseW = service.image;
      const mdW = baseW.replace(/\.webp$/, '-md.webp');
      const fallbackJpg = baseW.replace(/\.webp$/, '.jpg');

      return `
        <div class="col-md-6 col-lg-4">
          <div class="service-card h-100 rounded bg-card border border-beige overflow-hidden d-flex flex-column shadow-sm transition-hover">
            <div class="service-card-img-wrapper position-relative" style="height: 220px;">
              <picture>
                <source type="image/webp" srcset="${mdW} 640w, ${baseW} 1200w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
                <img src="${fallbackJpg}" alt="${escapeHtml(service.name)}" class="w-100 h-100 object-fit-cover" width="640" height="440" loading="lazy" decoding="async">
              </picture>
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <span class="small text-gold text-uppercase fw-semibold mb-1">${escapeHtml(service.category)}</span>
              <h2 class="h5 fw-semibold text-dark-primary mb-2 line-clamp-2">
                <a href="service-details.html?service=${service.id}" class="text-dark-primary text-decoration-none hover-gold">${escapeHtml(service.name)}</a>
              </h2>
              <p class="small text-secondary mb-3 flex-grow-1 line-clamp-3">${escapeHtml(service.shortDesc)}</p>
              
              <ul class="list-unstyled small text-secondary mb-4">
                <li class="mb-1"><i class="bi bi-clock me-2 text-gold"></i>Timeline: <strong class="text-dark-primary">${escapeHtml(service.completionTime)}</strong></li>
                <li><i class="bi bi-shield-check me-2 text-gold"></i>Warranty: <strong class="text-dark-primary">${escapeHtml(service.warranty)}</strong></li>
              </ul>

              <div class="pt-3 border-top border-beige d-flex gap-2">
                <a href="service-details.html?service=${service.id}" class="btn btn-gold btn-sm flex-grow-1">
                  Explore Service <i class="bi bi-arrow-right ms-1"></i>
                </a>
                <a href="contact.html?service=${encodeURIComponent(service.name)}" class="btn btn-outline-gold btn-sm" title="Request Quote">
                  <i class="bi bi-chat-quote"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function initFilters() {
    const filterBtns = document.querySelectorAll('.service-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'all';
        renderServices();
      });
    });

    renderServices();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }

})();
