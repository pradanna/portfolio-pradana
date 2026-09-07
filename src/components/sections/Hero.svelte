<script lang="ts">
  import Button from '../common/Button.svelte';
  import GeometricMotif from '../common/GeometricMotif.svelte';
</script>

<section class="section hero-section" id="hero">
  <div class="container hero-container">
    <div class="hero-content">

      <!-- Main Headline in Fraunces -->
      <h1 class="hero-title">
        Sistem custom yang bikin bisnis Anda jalan lebih rapi.
      </h1>

      <!-- Body Copy without tech buzzwords -->
      <p class="hero-description">
        Web, mobile, atau platform custom — dibangun sesuai alur kerja Anda, bukan template kaku yang memaksa tim Anda beradaptasi.
      </p>

      <!-- Action Buttons -->
      <div class="hero-actions">
        <Button variant="primary" size="lg" href="#kontak">
          Konsultasi Gratis
        </Button>
        <Button variant="outline" size="lg" href="#portfolio">
          Lihat Portofolio
        </Button>
      </div>

      <!-- Quick Trust Highlights -->
      <div class="hero-metrics">
        <div class="metric-item">
          <span class="metric-number">100%</span>
          <span class="metric-label">Kustomisasi sesuai SOP Anda</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-number">0</span>
          <span class="metric-label">Biaya lisensi per-user bulanan</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-number">Langsung</span>
          <span class="metric-label">Ditangani oleh engineer senior</span>
        </div>
      </div>
    </div>

    <!-- Hero Visual: Floating Geometric System Logic Motif -->
    <div class="hero-visual" aria-hidden="true">
      <GeometricMotif type="hero" />
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-bottom: clamp(3rem, 6vw, 5rem);
    overflow: hidden;
    position: relative;
    background-color: var(--bg-primary);
    background-image: 
      radial-gradient(ellipse 60% 50% at 80% 25%, rgba(37, 99, 235, 0.09), transparent 70%),
      radial-gradient(ellipse 40% 40% at 10% 75%, rgba(51, 78, 104, 0.05), transparent 70%),
      radial-gradient(rgba(51, 78, 104, 0.12) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 28px 28px;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


  .hero-title {
    margin-bottom: 1.5rem;
    color: var(--text-main);
  }

  .hero-description {
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 2.25rem;
    max-width: 560px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .hero-metrics {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-divider);
    width: 100%;
    max-width: 600px;
  }

  .metric-item {
    display: flex;
    flex-direction: column;
  }

  .metric-number {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.2;
  }

  .metric-label {
    font-size: 0.8125rem;
    color: var(--text-light);
    margin-top: 2px;
  }

  .metric-divider {
    width: 1px;
    height: 32px;
    background-color: var(--color-divider);
  }

  .hero-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero-visual::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0) 70%);
    filter: blur(40px);
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 960px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .hero-visual {
      order: -1;
      justify-content: flex-start;
    }

    .hero-metrics {
      flex-wrap: wrap;
      gap: 1rem 1.5rem;
    }

    .metric-divider {
      display: none;
    }
  }
</style>
