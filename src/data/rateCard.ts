import type { PricingPlan, MaintenancePlan } from '../types/portfolio';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pos',
    category: 'Point of Sale (POS)',
    startingPrice: 'Rp 10.000.000',
    priceNote: 'Cakupan default dipersempit',
    description: 'Aplikasi kasir inti untuk pencatatan transaksi toko yang cepat dan stabil. Training & garansi 3 bulan tersedia sebagai add-on terpisah.',
    features: [
      'Aplikasi Kasir Web / Tablet responsif',
      'Manajemen produk, kategori, & stok real-time',
      'Laporan omzet harian & metode pembayaran',
      'Dukungan cetak struk bluetooth / thermal printer',
      'Penyimpanan database transaksi lokal/cloud'
    ]
  },
  {
    id: 'hris',
    category: 'HRIS & Payroll',
    startingPrice: 'Rp 28.000.000',
    priceNote: 'Cakupan lengkap siap pakai',
    description: 'Solusi tepat bagi perusahaan dengan 20-250+ karyawan yang ingin menghentikan pusingnya rekap manual di Excel.',
    features: [
      'Integrasi mesin absensi & rekap jam kerja',
      'Kalkulasi gaji pokok, lembur, BPJS, & PPh 21',
      'Portal karyawan untuk cuti & reimbursement',
      'Persetujuan bertingkat (Manager / HR / Finance)',
      'Unduh slip gaji PDF terenkripsi otomatis'
    ]
  },
  {
    id: 'erp',
    category: 'ERP Modular Terpadu',
    startingPrice: 'Rp 40.000.000',
    priceNote: 'Modul inti bisnis & operasional',
    description: 'Cakupan awal difokuskan pada modul inti (multi-gudang, stok, laporan dasar). Dashboard analitik eksekutif & integrasi API khusus tersedia sebagai modul tambahan.',
    features: [
      'Manajemen multi-cabang & transfer antar gudang',
      'Alur pengadaan barang (PO, DO, Surat Jalan)',
      'Pencatatan faktur, piutang, & arus kas masuk',
      'Laporan stok & rekapitulasi audit barang dasar',
      'Arsitektur data modular siap ekspansi modul'
    ]
  }
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: 'Basic Care',
    price: 'Rp 1.500.000',
    cadence: '/bulan',
    features: [
      'Monitoring kesehatan server & database',
      'Security patch & pembaruan dependensi rutin',
      'Perbaikan bug tak terduga',
      'Respon bantuan dalam 24 jam kerja'
    ]
  },
  {
    name: 'Standard Pro',
    price: 'Rp 3.500.000',
    cadence: '/bulan',
    features: [
      'Semua cakupan paket Basic Care',
      'Backup database otomatis harian ke cloud storage',
      'Alokasi 8 jam/bulan untuk penyesuaian fitur minor',
      'Respon bantuan prioritas dalam 12 jam kerja'
    ]
  },
  {
    name: 'Priority Partner',
    price: 'Rp 6.000.000',
    cadence: '/bulan',
    features: [
      'Semua cakupan paket Standard Pro',
      'Dukungan langsung via jalur WhatsApp khusus',
      'Alokasi 20 jam/bulan untuk pengembangan fitur baru',
      'SLA respon cepat maksimal 2 jam saat jam operasional'
    ]
  }
];
