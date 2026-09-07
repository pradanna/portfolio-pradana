# PRD — Portfolio Software House (Pradana)

## Konteks
- **Tipe:** Single-page portfolio, solo fullstack dev (HRIS, Payroll, POS, ERP custom)
- **Tujuan:** Closing tool untuk calon klien bisnis non-teknis (owner UMKM, HR/ops manager)
- **Fungsi:** Ganti proses "jelaskan dari nol", filter leads via rate card

---

## Design System

### Tone
Simple + playful — bukan ramai, tapi lewat **satu motif bentuk geometris konsisten** + micro-interaction minimal. Struktur tetap rapi & scannable.

### Warna
| Token | Hex | Peran |
|---|---|---|
| Background | `#FFFBF2` | Off-white hangat, latar utama |
| Text | `#1B1B1F` | Hitam kebiruan gelap |
| Primary | `#3D5A80` | Biru slate — dominan 90% halaman |
| Accent | `#F2A65A` | Oranye madu — **dipakai sangat jarang** (CTA, 1-2 titik fokus/layar) |
| Status | `#8FB39A` | Hijau sage — badge kecil saja |
| Divider | `#E8E2D4` | Border/divider netral hangat |

### Tipografi
- **Headline:** Fraunces (serif playful) — 48–64px
- **Body/UI:** Inter — 16–18px body, 24–28px subheading, 13px label
- Case: sentence case (bukan ALL-CAPS), label muted untuk hierarki

### Layout & Motif
- Left-aligned, banyak white space
- Motif: **bentuk geometris bulat asimetris + garis penghubung** (bukan ikon stok)
- Studi kasus: **panel bergantian kiri-kanan** (bukan grid kartu seragam)
- Tidak ada: eyebrow ALL-CAPS, dekorasi panah, bullet titik tengah

### Animasi
- **1 animasi besar:** bentuk geometris "tergambar" saat scroll masuk section Studi Kasus
- Hero: drift halus pada bentuk geometris (non-trigger)
- Sisanya: hover state halus saja
- Wajib hormati `prefers-reduced-motion`

---

## Struktur Halaman (Single Page)

```
Nav: Logo | Layanan | Studi Kasus | Rate | Proses | Kontak
1. Hero
2. Trust Signal (logo klien)
3. Layanan (4 item: HRIS/Payroll, POS, ERP, Sistem Custom)
4. Studi Kasus (panel bergantian L-R)
5. Rate Card (POS / HRIS-Payroll / ERP + Paket Maintenance)
6. Proses Kerja (Konsultasi > Proposal > Dev > Deploy > Support)
7. Tentang (foto + bio singkat Pradana)
8. Testimoni
9. Kontak / CTA Penutup
Footer
```

---

## Copy Rules
- Hero & layanan: **hindari istilah teknis** (DDD, microservices, dll) — gunakan di studi kasus jika relevan
- CTA: aktif & spesifik — "Konsultasi Gratis", bukan "Submit" / "Learn More"
- Studi kasus: format **Masalah > Solusi > Hasil (angka jika ada)**
- Label proyek jujur: bedakan **"Proyek Klien"** vs **"Studi Kasus & Eksplorasi"**

---

## Studi Kasus (Referensi Konten)
1. **Yousee Indonesia** — HRIS custom, payroll manual 3 hari/bulan jadi 4 jam
2. **ERP Toko Elektronik** — stok antar cabang tidak sinkron, ERP modular (Go + Svelte) *(label: Studi Kasus & Eksplorasi)*

---

## Catatan Teknis
- **Responsive:** panel L-R jadi stack vertikal di mobile
- **Font:** Fraunces (variable) + Inter — Google Fonts
- **Aksesibilitas:** cek kontras, oranye madu hanya pada elemen bold/besar (bukan teks kecil)
