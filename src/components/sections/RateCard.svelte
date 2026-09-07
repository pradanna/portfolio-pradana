<script lang="ts">
  import { pricingPlans } from '../../data/rateCard';
  import Button from '../common/Button.svelte';
  import Badge from '../common/Badge.svelte';
</script>

<section class="section rate-section" id="rate-card">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Estimasi Investasi (Rate Card)</span>
      <h2>Mulai dari berapa biaya pengembangannya?</h2>
      <p class="section-desc">
        Transparansi sejak awal. Biaya di bawah merupakan patokan harga dasar (starting price) untuk menyaring kebutuhan operasional bisnis Anda.
      </p>
    </div>

    <!-- Core Systems Pricing Grid -->
    <div class="pricing-grid">
      {#each pricingPlans as plan}
        <div class="pricing-card" class:popular={plan.isPopular}>
          {#if plan.isPopular}
            <div class="popular-tag">
              <Badge variant="status">Paling Banyak Dibutuhkan</Badge>
            </div>
          {/if}

          <div class="plan-header">
            <h3 class="plan-category">{plan.category}</h3>
            <div class="price-box">
              <span class="price-prefix">Mulai</span>
              <span class="price-val">{plan.startingPrice}</span>
              <span class="price-note">{plan.priceNote}</span>
            </div>
            <p class="plan-desc">{plan.description}</p>
          </div>

          <div class="plan-features">
            <span class="features-label">Termasuk dalam cakupan awal:</span>
            <ul class="feature-list">
              {#each plan.features as feature}
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="plan-cta">
            <Button
              variant={plan.isPopular ? 'primary' : 'outline'}
              size="md"
              href="#kontak"
            >
              Konsultasi {plan.category}
            </Button>
          </div>
        </div>
      {/each}
    </div>

    <!-- Note on complexity -->
    <div class="pricing-notice">
      <div class="notice-box">
        <p>
          <strong>Catatan:</strong> Harga final disesuaikan dengan kompleksitas aturan bisnis (business logic) dan integrasi sistem eksisting Anda. Setelah konsultasi singkat, Anda akan menerima proposal scope & jadwal pengerjaan pasti.
        </p>
        <Button variant="primary" size="md" href="#kontak">
          Jadwalkan Konsultasi Gratis
        </Button>
      </div>
    </div>
  </div>
</section>

<style>
  .rate-section {
    background-color: var(--bg-primary);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    align-items: stretch;
    margin-bottom: 2.5rem;
  }

  .pricing-card {
    background-color: var(--bg-surface);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-lg);
    padding: 2.25rem 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.75rem;
    transition: all var(--transition-normal);
    position: relative;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card);
    border-color: rgba(61, 90, 128, 0.4);
    background-color: var(--bg-white);
  }

  .pricing-card.popular {
    background: linear-gradient(180deg, #1E293B 0%, #0F172A 100%);
    border: 1.5px solid #3B82F6;
    box-shadow: 0 16px 36px -6px rgba(37, 99, 235, 0.22), 0 8px 16px -4px rgba(15, 23, 42, 0.2);
    color: #F8FAFC;
    transform: scale(1.02);
  }

  .pricing-card.popular:hover {
    background: linear-gradient(180deg, #1E293B 0%, #0B1120 100%);
    box-shadow: 0 20px 45px -6px rgba(37, 99, 235, 0.32);
    transform: scale(1.02) translateY(-4px);
  }

  .pricing-card.popular .plan-category {
    color: #FFFFFF;
  }

  .pricing-card.popular .price-prefix {
    color: #94A3B8;
  }

  .pricing-card.popular .price-val {
    color: #60A5FA;
  }

  .pricing-card.popular .price-note {
    color: #94A3B8;
  }

  .pricing-card.popular .plan-desc {
    color: #CBD5E1;
  }

  .pricing-card.popular .plan-features {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .pricing-card.popular .features-label {
    color: #F8FAFC;
  }

  .pricing-card.popular .feature-item {
    color: #CBD5E1;
  }

  .pricing-card.popular .check-icon {
    color: #38BDF8;
  }

  .popular-tag {
    position: absolute;
    top: -14px;
    left: 1.75rem;
  }

  .plan-header {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .plan-category {
    font-size: 1.25rem;
    color: var(--text-main);
  }

  .price-box {
    display: flex;
    flex-direction: column;
  }

  .price-prefix {
    font-size: 0.8125rem;
    color: var(--text-light);
    font-weight: 500;
  }

  .price-val {
    font-family: var(--font-display);
    font-size: 1.65rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.2;
  }

  .price-note {
    font-size: 0.75rem;
    color: var(--text-light);
    margin-top: 2px;
  }

  .plan-desc {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .plan-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--color-divider);
  }

  .features-label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.84375rem;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .check-icon {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }

  .plan-cta {
    margin-top: auto;
  }

  /* Notice */
  .pricing-notice {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .notice-box {
    background-color: var(--bg-surface);
    border: 1px solid var(--color-divider);
    border-left: 4px solid var(--color-primary);
    border-radius: var(--radius-md);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .notice-box p {
    font-size: 0.9375rem;
    color: var(--text-muted);
    max-width: 720px;
  }

  @media (max-width: 960px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .notice-box {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }
  }
</style>
