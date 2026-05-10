import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { site, branches } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
              V
            </div>
            <div className="font-black text-white">MULTI DIMENSI BARU</div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Dealer eksklusif Viar Motor sejak {site.founded}. Layanan 3S resmi: Sales, Service, Sparepart.
          </p>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Halaman</h4>
          <ul className="space-y-2 text-sm">
            {[
              ['Beranda', '/'],
              ['Produk', '/produk'],
              ['Tentang Kami', '/tentang'],
              ['Promo', '/promo'],
              ['Blog', '/blog'],
              ['Testimoni', '/testimonials'],
              ['Service', '/service'],
              ['Kontak', '/kontak'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-red-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Cabang Pusat</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{branches[0].address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="hover:text-red-400">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-red-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Cabang Lain</h4>
          <ul className="space-y-2 text-sm">
            {branches.slice(1).map((b) => (
              <li key={b.name}>
                <div className="font-semibold text-white">{b.name}</div>
                <div className="text-gray-400 text-xs">{b.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {site.brand}. All rights reserved. Dealer resmi Viar Motor.
        </div>
      </div>
    </footer>
  );
}
