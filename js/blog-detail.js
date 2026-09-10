/**
 * AVÉRA CINEMA — Dynamic Blog Article Detail Controller
 * Reads URL query param ?id=<slug> and renders the complete article,
 * author bio, sidebar widgets, related articles, and comment interaction.
 */

(function () {
  'use strict';

  function getRequestedArticleId() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryId = urlParams.get('id') || urlParams.get('article');
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

  function resolveArticle() {
    const rawId = getRequestedArticleId();
    let post = null;
    if (typeof findBlogPostById === 'function') {
      post = findBlogPostById(rawId);
    }
    // Fallback to first article if not found
    if (!post && typeof AV_BLOG_POSTS !== 'undefined' && AV_BLOG_POSTS.length > 0) {
      post = AV_BLOG_POSTS[0];
    }
    return post;
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

  function renderArticle(post) {
    if (!post) return;

    // 1. Title & Metadata
    document.title = `${post.title} — Home Theatre Installation`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.summary);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${post.title} | AVÉRA Cinema`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', post.summary);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', post.image);

    // 2. Breadcrumbs
    const bcCategory = document.getElementById('breadcrumbCategory');
    if (bcCategory) {
      bcCategory.textContent = post.category;
      bcCategory.href = `blog.html?category=${post.categorySlug}`;
    }

    const bcCurrent = document.getElementById('breadcrumbCurrent');
    if (bcCurrent) {
      bcCurrent.textContent = post.title;
    }

    // 3. Article Header & Meta Info
    const articleCategory = document.getElementById('articleCategoryBadge');
    if (articleCategory) articleCategory.textContent = post.category;

    const articleTitle = document.getElementById('articleMainTitle');
    if (articleTitle) articleTitle.textContent = post.title;

    const authorName = document.getElementById('articleAuthorName');
    if (authorName) authorName.textContent = post.author.name;

    const authorRole = document.getElementById('articleAuthorRole');
    if (authorRole) authorRole.textContent = post.author.role;

    const authorAvatar = document.getElementById('articleAuthorAvatar');
    if (authorAvatar) {
      authorAvatar.src = post.author.avatar;
      authorAvatar.alt = post.author.name;
    }

    const articleDate = document.getElementById('articlePublishDate');
    if (articleDate) articleDate.textContent = post.date;

    const articleReadTime = document.getElementById('articleReadTime');
    if (articleReadTime) articleReadTime.textContent = post.readTime;

    // 4. Featured Hero Image
    const featuredImgWrap = document.getElementById('articleHeroImageWrap');
    if (featuredImgWrap) {
      const baseWebp = post.image;
      const mdWebp = baseWebp.replace(/\.webp$/, '-md.webp');
      const fallbackJpg = baseWebp.replace(/\.webp$/, '.jpg');
      featuredImgWrap.innerHTML = `
        <picture>
          <source type="image/webp" srcset="${mdWebp} 640w, ${baseWebp} 1200w" sizes="(max-width: 768px) 100vw, 66vw">
          <img src="${fallbackJpg}" alt="${escapeHtml(post.title)}" class="w-100 h-100 object-fit-cover rounded" width="1200" height="700" loading="eager" fetchpriority="high" decoding="async">
        </picture>
      `;
    }

    // 5. Article Content Body
    const contentBody = document.getElementById('articleContentBody');
    if (contentBody) {
      contentBody.innerHTML = post.content;
    }

    // 6. Tags
    const tagsWrap = document.getElementById('articleTagsList');
    if (tagsWrap && Array.isArray(post.tags)) {
      tagsWrap.innerHTML = post.tags
        .map(tag => `<a href="blog.html?tag=${encodeURIComponent(tag)}" class="badge rounded-pill bg-warm-cream text-secondary border border-beige px-3 py-2 text-decoration-none me-2 mb-2">${escapeHtml(tag)}</a>`)
        .join('');
    }

    // 7. Author Bio Box
    const authorBioBox = document.getElementById('articleAuthorBioBox');
    if (authorBioBox) {
      authorBioBox.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${post.author.avatar}" alt="${escapeHtml(post.author.name)}" class="rounded-circle object-fit-cover border border-gold" width="64" height="64">
          <div>
            <h4 class="h6 fw-semibold text-dark-primary mb-1">${escapeHtml(post.author.name)}</h4>
            <div class="small text-gold mb-1">${escapeHtml(post.author.role)}</div>
            <p class="small text-secondary mb-0">Specializing in reference home cinema acoustic architecture, spatial transducer alignment, and CEDIA compliance.</p>
          </div>
        </div>
      `;
    }

    // 8. Sidebar Widgets (Recent Articles & Categories)
    const recentPostsList = document.getElementById('sidebarRecentPosts');
    if (recentPostsList && typeof AV_BLOG_POSTS !== 'undefined') {
      recentPostsList.innerHTML = AV_BLOG_POSTS
        .filter(b => b.id !== post.id)
        .slice(0, 4)
        .map(b => `
          <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-beige">
            <img src="${b.image}" alt="${escapeHtml(b.title)}" class="rounded object-fit-cover flex-shrink-0" width="60" height="60" loading="lazy">
            <div>
              <a href="blog-details.html?id=${b.id}" class="text-dark-primary fw-semibold small text-decoration-none d-block line-clamp-2 hover-gold">${escapeHtml(b.title)}</a>
              <span class="small text-secondary" style="font-size: 0.75rem;">${escapeHtml(b.date)}</span>
            </div>
          </div>
        `)
        .join('');
    }

    // 9. Related Articles Grid (Bottom)
    const relatedGrid = document.getElementById('relatedArticlesGrid');
    if (relatedGrid && typeof AV_BLOG_POSTS !== 'undefined') {
      const related = AV_BLOG_POSTS
        .filter(b => b.id !== post.id && (b.categorySlug === post.categorySlug || true))
        .slice(0, 3);

      relatedGrid.innerHTML = related
        .map(b => `
          <div class="col-md-4">
            <div class="blog-card h-100 rounded bg-card border border-beige overflow-hidden d-flex flex-column">
              <div class="blog-card-img-wrap position-relative" style="height: 180px;">
                <img src="${b.image}" alt="${escapeHtml(b.title)}" class="w-100 h-100 object-fit-cover" loading="lazy">
              </div>
              <div class="p-4 d-flex flex-column flex-grow-1">
                <span class="small text-secondary mb-1">${escapeHtml(b.date)} &bull; ${escapeHtml(b.readTime)}</span>
                <h3 class="h6 fw-semibold text-dark-primary mb-2 line-clamp-2">${escapeHtml(b.title)}</h3>
                <p class="small text-secondary mb-4 flex-grow-1 line-clamp-2">${escapeHtml(b.summary)}</p>
                <a href="blog-details.html?id=${b.id}" class="btn btn-outline-gold btn-sm w-100">
                  Read Article <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        `)
        .join('');
    }

    // 10. Comment Form Handler
    const commentForm = document.getElementById('articleCommentForm');
    const commentAlert = document.getElementById('commentAlert');
    if (commentForm) {
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!commentForm.checkValidity()) {
          commentForm.classList.add('was-validated');
          return;
        }
        if (commentAlert) {
          commentAlert.className = 'alert alert-success mt-3';
          commentAlert.textContent = 'Thank you for your insight! Your comment has been submitted for moderation.';
          commentAlert.classList.remove('d-none');
          commentForm.reset();
          commentForm.classList.remove('was-validated');
          setTimeout(() => commentAlert.classList.add('d-none'), 6000);
        }
      });
    }
  }

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderArticle(resolveArticle());
    });
  } else {
    renderArticle(resolveArticle());
  }

})();
