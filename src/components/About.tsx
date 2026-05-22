import { Heart, GraduationCap, Award, MapPin, CalendarCheck } from "lucide-react";
import { BRAND_CONFIG, triggerConversionAndGetUrl } from "../config";
import doctorAboutPhoto from "../assets/images/DSC03479.jpg";

export default function About() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          
          {/* Left Block: Image Container with decorative details */}
          <div className="w-full lg:w-[45%] relative flex justify-center items-center">
            
            {/* Soft decorative glow circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-primary/10 blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-dashed border-brand-primary/20 -z-10" />
            
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square md:aspect-auto">
              {/* Outer luxury border/shadow */}
              <div className="absolute inset-0 rounded-[40px] border-2 border-brand-primary/30 translate-x-4 translate-y-4 -z-10 bg-brand-bg-light" />
              
              <div className="w-full h-full rounded-[38px] overflow-hidden border-4 border-white shadow-xl relative bg-brand-bg-light">
                <img
                  src={doctorAboutPhoto}
                  alt="Dra. Janaína Traina em atendimento em Sinop - MT"
                  className="w-full h-full object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded sticker indicating CRM */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-brand-primary/25 shadow-md">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary/10" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2D2D]">{BRAND_CONFIG.crm}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Personal Bio & Technical Credentials */}
          <div className="w-full lg:w-[55%] space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Small top header */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-brand-primary/15 rounded-full text-xs font-semibold text-brand-primary uppercase tracking-wider shadow-xs">
                <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary/10" />
                <span>Quem cuida do seu filho</span>
              </span>
            </div>

            {/* Rich Personalized Header */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] leading-tight">
                Dra. Janaína Traina
              </h2>
              <p className="text-brand-primary font-serif text-lg md:text-xl italic font-medium leading-relaxed">
                &ldquo;Cuidar de uma criança é acolher toda a família com respeito, paciência e muito amor.&rdquo;
              </p>
            </div>

            {/* Humanized Biography paragraphs */}
            <div className="space-y-4 text-base text-[#555555] font-normal leading-relaxed text-center lg:text-left">
              <p>
                Como médica Pediatra, Pneumopediatra e Intensivista Pediátrica, entendo que a maternidade traz grandes alegrias, mas também muitas preocupações e dúvidas. Cada choro, tosse ou noite sem dormir afeta a rotina e o emocional de toda a família.
              </p>
              <p>
                Por isso, meu atendimento em <strong>Sinop - MT</strong> é baseado na escuta atenta, sem pressa. Busco olhar para a criança como um todo e oferecer um porto seguro para as mães, com orientações claras baseadas em evidências científicas e um acompanhamento carinhoso em cada fase de crescimento.
              </p>
            </div>

            {/* Structured Credentials Grid for medical trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAEAEA]">
              
              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 rounded-xl bg-[#FAF0FF] border border-brand-primary/15 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wide">Formação Sólida</h4>
                  <p className="text-xs text-[#666666] leading-relaxed mt-1">
                    Residência Médica em Pediatria, Especialização em Doenças Respiratórias e atuação como Intensivista Pediátrica de alta complexidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 rounded-xl bg-brand-secondary/15 border border-brand-secondary/25 flex-shrink-0">
                  <Award className="w-5 h-5 text-[#1FA6A8]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wide">Registro Oficial</h4>
                  <p className="text-xs text-[#666666] leading-relaxed mt-1">
                    Inscrita no Conselho Regional de Medicina de Mato Grosso sob o <strong>CRM-MT 15993</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 rounded-xl bg-[#FAF0FF] border border-brand-primary/15 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wide">Atendimento Local</h4>
                  <p className="text-xs text-[#666666] leading-relaxed mt-1">
                    Consultório minuciosamente estruturado e higienizado na cidade de Sinop - MT.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 rounded-xl bg-brand-secondary/15 border border-brand-secondary/25 flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#1FA6A8] fill-[#1FA6A8]/10" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wide">Apoio Maternal</h4>
                  <p className="text-xs text-[#666666] leading-relaxed mt-1">
                    Orientação contínua sobre aleitamento materno, puericultura integrativa e cuidados respiratórios preventivos.
                  </p>
                </div>
              </div>

            </div>

            {/* Dynamic CTA button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 space-x-2.5 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Conversar com a Dra. Janaína</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
