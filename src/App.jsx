import React, { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp, Menu, X } from "lucide-react";

export default function App() {
  const whatsappNumber = "905xxxxxxxxx";
  const phoneNumber = "tel:+905xxxxxxxxx";

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);

    const t = setTimeout(() => setLoading(false), 1200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white tracking-widest text-sm md:text-base">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-3 md:p-4">
          <h1 className="font-bold text-base md:text-lg">Oto Lastikçi</h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => scrollTo("services")} className="hover:text-white/70">Hizmetler</button>
            <button onClick={() => scrollTo("products")} className="hover:text-white/70">Ürünler</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white/70">İletişim</button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm">
            <button onClick={() => scrollTo("services")}>Hizmetler</button>
            <button onClick={() => scrollTo("products")}>Ürünler</button>
            <button onClick={() => scrollTo("contact")}>İletişim</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-2xl max-w-xl">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Güvenli Sürüş İçin Doğru Lastik
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-6">
            7/24 yol yardım ve profesyonel lastik hizmeti
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={phoneNumber} className="bg-green-600 px-5 py-3 rounded-xl flex items-center justify-center gap-2">
              <Phone size={18} /> Ara
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="bg-green-500 px-5 py-3 rounded-xl flex items-center justify-center gap-2">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Hizmetler</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {["Lastik Değişimi","Balans Ayarı","Yol Yardım","Lastik Tamiri","Mevsimlik Lastik","Jant Hizmeti"].map((item) => (
            <div key={item} className="bg-white/10 p-5 md:p-6 rounded-2xl border border-white/10">
              <h4 className="font-semibold text-base md:text-lg">{item}</h4>
              <p className="text-white/70 text-xs md:text-sm mt-2">Profesyonel hizmet.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Ürünler</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {["Kış Lastiği","Yaz Lastiği","4 Mevsim Lastik"].map((item) => (
            <div key={item} className="bg-white/10 p-5 md:p-6 rounded-2xl border border-white/10">
              <div className="h-32 md:h-40 bg-white/10 rounded-xl mb-4" />
              <h4 className="font-semibold text-base md:text-lg">{item}</h4>
              <p className="text-white/70 text-xs md:text-sm">Uygun fiyatlı ürünler.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">İletişim</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10">
            <p className="text-white/80 text-sm md:text-base">Telefon: +90 5xx xxx xx xx</p>
            <p className="text-white/80 text-sm md:text-base">Adres: Ankara / Türkiye</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={phoneNumber} className="bg-blue-600 px-4 py-2 rounded-xl flex items-center justify-center gap-2">
                <Phone size={16} /> Ara
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="bg-green-600 px-4 py-2 rounded-xl flex items-center justify-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
            <div className="text-center p-6">
              <p className="font-semibold">Konumumuz</p>
              <p className="text-white/60 text-sm">Ankara / Türkiye</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ankara"
                target="_blank"
                className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-xl text-sm"
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
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/20"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* FOOTER */}
      <footer className="text-center py-10 text-white/60 border-t border-white/10 text-sm">
        © {new Date().getFullYear()} Oto Lastikçi
      </footer>
    </div>
  );
}