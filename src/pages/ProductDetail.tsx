import { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronLeft,
  MessageCircle,
  CheckCircle2,
  Bike,
  Calculator,
  Calendar,
  Share2,
  ZoomIn,
} from 'lucide-react';
import { products, formatRupiah, Product } from '@/data/products';
import { productDetails } from '@/data/productDetails';
import { buildWaLink } from '@/data/site';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { useToast } from '@/hooks/use-toast';

const SPEC_TABS = ['Mesin', 'Dimensi', 'Kapasitas', 'Baterai', 'Fitur'] as const;
type SpecTab = (typeof SPEC_TABS)[number];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = useMemo<Product | undefined>(
    () => products.find((p) => p.id === id),
    [id]
  );
  const detail = id ? productDetails[id] : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [tab, setTab] = useState<SpecTab>('Mesin');
  const { toast } = useToast();

  // Credit simulator
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(24);
  const [bunga] = useState(8); // 8% per tahun

  useEffect(() => {
    setActiveImage(0);
    setTab('Mesin');
    window.scrollTo(0, 0);
  }, [id]);

  if (!product || !detail) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Produk tidak ditemukan</h1>
        <Link to="/produk" className="text-red-600 hover:underline">
          ← Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const dpAmount = Math.round((product.price * dpPercent) / 100);
  const principal = product.price - dpAmount;
  const monthlyRate = bunga / 100 / 12;
  const installment =
    monthlyRate > 0
      ? Math.round(
          (principal * monthlyRate * Math.pow(1 + monthlyRate, tenor)) /
            (Math.pow(1 + monthlyRate, tenor) - 1)
        )
      : Math.round(principal / tenor);
  const totalBayar = dpAmount + installment * tenor;

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const moreRelated =
    related.length < 4
      ? [...related, ...products.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, 4 - related.length)]
      : related;

  const waMessage = (msg: string) => buildWaLink(msg);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: 'Link disalin!', description: 'URL produk berhasil disalin ke clipboard.' });
    } catch {
      toast({ title: 'Bagikan link', description: url });
    }
  };

  return (
    <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-500">
          <Link to="/" className="hover:text-red-600">Beranda</Link>
          <span className="mx-2">/</span>
          <Link to="/produk" className="hover:text-red-600">Produk</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10">
        {/* GALLERY */}
        <div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm aspect-[4/3] group">
            <img
              src={detail.gallery[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <button
              onClick={() => setZoomOpen(true)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow"
              aria-label="zoom"
            >
              <ZoomIn className="w-4 h-4 text-gray-700" />
            </button>
            {product.highlight && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.highlight}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {detail.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition ${
                  activeImage === i ? 'border-red-600 ring-2 ring-red-100' : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <Link to="/produk" className="inline-flex items-center gap-1.5 text-red-600 hover:underline text-sm mb-3">
            <ChevronLeft className="w-4 h-4" /> Kembali ke Katalog
          </Link>
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
            {product.categoryLabel}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">{detail.longDesc}</p>

          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-5 mb-5 shadow-lg shadow-red-600/20">
            <div className="text-xs uppercase tracking-wider text-red-200">Harga OTR Tangerang</div>
            <div className="text-4xl md:text-5xl font-black mt-1">{formatRupiah(product.price)}</div>
            <div className="text-sm text-red-100 mt-1">
              Cicilan mulai{' '}
              <span className="font-bold">
                {formatRupiah(Math.round((product.price * 0.85) / 36))}/bulan
              </span>
            </div>
          </div>

          {/* Quick specs */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {product.specs.map((s) => (
              <div key={s} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={waMessage(`Halo, saya tertarik untuk *Test Ride ${product.name}*. Mohon info jadwal & cabang yang tersedia.`)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow"
            >
              <Bike className="w-5 h-5" /> Test Ride Gratis
            </a>
            <a
              href={waMessage(`Halo, saya ingin Tanya Stok & Harga *${product.name}*. Mohon detail kredit & promo.`)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg shadow"
            >
              <MessageCircle className="w-5 h-5" /> Tanya via WhatsApp
            </a>
          </div>
          <button
            onClick={handleShare}
            className="mt-3 w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 py-2.5 rounded-lg text-sm font-semibold text-gray-700"
          >
            <Share2 className="w-4 h-4" /> Bagikan Produk
          </button>
        </div>
      </div>

      {/* SPEC TABLE */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <Reveal>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-black text-gray-900">Spesifikasi Lengkap</h2>
            </div>
            <div className="flex flex-wrap border-b">
              {SPEC_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-3 text-sm font-semibold transition border-b-2 ${
                    tab === t ? 'border-red-600 text-red-600' : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="p-6">
              <table className="w-full">
                <tbody className="divide-y">
                  {Object.entries(detail.specs[tab]).map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-3 text-sm text-gray-500 w-1/3">{k}</td>
                      <td className="py-3 text-sm font-semibold text-gray-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CREDIT SIMULATOR */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <Reveal>
          <div className="bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black">Simulasi Kredit</h2>
                <p className="text-sm text-white/70">Estimasi cicilan berdasarkan DP & tenor pilihan Anda</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold">Down Payment (DP)</label>
                    <span className="text-sm font-black text-yellow-300">{dpPercent}% — {formatRupiah(dpAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={dpPercent}
                    onChange={(e) => setDpPercent(Number(e.target.value))}
                    className="w-full accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>10%</span><span>30%</span><span>50%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold">Tenor</label>
                    <span className="text-sm font-black text-yellow-300">{tenor} bulan</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={36}
                    step={6}
                    value={tenor}
                    onChange={(e) => setTenor(Number(e.target.value))}
                    className="w-full accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>12</span><span>18</span><span>24</span><span>30</span><span>36</span>
                  </div>
                </div>

                <div className="text-xs text-white/60">* Bunga leasing rata-rata {bunga}% efektif per tahun. Estimasi belum termasuk asuransi & admin.</div>
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
                <div className="space-y-3 text-sm">
                  <Row label="Harga OTR" value={formatRupiah(product.price)} />
                  <Row label="DP" value={formatRupiah(dpAmount)} />
                  <Row label="Pokok Kredit" value={formatRupiah(principal)} />
                  <Row label="Tenor" value={`${tenor} bulan`} />
                </div>
                <div className="border-t border-white/10 my-4" />
                <div className="text-center">
                  <div className="text-xs text-white/70 mb-1">Cicilan per Bulan</div>
                  <div className="text-3xl md:text-4xl font-black text-yellow-300">
                    {formatRupiah(installment)}
                  </div>
                  <div className="text-xs text-white/60 mt-2">Total Bayar: {formatRupiah(totalBayar)}</div>
                </div>
                <a
                  href={waMessage(
                    `Halo, saya ingin ajukan kredit *${product.name}*:\nDP ${dpPercent}% (${formatRupiah(dpAmount)})\nTenor ${tenor} bulan\nCicilan ±${formatRupiah(installment)}/bulan.\nMohon info syarat & dokumen.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-yellow-300 hover:bg-yellow-200 text-red-700 font-bold py-2.5 rounded-lg"
                >
                  <Calendar className="w-4 h-4" /> Ajukan Kredit Sekarang
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <Reveal>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Mungkin Anda Suka</h2>
            <Link to="/produk" className="text-red-600 font-semibold hover:underline text-sm">
              Lihat Semua →
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {moreRelated.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ZOOM modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomOpen(false)}
        >
          <img
            src={detail.gallery[activeImage]}
            alt={product.name}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/70">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
