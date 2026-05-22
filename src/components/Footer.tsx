import { CalendarHeart, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BRAND_CONFIG, triggerConversionAndGetUrl } from "../config";
import docLogo from "../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#30134D] text-white/90 pt-16 pb-8 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo, CRM & General statement (Span 5) */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center space-x-2.5 sm:space-x-3 text-left flex-shrink-0">
              {/* Elegant SVG Pediatric Lung/Heart Logo */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 flex-shrink-0">
                <svg
                  id="svg-lung-logo-footer"
                  viewBox="0 0 100 100"
                  className="w-6 h-6 text-[#7EECED]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Wind pipe */}
                  <path d="M50 20v25" stroke="#7EECED" strokeWidth="6" />
                  <path d="M50 45c-4 5-12 8-18 8M50 45c4 5 12 8 18 8" stroke="#7EECED" strokeWidth="5" />
                  
                  {/* Left lung lobe */}
                  <path
                    d="M32 53c-12 0-20 8-20 22s8 15 20 15 15-12 15-22-5-15-15-15z"
                    fill="#7EECED"
                    fillOpacity="0.3"
                    stroke="#7EECED"
                    strokeWidth="5"
                  />
                  
                  {/* Right lung lobe */}
                  <path
                    d="M68 53c12 0 20 8 20 22s-8 15-20 15-15-12-15-22 5-15 15-15z"
                    fill="#7EECED"
                    fillOpacity="0.3"
                    stroke="#7EECED"
                    strokeWidth="5"
                  />

                  {/* Pediatric soft heart inside center of lungs */}
                  <path
                    d="M50 54c-1.5-2-3.5-2-4.5 0s0 3.5 4.5 6c4.5-2.5 5.5-5 4.5-6s-3 0-4.5 2z"
                    fill="#7EECED"
                    stroke="#7EECED"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Typography brand name in single horizontal line */}
              <div className="flex flex-col text-left whitespace-nowrap">
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap leading-tight">
                  Dra. Janaína Traina
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans tracking-widest text-[#7EECED] uppercase font-bold whitespace-nowrap">
                  Pediatria & Pneumopediatria
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Atendimento pediátrico integral, atuando com foco na saúde respiratória e cuidados de terapia intensiva pediátrica, oferecendo tranquilidade e suporte próximo para mães e pais em sua jornada.
            </p>

            <div className="flex items-center space-x-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#7EECED]" />
              <span className="text-xs font-bold tracking-wide text-[#7EECED] uppercase">
                {BRAND_CONFIG.crm}
              </span>
            </div>
          </div>

          {/* Column 2: Specialties / Quick services (Span 3) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="text-sm font-bold tracking-widest text-[#7EECED] uppercase pb-2 border-b border-white/5">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#especialidades" className="hover:text-[#7EECED] transition-colors">
                  Pediatria Geral (Puericultura)
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#7EECED] transition-colors">
                  Pneumologia Pediátrica (Pneumoped)
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#7EECED] transition-colors">
                  Intensivista Pediátrica
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#7EECED] transition-colors">
                  Apoio Completo à Amamentação
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Locations details (Span 4) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h3 className="text-sm font-bold tracking-widest text-[#7EECED] uppercase pb-2 border-b border-white/5">
              Atendimento & Contato
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#7EECED] flex-shrink-0 mt-0.5" />
                <span>R. das Avencas, 2040 - St. Comercial, Sinop - MT, 78550-282</span>
              </li>
              
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#7EECED] flex-shrink-0" />
                <button
                  onClick={handleWhatsApp}
                  className="hover:text-[#7EECED] transition-colors text-left font-semibold"
                >
                  (13) 99752-1234
                </button>
              </li>

              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-[#7EECED] flex-shrink-0" />
                <a
                  href={BRAND_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7EECED] transition-colors font-medium"
                >
                  @janainatraina
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-brand-primary text-white border border-brand-primary text-xs font-semibold hover:bg-brand-primary/90 transition-all cursor-pointer"
              >
                <CalendarHeart className="w-3.5 h-3.5 text-white" />
                <span>Agendar pelo WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer / Credits floor */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {currentYear} Dra. Janaína Traina. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-white/40">
              As informações contidas neste site possuem caráter educativo e informativo, não substituindo a consulta médica presencial.
            </p>
          </div>
          <div className="flex space-x-4 text-[10px] uppercase font-bold tracking-wider">
            <a href="#inicio" className="hover:text-white transition-colors">
              Início
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/40">Pediatra em Sinop MT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
