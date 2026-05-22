import { Calendar, CheckCircle2 } from "lucide-react";
import { BRAND_CONFIG, triggerConversionAndGetUrl } from "../config";

export default function CTA() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const guarantees = [
    "Particular (com recibo para reembolso)",
    "Suporte atencioso pós-consulta",
    "Instalações higienizadas e seguras",
    "Estacionamento cômodo e facilitado"
  ];

  return (
    <section className="py-20 bg-brand-primary relative overflow-hidden">
      {/* Decorative organic background vectors / light patterns */}
      <div className="absolute top-12 left-[-10%] w-72 h-72 rounded-full bg-white/10 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Section subtitle indicator */}
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1 rounded-full bg-white/15 text-white border border-white/20 text-xs font-semibold tracking-wider uppercase">
              Contato Direto pelo WhatsApp
            </span>
          </div>

          {/* Core high-impact header */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Seu filho merece o melhor cuidado.{" "}
              <span className="block sm:inline text-serif-elegant italic text-brand-secondary">
                Agende agora!
              </span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Clique abaixo para falar diretamente com nossa equipe via WhatsApp. Escolha o melhor dia e horário para a consulta do seu filho.
            </p>
          </div>

          {/* Bullet proofs */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center space-x-2.5 text-left text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary fill-brand-secondary/15 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA white Button with Lilac text */}
          <div className="flex flex-col items-center justify-center space-y-3 pt-2">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center px-[24px] py-[14px] sm:px-10 sm:py-5 rounded-full bg-[#FFFFFF] text-brand-primary hover:text-brand-primary font-bold text-base sm:text-lg whitespace-nowrap shadow-xl hover:shadow-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 space-x-3 group cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-brand-primary fill-current animate-pulse group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.979 0c3.183.001 6.177 1.24 8.43 3.496 2.253 2.257 3.49 5.253 3.488 8.438-.004 6.551-5.355 11.9-11.922 11.9-1.996-.001-3.957-.502-5.69-1.462L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.79 1.451 5.394 0 9.785-4.381 9.788-9.76.002-2.607-1.012-5.059-2.859-6.904C16.48 2.095 14.032 1.08 11.428 1.08c-5.399 0-9.789 4.384-9.792 9.764-.002 1.815.485 3.593 1.411 5.158l-.930 3.398 3.483-.915c1.517.828 3.1 1.258 4.673 1.258zm9.324-7.143c-.26-.13-1.534-.757-1.772-.841-.237-.086-.41-.13-.58.13-.172.261-.667.841-.818 1.014-.15.174-.301.196-.56.065-.26-.13-1.099-.405-2.093-1.291-.774-.69-1.297-1.543-1.448-1.803-.151-.26-.016-.401.114-.531.117-.117.26-.304.39-.456.129-.152.172-.261.26-.435.086-.174.043-.326-.021-.456-.065-.13-.58-1.391-.795-1.91-.21-.508-.418-.439-.58-.447-.15-.008-.323-.01-.495-.01-.172 0-.452.065-.688.326-.237.261-.904.883-.904 2.152 0 1.27.925 2.497 1.054 2.671.13.173 1.82 2.78 4.417 3.896.618.266 1.1.425 1.476.544.62.197 1.184.169 1.63.102.497-.075 1.534-.627 1.75-.1233.215-.606.215-1.127.151-1.22-.064-.093-.236-.14-.496-.27z" />
              </svg>
              <span>Agendar pelo WhatsApp</span>
            </button>
            <span className="text-white/70 text-xs flex items-center space-x-1 justify-center">
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendamento rápido em menos de 2 minutos</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
