import { useState, useEffect } from "react";
import { Menu, X, Phone, CalendarHeart } from "lucide-react";
import { BRAND_CONFIG, triggerConversionAndGetUrl } from "../config";
import docLogo from "../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  const handleBooking = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-primary/10"
          : "bg-white py-4 border-b border-brand-bg-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2.5 sm:space-x-3 group transition-transform duration-200 hover:scale-[1.02] flex-shrink-0">
            {/* Elegant SVG Pediatric Lung/Heart Logo */}
            <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-brand-bg-light border border-brand-primary/15 flex-shrink-0 shadow-xs">
              <svg
                id="svg-lung-logo"
                viewBox="0 0 100 100"
                className="w-6 h-6 md:w-7 md:h-7 text-[#1FA6A8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Wind pipe */}
                <path d="M50 20v25" stroke="#B06FE8" strokeWidth="6" />
                <path d="M50 45c-4 5-12 8-18 8M50 45c4 5 12 8 18 8" stroke="#B06FE8" strokeWidth="5" />
                
                {/* Left lung lobe */}
                <path
                  d="M32 53c-12 0-20 8-20 22s8 15 20 15 15-12 15-22-5-15-15-15z"
                  fill="#7EECED"
                  fillOpacity="0.45"
                  stroke="#1FA6A8"
                  strokeWidth="5"
                />
                
                {/* Right lung lobe */}
                <path
                  d="M68 53c12 0 20 8 20 22s-8 15-20 15-15-12-15-22 5-15 15-15z"
                  fill="#7EECED"
                  fillOpacity="0.45"
                  stroke="#1FA6A8"
                  strokeWidth="5"
                />

                {/* Pediatric soft heart inside center of lungs */}
                <path
                  d="M50 54c-1.5-2-3.5-2-4.5 0s0 3.5 4.5 6c4.5-2.5 5.5-5 4.5-6s-3 0-4.5 2z"
                  fill="#B06FE8"
                  stroke="#B06FE8"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Typography brand name in single horizontal line */}
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-brand-primary group-hover:text-brand-primary/95 whitespace-nowrap leading-tight">
                Dra. Janaína Traina
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-sans tracking-widest text-[#5D5D5D] uppercase font-bold whitespace-nowrap">
                Pediatria & Pneumopediatria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4D4D4D] hover:text-brand-primary transition-colors hover:translate-y-[-1px] transform active:translate-y-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button Desk */}
          <div className="hidden md:block">
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-primary text-white font-medium text-sm shadow-md hover:bg-brand-primary/90 transition-all duration-300 hover:shadow-lg active:scale-95 space-x-2 cursor-pointer"
            >
              <CalendarHeart className="w-4 h-4 text-white" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#2D2D2D] hover:bg-brand-bg-light transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-bg-light shadow-lg animate-fade-in-down">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-[#3D3D3D] hover:text-brand-primary hover:bg-brand-bg-light rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-brand-bg-light px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleBooking();
                }}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-primary text-white font-medium text-base shadow-md hover:bg-brand-primary/95 transition-all space-x-2 cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5 text-white" />
                <span>Agendar pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
