/**
 * AVÉRA CINEMA — Dynamic Product Details Page Controller
 * Reads URL query param ?id=<slug> and renders full product specs, features,
 * related products, and pre-populates enquiry forms.
 */

(function () {
  'use strict';

  function getRequestedProductId() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryId = urlParams.get('id') || urlParams.get('product');
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

  function resolveProduct() {
    const rawId = getRequestedProductId();
    let product = findProductById(rawId);

    // Fallback gracefully to the first product if not found or no ID provided
    if (!product && typeof AV_PRODUCTS !== 'undefined' && AV_PRODUCTS.length > 0) {
      product = AV_PRODUCTS[0];
    }
    return product;
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

  function renderProductDetails(product) {
    if (!product) return;

    // 1. Update Document Title and Meta Tags
    document.title = 'Home Theatre Installation';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${product.name} — ${product.shortDesc}`);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${product.name} | AVÉRA Cinema`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', product.shortDesc);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', product.image);

    // 2. Breadcrumbs
    const bcCategory = document.getElementById('breadcrumbCategory');
    if (bcCategory) {
      bcCategory.textContent = product.category;
      bcCategory.href = `products.html?category=${product.categorySlug}`;
    }

    const bcCurrent = document.getElementById('breadcrumbCurrent');
    if (bcCurrent) {
      bcCurrent.textContent = product.shortName || product.name;
    }

    // 3. Hero / Main Showcase Information
    const brandTag = document.getElementById('productBrandTag');
    if (brandTag) brandTag.textContent = product.brand;

    const categoryTag = document.getElementById('productCategoryTag');
    if (categoryTag) categoryTag.textContent = product.category;

    const badgePill = document.getElementById('productBadgePill');
    if (badgePill) badgePill.textContent = product.badge;

    const mainTitle = document.getElementById('productMainTitle');
    if (mainTitle) mainTitle.textContent = product.name;

    const dealerBadge = document.getElementById('productDealerBadge');
    if (dealerBadge) dealerBadge.textContent = product.dealerBadge;

    const tagline = document.getElementById('productTagline');
    if (tagline) tagline.textContent = product.tagline || product.shortDesc;

    const priceInfo = document.getElementById('productPriceInfo');
    if (priceInfo) priceInfo.textContent = product.priceInfo;

    // 4. Large Product Image
    const mainImg = document.getElementById('productMainImage');
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    // 5. Full Product Description Paragraphs
    const descContainer = document.getElementById('productFullDesc');
    if (descContainer && product.fullDesc) {
      descContainer.innerHTML = product.fullDesc
        .map(paragraph => `<p class="product-narrative-p">${escapeHtml(paragraph)}</p>`)
        .join('');
    }

    // 6. Specifications Table
    const specsTableBody = document.getElementById('productSpecsBody');
    if (specsTableBody && product.specs) {
      specsTableBody.innerHTML = product.specs
        .map(spec => `
          <tr class="spec-row">
            <td class="spec-label-col">
              <i class="bi bi-chevron-right text-gold me-2"></i>
              <strong>${escapeHtml(spec.label)}</strong>
            </td>
            <td class="spec-value-col">${escapeHtml(spec.value)}</td>
          </tr>
        `).join('');
    }

    // 7. Highlighted Features Grid
    const featuresGrid = document.getElementById('productFeaturesGrid');
    if (featuresGrid && product.features) {
      featuresGrid.innerHTML = product.features
        .map(feat => `
          <div class="col-md-6 col-lg-4">
            <div class="product-feature-card h-100">
              <div class="feature-icon-wrap mb-3">
                <i class="bi ${escapeHtml(feat.icon || 'bi-patch-check')}"></i>
              </div>
              <h4 class="feature-card-title">${escapeHtml(feat.title)}</h4>
              <p class="feature-card-desc mb-0">${escapeHtml(feat.desc)}</p>
            </div>
          </div>
        `).join('');
    }

    // 8. CTA Buttons linking to contact or opening modal
    const bookDemoLink = document.getElementById('bookDemoLink');
    if (bookDemoLink) {
      bookDemoLink.href = `contact.html?product=${encodeURIComponent(product.id)}`;
    }

    // 9. Pre-fill enquiry modal
    const modalProductName = document.getElementById('enquiryProductName');
    const modalProductInput = document.getElementById('enquiryProductInput');
    if (modalProductName) modalProductName.textContent = product.name;
    if (modalProductInput) modalProductInput.value = product.name;

    // 10. Related Products
    renderRelatedProducts(product);
  }

  function renderRelatedProducts(currentProduct) {
    const container = document.getElementById('relatedProductsGrid');
    if (!container || typeof AV_PRODUCTS === 'undefined') return;

    // Pick 3 related products
    let related = [];
    if (currentProduct.relatedIds && currentProduct.relatedIds.length > 0) {
      currentProduct.relatedIds.forEach(id => {
        const p = findProductById(id);
        if (p && p.id !== currentProduct.id && !related.some(item => item.id === p.id)) {
          related.push(p);
        }
      });
    }

    // If not enough related products, backfill from other products
    if (related.length < 3) {
      AV_PRODUCTS.forEach(p => {
        if (p.id !== currentProduct.id && !related.some(item => item.id === p.id)) {
          related.push(p);
        }
      });
    }

    // Take top 3
    related = related.slice(0, 3);

    container.innerHTML = related.map(rel => `
      <div class="col-md-6 col-lg-4">
        <div class="product-card related-product-card" data-product-url="product-details.html?id=${escapeHtml(rel.id)}">
          <a href="product-details.html?id=${escapeHtml(rel.id)}" class="product-card-img-wrap d-block text-decoration-none">
            <span class="product-brand-tag">${escapeHtml(rel.brand)}</span>
            <span class="product-category-tag">${escapeHtml(rel.category)}</span>
            <img src="${escapeHtml(rel.image)}" alt="${escapeHtml(rel.name)}" loading="lazy">
          </a>
          <div class="product-card-body">
            <h3 class="product-name">
              <a href="product-details.html?id=${escapeHtml(rel.id)}" class="product-title-link text-decoration-none">
                ${escapeHtml(rel.shortName || rel.name)}
              </a>
            </h3>
            <p class="product-desc">
              ${escapeHtml(rel.shortDesc)}
            </p>
            <div class="product-card-footer">
              <span class="small text-secondary">
                <i class="bi bi-shield-check text-gold me-1"></i> Authorized Dealer
              </span>
              <a href="product-details.html?id=${escapeHtml(rel.id)}" class="btn btn-gold btn-sm-custom btn-enquire-product">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach card click handlers to related product cards
    container.querySelectorAll('.product-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // If user didn't click directly on an <a> tag, navigate to the target
        if (!e.target.closest('a')) {
          const url = card.getAttribute('data-product-url');
          if (url) window.location.href = url;
        }
      });
    });
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    const product = resolveProduct();
    if (product) {
      renderProductDetails(product);
    }

    // Handle Enquiry Form Submission
    const enquiryForm = document.getElementById('productEnquiryForm');
    const enquiryModalEl = document.getElementById('productEnquiryModal');
    const successModalEl = document.getElementById('consultationSuccessModal');

    if (enquiryForm) {
      enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!enquiryForm.checkValidity()) {
          e.stopPropagation();
          enquiryForm.classList.add('was-validated');
          return;
        }

        const currentProduct = resolveProduct();
        const productName = currentProduct ? currentProduct.name : 'Selected Equipment';

        // Hide enquiry modal
        if (enquiryModalEl && typeof bootstrap !== 'undefined') {
          const bsEnquiry = bootstrap.Modal.getInstance(enquiryModalEl) || new bootstrap.Modal(enquiryModalEl);
          bsEnquiry.hide();
        }

        // Update and show success modal
        if (successModalEl && typeof bootstrap !== 'undefined') {
          const successTitle = successModalEl.querySelector('#successModalTitle');
          const successMsg = successModalEl.querySelector('#successModalMessage');
          if (successTitle) successTitle.textContent = 'Enquiry Received';
          if (successMsg) {
            successMsg.textContent = `Thank you! Our acoustic specialists will review your project requirements and reach out with official dealership specifications and pricing for ${productName}.`;
          }
          const bsSuccess = new bootstrap.Modal(successModalEl);
          bsSuccess.show();
        }

        enquiryForm.reset();
        enquiryForm.classList.remove('was-validated');
      });
    }

    // Listen for hashchange if user navigates within the page using hash anchors
    window.addEventListener('hashchange', () => {
      const p = resolveProduct();
      if (p) {
        renderProductDetails(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
})();
