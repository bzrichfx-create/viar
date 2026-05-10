// Detailed specifications and gallery for each product
export interface ProductDetail {
  gallery: string[];
  shortDesc: string;
  longDesc: string;
  specs: {
    Mesin: Record<string, string>;
    Dimensi: Record<string, string>;
    Kapasitas: Record<string, string>;
    Baterai: Record<string, string>;
    Fitur: Record<string, string>;
  };
}

const placeholderGallery = (main: string) => [
  main,
  'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800',
  'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800',
];

export const productDetails: Record<string, ProductDetail> = {
  'viar-n1': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418420150_bc4d4af9.jpg'
    ),
    shortDesc:
      'Motor listrik bertenaga dengan baterai Lithium tahan lama, cocok untuk komuter harian.',
    longDesc:
      'Viar N1 hadir sebagai solusi mobilitas urban dengan teknologi BLDC motor 1500 Watt. Dilengkapi baterai Lithium 60V 23Ah yang dapat diisi ulang, N1 menawarkan keseimbangan ideal antara performa, efisiensi, dan harga.',
    specs: {
      Mesin: {
        Tipe: 'Hub Motor BLDC',
        Daya: '1500 Watt',
        'Top Speed': '60 km/jam',
        Transmisi: 'Otomatis (Direct Drive)',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '1.870 × 690 × 1.080 mm',
        'Jarak Sumbu Roda': '1.305 mm',
        'Berat Kosong': '85 kg',
        'Tinggi Jok': '770 mm',
      },
      Kapasitas: {
        'Beban Maksimum': '150 kg',
        'Ukuran Ban Depan': '90/90-12',
        'Ukuran Ban Belakang': '100/90-12',
      },
      Baterai: {
        Tipe: 'Lithium-Ion',
        Kapasitas: '60V 23Ah',
        'Jarak Tempuh': '55 km / charge',
        'Waktu Charging': '4-6 jam',
      },
      Fitur: {
        Dashboard: 'Digital LCD',
        Lampu: 'LED Front & Rear',
        'USB Port': 'Tersedia',
        'Anti-Theft': 'Ya',
      },
    },
  },
  'viar-n2': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418373833_b50bd920.jpg'
    ),
    shortDesc: 'Performa tinggi dengan dual battery untuk jarak tempuh maksimal.',
    longDesc:
      'Viar N2 adalah flagship motor listrik dengan kapasitas dual battery yang memungkinkan jarak tempuh hingga 110 km. Dilengkapi motor 2000 Watt yang responsif dan fitur premium untuk pengalaman berkendara terbaik.',
    specs: {
      Mesin: {
        Tipe: 'Hub Motor BLDC High-Torque',
        Daya: '2000 Watt',
        'Top Speed': '65 km/jam',
        Transmisi: 'Otomatis 3-Mode (Eco/Normal/Sport)',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '1.920 × 720 × 1.120 mm',
        'Jarak Sumbu Roda': '1.345 mm',
        'Berat Kosong': '105 kg',
        'Tinggi Jok': '780 mm',
      },
      Kapasitas: {
        'Beban Maksimum': '180 kg',
        'Ukuran Ban Depan': '100/80-14',
        'Ukuran Ban Belakang': '110/80-14',
      },
      Baterai: {
        Tipe: 'Lithium-Ion Dual Battery',
        Kapasitas: '72V 32Ah × 2',
        'Jarak Tempuh': '110 km / charge',
        'Waktu Charging': '5-7 jam',
      },
      Fitur: {
        Dashboard: 'Full Color TFT',
        Lampu: 'Full LED + DRL',
        'USB Port': 'Type-C Fast Charge',
        'Anti-Theft': 'GPS + Alarm',
      },
    },
  },
  'viar-new-q1': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418440137_b59fc69e.jpg'
    ),
    shortDesc: 'Skutik listrik retro modern dengan opsi baterai ganda.',
    longDesc:
      'Viar New Q1 menggabungkan desain retro klasik dengan teknologi listrik modern. Cocok untuk pengantar makanan online yang butuh fleksibilitas dengan opsi baterai ganda.',
    specs: {
      Mesin: {
        Tipe: 'Hub Motor BLDC',
        Daya: '800 Watt',
        'Top Speed': '45 km/jam',
        Transmisi: 'Otomatis',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '1.760 × 660 × 1.050 mm',
        'Jarak Sumbu Roda': '1.230 mm',
        'Berat Kosong': '75 kg',
        'Tinggi Jok': '740 mm',
      },
      Kapasitas: {
        'Beban Maksimum': '140 kg',
        'Ukuran Ban Depan': '90/90-10',
        'Ukuran Ban Belakang': '90/90-10',
      },
      Baterai: {
        Tipe: 'Lithium-Ion (Dual Optional)',
        Kapasitas: '48V 20Ah',
        'Jarak Tempuh': '60 km (120 km dengan dual)',
        'Waktu Charging': '4-5 jam',
      },
      Fitur: {
        Dashboard: 'Digital LCD',
        Lampu: 'LED',
        'USB Port': 'Tersedia',
        Bagasi: 'Luas (under-seat)',
      },
    },
  },
  'viar-ev1': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418355121_19f01e72.jpg'
    ),
    shortDesc: 'Motor listrik entry level dengan teknologi graphene battery.',
    longDesc:
      'Viar EV1 adalah motor listrik termurah dari Viar dengan harga di bawah Rp 17 juta. Menggunakan teknologi graphene battery yang lebih cepat charging dan tahan lama.',
    specs: {
      Mesin: {
        Tipe: 'Hub Motor BLDC',
        Daya: '1000 Watt',
        'Top Speed': '50 km/jam',
        Transmisi: 'Otomatis',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '1.720 × 650 × 1.030 mm',
        'Jarak Sumbu Roda': '1.220 mm',
        'Berat Kosong': '70 kg',
        'Tinggi Jok': '730 mm',
      },
      Kapasitas: {
        'Beban Maksimum': '130 kg',
        'Ukuran Ban Depan': '80/90-10',
        'Ukuran Ban Belakang': '90/90-10',
      },
      Baterai: {
        Tipe: 'Graphene Battery',
        Kapasitas: '72V 22Ah',
        'Jarak Tempuh': '70 km / charge',
        'Waktu Charging': '3-4 jam (Fast)',
      },
      Fitur: {
        Dashboard: 'Digital LCD',
        Lampu: 'LED Front',
        'USB Port': 'Tersedia',
        'Anti-Theft': 'Remote',
      },
    },
  },
  'viar-cross-x-150': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418458276_c79d7cf1.jpg'
    ),
    shortDesc: 'Motor trail tangguh untuk medan off-road.',
    longDesc:
      'Viar Cross X 150 dirancang untuk para petualang. Suspensi panjang, ground clearance tinggi, dan mesin 150cc 4-tak yang bertenaga membuatnya siap menaklukkan segala medan.',
    specs: {
      Mesin: {
        Tipe: '4-Tak SOHC Air-Cooled',
        Volume: '149 cc',
        'Daya Maksimal': '11.5 HP @ 8.000 rpm',
        Transmisi: 'Manual 5-Speed',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '2.020 × 800 × 1.150 mm',
        'Ground Clearance': '290 mm',
        'Berat Kosong': '110 kg',
        'Tinggi Jok': '850 mm',
      },
      Kapasitas: {
        'Tangki BBM': '7.5 Liter',
        'Beban Maksimum': '160 kg',
        'Ban Depan': '90/90-19 (Knobby)',
        'Ban Belakang': '110/90-17 (Knobby)',
      },
      Baterai: {
        Tipe: 'Aki MF',
        Kapasitas: '12V 5Ah',
        'Sistem Pengapian': 'CDI-DC',
      },
      Fitur: {
        Suspensi: 'Upside Down Front, Mono Rear',
        Rem: 'Disc Front & Rear',
        Dashboard: 'Digital + Analog',
        'Bash Plate': 'Tersedia',
      },
    },
  },
  'viar-razor-200': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418491701_d049c75c.png'
    ),
    shortDesc: 'Sport naked bike bertenaga dengan desain agresif.',
    longDesc:
      'Viar Razor 200 RZM adalah pilihan tepat bagi penggemar sport bike kelas 200cc. Mesin powerful, handling responsif, dan styling agresif yang siap menarik perhatian di jalanan.',
    specs: {
      Mesin: {
        Tipe: '4-Tak SOHC Liquid-Cooled',
        Volume: '197 cc',
        'Daya Maksimal': '17 HP @ 8.500 rpm',
        Transmisi: 'Manual 5-Speed',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '2.030 × 760 × 1.090 mm',
        'Jarak Sumbu Roda': '1.330 mm',
        'Berat Kosong': '142 kg',
        'Tinggi Jok': '795 mm',
      },
      Kapasitas: {
        'Tangki BBM': '14 Liter',
        'Beban Maksimum': '170 kg',
        'Ban Depan': '110/70-17',
        'Ban Belakang': '140/70-17',
      },
      Baterai: {
        Tipe: 'Aki MF',
        Kapasitas: '12V 7Ah',
        'Sistem Pengapian': 'EFI',
      },
      Fitur: {
        Suspensi: 'USD Front, Mono Shock',
        Rem: 'Disc + ABS',
        Dashboard: 'Full Digital',
        Lampu: 'Full LED',
      },
    },
  },
  'viar-akasha': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418512296_8eb0f79c.jpg'
    ),
    shortDesc: 'Skutik harian dengan mesin irit dan bagasi luas.',
    longDesc:
      'Viar Akasha adalah pilihan ideal untuk mobilitas harian dengan mesin 110cc yang sangat irit BBM dan bagasi yang luas untuk kebutuhan belanja atau bepergian.',
    specs: {
      Mesin: {
        Tipe: '4-Tak SOHC Air-Cooled',
        Volume: '110 cc',
        'Daya Maksimal': '8.2 HP @ 7.500 rpm',
        Transmisi: 'CVT Otomatis',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '1.875 × 685 × 1.085 mm',
        'Jarak Sumbu Roda': '1.260 mm',
        'Berat Kosong': '95 kg',
        'Tinggi Jok': '755 mm',
      },
      Kapasitas: {
        'Tangki BBM': '4.2 Liter',
        'Beban Maksimum': '150 kg',
        Bagasi: '18 Liter',
      },
      Baterai: {
        Tipe: 'Aki MF',
        Kapasitas: '12V 4Ah',
        'Sistem Pengapian': 'CDI',
      },
      Fitur: {
        Dashboard: 'Digital + Analog',
        Lampu: 'LED',
        'USB Port': 'Tersedia',
        Konsumsi: '55 km/Liter',
      },
    },
  },
  'viar-karya-150': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418529738_39f6f2f9.jpg'
    ),
    shortDesc: 'Roda tiga niaga andalan untuk pengiriman barang.',
    longDesc:
      'Viar Karya 150 Box adalah motor roda tiga dengan box kargo besar, ideal untuk usaha pengiriman, distribusi barang, atau usaha kuliner keliling.',
    specs: {
      Mesin: {
        Tipe: '4-Tak Single Cylinder',
        Volume: '149 cc',
        'Daya Maksimal': '10 HP @ 7.500 rpm',
        Transmisi: 'Manual 4+1 (Reverse)',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '2.850 × 1.250 × 1.420 mm',
        'Ukuran Box': '1.400 × 1.150 × 1.000 mm',
        'Berat Kosong': '290 kg',
      },
      Kapasitas: {
        'Tangki BBM': '8 Liter',
        'Muatan Maksimum': '150 kg',
        'Ban Depan': '4.00-12',
        'Ban Belakang': '5.00-12 (×2)',
      },
      Baterai: {
        Tipe: 'Aki MF',
        Kapasitas: '12V 12Ah',
        'Sistem Pengapian': 'CDI',
      },
      Fitur: {
        Box: 'Galvanized Steel',
        Rem: 'Drum Front & Rear',
        Reverse: 'Tersedia',
        'Cargo Light': 'Tersedia',
      },
    },
  },
  'viar-re3': {
    gallery: placeholderGallery(
      'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418551321_12dd43e7.png'
    ),
    shortDesc: 'Roda tiga listrik ramah lingkungan untuk usaha kecil.',
    longDesc:
      'Viar RE3 adalah roda tiga elektrik bebas emisi, hemat operasional, dan cocok untuk usaha mikro seperti penjual makanan keliling atau angkutan ringan dalam komplek.',
    specs: {
      Mesin: {
        Tipe: 'Hub Motor BLDC',
        Daya: '500 Watt',
        'Top Speed': '25 km/jam',
        Transmisi: 'Otomatis + Reverse',
      },
      Dimensi: {
        'Panjang × Lebar × Tinggi': '2.620 × 1.120 × 1.380 mm',
        'Ukuran Bak': '1.200 × 1.000 × 350 mm',
        'Berat Kosong': '210 kg',
      },
      Kapasitas: {
        'Muatan Maksimum': '300 kg',
        'Ban Depan': '3.50-10',
        'Ban Belakang': '4.00-10 (×2)',
      },
      Baterai: {
        Tipe: 'Lead-Acid (Upgradable Lithium)',
        Kapasitas: '60V 45Ah',
        'Jarak Tempuh': '60 km / charge',
        'Waktu Charging': '8 jam',
      },
      Fitur: {
        Bak: 'Steel Cargo Bed',
        Rem: 'Drum + Electric Brake',
        Reverse: 'Tersedia',
        Atap: 'Optional Canopy',
      },
    },
  },
};
