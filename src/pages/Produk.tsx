import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';

const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'listrik', label: 'Listrik' },
  { id: 'sport', label: 'Sport/Trail' },
  { id: 'matic', label: 'Matic' },
  { id: 'niaga', label: 'Niaga' },
];

function Skeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded animate-pulse w-2/3" />
        <div className="h-7 bg-gray-200 rounded animate-pulse w-1/2" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
        <div className="h-10 bg-gray-200 rounded animate-pulse w-full mt-4" />
      </div>
    </div>
  );
}

export default function Produk() {
  const [active, setActive] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    setLoading(true);
  }, [active]);

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-red-200 font-bold tracking-wider mb-2">KATALOG MOTOR</div>
          <h1 className="text-4xl md:text-6xl font-black">Pilihan Motor Viar</h1>
          <p className="text-white/90 mt-3">Temukan motor Viar yang sesuai gaya hidup Anda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                active === f.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : filtered.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">Tidak ada produk untuk kategori ini.</div>
        )}
      </div>
    </div>
  );
}
