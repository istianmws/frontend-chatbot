# 🎨 Frontend - Chatbot CS RS PKU Muhammadiyah Grabag

Antarmuka web interaktif (Frontend) untuk **Chatbot Customer Service RS PKU Muhammadiyah Grabag** yang dibangun menggunakan **Astro**, **Modern CSS Design System**, dan **Vanilla JS**.

Aplikasi ini berfungsi sebagai portal informasi digital 24 jam bagi calon pasien dan masyarakat untuk mengetahui jadwal praktik dokter, daftar poliklinik, alur pendaftaran BPJS/Umum, serta layanan darurat IGD.

---

## 🛠️ Tech Stack

| Layer / Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | [Astro v5](https://astro.build/) | Static site & component-based web framework berkecepatan tinggi tanpa runtime JS bloat. |
| **Styling (CSS)** | Vanilla CSS (Modern Design System) | Variabel HSL, Glassmorphism, nuansa Islami & Medis (Emerald Green `#0D7C66` & White). |
| **Typography** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Tipografi modern Google Fonts dengan keterbacaan tinggi untuk segala usia. |
| **Logic & Network** | Vanilla JavaScript + Fetch API | Komunikasi real-time ke Backend Express REST API (`POST /api/chat`). |
| **Fallback Engine** | Smart Rule-Based Engine | Cadangan informasi lokal jika backend offline atau kuota API habis. |

---

## 📁 Struktur Direktori Frontend

```
frontend/
├── public/
│   └── favicon.svg                # Favicon logo medis RS PKU Grabag
├── src/
│   ├── components/
│   │   ├── Header.astro           # Header branding RS PKU, status 24 jam, tombol IGD
│   │   ├── ChatWidget.astro       # Komponen utama chat bubble, tombol toggle & tester
│   │   └── QuickInfoModal.astro   # Modal Panduan RS (Jadwal poli, syarat BPJS, kontak)
│   ├── data/
│   │   └── hospitalData.js        # Knowledge base cadangan & data prompt cepat
│   ├── layouts/
│   │   └── Layout.astro           # Layout induk HTML, Meta SEO & OpenGraph
│   ├── pages/
│   │   └── index.astro            # Halaman utama (Sidebar + Area Chat)
│   └── styles/
│       └── global.css             # Design tokens, animasi, glassmorphism & scrollbar
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🌟 Fitur Utama Frontend

1. **Dukungan Penuh Multimodal (Foto, Suara, PDF)**:
   - **Upload Foto/Gambar (📎 / 📷)**: Pasien dapat melampirkan foto Surat Rujukan Faskes 1, Kartu BPJS, atau resep obat.
   - **Voice Note / Rekam Suara Pasien (🎙️)**: Pasien dapat merekam suara pertanyaan langsung dari browser menggunakan mikrofon, ideal bagi pengguna lansia.
   - **Drag & Drop & Paste (Ctrl+V)**: Mendukung drop file langsung atau paste screenshot.
2. **Tata Letak Chat Kanan-Kiri & Bubble Visual**:
   - **User (Kanan)**: Bubble gradien emerald green dengan teks putih kontras, thumbnail foto lampiran / player audio, label `Anda (Pasien) 👤`.
   - **CS Virtual (Kiri)**: Bubble putih bersih berborder halus, logo robot CS hijau, label `🌿 CS Virtual RS PKU`, dan tombol `📋 Salin`.
2. **Indikator Mengetik (*Typing Indicator*)**:
   - Animasi 3 titik bergelombang saat menunggu balasan AI dan hilang otomatis saat balasan tiba.
3. **Pills Tanya Cepat (*Quick Action Chips*)**:
   - Pilihan pertanyaan instan: *📅 Jadwal Dokter Hari Ini*, *🏥 Daftar Poli & Layanan*, *📋 Alur Daftar BPJS & Umum*, *🚨 Layanan IGD & Ambulans*.
4. **Modal Panduan RS (*Quick Info Drawer*)**:
   - Akses cepat jadwal poliklinik per hari/jam, syarat berkas BPJS, nomor ambulans, dan lokasi RS.
5. **Tombol Toggle Fallback (`[ 🛡️ Fallback: ON / OFF ]`)**:
   - Memungkinkan penguji memilih mode fallback knowledge base lokal atau mode AI murni langsung dari Google Gemini API.
6. **Tombol Diagnostik Live API (`[ 🧪 Tes API AI ]`)**:
   - Menguji koneksi langsung ke backend & Google Gemini API secara instan dari layar chat.
7. **Deteksi Port Otomatis**:
   - Mendeteksi secara cerdas apakah backend berjalan di port `5000` atau `3000`.

---

## 🚀 Cara Instalasi & Penggunaan

### 1. Prasyarat
- Pastikan [Node.js](https://nodejs.org/) (versi 18 ke atas) dan `npm` sudah terpasang.

### 2. Masuk ke Folder Frontend
```bash
cd frontend
```

### 3. Install Dependensi
```bash
npm install
```

### 4. Menjalankan Dev Server
```bash
npm run dev
```
Buka browser di: **`http://localhost:4321`**

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build static akan berada di folder `dist/`.

---

## 🔗 Keterhubungan dengan Backend
Frontend secara otomatis mengirim request chat ke endpoint backend:
- `POST http://localhost:5000/api/chat`
- Payload: `{ message: string, disable_fallback: boolean }`
- Response: `{ reply: string, source: string, model: string }`
