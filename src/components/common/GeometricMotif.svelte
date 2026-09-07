<script lang="ts">
  interface Props {
    type?: 'hero' | 'flow' | 'service-hris' | 'service-pos' | 'service-erp' | 'service-custom' | 'animated-line';
    animated?: boolean;
    class?: string;
  }

  let { type = 'hero', animated = false, class: className = '' }: Props = $props();
</script>

<div class="geometric-wrapper type-{type} {className}" class:is-animated={animated}>
  {#if type === 'hero'}
    <!-- Hero Motif: Asymmetric interconnected business logic blocks with subtle drift -->
    <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <!-- Background shadow node -->
      <path
        d="M60 40C60 22 75 10 95 10H180C205 10 225 30 225 55V110C225 130 205 150 185 150H100C75 150 60 135 60 110V40Z"
        fill="#2563EB"
        fill-opacity="0.08"
      />

      <!-- Flow connecting line 1 -->
      <path
        d="M165 95C165 140 240 140 240 185"
        stroke="#2563EB"
        stroke-width="2.5"
        stroke-dasharray="6 4"
        stroke-linecap="round"
      />

      <!-- Flow connecting line 2 -->
      <path
        d="M125 150V210C125 235 150 250 175 250H230"
        stroke="#2563EB"
        stroke-width="2.5"
        stroke-linecap="round"
      />

      <!-- Main Primary Node: Asymmetric Rounded Shape (Payroll / Core module) -->
      <rect
        x="35"
        y="45"
        width="150"
        height="100"
        rx="28"
        fill="#2563EB"
        class="hero-float-node"
      />
      <!-- Micro accents on main block -->
      <rect x="60" y="70" width="45" height="10" rx="5" fill="#FFFFFF" fill-opacity="0.85" />
      <rect x="60" y="90" width="75" height="8" rx="4" fill="#FFFFFF" fill-opacity="0.4" />
      <circle cx="150" cy="75" r="8" fill="#10B981" />

      <!-- Secondary Node: Business Logic Block -->
      <rect
        x="180"
        y="170"
        width="135"
        height="95"
        rx="22"
        fill="#FFFFFF"
        stroke="#2D4B73"
        stroke-width="2"
        class="hero-float-subnode"
      />
      <rect x="205" y="195" width="55" height="8" rx="4" fill="#2D4B73" fill-opacity="0.6" />
      <rect x="205" y="213" width="70" height="8" rx="4" fill="#2D4B73" fill-opacity="0.3" />

      <!-- Small rare Blue Accent Node (CTA catalyst) -->
      <circle cx="280" cy="140" r="14" fill="#2563EB" class="hero-accent-pulse" />
      <path d="M280 126V154M266 140H294" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />

      <!-- Sage status micro pill -->
      <g transform="translate(45, 185)">
        <rect width="64" height="24" rx="12" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="4" fill="#10B981"/>
        <rect x="22" y="9" width="30" height="6" rx="3" fill="#0F172A" fill-opacity="0.7"/>
      </g>
    </svg>

  {:else if type === 'animated-line'}
    <!-- The 1 Big Animation for Case Studies section -->
    <svg viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="case-draw-svg">
      <path
        class="draw-path"
        d="M20 60C120 60 160 20 280 20C400 20 440 100 560 100C680 100 720 60 780 60"
        stroke="#334E68"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <circle cx="20" cy="60" r="6" fill="#334E68" />
      <circle cx="280" cy="20" r="6" fill="#10B981" />
      <circle cx="560" cy="100" r="6" fill="#2563EB" />
      <circle cx="780" cy="60" r="6" fill="#334E68" />
    </svg>

  {:else if type === 'service-hris'}
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Asymmetrical rounded card + connected logic -->
      <rect x="6" y="8" width="36" height="32" rx="12" fill="#FFFFFF" stroke="#2D4B73" stroke-width="2"/>
      <path d="M14 18H26" stroke="#2D4B73" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M14 24H32" stroke="#2D4B73" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/>
      <path d="M14 30H24" stroke="#2D4B73" stroke-width="2" stroke-linecap="round" stroke-opacity="0.3"/>
      <circle cx="34" cy="18" r="4" fill="#10B981"/>
    </svg>

  {:else if type === 'service-pos'}
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="32" height="28" rx="8" fill="#FFFFFF" stroke="#2D4B73" stroke-width="2"/>
      <path d="M16 20H32" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
      <rect x="16" y="26" width="6" height="6" rx="2" fill="#2D4B73"/>
      <rect x="26" y="26" width="6" height="6" rx="2" fill="#2D4B73" fill-opacity="0.4"/>
      <path d="M24 6V10" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
    </svg>

  {:else if type === 'service-erp'}
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="16" height="16" rx="6" fill="#2D4B73"/>
      <rect x="26" y="6" width="16" height="16" rx="6" fill="#FFFFFF" stroke="#2D4B73" stroke-width="2"/>
      <rect x="16" y="26" width="16" height="16" rx="6" fill="#FFFFFF" stroke="#2D4B73" stroke-width="2"/>
      <!-- Connecting flow lines -->
      <path d="M22 14H26" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
      <path d="M14 22V26" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
      <path d="M34 22V26" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
    </svg>

  {:else if type === 'service-custom'}
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 14C10 9.58172 13.5817 6 18 6H30C34.4183 6 38 9.58172 38 14V22C38 30.8366 30.8366 38 22 38H18C13.5817 38 10 34.4183 10 30V14Z"
        fill="#FFFFFF"
        stroke="#2D4B73"
        stroke-width="2"
      />
      <circle cx="22" cy="20" r="5" fill="#2D4B73"/>
      <path d="M22 28V34M16 22H10M38 22H32" stroke="#2D4B73" stroke-width="2" stroke-linecap="round"/>
    </svg>

  {:else if type === 'flow'}
    <svg width="100%" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <line x1="0" y1="12" x2="200" y2="12" stroke="#E8E2D4" stroke-width="2" stroke-dasharray="6 6"/>
      <circle cx="100" cy="12" r="5" fill="#8FB39A"/>
    </svg>
  {/if}
</div>

<style>
  .geometric-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Hero drift animation strictly subtle and non-trigger */
  .hero-svg {
    width: 100%;
    max-width: 380px;
    height: auto;
    filter: drop-shadow(0 12px 24px rgba(61, 90, 128, 0.08));
  }

  .hero-float-node {
    animation: gentle-drift 7s ease-in-out infinite alternate;
    transform-origin: center;
  }

  .hero-float-subnode {
    animation: gentle-drift 9s ease-in-out 1s infinite alternate-reverse;
    transform-origin: center;
  }

  .hero-accent-pulse {
    animation: subtle-pulse 5s ease-in-out infinite;
  }

  @keyframes gentle-drift {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-8px) rotate(1.2deg);
    }
  }

  @keyframes subtle-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.95;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  /* Animated drawing path for Case Studies */
  .case-draw-svg {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin: 0 auto;
    overflow: visible;
  }

  .draw-path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 2.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .is-animated .draw-path {
    stroke-dashoffset: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-float-node,
    .hero-float-subnode,
    .hero-accent-pulse {
      animation: none !important;
    }
    .draw-path {
      stroke-dashoffset: 0 !important;
      transition: none !important;
    }
  }
</style>
