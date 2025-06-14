Mawlanaweb - Website Optimization Changelog

Target: Skor PageSpeed Mobile ≥ 80

Platform: GitHub PagesFokus: Performa Mobile, Responsivitas, Anti-Layout Shift

✅ 1. Optimasi Gambar Hero & Struktur Responsive

File: index.html

Perubahan

Keterangan

✅ Tambah atribut width & height

Semua <img> diberi dimensi eksplisit untuk mencegah CLS

✅ Gunakan srcset & sizes

Gambar hero (mawlanaweb.web.id.webp) diatur responsive untuk berbagai device

✅ Aktifkan loading="lazy"

Semua gambar non-above-the-fold menggunakan lazy loading

✅ 2. Tunda Script Analytics (Non-Blocking)

File: index.html

Perubahan

Keterangan

✅ Tunda pemanggilan Yandex, Clarity, dan Google Tag Manager

Ditunda 3 detik setelah window.load menggunakan setTimeout()

✅ Gunakan async dan onload

Memastikan script hanya aktif saat siap, tidak menghambat parsing awal

✅ Fallback <noscript> untuk Yandex

Tetap tersedia jika JS dinonaktifkan

✅ 3. Optimasi Link CSS Eksternal

File: index.html

Perubahan

Keterangan

✅ Google Fonts pakai media=print + onload

Mencegah blocking saat FCP

✅ Vendor CSS (aos, swiper, glightbox) ditunda

Gunakan media="print" dan fallback <noscript> untuk akses penuh

✅ main.css tetap dipanggil normal

Untuk memastikan style utama tetap di-load tepat waktu

✅ 4. Layout Anti-Shift & Anti-Bounce

File: index.html dan main.css

Perubahan

Keterangan

✅ Tambah width & height pada <img>

Menstabilkan layout untuk menghindari CLS

✅ Gunakan aspect-ratio untuk img[loading="lazy"]

Menjaga proporsi gambar sebelum dimuat

✅ 5. Custom CSS untuk Responsivitas Mobile

File: main.css

Perubahan

Keterangan

✅ Tambah @media (max-width: 768px)

Untuk section Hero, tombol CTA, stat-card, nav-tabs, dan layout mobile

✅ Buat .hero-buttons fleksibel

Flex direction column untuk layar kecil

✅ Navigasi tab di .features bisa scroll

Menghindari overflow horizontal fix di mobile

✅ 6. Inline Critical CSS

File: index.html

Perubahan

Keterangan

✅ Inline critical CSS untuk hero & header

Menampilkan elemen penting sebelum CSS eksternal selesai dimuat

✅ Inline critical CSS untuk halaman fitur

Layout tab fitur dan fitur box langsung tampil saat page load

📊 Hasil yang Diharapkan

Metrik

Target

✅ Largest Contentful Paint (LCP)

< 2.5 detik

✅ Cumulative Layout Shift (CLS)

< 0.1

✅ Total Blocking Time (TBT)

< 200ms

✅ First Contentful Paint (FCP)

< 1 detik

✅ PageSpeed Mobile Score

80–95 (tergantung koneksi & device)

💪 File yang Terlibat

index.html

main.css

main.js (tidak diubah langsung, hanya defer jika perlu)

assets/img/*.webp (butuh versi -400.webp, -800.webp, dll)

📌 Rekomendasi Tambahan (Opsional)

🔧 Gunakan Squoosh untuk kompres gambar secara drastis.

📀 Setup GitHub Action untuk:

Minify HTML/CSS

Optimasi gambar saat push

🌐 Tambahkan manifest.json dan meta viewport penuh untuk PWA readiness.

