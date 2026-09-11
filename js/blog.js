/**
 * AVÉRA CINEMA — Blog Listing Controller
 * Manages category filtering, live real-time search, tag filtering,
 * and responsive grid rendering for blog.html.
 */

(function () {
  'use strict';

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getInitialFiltersFromUrl() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const cat = urlParams.get('category');
      if (cat) currentCategory = cat.toLowerCase();

      const search = urlParams.get('search') || urlParams.get('q');
      if (search) currentSearchQuery = search.trim();
    } catch (e) {
      console.warn('URL parsing fallback:', e);
    }
  }

  function filterPosts() {
    if (typeof AV_BLOG_POSTS === 'undefined') return [];

    return AV_BLOG_POSTS.filter(post => {
      // Category match
      const matchesCategory = currentCategory === 'all' || 
        post.categorySlug.toLowerCase() === currentCategory.toLowerCase();

      // Search match
      const query = currentSearchQuery.toLowerCase();
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) || 
        post.summary.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.tags && post.tags.some(t => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }

  function renderPosts() {
    const grid = document.getElementById('blogGrid');
    const noResults = document.getElementById('blogNoResults');
    const countBadge = document.getElementById('blogCountBadge');
    if (!grid) return;

    const filtered = filterPosts();

    if (countBadge) {
      countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Article' : 'Articles'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (noResults) noResults.classList.remove('d-none');
      return;
    }

    if (noResults) noResults.classList.add('d-none');

    grid.innerHTML = filtered.map(post => {
      const baseW = post.image;
      const mdW = baseW.replace(/\.webp$/, '-md.webp');
      return `
        <div class="col-md-6 col-lg-4">
          <article class="blog-card h-100 rounded bg-card border border-beige overflow-hidden d-flex flex-column shadow-sm">
            <div class="blog-card-img-wrap position-relative" style="height: 220px;">
              <picture>
                <source type="image/webp" srcset="${mdW} 640w, ${baseW} 1200w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
                <img src="${baseW}" alt="${escapeHtml(post.title)}" class="w-100 h-100 object-fit-cover" width="640" height="440" loading="lazy" decoding="async">
              </picture>
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <div class="d-flex align-items-center gap-2 small text-secondary mb-2">
                <span><i class="bi bi-calendar3 me-1"></i>${escapeHtml(post.date)}</span>
                <span>&bull;</span>
                <span><i class="bi bi-clock me-1"></i>${escapeHtml(post.readTime)}</span>
              </div>
              <h2 class="h5 fw-semibold text-dark-primary mb-3 line-clamp-2">
                <a href="blog-details.html?id=${post.id}" class="text-dark-primary text-decoration-none hover-gold">${escapeHtml(post.title)}</a>
              </h2>
              <p class="small text-secondary mb-4 flex-grow-1 line-clamp-3">${escapeHtml(post.summary)}</p>
              <div class="blog-card-footer">
                <div class="blog-card-author">
                  <img src="${post.author.avatar}" alt="${escapeHtml(post.author.name)}" class="rounded-circle object-fit-cover flex-shrink-0" width="26" height="26" loading="lazy">
                  <span class="blog-card-author-name">${escapeHtml(post.author.name)}</span>
                </div>
                <a href="blog-details.html?id=${post.id}" class="btn btn-outline-gold btn-sm blog-card-btn">
                  <span>Read Guide</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join('');
  }

  function initControls() {
    getInitialFiltersFromUrl();

    // Category Buttons
    const categoryBtns = document.querySelectorAll('.blog-filter-btn');
    categoryBtns.forEach(btn => {
      const cat = btn.getAttribute('data-category') || 'all';
      if (cat.toLowerCase() === currentCategory.toLowerCase()) {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = cat;
        renderPosts();
      });
    });

    // Search Input
    const searchInput = document.getElementById('blogSearchInput');
    const searchIcon = document.querySelector('.blog-search-icon');
    if (searchInput) {
      if (currentSearchQuery) searchInput.value = currentSearchQuery;

      const performSearch = () => {
        currentSearchQuery = searchInput.value.trim();
        renderPosts();
      };

      searchInput.addEventListener('input', performSearch);

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          performSearch();
        }
      });

      if (searchIcon) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.setAttribute('role', 'button');
        searchIcon.setAttribute('aria-label', 'Search insights');
        searchIcon.setAttribute('tabindex', '0');
        searchIcon.addEventListener('click', () => {
          performSearch();
          searchInput.focus();
        });
        searchIcon.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            performSearch();
            searchInput.focus();
          }
        });
      }
    }

    // Newsletter Form Simulation
    const newsletterForm = document.getElementById('blogNewsletterForm');
    const newsletterAlert = document.getElementById('newsletterAlert');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!newsletterForm.checkValidity()) {
          newsletterForm.classList.add('was-validated');
          return;
        }
        if (newsletterAlert) {
          newsletterAlert.className = 'alert alert-success mt-2 py-2 small';
          newsletterAlert.textContent = 'Subscribed! You will receive our monthly cinema engineering guides.';
          newsletterAlert.classList.remove('d-none');
          newsletterForm.reset();
          newsletterForm.classList.remove('was-validated');
          setTimeout(() => newsletterAlert.classList.add('d-none'), 5000);
        }
      });
    }

    renderPosts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initControls);
  } else {
    initControls();
  }

})();
