import { useEffect, useState } from 'react';
import { Tag, Gift, Zap, Wrench, Battery, Wind } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { buildWaLink } from '@/data/site';

const promos = [
  {
    icon: Tag,
    title: 'DP Spesial Viar EV1',
    desc: 'Cicilan ringan mulai Rp 599.000/bulan dengan DP hanya Rp 1 juta.',
    iconCls: 'bg-red-100 text-red-600',
    badgeCls: 'bg-red-100 text-red-700',
    badge: 'PROMO HEMAT',
  },
  {
    icon: Gift,
    title: 'Hadiah Helm & Jaket',
    desc: 'Pembelian setiap unit Viar N1 atau N2 dapat helm Viar + jaket eksklusif.',
    iconCls: 'bg-orange-100 text-orange-600',
    badgeCls: 'bg-orange-100 text-orange-700',
    badge: 'HADIAH',
  },
  {
    icon: Zap,
    title: 'Test Ride Gratis',
    desc: 'Coba langsung Viar EV1, N1, atau N2 di semua cabang. Tanpa biaya.',
    iconCls: 'bg-emerald-100 text-emerald-600',
    badgeCls: 'bg-emerald-100 text-emerald-700',
    badge: 'GRATIS',
  },
];


const tips = [
  {
    icon: Battery,
    title: 'Charging Optimal',
    desc: 'Charge baterai motor listrik Anda saat indikator menunjukkan 20-30%, hindari overcharging > 100%.',
  },
  {
    icon: Wind,
    title: 'Bersihkan Berkala',
    desc: 'Cuci motor minimal 2 minggu sekali, hindari semprotan air langsung ke konektor baterai.',
  },
  {
    icon: Wrench,
    title: 'Service Rutin',
    desc: 'Bawa ke bengkel resmi setiap 3.000 km untuk pengecekan motor BLDC, kabel, dan sistem rem.',
  },
];

function useCountdown(target: number) {
  const [diff, setDiff] = useState(target - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(target - Date.now()), 1000);
    return () => clearInterval(t);
  }, [target]);
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((diff / 1000) % 60));
  return { days, hours, minutes, seconds };
}

export default function Promo() {
  const [target] = useState(() => {
    const stored = localStorage.getItem('promoEnd');
    if (stored) return Number(stored);
    const t = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem('promoEnd', String(t));
    return t;
  });
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="pt-20 pb-20">
      {/* Banner with Countdown */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="text-yellow-300 font-bold tracking-wider mb-2">⚡ FLASH PROMO SERVICE</div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Diskon 30% Service Berkala</h1>
          <p className="text-white/90 mb-8">Berakhir dalam:</p>
          <div className="flex justify-center gap-3 md:gap-4">
            {[
              { v: days, l: 'Hari' },
              { v: hours, l: 'Jam' },
              { v: minutes, l: 'Menit' },
              { v: seconds, l: 'Detik' },
            ].map((c) => (
              <div key={c.l} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-3xl md:text-5xl font-black tabular-nums">{String(c.v).padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">{c.l}</div>
              </div>
            ))}
          </div>
          <a
            href={buildWaLink('Halo, saya ingin klaim promo Diskon 30% Service Berkala.')}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3.5 rounded-lg shadow-xl"
          >
            Klaim Promo Sekarang
          </a>
        </div>
      </section>

      {/* Promo List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-red-600 font-bold tracking-wide mb-2">PROMO AKTIF</div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">Penawaran Spesial</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${p.iconCls} flex items-center justify-center`}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeCls}`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <a
                  href={buildWaLink(`Halo, saya ingin tanya tentang promo: ${p.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-red-600 font-semibold hover:underline"
                >
                  Tanya via WA →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-red-600 font-bold tracking-wide mb-2">TIPS & ARTIKEL</div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">Tips Perawatan Motor Listrik</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center mb-4">
                    <t.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
