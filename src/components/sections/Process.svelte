<script lang="ts">
  import { processSteps } from '../../data/process';
</script>

<section class="section process-section" id="proses">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Alur Pengerjaan</span>
      <h2>Bagaimana proses kerja sama kita berjalan?</h2>
      <p class="section-desc">
        Dari diskusi alur bisnis awal hingga sistem siap pakai. Terstruktur, transparan, dan tidak menyita waktu operasional Anda.
      </p>
    </div>

    <!-- Geometric Workflow Flow Line (No generic 01-02-03 numbering) -->
    <div class="process-flow">
      {#each processSteps as step, idx}
        <div class="step-card">
          <!-- Geometric connection node -->
          <div class="step-node-indicator" aria-hidden="true">
            <div class="node-shape">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="2" width="24" height="24" rx="8" fill="#FFFFFF" stroke="#334E68" stroke-width="2"/>
                <circle cx="14" cy="14" r="4" fill={idx === 2 ? '#2563EB' : '#334E68'}/>
              </svg>
            </div>
            {#if idx < processSteps.length - 1}
              <div class="node-connector"></div>
            {/if}
          </div>

          <!-- Step Content -->
          <div class="step-body">
            <span class="step-phase">{step.step}</span>
            <h3 class="step-name">{step.name}</h3>
            <p class="step-summary">{step.summary}</p>
            
            <div class="step-deliverable">
              <span class="deliverable-label">Output tahap ini:</span>
              <span class="deliverable-val">{step.deliverable}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .process-section {
    background-color: var(--bg-primary);
    border-top: 1px solid var(--color-divider);
    border-bottom: 1px solid var(--color-divider);
  }

  .process-flow {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
    position: relative;
  }

  .step-card {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .step-node-indicator {
    display: flex;
    align-items: center;
    position: relative;
  }

  .node-shape {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .node-connector {
    flex-grow: 1;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      var(--color-primary) 0,
      var(--color-primary) 6px,
      transparent 6px,
      transparent 12px
    );
    opacity: 0.5;
    margin-left: 8px;
  }

  .step-body {
    background-color: var(--bg-white);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-md);
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    height: 100%;
    box-shadow: var(--shadow-subtle);
    transition: all var(--transition-normal);
  }

  .step-body:hover {
    border-color: rgba(61, 90, 128, 0.4);
    transform: translateY(-2px);
    box-shadow: var(--shadow-subtle);
  }

  .step-phase {
    font-size: 0.75rem;
    color: var(--color-primary);
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  .step-name {
    font-size: 1.125rem;
    color: var(--text-main);
    line-height: 1.3;
  }

  .step-summary {
    font-size: 0.84375rem;
    color: var(--text-muted);
    line-height: 1.55;
  }

  .step-deliverable {
    margin-top: auto;
    padding-top: 0.75rem;
    border-top: 1px dashed var(--color-divider);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .deliverable-label {
    font-size: 0.6875rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .deliverable-val {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-primary);
  }

  @media (max-width: 1024px) {
    .process-flow {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    .step-card {
      flex-direction: row;
      gap: 1.25rem;
    }

    .step-node-indicator {
      flex-direction: column;
      align-items: center;
      width: 32px;
    }

    .node-connector {
      width: 2px;
      height: 100%;
      margin-left: 0;
      margin-top: 6px;
      background: repeating-linear-gradient(
        to bottom,
        var(--color-primary) 0,
        var(--color-primary) 6px,
        transparent 6px,
        transparent 12px
      );
    }

    .step-body {
      flex: 1;
    }
  }
</style>
