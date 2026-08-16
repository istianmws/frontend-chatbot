/**
 * Data Resmi & Fallback Knowledge Base RS PKU Muhammadiyah Grabag
 * Digunakan sebagai sumber informasi lokal / cadangan jika backend offline.
 */

export const hospitalInfo = {
  name: "RS PKU Muhammadiyah Grabag",
  tagline: "Melayani dengan Islami, Cepat, dan Penuh Empati",
  address: "Jl. Grabag - Magelang Km 1, Grabag, Magelang, Jawa Tengah",
  phone: "(0293) 3148888",
  whatsappCS: "0812-3456-7890",
  emergencyPhone: "(0293) 3148999",
  emergencyWhatsapp: "0812-9999-118",
  operationalHours: "IGD & Rawat Inap 24 Jam | Poliklinik Rawat Jalan: Senin - Sabtu (08.00 - 20.00 WIB)",
};

export const polyclinics = [
  {
    id: "umum",
    name: "Poli Umum",
    description: "Pemeriksaan kesehatan umum, surat sehat, rujukan, konsultasi keluhan ringan hingga sedang.",
    days: "Senin - Sabtu",
    hours: "08.00 - 20.00 WIB",
    doctors: [
      { name: "dr. Ahmad Fauzi", schedule: "Senin - Kamis (08.00 - 14.00)" },
      { name: "dr. Nurul Hidayah", schedule: "Jumat - Sabtu (08.00 - 14.00)" },
      { name: "dr. Rizki Pratama", schedule: "Senin - Sabtu (14.00 - 20.00)" }
    ]
  },
  {
    id: "anak",
    name: "Poli Anak (Sp.A)",
    description: "Konsultasi tumbuh kembang, imunisasi wajib & pilihan, penyakit anak dan bayi.",
    days: "Senin, Rabu, Jumat",
    hours: "09.00 - 13.00 WIB",
    doctors: [
      { name: "dr. Siti Rahmawati, Sp.A", schedule: "Senin, Rabu, Jumat (09.00 - 13.00)" }
    ]
  },
  {
    id: "kandungan",
    name: "Poli Kandungan & Kebidanan (Sp.OG)",
    description: "Pemeriksaan kehamilan (USG 4D), konsultasi program hamil, persalinan, KB, dan kesehatan reproduksi.",
    days: "Selasa, Kamis, Sabtu",
    hours: "10.00 - 14.00 WIB",
    doctors: [
      { name: "dr. Hendra Setiawan, Sp.OG", schedule: "Selasa & Kamis (10.00 - 14.00)" },
      { name: "dr. Maya Anggraini, Sp.OG", schedule: "Sabtu (09.00 - 13.00)" }
    ]
  },
  {
    id: "penyakit-dalam",
    name: "Poli Penyakit Dalam (Sp.PD)",
    description: "Pemeriksaan diabetes, hipertensi, gangguan pencernaan, ginjal, jantung, dan penyakit kronis.",
    days: "Senin - Kamis",
    hours: "13.00 - 17.00 WIB",
    doctors: [
      { name: "dr. Bambang Irawan, Sp.PD", schedule: "Senin - Kamis (13.00 - 17.00)" }
    ]
  },
  {
    id: "gigi",
    name: "Poli Gigi & Mulut",
    description: "Pembersihan karang gigi (scaling), cabut gigi, tambal, perawatan saluran akar, dan kawat gigi.",
    days: "Senin - Sabtu",
    hours: "09.00 - 17.00 WIB",
    doctors: [
      { name: "drg. Annisa Larasati", schedule: "Senin - Rabu (09.00 - 14.00)" },
      { name: "drg. Dimas Wicaksono", schedule: "Kamis - Sabtu (11.00 - 17.00)" }
    ]
  },
  {
    id: "bedah",
    name: "Poli Bedah Umum (Sp.B)",
    description: "Konsultasi bedah minor, perawatan luka kronis, hernia, usus buntu, dan tindakan operasi terencana.",
    days: "Selasa & Jumat",
    hours: "14.00 - 17.00 WIB",
    doctors: [
      { name: "dr. Yudi Prasetyo, Sp.B", schedule: "Selasa & Jumat (14.00 - 17.00)" }
    ]
  }
];

