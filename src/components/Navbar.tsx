import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { site } from '@/data/site';

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/produk', label: 'Produk' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/promo', label: 'Promo' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimoni' },
  { to: '/service', label: 'Service' },
  { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur shadow-md'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
              V
            </div>
            <div className="leading-tight">
              <div
                className={`font-black text-sm lg:text-base ${
                  scrolled || open ? 'text-gray-900' : 'text-white'
                }`}
              >
                MULTI DIMENSI BARU
              </div>
              <div
                className={`text-[10px] lg:text-xs ${
                  scrolled || open ? 'text-red-600' : 'text-red-300'
                }`}
              >
                Dealer Resmi Viar Motor
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-red-600 bg-red-50'
                      : scrolled
                      ? 'text-gray-700 hover:text-red-600'
                      : 'text-white hover:text-red-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${site.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              <Phone className="w-4 h-4" />
              {site.phone}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled || open ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${site.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 px-3 py-2 text-red-600 font-semibold"
            >
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
