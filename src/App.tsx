import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import ProductDetail from "./pages/ProductDetail";
import Tentang from "./pages/Tentang";
import Promo from "./pages/Promo";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import TestimonialsPage from "./pages/Testimonials";
import Service from "./pages/Service";
import Kontak from "./pages/Kontak";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/produk/:id" element={<ProductDetail />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/service" element={<Service />} />
              <Route path="/kontak" element={<Kontak />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