export const registrationProcedures = {
  bpjs: [
    "1. **Bawa Berkas Identitas**: KTP/KK asli dan Kartu BPJS Kesehatan (aktif) / KIS.",
    "2. **Surat Rujukan**: Surat rujukan faskes tingkat 1 (Puskesmas / Klinik) yang masih berlaku atau surat kontrol dari dokter spesialis.",
    "3. **Pendaftaran di Loket**: Ambil nomor antrean loket BPJS di lobi utama RS PKU Grabag.",
    "4. **Verifikasi SEP**: Petugas mencetak Surat Eligibilitas Peserta (SEP).",
    "5. **Menuju Poliklinik**: Pasien diarahkan ke ruang tunggu poli yang dituju."
  ],
  umum: [
    "1. **Bawa Kartu Identitas**: KTP / SIM / Paspor (atau Kartu Berobat bagi pasien lama).",
    "2. **Pendaftaran di Loket**: Ambil nomor antrean pendaftaran Umum / Asuransi Swasta.",
    "3. **Pilih Dokter & Poli**: Konfirmasi poli yang diinginkan dan lakukan registrasi.",
    "4. **Menuju Poliklinik**: Langsung menunggu panggilan di depan poli."
  ],
  online: [
    "1. Pendaftaran online dapat dilakukan H-1 melalui **WhatsApp CS: 0812-3456-7890**.",
    "2. Format pendaftaran: *Daftar / Nama Lengkap / NIK / No. BPJS / Poli Tujuan / Tanggal Kunjungan*.",
    "3. CS akan mengirimkan bukti nomor antrean digital untuk ditunjukkan ke loket saat kedatangan."
  ]
};

export const quickSuggestions = [
  { label: "📅 Jadwal Dokter Hari Ini", query: "Bisa berikan jadwal dokter praktek hari ini?" },
  { label: "🏥 Daftar Poli & Layanan", query: "Apa saja poli dan layanan yang tersedia di RS PKU Grabag?" },
  { label: "📋 Alur Daftar BPJS & Umum", query: "Bagaimana cara dan syarat alur pendaftaran pasien BPJS dan Umum?" },
  { label: "🚨 Layanan IGD 24 Jam & Ambulans", query: "Info layanan IGD dan nomor darurat ambulans RS PKU Grabag" }
];

/**
 * Smart Fallback Response Generator (Offline Mode)
 */
