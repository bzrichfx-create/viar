export interface Sparepart {
  id: string;
  name: string;
  code: string;
  price: number;
  status: 'Tersedia' | 'Pre-order' | 'Habis';
  image: string;
}

export const spareparts: Sparepart[] = [
  {
    id: 'sp-1',
    name: 'Aki Viar N1/N2 Lithium',
    code: 'BAT-N1N2-LI',
    price: 2500000,
    status: 'Tersedia',
    image: 'https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?w=600',
  },
  {
    id: 'sp-2',
    name: 'Ban Viar Cross X Depan 90/90-19',
    code: 'TYR-CX-FRT-90',
    price: 450000,
    status: 'Tersedia',
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=600',
  },
  {
    id: 'sp-3',
    name: 'Kampas Rem Depan Viar EV1',
    code: 'BRK-EV1-FRT',
    price: 85000,
    status: 'Tersedia',
    image: 'https://images.unsplash.com/photo-1623861397259-c0e16a92b1ec?w=600',
  },
  {
    id: 'sp-4',
    name: 'Lampu LED Viar Akasha',
    code: 'LED-AKS-HL',
    price: 250000,
    status: 'Pre-order',
    image: 'https://images.unsplash.com/photo-1591375372226-1eb1e7166ba6?w=600',
  },
  {
    id: 'sp-5',
    name: 'Kabel Body Viar New Q1',
    code: 'WIR-NQ1-BDY',
    price: 120000,
    status: 'Tersedia',
    image: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=600',
  },
  {
    id: 'sp-6',
    name: 'Charger Viar N1 60V',
    code: 'CHG-N1-60V',
    price: 650000,
    status: 'Habis',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600',
  },
];

export const servicePackages = [
  {
    id: 'berkala',
    name: 'Service Berkala',
    price: 150000,
    items: [
      'Ganti Oli Mesin',
      'Cek Sistem Rem',
      'Cek Busi',
      'Cek Tekanan & Kondisi Ban',
      'Cek Sistem Kelistrikan',
    ],
  },
  {
    id: 'besar',
    name: 'Service Besar',
    price: 350000,
    items: [
      'Semua Item Service Berkala',
      'Bersihkan CVT',
      'Tune-up Mesin',
      'Cek Kampas Rem & Disc',
      'Setting Karburator/ECU',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Plus',
    price: 600000,
    items: [
      'Semua Item Service Besar',
      'Oli Sintetik Premium',
      'Ganti Busi Baru',
      'Cuci & Poles Body',
      'Garansi Servis 30 Hari',
    ],
  },
];
