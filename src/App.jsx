import React, { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";

import { products } from "./assets/products";

export default function App() {
  const whatsappNumber = "905xxxxxxxxx";
  const phoneNumber = "tel:+905xxxxxxxxx";

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Smooth Scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  // Scroll Button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />

          <p className="text-white tracking-widest text-sm">
            Yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden font-sans">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            Oto Lastikçi
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-gray-300 transition"
            >
              Hizmetler
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-gray-300 transition"
            >
              Ürünler
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300 transition"
            >
              İletişim
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2"
              >
                Hizmetler
              </button>

              <button
                onClick={() => scrollToSection("products")}
                className="text-left py-2"
              >
                Ürünler
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2"
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-2xl bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Güvenli Sürüş İçin
            <br />
            Doğru Lastik
          </h2>

          <p className="text-white/70 mb-8 text-sm md:text-base">
            Kaliteli lastik, hızlı montaj ve uygun fiyat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={phoneNumber}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Ara
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <h3 className="text-3xl font-bold mb-10">
          Hizmetlerimiz
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              Lastik Satışı
            </h4>

            <p className="text-white/70">
              Tüm araç tiplerine uygun kaliteli lastikler.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              Balans Ayarı
            </h4>

            <p className="text-white/70">
              Güvenli sürüş için profesyonel balans hizmeti.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              Lastik Değişimi
            </h4>

            <p className="text-white/70">
              Hızlı ve güvenilir lastik değişim işlemleri.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <h3 className="text-3xl font-bold mb-10">
          Ürünler
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.description}
              className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-52 object-cover opacity-70"
              />

              <div className="p-5">
                <h4 className="text-lg font-semibold mb-2">
                  {item.description}
                </h4>

                <p className="text-white/70 text-sm">
                  Uygun fiyatlı kaliteli ürün.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <h3 className="text-3xl font-bold mb-10">
          İletişim
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-8">
            <p className="text-lg mb-4">
              Telefon: +90 5xx xxx xx xx
            </p>

            <p className="text-lg">
              Adres: Ankara / Türkiye
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={phoneNumber}
                className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Ara
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">
                Konumumuz
              </p>

              <p className="text-white/70">
                Ankara / Türkiye
              </p>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ankara"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-2xl"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL TOP */}
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-white/20 hover:bg-white/30 transition backdrop-blur-md p-3 rounded-full"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {/* FOOTER */}
      <footer className="text-center py-10 text-white/60 text-sm">
        © {new Date().getFullYear()} Oto Lastikçi
      </footer>
    </div>
  );
}