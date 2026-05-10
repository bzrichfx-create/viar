// AppLayout is no longer used as the main entry — routing is now handled directly in App.tsx
// which renders Layout + nested pages (Home, Produk, Tentang, etc.).
// This file is kept for compatibility.
import Home from '@/pages/Home';

export default function AppLayout() {
  return <Home />;
}