export function getOfflineReply(message) {
  const query = message.toLowerCase().trim();

  // 1. Jadwal Dokter
  if (query.includes("jadwal") || query.includes("dokter") || query.includes("praktik") || query.includes("praktek")) {
    let specificPoli = polyclinics.find(p => query.includes(p.name.toLowerCase()) || query.includes(p.id));
    
    if (specificPoli) {
      const docList = specificPoli.doctors.map(d => `• **${d.name}**: ${d.schedule}`).join("\n");
      return `Berikut adalah informasi jadwal praktik untuk **${specificPoli.name}** di RS PKU Muhammadiyah Grabag:\n\n` +
        `⏰ **Hari & Jam Layanan:** ${specificPoli.days} (${specificPoli.hours})\n` +
        `👨‍⚕️ **Dokter yang Bertugas:**\n${docList}\n\n` +
        `💡 *Pendaftaran dapat dilakukan langsung di loket atau H-1 via WA CS: 0812-3456-7890.*`;
    }

    return `Berikut adalah rangkuman **Jadwal Praktik Dokter & Poli RS PKU Muhammadiyah Grabag**:\n\n` +
      `• **Poli Umum** (Setiap Hari 08.00 - 20.00 WIB)\n  *dr. Ahmad Fauzi, dr. Nurul Hidayah, dr. Rizki Pratama*\n\n` +
      `• **Poli Anak (Sp.A)** (Senin, Rabu, Jumat 09.00 - 13.00 WIB)\n  *dr. Siti Rahmawati, Sp.A*\n\n` +
      `• **Poli Kandungan & Kebidanan (Sp.OG)** (Selasa, Kamis, Sabtu)\n  *dr. Hendra Setiawan, Sp.OG & dr. Maya Anggraini, Sp.OG*\n\n` +
      `• **Poli Penyakit Dalam (Sp.PD)** (Senin - Kamis 13.00 - 17.00 WIB)\n  *dr. Bambang Irawan, Sp.PD*\n\n` +
      `• **Poli Gigi & Mulut** (Senin - Sabtu 09.00 - 17.00 WIB)\n  *drg. Annisa Larasati & drg. Dimas Wicaksono*\n\n` +
      `• **Poli Bedah Umum (Sp.B)** (Selasa & Jumat 14.00 - 17.00 WIB)\n  *dr. Yudi Prasetyo, Sp.B*\n\n` +
      `Silakan sebutkan nama poli yang ingin Anda ketahui lebih detail!`;
  }

  // 2. Layanan & Poli
  if (query.includes("layanan") || query.includes("poli") || query.includes("fasilitas") || query.includes("poliklinik")) {
    return `🏥 **Layanan & Poliklinik di RS PKU Muhammadiyah Grabag**:\n\n` +
      `1. **Instalasi Gawat Darurat (IGD) & Ambulans 24 Jam**\n` +
      `2. **Poli Rawat Jalan:**\n` +
      `   • Poli Umum\n   • Poli Anak (Sp.A)\n   • Poli Kandungan & USG 4D (Sp.OG)\n   • Poli Penyakit Dalam (Sp.PD)\n   • Poli Bedah Umum (Sp.B)\n   • Poli Gigi & Mulut\n` +
      `3. **Penunjang Medis:** Laboratorium 24 Jam, Radiologi/Rontgen, Farmasi/Apotek 24 Jam, Ruang Bersalin (VK).\n` +
      `4. **Rawat Inap:** Kelas VIP, Kelas 1, 2, 3, dan Ruang Isolasi.\n\n` +
      `Ada layanan tertentu yang ingin Anda tanyakan jadwal atau persyaratannya?`;
  }

  // 3. Pendaftaran
  if (query.includes("daftar") || query.includes("pendaftaran") || query.includes("bpjs") || query.includes("syarat") || query.includes("alur")) {
    return `📋 **Alur & Prosedur Pendaftaran Pasien RS PKU Grabag**:\n\n` +
      `🔹 **Pasien BPJS Kesehatan:**\n` +
      registrationProcedures.bpjs.join("\n") +
      `\n\n🔹 **Pasien Umum / Asuransi Mandiri:**\n` +
      registrationProcedures.umum.join("\n") +
      `\n\n📱 **Pendaftaran Online (H-1):**\n` +
      registrationProcedures.online.join("\n") +
      `\n\nAda yang perlu kami bantu terkait rujukan atau kelengkapan berkas Anda?`;
  }

  // 4. Kontak Darurat / IGD / Ambulans / Lokasi
  if (query.includes("igd") || query.includes("darurat") || query.includes("emergency") || query.includes("ambulans") || query.includes("telepon") || query.includes("kontak") || query.includes("lokasi") || query.includes("alamat")) {
    return `🚨 **Kontak Darurat & Layanan 24 Jam RS PKU Muhammadiyah Grabag**:\n\n` +
      `🏥 **IGD 24 Jam:** ${hospitalInfo.emergencyPhone}\n` +
      `🚑 **Ambulans Siaga 24 Jam:** ${hospitalInfo.emergencyWhatsapp}\n` +
      `💬 **WhatsApp Customer Service:** ${hospitalInfo.whatsappCS}\n` +
      `📍 **Alamat:** ${hospitalInfo.address}\n\n` +
      `*Layanan IGD & Ambulans siap melayani pasien gawat darurat setiap saat tanpa perlu mendaftar terlebih dahulu.*`;
  }

  // 5. Biaya / Tarif
  if (query.includes("biaya") || query.includes("tarif") || query.includes("harga")) {
    return `Untuk informasi rincian biaya pemeriksaan dokter spesialis, kamar rawat inap, tindakan operasi, atau estimasi biaya penunjang medis, Anda dapat langsung menghubungi staf administrasi/CS kami via WhatsApp di **${hospitalInfo.whatsappCS}** agar mendapatkan kalkulasi yang akurat sesuai tindakan yang dibutuhkan.`;
  }

  // 6. Salam / Greeting
  if (query.includes("halo") || query.includes("hai") || query.includes("assalamualaikum") || query.includes("pagi") || query.includes("siang") || query.includes("sore") || query.includes("malam")) {
    return `*Assalamu'alaikum Warahmatullahi Wabarakatuh*,\nSelamat datang di layanan Chatbot Customer Service **RS PKU Muhammadiyah Grabag**! 🌿\n\nSaya siap membantu memberikan informasi terkait:\n• 📅 **Jadwal Praktik Dokter & Poli**\n• 🏥 **Daftar Fasilitas & Layanan RS**\n• 📋 **Syarat & Alur Pendaftaran BPJS/Umum**\n• 🚨 **Kontak Darurat IGD & Ambulans**\n\nApa yang bisa saya bantu hari ini?`;
  }

  // Default response
  return `Terima kasih telah menghubungi Customer Service **RS PKU Muhammadiyah Grabag**.\n\nSaya dapat membantu Anda dengan informasi mengenai:\n1. **Jadwal Dokter & Poliklinik**\n2. **Layanan Rawat Jalan & Rawat Inap**\n3. **Alur Pendaftaran BPJS / Umum**\n4. **Kontak IGD 24 Jam & Ambulans**\n\nJika Anda membutuhkan bantuan staf medis atau pertanyaan lain di luar ini, silakan hubungi langsung CS kami melalui WhatsApp: **${hospitalInfo.whatsappCS}** atau telepon **${hospitalInfo.phone}**.`;
}
