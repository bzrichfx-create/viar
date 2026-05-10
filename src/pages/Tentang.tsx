import { MapPin, Phone, Award, Wrench, Package, ShoppingCart } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { branches, site } from '@/data/site';

export default function Tentang() {
  return (
    <div className="pt-20 pb-20 bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] bg-gradient-to-br from-gray-900 to-red-900 flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418573463_69360304.jpg)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="text-red-300 font-bold tracking-wider mb-3">TENTANG KAMI</div>
          <h1 className="text-4xl md:text-6xl font-black mb-3">PT. Multi Dimensi Baru</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Dealer eksklusif Viar Motor terpercaya sejak {site.founded}.
          </p>
        </div>
      </div>

      {/* Profile */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img
            src="https://d64gsuwffb70l.cloudfront.net/6a007fceebd644fb7829bfd5_1778418573463_69360304.jpg"
            alt="Showroom"
            className="rounded-2xl shadow-xl w-full"
          />
        </Reveal>
        <Reveal delay={150}>
          <div className="text-red-600 font-bold tracking-wide mb-2">PROFIL DEALER</div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Lebih dari 14 Tahun Melayani Pecinta Motor Viar
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Berdiri sejak {site.founded}, PT. Multi Dimensi Baru telah berkembang menjadi
            dealer eksklusif Viar Motor terbesar di area Jabodetabek. Dengan 5 cabang strategis,
            kami berkomitmen memberikan pengalaman terbaik dalam pembelian, perawatan,
            dan penyediaan suku cadang motor Viar.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kami percaya bahwa motor bukan sekadar transportasi, melainkan partner perjalanan
            Anda. Karena itu, layanan kami berfokus pada kualitas, kepercayaan, dan ketulusan.
          </p>
        </Reveal>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-4">
                <Award />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi dealer Viar Motor terdepan dan terpercaya di Indonesia, dengan layanan
                yang melampaui harapan pelanggan dan berkontribusi pada masa depan mobilitas
                ramah lingkungan.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-4">
                <Award />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Misi</h3>
              <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                <li>Menyediakan produk Viar berkualitas dengan harga kompetitif.</li>
                <li>Memberikan layanan after-sales yang prima di seluruh cabang.</li>
                <li>Mengedukasi masyarakat tentang motor listrik & ramah lingkungan.</li>
                <li>Membangun komunitas pengguna Viar yang loyal & solid.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3S */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-red-600 font-bold tracking-wide mb-2">LAYANAN 3S</div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Sales · Service · Sparepart
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShoppingCart, t: 'Sales', d: 'Penjualan unit motor Viar baru dengan berbagai opsi pembayaran tunai & kredit ringan.' },
            { icon: Wrench, t: 'Service', d: 'Bengkel resmi dengan teknisi terlatih, tools lengkap, dan garansi pengerjaan.' },
            { icon: Package, t: 'Sparepart', d: 'Stok suku cadang asli Viar tersedia di semua cabang, harga resmi pabrikan.' },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition bg-white">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-red-600 font-bold tracking-wide mb-2">JARINGAN CABANG</div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">5 Cabang Resmi</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className={`p-6 rounded-2xl bg-white border ${b.isMain ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-100'} hover:shadow-lg transition`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${b.isMain ? 'bg-red-600' : 'bg-gray-700'}`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{b.name}</div>
                      {b.isMain && <span className="text-xs font-bold text-red-600">CABANG PUSAT</span>}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{b.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone className="w-4 h-4" /> {b.phone}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{b.hours}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
