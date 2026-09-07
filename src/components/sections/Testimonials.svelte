<script lang="ts">
  import { testimonialsData } from '../../data/testimonials';
</script>

<section class="section testimonials-section" id="testimoni">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Suara Klien</span>
      <h2>Dampak nyata yang dirasakan tim lapangan.</h2>
      <p class="section-desc">
        Bukan testimoni basa-basi. Ini adalah perubahan cara kerja yang dialami pemilik usaha dan manager operasional setelah sistem berjalan.
      </p>
    </div>

    <div class="testimonials-grid">
      {#each testimonialsData as item}
        <figure class="testimonial-card">
          <div class="metric-tag">
            <span class="metric-accent">Hasil:</span> {item.impactMetric}
          </div>

          <blockquote class="testimonial-quote">
            "{item.quote}"
          </blockquote>

          <figcaption class="testimonial-author">
            <div class="author-avatar-chip">
              {item.name.charAt(0)}
            </div>
            <div class="author-info">
              <span class="author-name">{item.name}</span>
              <span class="author-role">{item.role}, {item.company}</span>
            </div>
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials-section {
    background-color: var(--bg-surface);
    border-top: 1px solid var(--color-divider);
    border-bottom: 1px solid var(--color-divider);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  .testimonial-card {
    background-color: var(--bg-primary);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-lg);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    transition: all var(--transition-normal);
  }

  .testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card);
    border-color: rgba(61, 90, 128, 0.35);
  }

  .metric-tag {
    font-size: 0.8125rem;
    color: var(--color-status-text);
    background-color: var(--color-status-soft);
    border: 1px solid rgba(143, 179, 154, 0.4);
    padding: 4px 10px;
    border-radius: var(--radius-full);
    width: fit-content;
    font-weight: 500;
  }

  .metric-accent {
    font-weight: 700;
  }

  .testimonial-quote {
    font-size: 0.96875rem;
    color: var(--text-main);
    line-height: 1.6;
    font-style: normal;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 1rem;
    border-top: 1px solid var(--color-divider);
  }

  .author-avatar-chip {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--color-primary-soft);
    color: var(--color-primary);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .author-info {
    display: flex;
    flex-direction: column;
  }

  .author-name {
    font-weight: 600;
    font-size: 0.9375rem;
    color: var(--text-main);
  }

  .author-role {
    font-size: 0.8125rem;
    color: var(--text-light);
  }

  @media (max-width: 960px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
