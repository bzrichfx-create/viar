import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Product, formatRupiah } from '@/data/products';
import { buildWaLink } from '@/data/site';

export default function ProductCard({ product }: { product: Product }) {
  const waLink = buildWaLink(`Halo, saya tertarik untuk Tanya Stok & Harga *${product.name}*. Mohon info lebih lanjut.`);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <Link to={`/produk/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {product.highlight && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.highlight}
          </span>
        )}
        <span className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.categoryLabel}
        </span>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/produk/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
            {product.name}
          </h3>
        </Link>
        <div className="text-2xl font-black text-red-600 mt-1">
          {formatRupiah(product.price)}
        </div>
        <ul className="mt-3 space-y-1 text-sm text-gray-600 flex-1">
          {product.specs.slice(0, 3).map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <Link
            to={`/produk/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-2.5 rounded-lg transition"
          >
            Detail <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg transition"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-3.5 h-3.5" /> WA
          </a>
        </div>
      </div>
    </div>
  );
}
