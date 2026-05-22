import { ReactNode } from "react";
import { HeartHandshake, Wind, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { triggerConversionAndGetUrl } from "../config";
import bgPhoto from "../assets/images/DSC03463.jpg";

interface DifferentialItem {
  icon: ReactNode;
  title: string;
  description: string;
  subText: string;
}

export default function Differentials() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const differentials: DifferentialItem[] = [
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#1FA6A8]" />,
      title: "Atendimento Humanizado",
      description:
        "Consultas com tempo estendido e focado no acolhimento de todas as dúvidas dos pais, sem correria no relógio.",
      subText: "Seu tempo e as dúvidas da família são integralmente respeitados."
    },
    {
      icon: <Wind className="w-7 h-7 text-[#1FA6A8]" />,
      title: "Saúde Pulmonar Infantil",
      description:
        "Especialização para o diagnóstico de alergias respiratórias e o tratamento de asma, bronquite e tosse crônica.",
      subText: "Para que seu filho respire livremente em todas as épocas do ano."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#1FA6A8]" />,
      title: "Intensivista Pediátrica",
      description:
        "Cuidado especializado de alta complexidade em terapia intensiva pediátrica para as crianças em estado grave.",
      subText: "Toda a segurança clínica que os momentos mais delicados exigem."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#1FA6A8]" />,
      title: "Cuidado Individualizado",
      description:
        "Planos de tratamento personalizados que respeitam a rotina biológica de cada criança e a estrutura familiar.",
      subText: "Tratamentos realistas que funcionam no dia a dia da família."
    },
  ];

  return (
    <section 
      id="diferenciais" 
      className="py-20 md:py-28 relative overflow-hidden bg-white"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(${bgPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title container */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-primary bg-brand-bg-light px-4 py-1.5 rounded-full border border-brand-primary/10">
            Diferenciais da Clínica
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] leading-tight">
            Por que escolher a{" "}
            <span className="text-brand-primary block sm:inline text-serif-elegant">
              Dra. Janaína?
            </span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Mais que consultas médicas: uma parceria contínua com as mães para garantir a saúde respiratória e o desenvolvimento dos pequenos.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FFFFFF] rounded-2xl border border-brand-primary/10 hover:border-brand-primary/30 p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Turquoise glowing bubble in background */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand-secondary/5 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Turquoise Icon Badge */}
              <div className="mb-5 flex">
                <div className="p-3 rounded-xl bg-brand-secondary/15 border border-brand-secondary/25 shadow-xs flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Differential Title */}
              <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#555555] text-xs sm:text-sm leading-relaxed mb-4 flex-grow font-normal">
                {item.description}
              </p>

              {/* Extra reassurance footer line */}
              <div className="text-[11px] font-semibold text-brand-primary tracking-wide border-t border-brand-bg-light pt-3">
                {item.subText}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom micro-CTA line inside sections for maximum conversion flow */}
        <div className="mt-12 text-center">
          <p className="text-[#4D4D4D] text-xs sm:text-sm font-medium mb-3">
            Deseja um atendimento diferenciado para o seu bem mais precioso?
          </p>
          <button
            onClick={handleCTA}
            className="inline-flex items-center space-x-2 text-brand-primary font-bold hover:text-brand-primary/80 transition-colors group cursor-pointer text-sm sm:text-base border-b-2 border-brand-primary/20 pb-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a equipe no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
