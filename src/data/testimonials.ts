export interface Testimonial {
  id: string;
  name: string;
  city: string;
  motor: string;
  rating: number;
  text: string;
  image?: string;
}

export const initialTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Andi - GrabFood',
    city: 'Tangerang',
    motor: 'Viar New Q1',
    rating: 4,
    text: 'Baterai ganda membantu saya seharian antar pesanan tanpa khawatir kehabisan daya. Sangat hemat bensin!',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418440137_b59fc69e.jpg',
  },
  {
    id: 't2',
    name: 'Siti',
    city: 'Bekasi',
    motor: 'Viar EV1',
    rating: 5,
    text: 'Ringan dan lincah buat antar jemput anak. Bonus: silent banget, gak ganggu tetangga pas pagi-pagi.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418355121_19f01e72.jpg',
  },
  {
    id: 't3',
    name: 'Bagas',
    city: 'Bogor',
    motor: 'Viar N2',
    rating: 4,
    text: 'Jarak tempuh 110 km beneran sampai. Saya pakai PP kantor 80 km tiap hari masih sisa baterai.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418373833_b50bd920.jpg',
  },
];
