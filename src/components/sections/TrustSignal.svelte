<script lang="ts">
  const clientLogos = [
    { name: 'Yousee Indonesia', src: '/clients/youseelogo.png' },
    { name: 'BPKAD Surakarta', src: '/clients/bpkad.png' },
    { name: 'Teman Belajar', src: '/clients/temanbelajarlogo.png' },
    { name: 'Kedai MPASI', src: '/clients/kedaimpasilogo.png' },
    { name: 'Omah Gue', src: '/clients/omahguelogo.png' },
    { name: 'Sukma Trip', src: '/clients/sukmatriplogo.png' },
    { name: 'RSX', src: '/clients/rsxlogo.png' },
    { name: 'PSG', src: '/clients/psglogo.png' },
    { name: 'Kejayan', src: '/clients/kejayan-logo.png' },
    { name: 'Ekofee', src: '/clients/ekofee-logo.png' },
    { name: 'Desa Beran', src: '/clients/desa-beran.png' },
    { name: 'IELC', src: '/clients/ielc.png' },
    { name: 'Corporate Partner', src: '/clients/logo_panjang.webp' }
  ];

  // Duplicate for seamless continuous infinite marquee
  const doubleLogos = [...clientLogos, ...clientLogos];
</script>

<section class="trust-section" aria-label="Our Happy Clients">
  <div class="container trust-container">
    <!-- Left label -->
    <div class="trust-label-box">
      <p class="trust-label">Our happy clients:</p>
    </div>

    <!-- Right infinite marquee slider with playful tooltip -->
    <div class="marquee-wrapper">
      <div class="marquee-track">
        {#each doubleLogos as client, i}
          <div class="client-logo-item" role="group" aria-label={client.name}>
            <img
              src={client.src}
              alt={client.name}
              loading="lazy"
              class="client-img"
            />
            <!-- Playful Custom Tooltip with organic tilt -->
            <div class="playful-tooltip {i % 2 === 0 ? 'tilt-left' : 'tilt-right'}">
              <span class="tooltip-name">{client.name}</span>
              <span class="tooltip-arrow"></span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .trust-section {
    padding: 1.75rem 0;
    border-top: 1px solid var(--color-divider);
    border-bottom: 1px solid var(--color-divider);
    background-color: var(--bg-white);
    position: relative;
    overflow: visible; /* Biarkan tooltip terlihat keluar jika diperlukan */
  }

  .trust-container {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    position: relative;
  }

  .trust-label-box {
    flex-shrink: 0;
    z-index: 20;
    background-color: var(--bg-white);
    padding-right: 1rem;
    box-shadow: 10px 0 15px -5px rgba(255, 255, 255, 0.95);
  }

  .trust-label {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--text-light);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* Marquee infinite carousel */
  .marquee-wrapper {
    flex: 1;
    min-width: 0;
    position: relative;
    display: flex;
    overflow-x: clip; /* Clip horizontal overflow tanpa memotong vertikal */
    overflow-y: visible;
    padding-top: 2rem; /* Ruang luas untuk tooltip melompat */
    margin-top: -2rem;
  }

  .marquee-track {
    display: flex;
    align-items: center;
    gap: 3.25rem;
    width: max-content;
    animation: marquee-scroll 28s linear infinite;
    padding-top: 1rem;
  }

  .marquee-wrapper:hover .marquee-track {
    animation-play-state: paused;
  }

  .client-logo-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    height: 48px;
    flex-shrink: 0;
    cursor: pointer;
  }

  /* Grayscale by default, full color on hover */
  .client-img {
    max-height: 38px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%) contrast(85%) opacity(0.55);
    transition: all var(--transition-normal);
    user-select: none;
    pointer-events: auto;
  }

  .client-logo-item:hover .client-img {
    filter: grayscale(0%) contrast(100%) opacity(1);
    transform: scale(1.08);
  }

  /* Playful Custom Tooltip */
  .playful-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(8px) rotate(0deg) scale(0.85);
    background: #0F172A;
    color: #FFFFFF;
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    padding: 5px 12px;
    border-radius: 9999px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 10px 22px -3px rgba(15, 23, 42, 0.45);
    transition: opacity 0.2s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.2s;
    z-index: 999;
    border: 1px solid rgba(255, 255, 255, 0.16);
    transform-origin: center bottom;
  }

  .tooltip-arrow {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: #0F172A transparent transparent transparent;
  }

  /* Hover & focus trigger: bounce-in dengan kemiringan dinamis */
  .client-logo-item:hover .playful-tooltip.tilt-left,
  .client-logo-item:focus-within .playful-tooltip.tilt-left {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) translateY(0) rotate(-4.5deg) scale(1.05) !important;
  }

  .client-logo-item:hover .playful-tooltip.tilt-right,
  .client-logo-item:focus-within .playful-tooltip.tilt-right {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) translateY(0) rotate(4.5deg) scale(1.05) !important;
  }

  @keyframes marquee-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .trust-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .marquee-wrapper {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
