import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Award, MapPin, Users, Calendar, ShieldCheck, Wrench, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { initialTestimonials } from '@/data/testimonials';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';

const slides = [
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418355121_19f01e72.jpg',
    title: 'Promo Spesial Viar EV1',
    subtitle: 'Motor Listrik Mulai Rp 16,3 Juta',
    cta: 'Lihat Promo',
    link: '/promo',
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418373833_b50bd920.jpg',
    title: 'Seri Premium N1 & N2',
    subtitle: 'Jarak Tempuh Hingga 110 Km Sekali Charge',
    cta: 'Jelajahi Seri',
    link: '/produk',
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418391912_8aedb416.jpg',
    title: 'Etalase Sport & Trail',
    subtitle: 'Adrenaline di Setiap Tikungan',
    cta: 'Lihat Sport',
    link: '/produk',
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestIdx((s) => (s + 1) % initialTestimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO with Ken Burns */}
      <section className="relative h-[100vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === slide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${s.image})`,
                animation: i === slide ? 'kenburns 10s ease-out forwards' : 'none',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <div
                    className={`inline-block text-red-400 font-bold tracking-widest text-sm mb-3 transition-all duration-700 ${
                      i === slide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    PT. MULTI DIMENSI BARU
                  </div>
                  <h1
                    className={`text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 transition-all duration-700 delay-100 ${
                      i === slide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {s.title}
                  </h1>
                  <p
                    className={`text-lg md:text-2xl mb-8 text-gray-200 transition-all duration-700 delay-200 ${
                      i === slide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {s.subtitle}
                  </p>
                  <div
                    className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                      i === slide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Link
                      to={s.link}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-red-600/30 transition"
                    >
                      {s.cta}
                    </Link>
                    <Link
                      to="/kontak"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-7 py-3.5 rounded-lg border border-white/30 transition"
                    >
                      Kunjungi Showroom
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? 'w-8 bg-red-500' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: MapPin, n: '5', l: 'Cabang Resmi' },
            { icon: Calendar, n: '14+', l: 'Tahun Pengalaman' },
            { icon: Users, n: '1.000+', l: 'Pelanggan Setia' },
            { icon: Award, n: '9', l: 'Model Motor' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition">
                <s.icon className="w-8 h-8 mx-auto text-red-600 mb-3" />
                <div className="text-3xl md:text-4xl font-black text-gray-900">{s.n}</div>
                <div className="text-sm text-gray-500 mt-1">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARALLAX 1 - Keunggulan */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418573463_69360304.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-red-400 font-bold tracking-wide mb-2">KEUNGGULAN DEALER</div>
              <h2 className="text-3xl md:text-5xl font-black">Mengapa Memilih Kami?</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, t: 'Garansi Resmi', d: 'Setiap unit dilengkapi garansi pabrik resmi Viar Motor.' },
              { icon: Wrench, t: 'Layanan 3S', d: 'Sales, Service, dan Sparepart lengkap di seluruh cabang.' },
              { icon: Sparkles, t: 'Promo Eksklusif', d: 'Cicilan ringan, hadiah langsung, dan test ride gratis.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 150}>
                <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                  <c.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{c.t}</h3>
                  <p className="text-gray-300 text-sm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-red-600 font-bold tracking-wide mb-2">KATALOG UNGGULAN</div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900">Motor Viar Pilihan</h2>
              </div>
              <Link to="/produk" className="text-red-600 font-semibold hover:underline">
                Lihat Semua →
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX 2 - Video Testimonial */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(211,47,47,0.85), rgba(0,0,0,0.85)), url(https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418591843_d009dd91.jpg)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              "Dealer Viar Terlengkap & Terpercaya"
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Lebih dari 1.000 pelanggan telah merasakan layanan terbaik kami sejak 2010.
              Bergabunglah dengan keluarga besar Viar bersama PT. Multi Dimensi Baru.
            </p>
            <Link
              to="/testimonials"
              className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3.5 rounded-lg shadow-xl transition"
            >
              Lihat Semua Testimoni
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-red-600 font-bold tracking-wide mb-2">TESTIMONI</div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">Apa Kata Pelanggan</h2>
            </div>
          </Reveal>

          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-red-100">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < initialTestimonials[testIdx].rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-6">
                "{initialTestimonials[testIdx].text}"
              </p>
              <div className="font-bold text-gray-900">{initialTestimonials[testIdx].name}</div>
              <div className="text-sm text-gray-500">
                {initialTestimonials[testIdx].city} · {initialTestimonials[testIdx].motor}
              </div>
            </div>

            <button
              onClick={() => setTestIdx((testIdx - 1 + initialTestimonials.length) % initialTestimonials.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-red-50 flex items-center justify-center text-red-600"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setTestIdx((testIdx + 1) % initialTestimonials.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow hover:bg-red-50 flex items-center justify-center text-red-600"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Siap Memiliki Motor Viar?</h2>
          <p className="text-white/90 mb-6">Konsultasi gratis dengan tim sales kami sekarang juga.</p>
          <Link to="/produk" className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3.5 rounded-lg transition">
            Jelajahi Katalog
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.15) translate(-2%, -2%); }
        }
      `}</style>
    </div>
  );
}
