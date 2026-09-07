<script lang="ts">
  import { profileData } from '../../data/profile';
  import Button from '../common/Button.svelte';

  let clientName = $state('');
  let clientCompany = $state('');
  let clientProblem = $state('');

  function getWhatsAppUrl() {
    let text = `Halo Pradana, saya ${clientName ? clientName : 'calon klien'}`;
    if (clientCompany) {
      text += ` dari ${clientCompany}`;
    }
    text += `. Saya ingin konsultasi terkait pembuatan sistem digital.`;
    if (clientProblem) {
      text += ` Kebutuhan / kendala kami: "${clientProblem}".`;
    }
    return `https://wa.me/${profileData.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
</script>

<section class="section contact-section" id="kontak">
  <div class="container">
    <div class="contact-card">
      <div class="contact-left">
        <span class="section-label">Langkah Selanjutnya</span>
        <h2 class="contact-headline">Siap bikin sistem yang pas buat bisnis Anda?</h2>
        <p class="contact-desc">
          Ceritakan kendala atau kebutuhan operasional Anda. Kami akan berikan gambaran alur solusi dan estimasi yang realistis untuk sistem bisnis Anda.
        </p>

        <div class="contact-perks">
          <div class="perk-item">
            <span class="perk-check" aria-hidden="true">✓</span>
            <span>Tanpa paksaan kontrak atau komitmen di awal</span>
          </div>
          <div class="perk-item">
            <span class="perk-check" aria-hidden="true">✓</span>
            <span>Solusi langsung dibahas oleh engineer pelaksana (bukan sales)</span>
          </div>
          <div class="perk-item">
            <span class="perk-check" aria-hidden="true">✓</span>
            <span>Rekomendasi arsitektur gratis jika sistem belum perlu dibuat</span>
          </div>
        </div>

        <div class="direct-contact-row">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            class="direct-link"
          >
            <span class="link-label">Chat WhatsApp Cepat:</span>
            <span class="link-val">+{profileData.whatsappNumber}</span>
          </a>
          <div class="link-separator">•</div>
          <a href={`mailto:${profileData.email}`} class="direct-link">
            <span class="link-label">Email:</span>
            <span class="link-val">{profileData.email}</span>
          </a>
        </div>
      </div>

      <!-- Quick Interactive Consultation Form -->
      <div class="contact-form-box">
        <h3 class="form-title">Mulai Konsultasi Singkat</h3>

        <div class="form-fields">
          <div class="field-group">
            <label for="c-name" class="field-label">Nama Anda</label>
            <input
              id="c-name"
              type="text"
              placeholder="Contoh: Budi Gunawan"
              class="form-input"
              bind:value={clientName}
            />
          </div>

          <div class="field-group">
            <label for="c-company" class="field-label">Nama Usaha / Perusahaan</label>
            <input
              id="c-company"
              type="text"
              placeholder="Contoh: PT Sentra Logistik"
              class="form-input"
              bind:value={clientCompany}
            />
          </div>

          <div class="field-group">
            <label for="c-problem" class="field-label">Kendala Operasional Utama (Opsional)</label>
            <textarea
              id="c-problem"
              placeholder="Contoh: Data stok barang sering selisih antar cabang..."
              class="form-textarea"
              rows="2"
              bind:value={clientProblem}
            ></textarea>
          </div>
        </div>

        <div class="form-submit">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl()}
            external
          >
            Hubungi via WhatsApp
          </Button>
          <span class="submit-note">Terbuka langsung di WhatsApp Anda dengan draf pesan otomatis.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    background-color: var(--bg-primary);
  }

  .contact-card {
    background: linear-gradient(145deg, #1E293B 0%, #0F172A 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radius-xl);
    padding: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.35);
  }

  .contact-card .section-label {
    color: #60A5FA;
  }

  .contact-left {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-headline {
    color: #FFFFFF;
    line-height: 1.2;
  }

  .contact-desc {
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #CBD5E1;
  }

  .contact-perks {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .perk-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9375rem;
    color: #E2E8F0;
  }

  .perk-check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(16, 185, 129, 0.2);
    color: #34D399;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .direct-contact-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    flex-wrap: wrap;
  }

  .direct-link {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .link-label {
    font-size: 0.75rem;
    color: #94A3B8;
  }

  .link-val {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #60A5FA;
  }

  .link-separator {
    color: rgba(255, 255, 255, 0.25);
  }

  /* Form Container */
  .contact-form-box {
    background-color: var(--bg-white);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-lg);
    padding: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    box-shadow: var(--shadow-subtle);
  }

  .form-title {
    font-size: 1.25rem;
    color: var(--text-main);
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .field-label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 0.65rem 0.875rem;
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.875rem;
    background-color: var(--bg-primary);
    color: var(--text-main);
    transition: border-color var(--transition-fast);
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    background-color: #FFFFFF;
  }

  .form-submit {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .submit-note {
    font-size: 0.75rem;
    color: var(--text-light);
    text-align: center;
  }

  @media (max-width: 960px) {
    .contact-card {
      grid-template-columns: 1fr;
      padding: 2rem;
      gap: 2.5rem;
    }

    .contact-form-box {
      padding: 1.5rem;
    }
  }
</style>
