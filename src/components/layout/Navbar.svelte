<script lang="ts">
  import { navigationItems } from '../../data/navigation';
  import Button from '../common/Button.svelte';

  let isMobileMenuOpen = $state(false);

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header class="navbar-wrapper">
  <nav class="container nav-container" aria-label="Navigasi Utama">
    <!-- Brand Logo -->
    <a href="#hero" class="brand-logo" onclick={closeMenu}>
      <span class="logo-mark">
        <img
          src="/logo-pradana.png"
          alt="Logo Pradana"
          class="logo-img"
        />
      </span>
      <span class="logo-text">Pradana<span class="logo-dot">.</span></span>
    </a>

    <!-- Desktop Navigation Links -->
    <div class="nav-links">
      {#each navigationItems as item}
        <a href={item.href} class="nav-link">
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Right Side CTA -->
    <div class="nav-actions">
      <Button variant="primary" size="sm" href="#kontak">
        Konsultasi Gratis
      </Button>

      <!-- Mobile Hamburger Toggle -->
      <button
        type="button"
        class="menu-toggle"
        aria-label="Buka menu navigasi"
        aria-expanded={isMobileMenuOpen}
        onclick={toggleMenu}
      >
        <span class="hamburger-bar" class:active={isMobileMenuOpen}></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer -->
  {#if isMobileMenuOpen}
    <div class="mobile-drawer" role="dialog" aria-modal="true">
      <div class="mobile-nav-links">
        {#each navigationItems as item}
          <a href={item.href} class="mobile-nav-link" onclick={closeMenu}>
            {item.label}
          </a>
        {/each}
        <div class="mobile-cta">
          <Button variant="primary" size="md" href="#kontak" onclick={closeMenu}>
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </div>
  {/if}
</header>

<style>
  .navbar-wrapper {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-divider);
    transition: all var(--transition-normal);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  /* Logo */
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .logo-mark {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-img {
    width: 34px;
    height: 34px;
    object-fit: contain;
    border-radius: 8px;
    display: block;
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--text-main);
    letter-spacing: -0.02em;
  }

  .logo-dot {
    color: var(--color-accent);
  }

  /* Desktop Links */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: color var(--transition-fast);
    padding: 0.25rem 0;
    position: relative;
  }

  .nav-link:hover {
    color: var(--color-primary);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-normal);
    border-radius: 2px;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Nav Actions */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Mobile Toggle */
  .menu-toggle {
    display: none;
    width: 42px;
    height: 42px;
    border-radius: var(--radius-sm);
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-divider);
    background: var(--bg-surface);
  }

  .hamburger-bar {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--text-main);
    position: relative;
    transition: background-color var(--transition-fast);
  }

  .hamburger-bar::before,
  .hamburger-bar::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: var(--text-main);
    transition: transform var(--transition-normal);
  }

  .hamburger-bar::before {
    top: -6px;
  }

  .hamburger-bar::after {
    bottom: -6px;
  }

  .hamburger-bar.active {
    background-color: transparent;
  }

  .hamburger-bar.active::before {
    transform: translateY(6px) rotate(45deg);
  }

  .hamburger-bar.active::after {
    transform: translateY(-6px) rotate(-45deg);
  }

  /* Mobile Drawer */
  .mobile-drawer {
    display: none;
    border-top: 1px solid var(--color-divider);
    background-color: var(--bg-primary);
    padding: 1.5rem var(--container-pad);
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .mobile-nav-link {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-main);
    padding: 0.5rem 0;
  }

  .mobile-cta {
    margin-top: 0.5rem;
  }

  @media (max-width: 860px) {
    .nav-links {
      display: none;
    }

    .menu-toggle {
      display: flex;
    }

    .mobile-drawer {
      display: block;
    }
  }
</style>
