<script lang="ts">
  import { navigationItems } from '../../data/navigation';
  import { profileData } from '../../data/profile';
  import Badge from '../common/Badge.svelte';
</script>

<footer class="footer-wrapper">
  <div class="container footer-container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-logo">
          <img
            src="/logo-pradana.png"
            alt="Logo Pradana"
            class="footer-logo-img"
          />
          <span class="logo-title">Pradana</span>
        </div>
        <p class="brand-desc">
          Fullstack Developer spesialis Laravel, React, dan Flutter. Membantu bisnis dan organisasi membangun sistem digital yang skalabel, efisien, dan terintegrasi.
        </p>
        <div class="status-indicator">
          <Badge variant="status">
            Tersedia untuk proyek baru
          </Badge>
        </div>
      </div>

      <div class="footer-nav">
        <h4 class="nav-heading">Navigasi</h4>
        <ul class="nav-list">
          {#each navigationItems as item}
            <li>
              <a href={item.href} class="footer-link">{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="footer-contact">
        <h4 class="nav-heading">Hubungi</h4>
        <ul class="nav-list">
          <li>
            <a
              href={`https://wa.me/${profileData.whatsappNumber}?text=${encodeURIComponent(profileData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >
              WhatsApp Langsung
            </a>
          </li>
          <li>
            <a href={`mailto:${profileData.email}`} class="footer-link">
              {profileData.email}
            </a>
          </li>
          <li>
            <span class="location-text">{profileData.location}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        © {new Date().getFullYear()} Pradana Mahendra. Seluruh hak cipta dilindungi.
      </p>
      <div class="bottom-links">
        <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" class="bottom-link">GitHub</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer-wrapper {
    background-color: var(--bg-surface);
    border-top: 1px solid var(--color-divider);
    padding-top: var(--space-3xl);
    padding-bottom: var(--space-2xl);
    margin-top: var(--space-4xl);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xl);
  }

  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 440px;
  }

  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-logo-img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: 8px;
    display: block;
  }

  .logo-title {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-main);
  }

  .brand-desc {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .status-indicator {
    margin-top: 0.25rem;
  }

  .nav-heading {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 1.25rem;
    letter-spacing: 0.02em;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-link {
    font-size: 0.9375rem;
    color: var(--text-muted);
    transition: color var(--transition-fast);
  }

  .footer-link:hover {
    color: var(--color-primary);
  }

  .location-text {
    font-size: 0.875rem;
    color: var(--text-light);
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-xl);
    border-top: 1px solid var(--color-divider);
    font-size: 0.875rem;
    color: var(--text-light);
    flex-wrap: wrap;
    gap: 1rem;
  }

  .bottom-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .bottom-link {
    color: var(--text-muted);
    transition: color var(--transition-fast);
  }

  .bottom-link:hover {
    color: var(--color-primary);
  }



  @media (max-width: 768px) {
    .footer-top {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
