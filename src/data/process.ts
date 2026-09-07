import type { ProcessStep } from '../types/portfolio';

export const processSteps: ProcessStep[] = [
  {
    step: 'Tahap 1',
    name: 'Konsultasi Alur Kerja',
    summary: 'Kita bedah tuntas alur kerja bisnis Anda saat ini, titik sumbatan (bottleneck), dan apa yang paling mendesak diotomasi tanpa bahasa teknis yang rumit.',
    deliverable: 'Peta alur kebutuhan sistem & rangkuman masalah'
  },
  {
    step: 'Tahap 2',
    name: 'Proposal & Arsitektur',
    summary: 'Rancangan solusi sistematis disajikan bersama alokasi waktu pengerjaan yang realistis dan penawaran biaya transparan tanpa biaya tersembunyi.',
    deliverable: 'Dokumen cakupan proyek & timeline pasti'
  },
  {
    step: 'Tahap 3',
    name: 'Development & Review Bertahap',
    summary: 'Aplikasi dibangun per modul fungsional. Anda dapat mencoba langsung demo sistem secara berkala tiap 1-2 minggu untuk memberikan masukan nyata.',
    deliverable: 'Akses staging demo aktif untuk dicoba tim Anda'
  },
  {
    step: 'Tahap 4',
    name: 'Deployment & Training Tim',
    summary: 'Sistem diluncurkan di server produksi yang aman, migrasi data lama dibantu hingga rapi, dan seluruh staf pengguna diberikan panduan penggunaan.',
    deliverable: 'Sistem live, data termigrasi, & tim siap pakai'
  },
  {
    step: 'Tahap 5',
    name: 'Support & Pendampingan',
    summary: 'Garansi pemeliharaan aktif pasca peluncuran untuk memastikan aplikasi berjalan mulus menopang operasional harian bisnis Anda.',
    deliverable: 'Garansi stabilitas sistem & dukungan teknis langsung'
  }
];
