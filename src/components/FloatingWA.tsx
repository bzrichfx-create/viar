import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, Wrench, ShoppingBag, MessageSquare } from 'lucide-react';
import { buildWaLink } from '@/data/site';
import { spareparts } from '@/data/spareparts';

export default function FloatingWA() {
  const [open, setOpen] = useState(false);
  const [showSparepart, setShowSparepart] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', part: '', qty: 1 });
  const navigate = useNavigate();

  const handleSparepartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo, saya ${form.name} (WA: ${form.phone}). Saya ingin pesan sparepart: *${form.part}* sebanyak ${form.qty} pcs.`;
    window.open(buildWaLink(msg), '_blank');
    setShowSparepart(false);
    setOpen(false);
    setForm({ name: '', phone: '', part: '', qty: 1 });
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {open && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-gray-900">Hubungi Kami</div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-3">Pilih layanan yang Anda butuhkan</p>
            <div className="space-y-2">
              <a
                href={buildWaLink('Halo, saya ingin bertanya tentang motor Viar.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Chat Sales</div>
                  <div className="text-xs text-gray-500">Tanya stok, harga, kredit</div>
                </div>
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate('/service');
                }}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition text-left"
              >
                <Wrench className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Booking Service</div>
                  <div className="text-xs text-gray-500">Servis berkala & besar</div>
                </div>
              </button>
              <button
                onClick={() => setShowSparepart(true)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition text-left"
              >
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Tanya Sparepart</div>
                  <div className="text-xs text-gray-500">Cek stok & pesan</div>
                </div>
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center group"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
          <MessageCircle className="w-6 h-6 relative" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs whitespace-nowrap px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Hubungi Kami
          </span>
        </button>
      </div>

      {/* Sparepart modal */}
      {showSparepart && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Tanya Sparepart</h3>
              <button onClick={() => setShowSparepart(false)} className="text-gray-400 hover:text-gray-700">
                <X />
              </button>
            </div>
            <form onSubmit={handleSparepartSubmit} className="space-y-3">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama lengkap"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Nomor WhatsApp"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <input
                required
                list="parts-list"
                value={form.part}
                onChange={(e) => setForm({ ...form, part: e.target.value })}
                placeholder="Nama sparepart"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <datalist id="parts-list">
                {spareparts.map((s) => (
                  <option key={s.id} value={s.name} />
                ))}
              </datalist>
              <input
                required
                type="number"
                min={1}
                value={form.qty}
                onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
                placeholder="Jumlah"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg font-semibold"
              >
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
