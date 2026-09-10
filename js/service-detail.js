/**
 * AVÉRA CINEMA — Dynamic Service Details Page Controller
 * Reads URL query param ?service=<slug> or ?id=<slug> and dynamically populates
 * specifications, deliverables, engineering process, FAQs, and related services.
 */

(function () {
  'use strict';

  function getRequestedServiceId() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryId = urlParams.get('service') || urlParams.get('id');
      if (queryId) return queryId;

      if (window.location.hash) {
        const hashId = window.location.hash.replace(/^#\/?/, '').trim();
        if (hashId) return hashId;
      }
    } catch (e) {
      console.warn('URL parsing fallback:', e);
    }
    return null;
  }

  function resolveService() {
    const rawId = getRequestedServiceId();
    let service = null;
    if (typeof findServiceById === 'function') {
      service = findServiceById(rawId);
    }
    // Fallback gracefully to the first service if not found
    if (!service && typeof AV_SERVICES !== 'undefined' && AV_SERVICES.length > 0) {
      service = AV_SERVICES[0];
    }
    return service;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderServiceDetails(service) {
    if (!service) return;

    // 1. Page Title & Meta Tags
    document.title = `${service.name} — Home Theatre Installation`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${service.name} by AVÉRA Cinema: ${service.shortDesc}`);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${service.name} | AVÉRA Cinema`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', service.shortDesc);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', service.image);

    // 2. Breadcrumbs
    const bcCategory = document.getElementById('breadcrumbCategory');
    if (bcCategory) {
      bcCategory.textContent = service.category;
      bcCategory.href = `services.html#${service.categorySlug}`;
    }

    const bcCurrent = document.getElementById('breadcrumbCurrent');
    if (bcCurrent) {
      bcCurrent.textContent = service.name;
    }

    // 3. Hero Showcase
    const heroCategory = document.getElementById('serviceHeroCategory');
    if (heroCategory) heroCategory.textContent = service.category;

    const heroBadge = document.getElementById('serviceHeroBadge');
    if (heroBadge) {
      if (service.badge) {
        heroBadge.textContent = service.badge;
        heroBadge.style.display = '';
      } else {
        heroBadge.textContent = '';
        heroBadge.style.display = 'none';
      }
    }

    const heroTitle = document.getElementById('serviceHeroTitle');
    if (heroTitle) heroTitle.textContent = service.name;

    const heroTagline = document.getElementById('serviceHeroTagline');
    if (heroTagline) heroTagline.textContent = service.tagline;

    const priceTier = document.getElementById('servicePriceTier');
    if (priceTier) priceTier.textContent = service.priceTier;

    const completionTime = document.getElementById('serviceCompletionTime');
    if (completionTime) completionTime.textContent = service.completionTime;

    const warranty = document.getElementById('serviceWarranty');
    if (warranty) warranty.textContent = service.warranty;

    // CTA Consultation Link
    const bookCta = document.getElementById('serviceBookCta');
    if (bookCta) {
      bookCta.href = `contact.html?service=${encodeURIComponent(service.name)}`;
    }

    // 4. Main Hero Image / Picture
    const imgStage = document.getElementById('serviceImageStage');
    if (imgStage) {
      const baseWebp = service.image;
      const mdWebp = baseWebp.replace(/\.webp$/, '-md.webp');
      const fallbackJpg = baseWebp.replace(/\.webp$/, '.jpg');
      imgStage.innerHTML = `
        <picture>
          <source type="image/webp" srcset="${mdWebp} 640w, ${baseWebp} 1200w" sizes="(max-width: 768px) 100vw, 50vw">
          <img id="serviceMainImage" src="${fallbackJpg}" alt="${escapeHtml(service.name)}" class="w-100 h-100 object-fit-cover rounded" width="1200" height="896" loading="eager" fetchpriority="high" decoding="async">
        </picture>
        <div class="intro-badge-overlay">
          ${service.badge ? `<span class="d-block text-gold fw-bold small text-uppercase">${escapeHtml(service.badge)}</span>` : ''}
          <span class="text-dark-primary fw-semibold small">${escapeHtml(service.tagline)}</span>
        </div>
      `;
    }

    // 5. Narrative Description Paragraphs
    const narrativeContainer = document.getElementById('serviceNarrative');
    if (narrativeContainer && Array.isArray(service.fullDesc)) {
      narrativeContainer.innerHTML = service.fullDesc
        .map((p, idx) => `<p class="${idx === 0 ? 'lead fw-medium text-dark-primary' : 'text-secondary'} mb-3">${escapeHtml(p)}</p>`)
        .join('');
    }

    // 6. Deliverables List
    const deliverablesContainer = document.getElementById('serviceDeliverablesList');
    if (deliverablesContainer && Array.isArray(service.deliverables)) {
      deliverablesContainer.innerHTML = service.deliverables
        .map(item => `
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-check-circle-fill text-gold me-2 fs-5 flex-shrink-0"></i>
            <span class="text-dark-primary">${escapeHtml(item)}</span>
          </li>
        `)
        .join('');
    }

    // 7. Key Features Grid
    const featuresContainer = document.getElementById('serviceFeaturesGrid');
    if (featuresContainer && Array.isArray(service.features)) {
      featuresContainer.innerHTML = service.features
        .map(feat => `
          <div class="col-md-6 col-lg-3">
            <div class="service-feature-card h-100 p-4 rounded bg-card border border-beige">
              <div class="feature-icon-wrap mb-3 text-gold fs-3">
                <i class="bi ${escapeHtml(feat.icon || 'bi-shield-check')}"></i>
              </div>
              <h3 class="h6 fw-semibold text-dark-primary mb-2">${escapeHtml(feat.title)}</h3>
              <p class="small text-secondary mb-0">${escapeHtml(feat.desc)}</p>
            </div>
          </div>
        `)
        .join('');
    }

    // 8. 4-Phase Installation Process
    const processContainer = document.getElementById('serviceProcessTimeline');
    if (processContainer && Array.isArray(service.processSteps)) {
      processContainer.innerHTML = service.processSteps
        .map((step, idx) => `
          <div class="col-md-6 col-lg-3">
            <div class="process-phase-card h-100 p-4 rounded bg-card border border-beige position-relative">
              <div class="phase-number-badge mb-2 text-gold small text-uppercase fw-bold">${escapeHtml(step.phase || `Phase 0${idx + 1}`)}</div>
              <h3 class="h6 fw-semibold text-dark-primary mb-2">${escapeHtml(step.title)}</h3>
              <p class="small text-secondary mb-0">${escapeHtml(step.desc)}</p>
            </div>
          </div>
        `)
        .join('');
    }

    // 9. Technical Specifications Table
    const specsContainer = document.getElementById('serviceSpecsTable');
    if (specsContainer && Array.isArray(service.specs)) {
      specsContainer.innerHTML = service.specs
        .map(spec => `
          <tr>
            <th class="py-3 px-3 text-dark-primary fw-semibold" style="width: 35%;">${escapeHtml(spec.label)}</th>
            <td class="py-3 px-3 text-secondary">${escapeHtml(spec.value)}</td>
          </tr>
        `)
        .join('');
    }

    // 10. FAQ Accordion
    const faqContainer = document.getElementById('serviceFaqAccordion');
    if (faqContainer && Array.isArray(service.faqs)) {
      faqContainer.innerHTML = service.faqs
        .map((faq, idx) => `
          <div class="accordion-item border border-beige mb-3 rounded overflow-hidden">
            <h2 class="accordion-header" id="faqHeading${idx}">
              <button class="accordion-button ${idx !== 0 ? 'collapsed' : ''} text-dark-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faqCollapse${idx}">
                ${escapeHtml(faq.q)}
              </button>
            </h2>
            <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" aria-labelledby="faqHeading${idx}" data-bs-parent="#serviceFaqAccordion">
              <div class="accordion-body text-secondary">
                ${escapeHtml(faq.a)}
              </div>
            </div>
          </div>
        `)
        .join('');
    }

    // 11. Related Services
    const relatedContainer = document.getElementById('relatedServicesGrid');
    if (relatedContainer && Array.isArray(service.relatedServices)) {
      const relatedCards = service.relatedServices
        .map(slug => findServiceById(slug))
        .filter(Boolean)
        .slice(0, 3)
        .map(rel => {
          const baseW = rel.image;
          const mdW = baseW.replace(/\.webp$/, '-md.webp');
          return `
            <div class="col-md-4">
              <div class="service-card h-100 rounded bg-card border border-beige overflow-hidden d-flex flex-column">
                <div class="service-card-img-wrapper position-relative" style="height: 200px;">
                  <picture>
                    <source type="image/webp" srcset="${mdW} 640w, ${baseW} 1200w" sizes="(max-width: 768px) 100vw, 33vw">
                    <img src="${baseW}" alt="${escapeHtml(rel.name)}" class="w-100 h-100 object-fit-cover" width="640" height="480" loading="lazy" decoding="async">
                  </picture>
                </div>
                <div class="p-4 d-flex flex-column flex-grow-1">
                  <span class="small text-gold text-uppercase fw-semibold mb-1">${escapeHtml(rel.category)}</span>
                  <h3 class="h6 fw-semibold text-dark-primary mb-2">${escapeHtml(rel.name)}</h3>
                  <p class="small text-secondary mb-4 flex-grow-1">${escapeHtml(rel.shortDesc)}</p>
                  <a href="service-details.html?service=${rel.id}" class="btn btn-outline-gold btn-sm w-100">
                    Explore Service <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          `;
        })
        .join('');

      relatedContainer.innerHTML = relatedCards;
    }
  }

  // Execute on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderServiceDetails(resolveService());
    });
  } else {
    renderServiceDetails(resolveService());
  }

})();
