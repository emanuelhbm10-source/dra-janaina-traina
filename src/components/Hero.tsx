import { motion } from "motion/react";
import { Shield, Sparkles, MapPin } from "lucide-react";
import { BRAND_CONFIG, triggerConversionAndGetUrl } from "../config";
import doctorPhoto from "../assets/images/DSC00060.jpg";

export default function Hero() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#FFFFFF] via-[#FAF6FF] to-[#F5EEFF] overflow-hidden"
    >
      {/* Absolute Decorative Glow Accents */}
      <div className="absolute top-[10%] right-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-secondary/15 blur-3xl -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-primary/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Block: Narrative & Primary CTAs */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left z-10">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center justify-center md:justify-start">
              <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF0FF] border border-brand-primary/20 text-brand-primary text-xs md:text-sm font-semibold tracking-wide shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-primary fill-brand-primary/10" />
                <span>Atendimento humanizado e acolhedor em Sinop - MT</span>
              </span>
            </div>

            {/* Main Catchy Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D2D2D] leading-[1.12]">
                Cuidado especializado para a saúde do seu filho,{" "}
                <span className="text-brand-primary italic block sm:inline">
                  desde o primeiro dia de vida
                </span>
              </h1>
              
              {/* Specialized taglines in turquoise/lilac background styles */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
                <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-brand-primary/10 text-brand-primary border border-brand-primary/15">
                  Pediatria Geral
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-brand-secondary/10 text-[#1D7F80] border border-brand-secondary/20">
                  Pneumopediatria
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                  Intensivista Pediátrica
                </span>
              </div>
            </div>

            {/* Conversational friendly subtitle */}
            <p className="text-[#555555] text-sm md:text-lg max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
              Dra. Janaína Traina une conhecimento de alta complexidade e toda a dedicação feminina necessárias para cuidar das vias aéreas, respiração e bem-estar do seu mais precioso tesouro.
            </p>

            {/* Highly Prominent CTA Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <button
                onClick={handleCTA}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-base md:text-lg shadow-lg hover:shadow-brand-primary/25 hover:shadow-xl transition-all duration-300 transform active:scale-95 space-x-3 group cursor-pointer"
              >
                {/* Custom WhatsApp Icon SVG with white color as specified by branding */}
                <svg
                  className="w-6 h-6 text-white fill-current animate-pulse"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.979 0c3.183.001 6.177 1.24 8.43 3.496 2.253 2.257 3.49 5.253 3.488 8.438-.004 6.551-5.355 11.9-11.922 11.9-1.996-.001-3.957-.502-5.69-1.462L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.79 1.451 5.394 0 9.785-4.381 9.788-9.76.002-2.607-1.012-5.059-2.859-6.904C16.48 2.095 14.032 1.08 11.428 1.08c-5.399 0-9.789 4.384-9.792 9.764-.002 1.815.485 3.593 1.411 5.158l-.930 3.398 3.483-.915c1.517.828 3.1 1.258 4.673 1.258zm9.324-7.143c-.26-.13-1.534-.757-1.772-.841-.237-.086-.41-.13-.58.13-.172.261-.667.841-.818 1.014-.15.174-.301.196-.56.065-.26-.13-1.099-.405-2.093-1.291-.774-.69-1.297-1.543-1.448-1.803-.151-.26-.016-.401.114-.531.117-.117.26-.304.39-.456.129-.152.172-.261.26-.435.086-.174.043-.326-.021-.456-.065-.13-.58-1.391-.795-1.91-.21-.508-.418-.439-.58-.447-.15-.008-.323-.01-.495-.01-.172 0-.452.065-.688.326-.237.261-.904.883-.904 2.152 0 1.27.925 2.497 1.054 2.671.13.173 1.82 2.78 4.417 3.896.618.266 1.1.425 1.476.544.62.197 1.184.169 1.63.102.497-.075 1.534-.627 1.75-.1233.215-.606.215-1.127.151-1.22-.064-.093-.236-.14-.496-.27z" />
                </svg>
                <span>Agendar Consulta agora</span>
              </button>
              
              <div className="flex flex-col items-center sm:items-start text-xs text-[#666666] space-y-1 mt-1 sm:mt-0">
                <span className="flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/15" />
                  <span className="font-semibold text-brand-primary">CRM-MT 15993</span>
                </span>
                <span>Resposta imediata e atenciosa</span>
              </div>
            </div>

            {/* Quick trust metric badges - Desktop only */}
            <div className="hidden md:grid pt-4 grid-cols-3 gap-3 border-t border-brand-primary/10 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">+15 Anos</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">De Dedicação</div>
              </div>
              <div className="text-center md:text-left border-x border-[#EAEAEA] px-2">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">100%</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">Foco na Criança</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">Sinop - MT</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">Centro Médico</div>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Professional Portrait Frame */}
          <div className="flex md:col-span-5 justify-center items-center relative z-10 w-full animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-none md:w-[375px] h-[400px] md:h-[500px]"
            >
              {/* Outer decorative borders and shadows */}
              <div className="absolute inset-0 bg-brand-secondary rounded-[40px] rotate-3 -z-10 shadow-lg opacity-40 transition-transform hover:rotate-1" />
              <div className="absolute inset-0 bg-brand-primary rounded-[40px] -rotate-3 -z-20 shadow-md opacity-35" />
              
              {/* Main portrait image securely masked and rounded */}
              <div className="w-full h-full rounded-[38px] overflow-hidden border-4 border-white shadow-2xl relative bg-brand-bg-light">
                <img
                  src={doctorPhoto}
                  alt="Dra. Janaína Traina - Pediatra e Pneumopediatra em Sinop"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float glassmorphic badge for real credentials */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-brand-primary/10 shadow-lg flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-brand-bg-light">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3D3D3D]">Atendimento</span>
                    <span className="text-xs font-bold text-brand-primary">Pneumologia & Pediatria</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick trust metric badges - Mobile only (placed below the doctor's portrait) */}
          <div className="block md:hidden w-full pt-4 border-t border-brand-primary/10 max-w-lg mx-auto z-10">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">+15 Anos</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">De Dedicação</div>
              </div>
              <div className="text-center border-x border-[#EAEAEA] px-2">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">100%</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">Foco na Criança</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">Sinop - MT</div>
                <div className="text-xs text-[#777777] font-medium uppercase tracking-wider">Centro Médico</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
