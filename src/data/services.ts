import type { ServiceItem } from '../types/portfolio';

export const servicesData: ServiceItem[] = [
  {
    id: 'institution-system',
    title: 'Sistem & Website Institusi',
    shortDesc: 'Untuk pemerintah, kampus, organisasi — profil, layanan publik, administrasi online.',
    detail: 'Pengembangan portal resmi, digitalisasi birokrasi, sistem informasi kependudukan dan akademik dengan standar keamanan tinggi dan aksesibilitas ramah warga.',
    features: [
      'Portal profil instansi & informasi publik',
      'Pelayanan administrasi & persuratan digital',
      'Integrasi database warga / mahasiswa terpusat',
      'Keamanan data & hak akses berjenjang'
    ],
    proofs: ['BPKAD Surakarta', 'Desa Beran', 'Fakultas Syariah'],
    shapeVariant: 'rounded-square'
  },
  {
    id: 'business-operations',
    title: 'Sistem Bisnis & Operasional',
    shortDesc: 'HRIS, payroll, POS, ERP, gudang — operasional harian tanpa Excel atau proses manual.',
    detail: 'Blok modul bisnis terintegrasi untuk memangkas waktu kerja manual, menghilangkan selisih stok antar-gudang, dan otomasi perhitungan gaji serta laporan keuangan.',
    features: [
      'Rekap absensi, cuti, & kalkulasi payroll otomatis',
      'Kasir POS toko & cetak struk praktis',
      'ERP manajemen persediaan & multi-gudang',
      'Laporan omzet & laba rugi real-time'
    ],
    proofs: ['Aplikasi POS (kasir)', 'Sistem ERP', 'Kopi Jodi Warehouse'],
    shapeVariant: 'cluster'
  },
  {
    id: 'mobile-apps',
    title: 'Aplikasi Mobile',
    shortDesc: 'Untuk kebutuhan yang harus diakses langsung dari smartphone pengguna Anda.',
    detail: 'Aplikasi iOS dan Android yang responsif, cepat, dan intuitif untuk kebutuhan pelanggan, komunitas belajar, hingga manajemen operasional lapangan.',
    features: [
      'Antarmuka native yang gesit & ramah pengguna',
      'Notifikasi push real-time & offline support',
      'Integrasi autentikasi & pembayaran digital',
      'Sinkronisasi instan ke server cloud'
    ],
    proofs: ['Are You Smartest Kiwi', 'OmahGue', 'Teman Belajar'],
    shapeVariant: 'flow-node'
  },
  {
    id: 'custom-system',
    title: 'Sistem Custom',
    shortDesc: 'Punya alur kerja unik? Kami rancang dan bangun dari nol.',
    detail: 'Aplikasi SaaS internal untuk proses bisnis spesifik yang tidak bisa diwadahi oleh aplikasi pasaran. Dibangun pas dengan proses yang sudah berjalan di tim Anda.',
    features: [
      'Alur kerja disesuaikan 100% dengan SOP Anda',
      'Integrasi API pihak ketiga & WhatsApp bot',
      'Hak akses berjenjang sesuai kewenangan',
      'Kode bersih yang siap dikembangkan mandiri'
    ],
    proofs: ['CRM IELC', 'OmahGue', 'Teman Belajar', 'Sukmatrip', 'Kedai MPASI'],
    shapeVariant: 'connector'
  }
];
