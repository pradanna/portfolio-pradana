<script lang="ts">
  import { servicesData } from '../../data/services';
  import GeometricMotif from '../common/GeometricMotif.svelte';

  const motifTypeMap: Record<string, 'service-hris' | 'service-pos' | 'service-erp' | 'service-custom'> = {
    'institution-system': 'service-hris',
    'business-operations': 'service-erp',
    'mobile-apps': 'service-pos',
    'custom-system': 'service-custom'
  };
</script>

<section class="section services-section" id="layanan">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Layanan Spesialis</span>
      <h2>Yang bisa kami bangun untuk bisnis Anda.</h2>
      <p class="section-desc">
        Fokus pada 4 sistem inti operasional dan digital. Tanpa biaya lisensi berulang per-user dan disesuaikan 100% dengan alur kerja nyata Anda.
      </p>
    </div>

    <div class="services-grid">
      {#each servicesData as service}
        <article class="service-card">
          <div class="service-icon-box" aria-hidden="true">
            <GeometricMotif type={motifTypeMap[service.id] || 'service-custom'} />
          </div>

          <div class="service-body">
            <h3 class="service-title">{service.title}</h3>
            <p class="service-lead">{service.shortDesc}</p>
            <p class="service-detail">{service.detail}</p>

            <!-- Fitur Utama -->
            <div class="feature-pills">
              {#each service.features as feature}
                <div class="feature-pill">
                  <span class="pill-dot"></span>
                  <span>{feature}</span>
                </div>
              {/each}
            </div>

            <!-- Bukti Klien Nyata -->
            {#if service.proofs && service.proofs.length > 0}
              <div class="proofs-box">
                <span class="proofs-label">Sudah kami selesaikan:</span>
                <div class="proofs-tags">
                  {#each service.proofs as proof}
                    <span class="proof-tag">{proof}</span>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-section {
    background-color: var(--bg-primary);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .service-card {
    background-color: var(--bg-surface);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-lg);
    padding: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-subtle);
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent), #3B82F6);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  .service-card:hover {
    border-color: rgba(37, 99, 235, 0.35);
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    background-color: var(--bg-white);
  }

  .service-card:hover::before {
    opacity: 1;
  }

  .service-icon-box {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border: 1px solid #BFDBFE;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
  }

  .service-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    height: 100%;
  }

  .service-title {
    color: var(--text-main);
  }

  .service-lead {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.4;
  }

  .service-detail {
    font-size: 0.9375rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .feature-pills {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 1px dashed var(--color-divider);
  }

  .feature-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  .pill-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-primary);
    flex-shrink: 0;
  }

  /* Proofs Badge Box */
  .proofs-box {
    margin-top: auto;
    padding-top: 1.15rem;
    border-top: 1px solid var(--color-divider-subtle);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .proofs-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-light);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .proofs-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .proof-tag {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-primary);
    background-color: var(--color-primary-soft);
    border: 1px solid rgba(51, 78, 104, 0.15);
    padding: 3px 10px;
    border-radius: var(--radius-full);
    line-height: 1.3;
    transition: all var(--transition-fast);
  }

  .service-card:hover .proof-tag {
    background-color: #DBEAFE;
    border-color: #93C5FD;
  }

  @media (max-width: 860px) {
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.75rem;
    }
  }
</style>
