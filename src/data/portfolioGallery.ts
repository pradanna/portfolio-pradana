import type { PortfolioProject } from '../types/portfolio';

export const portfolioGalleryData: PortfolioProject[] = [
  {
    id: 'pos-kasir',
    title: 'Aplikasi POS & Kasir Toko',
    client: 'Retail & Toko',
    category: 'Sistem Bisnis',
    badge: 'Aplikasi Kasir',
    description: 'Aplikasi kasir (POS) mobile praktis untuk pencatatan transaksi penjualan, manajemen menu & produk, cetak struk via printer thermal Bluetooth, dan penyimpanan data lokal tanpa ketergantungan internet (offline).',
    images: [
      '/portfolio/pos-kasir/screen-1.png',
      '/portfolio/pos-kasir/screen-2.png',
      '/portfolio/pos-kasir/screen-3.png'
    ],
    aspectRatio: 'mobile',
    stack: ['Mobile Apps', 'Local Storage (Offline)', 'Bluetooth Thermal Printer', 'Laporan Penjualan']
  },
  {
    id: 'bpkad-surakarta',
    title: 'Portal & Sistem Informasi BPKAD Surakarta',
    client: 'BPKAD Kota Surakarta',
    category: 'Institusi & Pemerintahan',
    badge: 'Portal Resmi Instansi',
    description: 'Sistem dan portal resmi pengelolaan keuangan dan aset daerah, penyajian informasi publik, transparansi anggaran, dan layanan online bagi masyarakat.',
    images: [
      '/portfolio/bpkad/screen-1.png',
      '/portfolio/bpkad/screen-2.png',
      '/portfolio/bpkad/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Web Portal', 'Government Standard', 'Security Hardening', 'Database Sync']
  },
  {
    id: 'crm-ielc',
    title: 'Custom CRM & Student Management IELC',
    client: 'IELC (Language Center)',
    category: 'Sistem Custom',
    badge: 'Enterprise CRM',
    description: 'Sistem manajemen alur pendaftaran siswa, rekap kelas, follow-up leads konsultasi, dan dashboard pemantauan kinerja akademik terpadu hingga penerbitan invoice dan manajemen siswa.',
    images: [
      '/portfolio/crm-ielc/screen-1.png',
      '/portfolio/crm-ielc/screen-2.png',
      '/portfolio/crm-ielc/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Custom SaaS', 'Manajemen Siswa', 'Invoice Generator', 'WhatsApp Integration']
  },
  {
    id: 'jodi-warehouse',
    title: 'Warehouse & Finance System Kopi Jodi',
    client: 'Kopi Jodi Roastery & Cafe',
    category: 'Sistem Bisnis',
    badge: 'Warehouse & Finance',
    description: 'Sistem operasional warehouse dan inventory persediaan bahan baku, pencatatan keluar-masuk barang, audit stok real-time, hingga pencatatan keuangan dan laporan laba rugi.',
    images: [
      '/portfolio/jodi-warehouse/screen-1.png',
      '/portfolio/jodi-warehouse/screen-2.png',
      '/portfolio/jodi-warehouse/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Sistem Gudang', 'Manajemen Stok', 'Audit Real-Time', 'Modul Keuangan']
  },
  {
    id: 'kedai-mpasi',
    title: 'Sistem Pemesanan & Operasional Kedai MPASI',
    client: 'Kedai MPASI Solo',
    category: 'Sistem Bisnis',
    badge: 'Operasional FnB',
    description: 'Digitalisasi alur reservasi menu harian, manajemen kitchen preparation, rekapitulasi pesanan pelanggan, dan integrasi pengiriman kurir.',
    images: [
      '/portfolio/kedai-mpasi/screen-1.png',
      '/portfolio/kedai-mpasi/screen-2.png',
      '/portfolio/kedai-mpasi/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Order Management', 'Kitchen Display', 'Customer Database', 'Reports']
  },
  {
    id: 'desa-beran',
    title: 'Aplikasi Mobile Desa Beran',
    client: 'Pemerintah Desa Beran',
    category: 'Institusi & Pemerintahan',
    badge: 'Aplikasi Institusi',
    description: 'Aplikasi institusi desa untuk layanan pengajuan surat online bagi warga, pelayanan administrasi digital, dan sistem informasi kalurahan.',
    images: [
      '/portfolio/desa-beran/screen-1.jpg',
      '/portfolio/desa-beran/screen-2.jpg',
      '/portfolio/desa-beran/screen-3.jpg'
    ],
    aspectRatio: 'mobile',
    stack: ['Aplikasi Institusi', 'Pengajuan Surat Online', 'Administrasi Warga', 'Mobile Apps']
  },
  {
    id: 'kiwi',
    title: 'Are You Smartest Kiwi — Interactive Mobile Quiz App',
    client: 'Kiwi Edutech Partner',
    category: 'Mobile Apps',
    badge: 'Gamified Edutech',
    description: 'Aplikasi game trivia edukasi interaktif dengan sistem leaderboard real-time, kuis adaptif bertingkat, avatar reward, dan analitik capaian belajar pengguna.',
    images: [
      '/portfolio/kiwi/kiwi.jpg'
    ],
    aspectRatio: 'desktop',
    stack: ['Mobile / Flutter', 'Game Mechanics', 'Real-time Leaderboard', 'Cloud Sync']
  },
  {
    id: 'omahgue',
    title: 'OmahGue — Platform Ekosistem Properti & Hunian',
    client: 'OmahGue Indonesia',
    category: 'Sistem Custom',
    badge: 'Platform Properti',
    description: 'Aplikasi listing dan manajemen transaksi sewa hunian, penelusuran unit berbasis lokasi interaktif, sistem booking digital, serta dasbor pengelola aset properti.',
    images: [
      '/portfolio/omahgue/omahgue.jpg'
    ],
    aspectRatio: 'desktop',
    stack: ['Web & Mobile', 'Geolocation Search', 'Booking Engine', 'Payment Gateway']
  },
  {
    id: 'teman-belajar',
    title: 'Teman Belajar — Platform Bimbel & Komunitas Belajar',
    client: 'Teman Belajar',
    category: 'Mobile Apps',
    badge: 'Learning Platform',
    description: 'Aplikasi ekosistem pembelajaran daring bagi siswa dan tutor dengan penjadwalan sesi bimbingan, bank latihan soal bertingkat, serta forum diskusi interaktif.',
    images: [
      '/portfolio/teman-belajar/temanbelajar.jpg'
    ],
    aspectRatio: 'desktop',
    stack: ['Edutech Platform', 'Interactive Class', 'Question Bank', 'Progress Tracking']
  },
  {
    id: 'sukmatrip',
    title: 'Sukmatrip — Travel & Tour Booking System',
    client: 'Sukma Trip Wisata',
    category: 'Sistem Custom',
    badge: 'Travel Management',
    description: 'Platform manajemen paket perjalanan wisata domestik & internasional, pemilihan itinerary mandiri, manajemen kuota keberangkatan, dan reservasi otomatis.',
    images: [
      '/portfolio/sukmatrip/sukmatrip.jpg'
    ],
    aspectRatio: 'desktop',
    stack: ['Custom Booking SaaS', 'Trip Scheduler', 'Automated Voucher', 'Admin Ops']
  },
  {
    id: 'yousee-indonesia',
    title: 'Website Bisnis & Katalog Titik Iklan Yousee',
    client: 'Yousee Indonesia',
    category: 'Sistem Bisnis',
    badge: 'Media Advertising',
    description: 'Platform bisnis media iklan luar ruang untuk pengelolaan persewaan titik billboard/videotron, pencarian katalog lokasi titik iklan, dan integrasi pemesanan langsung via WhatsApp.',
    images: [
      '/portfolio/yousee-indonesia/screen-1.png',
      '/portfolio/yousee-indonesia/screen-2.png',
      '/portfolio/yousee-indonesia/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Website Bisnis', 'Pengelolaan Titik Iklan', 'Pemesanan via WhatsApp', 'Peta Interaktif']
  },
  {
    id: 'yousee-finance',
    title: 'Sistem Manajemen Keuangan & Invoice Yousee',
    client: 'Yousee Indonesia',
    category: 'Sistem Bisnis',
    badge: 'Internal Finance',
    description: 'Aplikasi keuangan terintegrasi untuk penerbitan invoice otomatis, pelacakan tagihan termin klien, rekonsiliasi kasbon, dan laporan laba-rugi proyek billboard.',
    images: [
      '/portfolio/yousee-finance/screen-1.png',
      '/portfolio/yousee-finance/screen-2.png',
      '/portfolio/yousee-finance/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Finance Dashboard', 'Automated Invoicing', 'Tax Compliance', 'Audit Logs']
  },
  {
    id: 'yousee-mobile-led',
    title: 'Mobile LED Booking & Fleet Tracking',
    client: 'Yousee Indonesia',
    category: 'Sistem Custom',
    badge: 'Fleet & LED System',
    description: 'Sistem pemantauan rute armada mobile videotron, penjadwalan konten kampanye berjalan, serta laporan tayang iklan interaktif untuk pengiklan.',
    images: [
      '/portfolio/yousee-mobile-led/screen-1.png',
      '/portfolio/yousee-mobile-led/screen-2.png',
      '/portfolio/yousee-mobile-led/screen-3.png'
    ],
    aspectRatio: 'desktop',
    stack: ['Fleet Management', 'Live Route Monitoring', 'Content Scheduler', 'Client Portal']
  }
];
