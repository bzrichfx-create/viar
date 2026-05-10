import { useState } from 'react';
import { Check, Wrench, Calendar, MessageCircle, Phone, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { servicePackages, spareparts } from '@/data/spareparts';
import { branches, buildWaLink } from '@/data/site';
import { products, formatRupiah } from '@/data/products';

export default function Service() {
  const [pkg, setPkg] = useState(servicePackages[0].id);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    branch: branches[0].name,
    date: '',
    time: '08:00',
    motor: products[0].name,
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sp = servicePackages.find((s) => s.id === pkg)!;
    const msg = `Halo, saya ingin booking service:
*Nama:* ${form.name}
*WA:* ${form.phone}
*Paket:* ${sp.name} (${formatRupiah(sp.price)})
*Cabang:* ${form.branch}
*Tanggal & Jam:* ${form.date} pukul ${form.time}
*Motor:* ${form.motor}
*Catatan:* ${form.notes || '-'}`;
    // Save to localStorage as simulation for admin
    const list = JSON.parse(localStorage.getItem('serviceBookings') || '[]');
    list.push({ ...form, packageName: sp.name, packagePrice: sp.price, createdAt: new Date().toISOString() });
    localStorage.setItem('serviceBookings', JSON.stringify(list));
    window.open(buildWaLink(msg), '_blank');
  };

  return (
    <div className="pt-20 pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-red-300 font-bold tracking-wider mb-2">SERVICE & SPAREPART</div>
          <h1 className="text-4xl md:text-6xl font-black">Bengkel Resmi Viar</h1>
          <p className="text-white/90 mt-3">Teknisi terlatih · Sparepart asli · Garansi pengerjaan.</p>
        </div>
      </div>

      {/* Service Packages */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">
            Paket Service
          </h2>
          <p className="text-center text-gray-500 mb-10">Pilih paket sesuai kebutuhan motor Anda.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {servicePackages.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <div
                className={`relative bg-white rounded-2xl p-6 border-2 transition hover:-translate-y-1 hover:shadow-xl ${
                  pkg === p.id ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100'
                }`}
              >
                {p.id === 'besar' && (
                  <div className="absolute -top-3 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900">{p.name}</h3>
                <div className="text-3xl font-black text-red-600 mt-2 mb-4">
                  {formatRupiah(p.price)}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setPkg(p.id)}
                  className={`w-full py-2.5 rounded-lg font-semibold transition ${
                    pkg === p.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-red-50'
                  }`}
                >
                  {pkg === p.id ? 'Dipilih ✓' : 'Pilih Paket'}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-8">
              <div className="text-red-600 font-bold tracking-wide mb-2">BOOKING ONLINE</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Jadwalkan Service Anda</h2>
            </div>
          </Reveal>
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-red-100 grid md:grid-cols-2 gap-4"
            >
              <input
                required
                placeholder="Nama lengkap"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              />
              <input
                required
                placeholder="Nomor WhatsApp"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              />
              <select
                value={pkg}
                onChange={(e) => setPkg(e.target.value)}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              >
                {servicePackages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - {formatRupiah(p.price)}
                  </option>
                ))}
              </select>
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              >
                {branches.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              />
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white"
              >
                {Array.from({ length: 9 }).map((_, i) => {
                  const h = String(8 + i).padStart(2, '0');
                  return (
                    <option key={h} value={`${h}:00`}>
                      {h}:00
                    </option>
                  );
                })}
              </select>
              <select
                value={form.motor}
                onChange={(e) => setForm({ ...form, motor: e.target.value })}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white md:col-span-2"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Catatan tambahan (keluhan, request, dll)"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                className="border rounded-lg px-3 py-2.5 text-sm bg-white md:col-span-2"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Kirim Booking via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Sparepart Catalog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-red-600 font-bold tracking-wide mb-2">SPAREPART RESMI</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Suku Cadang Asli Viar</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spareparts.map((s, i) => {
              const stockColor =
                s.status === 'Tersedia'
                  ? 'bg-emerald-100 text-emerald-700'
                  : s.status === 'Pre-order'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700';
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-bold text-gray-900 text-sm leading-snug">{s.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stockColor} flex-shrink-0`}>
                          {s.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Code: {s.code}</div>
                      <div className="text-lg font-black text-red-600 mb-3">
                        {formatRupiah(s.price)}
                      </div>
                      <a
                        href={buildWaLink(`Halo, saya ingin Pesan Sparepart *${s.name}* (${s.code}). Apakah masih ${s.status}?`)}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2 rounded-lg"
                      >
                        Tanya via WA
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Locations */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-red-400 font-bold tracking-wide mb-2">LOKASI BENGKEL</div>
              <h2 className="text-3xl md:text-4xl font-black">Bengkel di 5 Cabang</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-red-400 mt-0.5" />
                    <div className="font-bold">{b.name}</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{b.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4" /> {b.phone}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <Calendar className="w-3.5 h-3.5" /> {b.hours}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
