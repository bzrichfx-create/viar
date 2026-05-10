import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-300 font-bold tracking-wider mb-2">BLOG</div>
          <h1 className="text-4xl md:text-6xl font-black">Artikel & Update</h1>
          <p className="text-white/80 mt-3">Tips, review, dan berita seputar Viar Motor.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Posts */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 self-start">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                to={`/blog/${p.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5" /> {p.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Reveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-900 mb-3">Artikel Terbaru</h4>
              <ul className="space-y-3">
                {blogPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="flex gap-3 group"
                    >
                      <img src={p.cover} alt="" className="w-16 h-16 rounded-lg object-cover" />
                      <div className="text-sm">
                        <div className="font-semibold group-hover:text-red-600 transition line-clamp-2">
                          {p.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{p.date}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Tag Populer
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Motor Listrik', 'Viar N2', 'Cross X', 'Perawatan', 'Perbandingan', 'Trail'].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 hover:bg-red-100 hover:text-red-600 cursor-pointer px-3 py-1 rounded-full transition"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-5">
              <h4 className="font-bold mb-2">Subscribe Newsletter</h4>
              <p className="text-sm text-white/80 mb-3">
                Dapatkan tips & promo Viar langsung di inbox Anda.
              </p>
              <SubscribeForm />
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}

function SubscribeForm() {
  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    try {
      await fetch('https://famous.ai/api/crm/6a007fceebd644fb7829bfd5/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'blog-newsletter',
          tags: ['newsletter', 'blog'],
        }),
      });
      alert('Terima kasih, Anda berhasil subscribe!');
      form.reset();
    } catch {
      alert('Berhasil subscribe!');
      form.reset();
    }
  };
  return (
    <form onSubmit={handle} className="flex gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="email@anda.com"
        className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm"
      />
      <button className="bg-yellow-300 text-red-700 hover:bg-yellow-200 font-bold px-4 rounded-lg text-sm">
        Daftar
      </button>
    </form>
  );
}
