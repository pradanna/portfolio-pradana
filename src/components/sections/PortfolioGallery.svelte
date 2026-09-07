<script lang="ts">
  import { portfolioGalleryData } from '../../data/portfolioGallery';
  import type { PortfolioProject } from '../../types/portfolio';

  let selectedCategory = $state<string>('Semua');
  let activeSlideIndexes = $state<Record<string, number>>({});
  let activeModalProject = $state<PortfolioProject | null>(null);
  let activeModalImageIndex = $state<number>(0);

  const categories = [
    'Semua',
    'Sistem Bisnis',
    'Institusi & Pemerintahan',
    'Mobile Apps',
    'Sistem Custom'
  ];

  let filteredProjects = $derived(
    selectedCategory === 'Semua'
      ? portfolioGalleryData
      : portfolioGalleryData.filter((p) => p.category === selectedCategory)
  );

  function getSlideIndex(projectId: string): number {
    return activeSlideIndexes[projectId] ?? 0;
  }

  function nextSlide(projectId: string, total: number, e?: Event) {
    if (e) e.stopPropagation();
    const curr = getSlideIndex(projectId);
    activeSlideIndexes = {
      ...activeSlideIndexes,
      [projectId]: (curr + 1) % total
    };
  }

  function prevSlide(projectId: string, total: number, e?: Event) {
    if (e) e.stopPropagation();
    const curr = getSlideIndex(projectId);
    activeSlideIndexes = {
      ...activeSlideIndexes,
      [projectId]: (curr - 1 + total) % total
    };
  }

  function setSlide(projectId: string, index: number, e?: Event) {
    if (e) e.stopPropagation();
    activeSlideIndexes = {
      ...activeSlideIndexes,
      [projectId]: index
    };
  }

  function openPreview(project: PortfolioProject, imageIndex: number = 0) {
    activeModalProject = project;
    activeModalImageIndex = imageIndex;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    activeModalProject = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  function nextModalImage() {
    if (!activeModalProject) return;
    activeModalImageIndex = (activeModalImageIndex + 1) % activeModalProject.images.length;
  }

  function prevModalImage() {
    if (!activeModalProject) return;
    activeModalImageIndex =
      (activeModalImageIndex - 1 + activeModalProject.images.length) % activeModalProject.images.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && activeModalProject) {
      closeModal();
    }
    if (e.key === 'ArrowRight' && activeModalProject) {
      nextModalImage();
    }
    if (e.key === 'ArrowLeft' && activeModalProject) {
      prevModalImage();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="section portfolio-section" id="portfolio">
  <div class="container">
    <!-- Header -->
    <div class="section-header">
      <span class="section-label">Showcase & Portofolio Nyata</span>
      <h2>Hasil pengerjaan proyek klien & institusi.</h2>
      <p class="section-desc">
        Tangkapan layar asli dari aplikasi web, sistem ERP, kasir POS, dan mobile apps yang telah kami bangun dan selesaikan untuk operasional nyata.
      </p>
    </div>

    <!-- Category Filters -->
    <div class="filter-bar" role="tablist" aria-label="Filter Portofolio">
      {#each categories as category}
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === category}
          class="filter-pill"
          class:active={selectedCategory === category}
          onclick={() => (selectedCategory = category)}
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Projects Grid -->
    <div class="portfolio-grid">
      {#each filteredProjects as project (project.id)}
        {@const currentIdx = getSlideIndex(project.id)}
        <article class="portfolio-card {project.aspectRatio === 'mobile' ? 'mobile-card' : ''}">
          <!-- Slider Display -->
          <div
            class="slider-viewport"
            role="region"
            aria-label="Galeri gambar {project.title}"
          >
            <!-- Mockup Window Bar -->
            <div class="window-bar">
              <div class="window-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="window-client">{project.client}</span>
              <span class="slide-counter">{currentIdx + 1} / {project.images.length}</span>
            </div>

            <!-- Slides Track (Clickable to open modal) -->
            <button
              type="button"
              class="slides-container"
              aria-label="Perbesar gambar {project.title}"
              onclick={() => openPreview(project, currentIdx)}
            >
              {#each project.images as imgUrl, imgIdx}
                <div
                  class="slide-item"
                  class:active={currentIdx === imgIdx}
                  aria-hidden={currentIdx !== imgIdx}
                >
                  <img
                    src={imgUrl}
                    alt="{project.title} - Tampilan {imgIdx + 1}"
                    loading="lazy"
                    class="slide-image {project.aspectRatio === 'mobile' ? 'mobile-fit' : 'desktop-fit'}"
                  />
                </div>
              {/each}

              <!-- Hover Overlay Zoom Hint -->
              <div class="zoom-hint">
                <span class="zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
                <span>Klik untuk perbesar</span>
              </div>
            </button>

            <!-- Slider Controls (Prev / Next) -->
            {#if project.images.length > 1}
              <button
                type="button"
                class="slide-btn prev"
                aria-label="Gambar sebelumnya {project.title}"
                onclick={(e) => prevSlide(project.id, project.images.length, e)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <button
                type="button"
                class="slide-btn next"
                aria-label="Gambar berikutnya {project.title}"
                onclick={(e) => nextSlide(project.id, project.images.length, e)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              <!-- Dot Pagination -->
              <div class="slide-dots">
                {#each project.images as _, dotIdx}
                  <button
                    type="button"
                    class="slider-dot"
                    class:active={currentIdx === dotIdx}
                    aria-label="Tampilkan slide {dotIdx + 1}"
                    onclick={(e) => setSlide(project.id, dotIdx, e)}
                  ></button>
                {/each}
              </div>
            {/if}
          </div>

          <!-- Card Content Info -->
          <div class="card-info">
            <div class="card-meta">
              <span class="category-badge">{project.category}</span>
              <span class="type-badge">{project.badge}</span>
            </div>

            <h3 class="card-title">{project.title}</h3>
            <p class="card-desc">{project.description}</p>

            <!-- Tech Stack Tags -->
            <div class="stack-tags">
              {#each project.stack as tech}
                <span class="stack-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>

  <!-- Fullscreen Modal Preview -->
  {#if activeModalProject}
    <div
      class="modal-backdrop"
      onclick={closeModal}
      onkeydown={(e) => e.key === 'Escape' && closeModal()}
      role="presentation"
    >
      <div
        class="modal-content"
        role="dialog"
        tabindex="-1"
        aria-modal="true"
        aria-label="Detail {activeModalProject.title}"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => e.stopPropagation()}
      >
        <!-- Modal Top Bar -->
        <div class="modal-top">
          <div>
            <h4 class="modal-title">{activeModalProject.title}</h4>
            <p class="modal-sub">
              {activeModalProject.client} &bull; Gambar {activeModalImageIndex + 1} dari {activeModalProject.images.length}
            </p>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Tutup preview" onclick={closeModal}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Modal Main Image View -->
        <div class="modal-body {activeModalProject.aspectRatio === 'mobile' ? 'modal-mobile' : ''}">
          <img
            src={activeModalProject.images[activeModalImageIndex]}
            alt="{activeModalProject.title} - Preview"
            class="modal-image"
          />

          {#if activeModalProject.images.length > 1}
            <button
              type="button"
              class="modal-nav-btn prev"
              aria-label="Gambar sebelumnya"
              onclick={prevModalImage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              type="button"
              class="modal-nav-btn next"
              aria-label="Gambar berikutnya"
              onclick={nextModalImage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          {/if}
        </div>

        <!-- Modal Bottom Thumbnails -->
        <div class="modal-thumbs">
          {#each activeModalProject.images as thumbUrl, thumbIdx}
            <button
              type="button"
              class="modal-thumb-item"
              class:active={activeModalImageIndex === thumbIdx}
              onclick={() => (activeModalImageIndex = thumbIdx)}
            >
              <img src={thumbUrl} alt="Thumbnail {thumbIdx + 1}" />
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .portfolio-section {
    background-color: var(--bg-surface);
    border-top: 1px solid var(--color-divider);
    position: relative;
  }

  /* Filter pills */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    margin-bottom: 3rem;
  }

  .filter-pill {
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 1.15rem;
    border-radius: var(--radius-full);
    border: 1px solid var(--color-divider);
    background-color: var(--bg-white);
    color: var(--text-muted);
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .filter-pill:hover {
    color: var(--color-primary);
    border-color: rgba(37, 99, 235, 0.35);
    background-color: var(--bg-surface);
  }

  .filter-pill.active {
    background-color: var(--color-primary);
    color: #ffffff;
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  }

  /* Grid of Cards */
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
    }
  }

  @media (max-width: 680px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .portfolio-card {
    background-color: var(--bg-white);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-card);
    transition: all var(--transition-normal);
  }

  .portfolio-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(37, 99, 235, 0.3);
  }

  /* Slider Viewport */
  .slider-viewport {
    position: relative;
    background-color: #0F172A;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    width: 100%;
    border: none;
    padding: 0;
    text-align: left;
    display: block;
  }

  .window-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0B1120;
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .window-dots {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .dot.red { background-color: #EF4444; }
  .dot.yellow { background-color: #F59E0B; }
  .dot.green { background-color: #10B981; }

  .window-client {
    font-size: 0.72rem;
    font-weight: 500;
    color: #94A3B8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
  }

  .slide-counter {
    font-size: 0.6875rem;
    font-weight: 600;
    color: #38BDF8;
    background-color: rgba(56, 189, 248, 0.12);
    padding: 2px 7px;
    border-radius: 99px;
  }

  .slides-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #020617;
    overflow: hidden;
    border: none;
    padding: 0;
    margin: 0;
    display: block;
    cursor: pointer;
    text-align: left;
  }

  .mobile-card .slides-container {
    aspect-ratio: 16 / 10;
  }

  .slide-item {
    position: absolute;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s ease, transform 0.35s ease;
    transform: scale(0.98);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  .slide-item.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: 4px;
  }

  .slide-image.mobile-fit {
    object-fit: contain;
    background-color: #020617;
  }

  /* Zoom hint overlay on card hover */
  .zoom-hint {
    position: absolute;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #ffffff;
    font-size: 0.8125rem;
    font-weight: 500;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-fast);
  }

  .slider-viewport:hover .zoom-hint {
    opacity: 1;
  }

  .zoom-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--color-primary);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.5);
  }

  /* Slider buttons */
  .slide-btn {
    position: absolute;
    top: calc(50% + 14px);
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    transition: all var(--transition-fast);
    backdrop-filter: blur(4px);
  }

  .slide-btn:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    transform: translateY(-50%) scale(1.1);
  }

  .slide-btn.prev {
    left: 8px;
  }

  .slide-btn.next {
    right: 8px;
  }

  .slide-dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 6;
    background-color: rgba(11, 17, 32, 0.65);
    padding: 3px 8px;
    border-radius: 99px;
    backdrop-filter: blur(4px);
  }

  .slider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all var(--transition-fast);
  }

  .slider-dot.active {
    width: 14px;
    border-radius: 99px;
    background-color: var(--color-primary);
  }

  /* Card info */
  .card-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .category-badge {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    background-color: var(--bg-surface);
    border: 1px solid var(--color-divider);
    padding: 3px 8px;
    border-radius: 4px;
  }

  .type-badge {
    font-size: 0.6875rem;
    font-weight: 600;
    color: #10B981;
    background-color: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    padding: 3px 8px;
    border-radius: 4px;
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-main);
    line-height: 1.35;
    margin-bottom: 0.5rem;
  }

  .card-desc {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.5;
    margin-bottom: 1.25rem;
    flex: 1;
  }

  .stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: auto;
  }

  .stack-tag {
    font-size: 0.75rem;
    color: var(--text-muted);
    background-color: var(--bg-subtle);
    border: 1px solid var(--color-divider);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 500;
  }

  /* Modal Lightbox */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 999;
    background-color: rgba(2, 6, 23, 0.88);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.2s ease;
  }

  .modal-content {
    background-color: #0F172A;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radius-lg);
    width: 100%;
    max-width: 1040px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7);
  }

  .modal-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #0B1120;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .modal-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2px;
  }

  .modal-sub {
    font-size: 0.8125rem;
    color: #94A3B8;
  }

  .modal-close-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .modal-close-btn:hover {
    background-color: #EF4444;
    border-color: #EF4444;
    color: #ffffff;
  }

  .modal-body {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #020617;
    min-height: 360px;
    max-height: 60vh;
    overflow: hidden;
  }

  .modal-image {
    max-width: 100%;
    max-height: 58vh;
    object-fit: contain;
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .modal-mobile .modal-image {
    max-height: 58vh;
  }

  .modal-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .modal-nav-btn:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    transform: translateY(-50%) scale(1.08);
  }

  .modal-nav-btn.prev {
    left: 1.5rem;
  }

  .modal-nav-btn.next {
    right: 1.5rem;
  }

  .modal-thumbs {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.5rem;
    background-color: #0B1120;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    overflow-x: auto;
  }

  .modal-thumb-item {
    width: 72px;
    height: 46px;
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid transparent;
    cursor: pointer;
    padding: 0;
    background-color: #1E293B;
    opacity: 0.6;
    transition: all var(--transition-fast);
    flex-shrink: 0;
  }

  .modal-thumb-item:hover {
    opacity: 0.9;
  }

  .modal-thumb-item.active {
    opacity: 1;
    border-color: var(--color-primary);
  }

  .modal-thumb-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
