import { useState } from 'react';
import { Star, Upload, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal';
import { initialTestimonials, Testimonial } from '@/data/testimonials';
import { products } from '@/data/products';

const STORAGE_KEY = 'viar-testimonials';

function getStored(): Testimonial[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export default function Testimonials() {
  const [user, setUser] = useState<Testimonial[]>(getStored);
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    city: '',
    motor: products[0].name,
    rating: 5,
    text: '',
    image: '',
  });

  const all = [...initialTestimonials, ...user];

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setForm((p) => ({ ...p, image: String(reader.result) }));
    reader.readAsDataURL(f);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newT: Testimonial = {
      id: 't' + Date.now(),
      name: form.name,
      city: form.city,
      motor: form.motor,
      rating: form.rating,
      text: form.text,
      image: form.image || products.find((p) => p.name === form.motor)?.image,
    };
    const next = [...user, newT];
    setUser(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    toast({
      title: 'Terima kasih!',
      description: 'Testimoni Anda akan kami moderasi sebelum tayang.',
    });
    setForm({ name: '', city: '', motor: products[0].name, rating: 5, text: '', image: '' });
  };

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-yellow-200 font-bold tracking-wider mb-2">TESTIMONI</div>
          <h1 className="text-4xl md:text-6xl font-black">Pengalaman Pelanggan Kami</h1>
          <p className="text-white/90 mt-3">Cerita nyata dari para pengguna setia Viar.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5 self-start">
          {all.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition group">
                {t.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={t.image}
                      alt={t.motor}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed mb-3">"{t.text}"</p>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.city} · {t.motor}
                  </div>
                  <button
                    onClick={() => toast({ title: 'Bukti dilampirkan', description: 'Foto unit telah ditampilkan di kartu.' })}
                    className="mt-3 inline-flex items-center gap-1.5 text-red-600 text-sm font-semibold hover:underline"
                  >
                    <Eye className="w-4 h-4" /> Lihat Bukti
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-black text-gray-900 mb-1">Kirim Testimoni</h3>
            <p className="text-sm text-gray-500 mb-4">Bagikan pengalaman Anda dengan motor Viar.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                placeholder="Nama"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="Kota"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <select
                required
                value={form.motor}
                onChange={(e) => setForm({ ...form, motor: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              <div>
                <label className="text-sm text-gray-600">Rating: {form.rating} ⭐</label>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full accent-red-600"
                />
              </div>
              <textarea
                required
                placeholder="Tuliskan testimoni Anda..."
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                rows={4}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
                <Upload className="w-4 h-4" />
                {form.image ? 'Foto dipilih ✓' : 'Upload foto motor (opsional)'}
                <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
              </label>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition"
              >
                Kirim Testimoni
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
