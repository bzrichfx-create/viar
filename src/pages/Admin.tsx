import { useEffect, useState } from 'react';
import { Lock, Calendar, Package, LogOut, Shield } from 'lucide-react';
import { spareparts as initialSpareparts, Sparepart } from '@/data/spareparts';
import { formatRupiah } from '@/data/products';

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [tab, setTab] = useState<'bookings' | 'parts' | 'inquiries'>('bookings');
  const [bookings, setBookings] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [parts, setParts] = useState<Sparepart[]>(() => {
    const saved = localStorage.getItem('admin-spareparts');
    return saved ? JSON.parse(saved) : initialSpareparts;
  });

  useEffect(() => {
    if (!auth) return;
    setBookings(JSON.parse(localStorage.getItem('serviceBookings') || '[]'));
    setInquiries(JSON.parse(localStorage.getItem('partInquiries') || '[]'));
  }, [auth]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === 'admin' && pass === 'viar123') {
      setAuth(true);
      setErr('');
    } else {
      setErr('Username atau password salah.');
    }
  };

  const toggleStatus = (id: string) => {
    const next = parts.map((p) =>
      p.id === id
        ? { ...p, status: p.status === 'Tersedia' ? 'Habis' : 'Tersedia' }
        : p
    ) as Sparepart[];
    setParts(next);
    localStorage.setItem('admin-spareparts', JSON.stringify(next));
  };

  if (!auth) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 to-red-900 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full"
        >
          <div className="w-14 h-14 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-center mb-1">Admin Login</h1>
          <p className="text-sm text-center text-gray-500 mb-5">Masuk untuk mengelola data</p>
          {err && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-3">{err}</div>}
          <div className="space-y-3">
            <input
              required
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg">
              Login
            </button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-4">
            Demo: <code>admin</code> / <code>viar123</code>
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-600" />
            <h1 className="text-xl font-black">Admin Dashboard</h1>
          </div>
          <button
            onClick={() => setAuth(false)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { id: 'bookings', label: 'Booking Service', icon: Calendar },
            { id: 'inquiries', label: 'Pesan Sparepart', icon: Package },
            { id: 'parts', label: 'Stok Sparepart', icon: Package },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                tab === t.id ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-red-50'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b font-bold">Daftar Booking Service ({bookings.length})</div>
            {bookings.length === 0 ? (
              <div className="p-8 text-center text-gray-400">Belum ada booking masuk.</div>
            ) : (
              <div className="divide-y">
                {bookings.map((b, i) => (
                  <div key={i} className="p-5 grid md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="font-bold text-gray-900">{b.name}</div>
                      <div className="text-gray-500">{b.phone}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {new Date(b.createdAt).toLocaleString('id-ID')}
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className="text-gray-500">Paket:</span> {b.packageName} -{' '}
                        {formatRupiah(b.packagePrice)}
                      </div>
                      <div>
                        <span className="text-gray-500">Cabang:</span> {b.branch}
                      </div>
                      <div>
                        <span className="text-gray-500">Jadwal:</span> {b.date} · {b.time}
                      </div>
                      <div>
                        <span className="text-gray-500">Motor:</span> {b.motor}
                      </div>
                      {b.notes && (
                        <div>
                          <span className="text-gray-500">Catatan:</span> {b.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'inquiries' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b font-bold">Pesan Sparepart ({inquiries.length})</div>
            {inquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-400">Belum ada pesan masuk.</div>
            ) : (
              <div className="divide-y">
                {inquiries.map((q, i) => (
                  <div key={i} className="p-5 text-sm">
                    <div className="font-bold">{q.name} ({q.phone})</div>
                    <div className="text-gray-700">
                      {q.part} × {q.qty}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'parts' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b font-bold">Kelola Stok Sparepart</div>
            <div className="divide-y">
              {parts.map((p) => (
                <div key={p.id} className="p-4 flex items-center gap-4">
                  <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-gray-500">
                      {p.code} · {formatRupiah(p.price)}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      p.status === 'Tersedia'
                        ? 'bg-emerald-100 text-emerald-700'
                        : p.status === 'Pre-order'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {p.status}
                  </span>
                  <button
                    onClick={() => toggleStatus(p.id)}
                    className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-red-600"
                  >
                    Toggle
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
