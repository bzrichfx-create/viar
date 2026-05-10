export interface Product {
  id: string;
  name: string;
  category: 'listrik' | 'sport' | 'matic' | 'niaga';
  categoryLabel: string;
  price: number;
  image: string;
  specs: string[];
  description: string;
  highlight?: string;
}

export const products: Product[] = [
  {
    id: 'viar-n1',
    name: 'Viar N1',
    category: 'listrik',
    categoryLabel: 'Listrik',
    price: 25800000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418420150_bc4d4af9.jpg',
    specs: ['1500 Watt', 'Jarak 55 km', 'Top Speed 60 km/jam', 'Lithium 60V 23Ah'],
    description: 'Motor listrik bertenaga dengan baterai Lithium tahan lama, cocok untuk komuter harian.',
    highlight: 'Best Seller',
  },
  {
    id: 'viar-n2',
    name: 'Viar N2',
    category: 'listrik',
    categoryLabel: 'Listrik',
    price: 34000000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418373833_b50bd920.jpg',
    specs: ['2000 Watt', 'Jarak 110 km', 'Top Speed 65 km/jam', 'Dual Battery'],
    description: 'Performa tinggi dengan dual battery untuk jarak tempuh maksimal.',
    highlight: 'Premium',
  },
  {
    id: 'viar-new-q1',
    name: 'Viar New Q1',
    category: 'listrik',
    categoryLabel: 'Listrik',
    price: 18900000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418440137_b59fc69e.jpg',
    specs: ['800 Watt', 'Jarak 60 km', 'Baterai Ganda (Opsional)', 'Retro Modern'],
    description: 'Skutik listrik retro modern dengan opsi baterai ganda untuk fleksibilitas penggunaan.',
  },
  {
    id: 'viar-ev1',
    name: 'Viar EV1',
    category: 'listrik',
    categoryLabel: 'Listrik',
    price: 16320000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418355121_19f01e72.jpg',
    specs: ['1000 Watt', 'Jarak 70 km', 'Top Speed 50 km/jam', 'Graphene 72V'],
    description: 'Motor listrik entry level dengan teknologi graphene battery, hemat dan lincah.',
    highlight: 'Promo',
  },
  {
    id: 'viar-cross-x-150',
    name: 'Viar Cross X 150',
    category: 'sport',
    categoryLabel: 'Sport/Trail',
    price: 21500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418458276_c79d7cf1.jpg',
    specs: ['150 cc 4-Tak', 'Trail/Enduro', 'Suspensi Tinggi', 'Tangguh'],
    description: 'Motor trail tangguh untuk medan off-road, suspensi panjang dan torsi besar.',
  },
  {
    id: 'viar-razor-200',
    name: 'Viar Razor 200 RZM',
    category: 'sport',
    categoryLabel: 'Sport/Trail',
    price: 24500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418491701_d049c75c.png',
    specs: ['200 cc', 'Sport Naked', 'Aggressive Design', 'Power 17 HP'],
    description: 'Sport naked bike bertenaga dengan desain agresif dan handling responsif.',
  },
  {
    id: 'viar-akasha',
    name: 'Viar Akasha',
    category: 'matic',
    categoryLabel: 'Matic',
    price: 16500000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418512296_8eb0f79c.jpg',
    specs: ['110 cc', 'Skutik Matic', 'CVT Halus', 'Bagasi Luas'],
    description: 'Skutik harian dengan mesin irit dan bagasi luas untuk kebutuhan perjalanan kota.',
  },
  {
    id: 'viar-karya-150',
    name: 'Viar Karya 150 Box',
    category: 'niaga',
    categoryLabel: 'Niaga',
    price: 19800000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418529738_39f6f2f9.jpg',
    specs: ['150 cc', 'Muatan 150 Kg', 'Roda Tiga', 'Box Kargo'],
    description: 'Roda tiga niaga andalan untuk usaha pengiriman barang dengan muatan besar.',
  },
  {
    id: 'viar-re3',
    name: 'Viar RE3',
    category: 'niaga',
    categoryLabel: 'Niaga',
    price: 14800000,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418551321_12dd43e7.png',
    specs: ['500 Watt Listrik', 'Jarak 60 km', 'Top Speed 25 km/jam', 'Roda Tiga'],
    description: 'Roda tiga listrik ramah lingkungan, ideal untuk usaha kecil dan menengah.',
  },
];

export const formatRupiah = (n: number) =>
  'Rp ' + n.toLocaleString('id-ID');
