<script lang="ts">
  import { onMount } from 'svelte';
  import { caseStudiesData } from '../../data/caseStudies';
  import Badge from '../common/Badge.svelte';
  import GeometricMotif from '../common/GeometricMotif.svelte';

  let sectionElement = $state<HTMLElement | null>(null);
  let isAnimated = $state(false);

  onMount(() => {
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isAnimated = true;
            observer.disconnect(); // Only trigger once as planned in PRD
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  });
</script>

<section class="section case-studies-section" id="studi-kasus" bind:this={sectionElement}>
  <div class="container">
    <div class="section-header">
      <span class="section-label">Studi Kasus & Portofolio</span>
      <h2>Hasil nyata pada operasional bisnis.</h2>
      <p class="section-desc">
        Bukan sekadar kode rapi, tapi penyelesaian masalah operasional yang terukur. Tiap proyek memiliki tantangan dan solusi spesifik.
      </p>
    </div>

    <!-- The 1 Big Meaningful Animation: Flow line draws itself when scrolling into view -->
    <div class="case-connector-wrap" aria-hidden="true">
      <GeometricMotif type="animated-line" animated={isAnimated} />
    </div>

    <!-- Alternating L-R Panels -->
    <div class="case-panels">
      {#each caseStudiesData as study, index}
        <article class="case-panel" class:reversed={index % 2 === 1}>
          <!-- Mockup Display Panel -->
          <div class="case-mockup-wrapper">
            <div class="mockup-window">
              <!-- Window top bar -->
              <div class="mockup-topbar">
                <div class="mockup-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <span class="mockup-url-bar">{study.mockup.title}</span>
                <span class="mockup-indicator">Live</span>
              </div>

              <!-- Mockup Content -->
              {#if study.mockup.type === 'hris'}
                <!-- Realistic HRIS Dashboard Mockup -->
                <div class="mockup-body hris-dashboard">
                  <div class="dashboard-header">
                    <div>
                      <div class="dash-subtitle">{study.mockup.subtitle}</div>
                      <div class="dash-period">Periode: September 2026 (Aktif)</div>
                    </div>
                    <div class="dash-badge">Status: Siap Approval</div>
                  </div>

                  <!-- Metrics cards inside mockup -->
                  <div class="mockup-stat-grid">
                    <div class="mockup-stat-card">
                      <span class="m-label">Total Karyawan</span>
                      <span class="m-val">128 Orang</span>
                    </div>
                    <div class="mockup-stat-card">
                      <span class="m-label">Waktu Rekap</span>
                      <span class="m-val highlight-green">4 Jam</span>
                    </div>
                    <div class="mockup-stat-card">
                      <span class="m-label">Akurasi Slip</span>
                      <span class="m-val">100%</span>
                    </div>
                  </div>

                  <!-- Mockup Table Rows -->
                  <div class="mockup-table">
                    <div class="table-row head">
                      <span>Karyawan</span>
                      <span>Hadir</span>
                      <span>Lembur</span>
                      <span>Total Bersih</span>
                      <span>Aksi</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">Ahmad Fadillah (IT Support)</span>
                      <span>22 Hari</span>
                      <span>12 Jam</span>
                      <span class="text-strong">Rp 7.850.000</span>
                      <span class="badge-approved">Approved</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">Siti Rahmania (Finance)</span>
                      <span>22 Hari</span>
                      <span>4 Jam</span>
                      <span class="text-strong">Rp 8.420.000</span>
                      <span class="badge-approved">Approved</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">Budi Santoso (Logistik)</span>
                      <span>21 Hari</span>
                      <span>18 Jam</span>
                      <span class="text-strong">Rp 6.910.000</span>
                      <span class="badge-pending">Review</span>
                    </div>
                  </div>
                </div>
              {:else}
                <!-- Realistic ERP Multi-Store Stock Mockup -->
                <div class="mockup-body erp-dashboard">
                  <div class="dashboard-header">
                    <div>
                      <div class="dash-subtitle">{study.mockup.subtitle}</div>
                      <div class="dash-period">Live Sync: 5 Cabang Ritel</div>
                    </div>
                    <div class="dash-badge-live">Event-Driven Engine</div>
                  </div>

                  <div class="mockup-stat-grid">
                    <div class="mockup-stat-card">
                      <span class="m-label">Audit Selisih</span>
                      <span class="m-val highlight-green">0 Unit</span>
                    </div>
                    <div class="mockup-stat-card">
                      <span class="m-label">Jeda Antar Cabang</span>
                      <span class="m-val">&lt; 0.8 Detik</span>
                    </div>
                    <div class="mockup-stat-card">
                      <span class="m-label">Status Antrean</span>
                      <span class="m-val">Normal</span>
                    </div>
                  </div>

                  <div class="mockup-table">
                    <div class="table-row head">
                      <span>Item / SKU</span>
                      <span>Gudang Pusat</span>
                      <span>Cabang Barat</span>
                      <span>Cabang Timur</span>
                      <span>Status</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">Smart TV OLED 55" (SKU-892)</span>
                      <span>24 Unit</span>
                      <span>3 Unit</span>
                      <span>5 Unit</span>
                      <span class="badge-sync">Tersinkron</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">Kulkas 2 Pintu Inverter (SKU-411)</span>
                      <span>12 Unit</span>
                      <span>2 Unit</span>
                      <span>4 Unit</span>
                      <span class="badge-sync">Tersinkron</span>
                    </div>
                    <div class="table-row">
                      <span class="emp-name">AC Split 1 PK Inverter (SKU-105)</span>
                      <span>45 Unit</span>
                      <span>8 Unit</span>
                      <span>10 Unit</span>
                      <span class="badge-sync">Tersinkron</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>
          </div>

          <!-- Detail Content Panel -->
          <div class="case-details">
            <div class="case-top-meta">
              <Badge variant={study.tagVariant}>
                {study.tag}
              </Badge>
              <h3 class="case-title">{study.title}</h3>
            </div>

            <p class="case-headline">{study.headline}</p>

            <!-- Structured Problem > Solution > Result -->
            <div class="case-psr">
              <div class="psr-block">
                <span class="psr-tag problem">Masalah</span>
                <p class="psr-text">{study.problem}</p>
              </div>

              <div class="psr-block">
                <span class="psr-tag solution">Solusi</span>
                <p class="psr-text">{study.solution}</p>
              </div>

              <div class="psr-block">
                <span class="psr-tag result">Hasil Terukur</span>
                <p class="psr-text text-strong">{study.result}</p>
              </div>
            </div>

            {#if study.metrics}
              <div class="case-impact-box">
                <span class="impact-val">{study.metrics.value}</span>
                <span class="impact-desc">{study.metrics.label}</span>
              </div>
            {/if}

            <!-- Tech Stack Pills -->
            <div class="case-stack-pills">
              {#each study.stack as tech}
                <span class="stack-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .case-studies-section {
    background-color: var(--bg-primary);
    border-top: 1px solid var(--color-divider);
    border-bottom: 1px solid var(--color-divider);
  }

  .case-connector-wrap {
    margin-bottom: 2.5rem;
    overflow: hidden;
  }

  .case-panels {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
  }

  .case-panel {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
    align-items: center;
    background-color: var(--bg-white);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-xl);
    padding: 2.5rem;
    box-shadow: var(--shadow-card);
    transition: all var(--transition-normal);
  }

  .case-panel:hover {
    box-shadow: var(--shadow-hover);
    border-color: rgba(45, 75, 115, 0.35);
  }

  .case-panel.reversed {
    grid-template-columns: 0.85fr 1.15fr;
  }

  .case-panel.reversed .case-mockup-wrapper {
    order: 2;
  }

  .case-panel.reversed .case-details {
    order: 1;
  }

  /* Mockup Container */
  .case-mockup-wrapper {
    width: 100%;
  }

  .mockup-window {
    background-color: #0F172A;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.28);
  }

  .mockup-topbar {
    background-color: #0B1120;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mockup-dots {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot.red { background-color: #EF4444; }
  .dot.yellow { background-color: #F59E0B; }
  .dot.green { background-color: #10B981; }

  .mockup-url-bar {
    font-size: 0.75rem;
    font-weight: 500;
    color: #94A3B8;
  }

  .mockup-indicator {
    font-size: 0.6875rem;
    color: #34D399;
    background-color: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 2px 8px;
    border-radius: 99px;
    font-weight: 600;
  }

  .mockup-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #0F172A;
  }

  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .dash-subtitle {
    font-size: 0.875rem;
    font-weight: 700;
    color: #FFFFFF;
  }

  .dash-period {
    font-size: 0.75rem;
    color: #94A3B8;
  }

  .dash-badge, .dash-badge-live {
    font-size: 0.6875rem;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
    background-color: rgba(37, 99, 235, 0.2);
    color: #93C5FD;
    border: 1px solid rgba(37, 99, 235, 0.35);
  }

  .mockup-stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .mockup-stat-card {
    background-color: #1E293B;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-sm);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
  }

  .m-label {
    font-size: 0.6875rem;
    color: #94A3B8;
  }

  .m-val {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 2px;
  }

  .highlight-green {
    color: #34D399;
  }

  .mockup-table {
    display: flex;
    flex-direction: column;
    background-color: #1E293B;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    overflow-x: auto;
  }

  .table-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.3fr 1fr;
    padding: 8px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    align-items: center;
    gap: 6px;
    color: #CBD5E1;
  }

  .table-row.head {
    background-color: #0B1120;
    font-weight: 600;
    color: #94A3B8;
  }

  .table-row:last-child {
    border-bottom: none;
  }

  .emp-name {
    font-weight: 500;
    color: #F8FAFC;
  }

  .badge-approved {
    color: #34D399;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 600;
  }

  .badge-pending {
    color: #FBBF24;
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 600;
  }

  .badge-sync {
    color: #93C5FD;
    background: rgba(37, 99, 235, 0.18);
    border: 1px solid rgba(37, 99, 235, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 600;
  }

  /* Details Panel */
  .case-details {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .case-top-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .case-title {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .case-headline {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--text-main);
    line-height: 1.3;
  }

  .case-psr {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin-top: 0.25rem;
  }

  .psr-block {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .psr-tag {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    width: fit-content;
  }

  .psr-tag.problem {
    color: #8A4F1D;
  }

  .psr-tag.solution {
    color: var(--color-primary);
  }

  .psr-tag.result {
    color: #245032;
  }

  .psr-text {
    font-size: 0.9375rem;
    color: var(--text-muted);
    line-height: 1.55;
  }

  .text-strong {
    font-weight: 600;
    color: var(--text-main);
  }

  .case-impact-box {
    background-color: var(--bg-surface);
    border-left: 3px solid var(--color-accent);
    padding: 0.75rem 1rem;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    display: flex;
    flex-direction: column;
  }

  .impact-val {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-main);
  }

  .impact-desc {
    font-size: 0.8125rem;
    color: var(--text-light);
  }

  .case-stack-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .stack-tag {
    font-size: 0.8125rem;
    padding: 3px 10px;
    border-radius: var(--radius-full);
    background-color: var(--bg-subtle);
    color: var(--color-primary);
    border: 1px solid var(--color-divider);
    font-weight: 500;
  }

  /* Responsive Stacking */
  @media (max-width: 960px) {
    .case-panel,
    .case-panel.reversed {
      grid-template-columns: 1fr;
      padding: 1.75rem;
      gap: 2rem;
    }

    .case-panel.reversed .case-mockup-wrapper {
      order: 1;
    }

    .case-panel.reversed .case-details {
      order: 2;
    }
  }
</style>
