import { Link, useParams } from 'react-router-dom';
import { Calendar, ArrowLeft, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
        <Link to="/blog" className="text-red-600 hover:underline">
          ← Kembali ke Blog
        </Link>
      </div>
    );
  }

  const url = window.location.href;
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} - ${url}`)}`,
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-20 pb-20 bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-10 text-white">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-3">
            <Link to="/" className="hover:text-white">Beranda</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-3">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <div className="flex flex-wrap gap-1">
              {post.tags.map((t) => (
                <span key={t} className="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-red-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h2 key={i} className="text-2xl font-black text-gray-900 mt-8 mb-3">
                  {para.replace(/\*\*/g, '')}
                </h2>
              );
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').map((l) => l.replace(/^- /, ''));
              return (
                <ul key={i} className="list-disc list-inside text-gray-700 my-4 space-y-1">
                  {items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {para.split(/\*\*(.*?)\*\*/g).map((t, k) =>
                  k % 2 === 1 ? <strong key={k}>{t}</strong> : t
                )}
              </p>
            );
          })}
        </article>

        {/* Share */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="font-semibold text-gray-900 mb-3">Bagikan Artikel:</div>
          <div className="flex gap-2">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-semibold"
            >
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
          </div>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Artikel Lainnya</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
              >
                <img src={r.cover} alt={r.title} className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                  <div className="font-bold group-hover:text-red-600 transition line-clamp-2">{r.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
