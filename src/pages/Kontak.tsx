import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal';
import { branches, site } from '@/data/site';

export default function Kontak() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://famous.ai/api/crm/6a007fceebd644fb7829bfd5/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          source: 'contact-form',
          tags: ['contact'],
        }),
      });
    } catch {}
    toast({
      title: 'Pesan terkirim!',
      description: 'Terima kasih, tim kami akan segera menghubungi Anda.',
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-red-200 font-bold tracking-wider mb-2">KONTAK & LOKASI</div>
          <h1 className="text-4xl md:text-6xl font-black">Hubungi Kami</h1>
          <p className="text-white/90 mt-3">Kunjungi cabang terdekat atau tinggalkan pesan untuk kami.</p>
        </div>
      </div>

      {/* Map + Contact */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[450px]">
            <iframe
              title="Lokasi Pusat Gading Serpong"
              src="https://www.google.com/maps?q=Ruko+Paramount+Sparks+Gading+Serpong+Tangerang&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="text-red-600 font-bold tracking-wide mb-2">CABANG PUSAT</div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Gading Serpong, Tangerang</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Alamat</div>
                <div className="text-gray-600 text-sm">{branches[0].address}</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Telepon</div>
                <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="text-gray-600 text-sm hover:text-red-600">
                  {site.phone} - 33
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <a href={`mailto:${site.email}`} className="text-gray-600 text-sm hover:text-red-600">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900">Kirim Pesan</h3>
            <input
              required
              placeholder="Nama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white border rounded-lg px-3 py-2.5 text-sm"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white border rounded-lg px-3 py-2.5 text-sm"
            />
            <textarea
              required
              placeholder="Pesan Anda"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white border rounded-lg px-3 py-2.5 text-sm"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Kirim Pesan
            </button>
          </form>
        </Reveal>
      </section>

      {/* All Branches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-red-600 font-bold tracking-wide mb-2">SEMUA CABANG</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Temukan Kami di Lokasi Anda</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((b, i) => (
              <Reveal key={b.name} delay={i * 70}>
                <div className={`bg-white p-6 rounded-2xl border ${b.isMain ? 'border-red-300' : 'border-gray-100'} hover:shadow-xl transition`}>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className={`w-5 h-5 ${b.isMain ? 'text-red-600' : 'text-gray-500'}`} />
                    <h3 className="font-bold text-gray-900">{b.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{b.address}</p>
                  <div className="text-sm text-gray-500">📞 {b.phone}</div>
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
