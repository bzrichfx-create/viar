export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'keunggulan-viar-n2-harian',
    title: 'Keunggulan Motor Listrik Viar N2 untuk Harian',
    date: '10 Mei 2026',
    excerpt:
      'Dengan jarak tempuh hingga 110 km dalam sekali charge dan biaya operasional yang sangat hemat, Viar N2 menjadi pilihan utama komuter modern.',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418373833_b50bd920.jpg',
    tags: ['Motor Listrik', 'Viar N2', 'Harian'],
    content: `Viar N2 adalah motor listrik premium dengan dual battery yang menawarkan jarak tempuh luar biasa hingga 110 km. Hal ini menjadikan N2 sebagai solusi ideal bagi pengguna harian yang menempuh jarak jauh.

**Hemat Biaya Operasional**
Dengan konsumsi listrik sekitar Rp 4.500 per pengisian penuh, biaya per kilometer N2 jauh di bawah motor bensin konvensional. Anda bisa menghemat hingga Rp 15.000 per hari dibandingkan motor bensin.

**Performa Tangguh**
Motor 2000 Watt mampu mencapai top speed 65 km/jam dengan akselerasi halus. Cocok untuk kondisi jalanan kota yang padat maupun jalur antar kota.

**Fitur Smart**
- Digital dashboard berwarna
- Anti-theft system
- USB charging port
- Mode eco/sport

**Kesimpulan**
Viar N2 adalah investasi jangka panjang untuk mobilitas yang berkelanjutan. Dengan harga Rp 34.000.000, Anda mendapatkan motor listrik premium yang siap menemani aktivitas harian.`,
  },
  {
    slug: 'perawatan-cross-x-150',
    title: 'Perawatan Rutin Motor Trail Viar Cross X 150',
    date: '28 April 2026',
    excerpt:
      'Tips merawat motor trail favorit Anda agar tetap prima di segala medan: dari suspensi, rantai, hingga ban.',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418458276_c79d7cf1.jpg',
    tags: ['Trail', 'Cross X', 'Perawatan'],
    content: `Motor trail butuh perawatan ekstra karena medan yang dilalui jauh lebih berat dari motor jalan raya. Berikut tips wajib untuk pemilik Viar Cross X 150.

**1. Cek Suspensi Berkala**
Suspensi panjang adalah jantung motor trail. Periksa oli shock setiap 5.000 km dan ganti seal jika ada kebocoran.

**2. Bersihkan & Lumasi Rantai**
Setelah kena lumpur atau pasir, segera cuci rantai dan lumasi ulang. Atur ketegangan rantai agar tidak terlalu kencang.

**3. Ban Sesuai Medan**
Gunakan ban knobby untuk off-road dan ban dual purpose jika sering berkendara di kombinasi aspal-tanah.

**4. Filter Udara**
Bersihkan filter setiap 2 minggu jika sering melalui medan berdebu.

**5. Servis Rutin**
Lakukan servis berkala di bengkel resmi setiap 3.000 km untuk performa optimal.`,
  },
  {
    slug: 'perbandingan-n1-vs-n2',
    title: 'Perbandingan Viar N1 vs N2 – Mana yang Cocok buat Kamu?',
    date: '15 April 2026',
    excerpt:
      'Bingung memilih antara N1 dan N2? Kami sajikan tabel perbandingan lengkap untuk membantu keputusan Anda.',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418420150_bc4d4af9.jpg',
    tags: ['Motor Listrik', 'Perbandingan', 'Viar N1', 'Viar N2'],
    content: `Dua motor listrik andalan Viar, N1 dan N2, sering bikin calon pembeli dilema. Kami bandingkan secara detail.

**Spesifikasi Mesin**
- N1: 1500 Watt, Top Speed 60 km/jam
- N2: 2000 Watt, Top Speed 65 km/jam

**Baterai & Jarak Tempuh**
- N1: Lithium 60V 23Ah, jarak 55 km
- N2: Dual Battery, jarak 110 km

**Harga**
- N1: Rp 25.800.000
- N2: Rp 34.000.000

**Cocok untuk Siapa?**
- Pilih **N1** jika rutinitas harian Anda di radius < 50 km dan ingin harga lebih terjangkau.
- Pilih **N2** jika Anda butuh jarak jauh, performa lebih, dan dual battery sebagai backup.

**Kesimpulan**
Selisih harga Rp 8.200.000 sebanding dengan kapasitas dual battery dan jarak tempuh 2x lipat. Untuk profesional & komuter jarak jauh, N2 adalah pilihan tepat.`,
  },
];
