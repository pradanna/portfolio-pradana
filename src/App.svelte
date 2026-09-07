<script lang="ts">
  import Navbar from './components/layout/Navbar.svelte';
  import Hero from './components/sections/Hero.svelte';
  import TrustSignal from './components/sections/TrustSignal.svelte';
  import Services from './components/sections/Services.svelte';
  import PortfolioGallery from './components/sections/PortfolioGallery.svelte';
  import RateCard from './components/sections/RateCard.svelte';
  import Process from './components/sections/Process.svelte';
  import About from './components/sections/About.svelte';
  import Testimonials from './components/sections/Testimonials.svelte';
  import ContactCta from './components/sections/ContactCta.svelte';
  import Footer from './components/layout/Footer.svelte';
</script>

<div class="portfolio-app">
  <!-- Top Navigation -->
  <Navbar />

  <main id="main-content">
    <!-- 1. Hero -->
    <Hero />

    <!-- 2. Trust Signal -->
    <TrustSignal />

    <!-- 3. Layanan -->
    <Services />

    <!-- 4. Showcase Portofolio Slider Gambar Proyek -->
    <PortfolioGallery />

    <!-- 5. Rate Card & Paket Maintenance (Disembunyikan sementara) -->
    <!-- <RateCard /> -->

    <!-- 6. Proses Kerja (Disembunyikan sementara) -->
    <!-- <Process /> -->

    <!-- 7. Tentang Pradana -->
    <About />

    <!-- 8. Testimoni Klien (Di-hide sementara) -->
    <!-- <Testimonials /> -->

    <!-- 9. Kontak / CTA Penutup -->
    <ContactCta />
  </main>

  <!-- Footer -->
  <Footer />
</div>

<style>
  .portfolio-app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-primary);
  }

  main {
    flex: 1;
  }
</style>
