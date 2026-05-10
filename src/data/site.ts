export const site = {
  brand: 'PT. Multi Dimensi Baru',
  tagline: 'Dealer Resmi Eksklusif Viar Motor',
  founded: 2010,
  phone: '(021) 29015232',
  whatsapp: '6281299481006',
  whatsappDisplay: '0812-9948-1006',
  email: 'info@viarmdb.co.id',
};

export interface Branch {
  name: string;
  address: string;
  phone: string;
  hours: string;
  isMain?: boolean;
}

export const branches: Branch[] = [
  {
    name: 'Pusat - Gading Serpong',
    address: 'Ruko Paramount Sparks Blok B No 1, Gading Serpong, Tangerang',
    phone: '(021) 29015232',
    hours: 'Senin - Sabtu: 08:00 - 16:00 | Minggu: Tutup',
    isMain: true,
  },
  {
    name: 'Cabang Balaraja',
    address: 'Jl. Raya Serang Km 19.5, Balaraja, Tangerang',
    phone: '(021) 29015233',
    hours: 'Senin - Sabtu: 08:00 - 16:00 | Minggu: Tutup',
  },
  {
    name: 'Cabang Cileungsi',
    address: 'Jl. Raya Cileungsi, Bogor',
    phone: '(021) 29015234',
    hours: 'Senin - Sabtu: 08:00 - 16:00 | Minggu: Tutup',
  },
  {
    name: 'Cabang Bekasi',
    address: 'Jl. Cut Mutia No. 6, Bekasi',
    phone: '(021) 29015235',
    hours: 'Senin - Sabtu: 08:00 - 16:00 | Minggu: Tutup',
  },
  {
    name: 'Cabang Parung',
    address: 'Jl. Raya Parung No. 1, Bogor',
    phone: '(021) 29015236',
    hours: 'Senin - Sabtu: 08:00 - 16:00 | Minggu: Tutup',
  },
];

export const buildWaLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
