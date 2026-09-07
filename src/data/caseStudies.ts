import type { CaseStudy } from '../types/portfolio';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'yousee-indonesia',
    title: 'Yousee Indonesia',
    tag: 'Proyek Klien',
    tagVariant: 'client',
    headline: 'Otomasi Payroll & Rekap Kehadiran untuk Menghilangkan Beban Manual 3 Hari Tiap Bulan',
    problem: 'Sebelumnya, tim HR menghabiskan 3 hari kerja penuh setiap akhir bulan untuk mencocokkan data mesin absensi, lembur, dan potongan kasbon dengan spreadsheet manual berisiko salah hitung.',
    solution: 'Membangun aplikasi HRIS terpadu dengan aturan kalkulasi gaji bertingkat otomatis, portal mandiri persetujuan cuti/lembur untuk manajer cabang, dan generator slip gaji digital.',
    result: 'Waktu proses payroll terpangkas drastis dari 3 hari kerja menjadi hanya 4 jam dengan akurasi 100% dan transparansi perhitungan bagi karyawan.',
    metrics: {
      value: '3 Hari → 4 Jam',
      label: 'Efisiensi waktu rekapitulasi gaji bulanan'
    },
    stack: ['Svelte', 'Go (Golang)', 'PostgreSQL', 'Docker'],
    mockup: {
      type: 'hris',
      title: 'Portal HRIS & Penggajian Yousee',
      subtitle: 'Modul Approval & Kalkulasi Payroll Otomatis'
    }
  },
  {
    id: 'erp-elektronik',
    title: 'ERP Retail Elektronik Multi-Cabang',
    tag: 'Studi Kasus & Eksplorasi',
    tagVariant: 'exploration',
    headline: 'Sinkronisasi Stok Real-Time untuk Menghilangkan Overselling di 5 Cabang Toko',
    problem: 'Barang elektronik bernilai tinggi (TV, kulkas, pendingin ruangan) kerap terjual ganda karena selisih jeda update data gudang pusat dengan kasir cabang yang masih mengandalkan rekap chat WhatsApp.',
    solution: 'Merancang arsitektur ERP modular berbasis antrian data instan (event-driven). Setiap reservasi barang di kasir mengunci kuota stok seketika dan langsung tercatat di dasbor logistik.',
    result: 'Selisih stok pada audit mingguan terpangkas hingga 0%, dan proses pengiriman barang antar-cabang dapat terpantau secara transparan dalam hitungan detik.',
    metrics: {
      value: '0% Selisih Stok',
      label: 'Akurasi audit persediaan di seluruh cabang'
    },
    stack: ['SvelteKit', 'Go', 'Redis Pub/Sub', 'PostgreSQL'],
    mockup: {
      type: 'erp',
      title: 'Dashboard Kontrol Stok Multi-Gudang',
      subtitle: 'Sinkronisasi Live Antara Cabang dan Pusat Distribusi'
    }
  }
];
