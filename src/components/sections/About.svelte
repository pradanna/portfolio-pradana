<script lang="ts">
  import { profileData } from '../../data/profile';
  import Button from '../common/Button.svelte';
</script>

<section class="section about-section" id="tentang">
  <div class="container">
    <div class="about-container">
      <!-- Portrait Card with Geometric Frame -->
      <div class="about-visual">
        <div class="portrait-card">
          <!-- Asymmetrical rounded frame with geometric badge -->
          <div class="portrait-avatar-wrapper">
            <img
              src="/photos/foto-pradana.png"
              alt="Foto {profileData.name}"
              class="avatar-photo"
            />
          </div>

          <div class="portrait-meta">
            <span class="portrait-name">{profileData.name}</span>
            <span class="portrait-role">{profileData.role}</span>
            <span class="portrait-loc">{profileData.location}</span>
          </div>
        </div>
      </div>

      <!-- Bio and DDD Philosophy -->
      <div class="about-content">
        <span class="section-label">Tentang Saya</span>
        <h2>Halo, saya Pradana.</h2>

        <div class="bio-paragraphs">
          {#each profileData.bio as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>

        <div class="about-actions">
          <Button variant="secondary" size="md" href="#kontak">
            Diskusikan Kebutuhan Anda
          </Button>
          <Button variant="outline" size="md" href={profileData.githubUrl} external>
            Lihat GitHub
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    background-color: var(--bg-primary);
  }

  .about-container {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
    align-items: center;
  }

  .about-visual {
    display: flex;
    justify-content: center;
  }

  .portrait-card {
    background-color: var(--bg-surface);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-xl);
    padding: 2.25rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 360px;
    box-shadow: var(--shadow-subtle);
  }

  .portrait-avatar-wrapper {
    position: relative;
    width: 190px;
    height: 190px;
  }

  .avatar-photo {
    width: 100%;
    height: 100%;
    border-radius: 36px;
    object-fit: cover;
    object-position: center top;
    box-shadow: 0 12px 28px -4px rgba(37, 99, 235, 0.22), 0 4px 10px rgba(0, 0, 0, 0.08);
    border: 2px solid var(--bg-white);
  }



  .portrait-meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }

  .portrait-name {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-main);
  }

  .portrait-role {
    font-size: 0.875rem;
    color: var(--color-primary);
    font-weight: 600;
  }

  .portrait-loc {
    font-size: 0.8125rem;
    color: var(--text-light);
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .bio-paragraphs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.75rem;
  }

  @media (max-width: 960px) {
    .about-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .about-visual {
      order: -1;
    }
  }
</style>
