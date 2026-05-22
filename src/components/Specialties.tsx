import { ReactNode } from "react";
import { Stethoscope, Wind, Baby, ArrowRight } from "lucide-react";
import { triggerConversionAndGetUrl } from "../config";

interface SpecialtyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge: string;
  bulletPoints: string[];
}

export default function Specialties() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const specialtiesList: SpecialtyCardProps[] = [
    {
      badge: "Crescimento & Proteção",
      icon: <Stethoscope className="w-8 h-8 text-[#1FA6A8]" />,
      title: "Pediatria",
      description:
        "O acompanhamento preventivo (Puericultura) e o cuidado integral para o desenvolvimento saudável da criança, do nascimento à adolescência.",
      bulletPoints: [
        "Acompanhamento do desenvolvimento e marcos motores",
        "Avaliação nutricional e hábitos alimentares saudáveis",
        "Prevenção e tratamento de patologias comuns da infância",
        "Atualização vacinal e suporte pediátrico próximo"
      ],
    },
    {
      badge: "Respiração Livre & Leve",
      icon: <Wind className="w-8 h-8 text-[#1FA6A8]" />,
      title: "Pneumopediatria",
      description:
        "Cuidados refinados para o sistema respiratório das crianças, oferecendo alívio real e controle para crises alérgicas ou infecções recorrentes.",
      bulletPoints: [
        "Tratamento especializado e controle da Asma (Bronquite)",
        "Diagnóstico de tosses persistentes e rinite alérgica",
        "Tratamento de Bronquiolite e sequelas respiratórias",
        "Exames respiratórios e orientações ambientais preventivas"
      ],
    },
    {
      badge: "Cuidado de Alta Complexidade",
      icon: <Baby className="w-8 h-8 text-[#1FA6A8]" />,
      title: "Intensivista Pediátrica",
      description:
        "Cuidado especializado a crianças em estado grave. Acompanho mães durante a gestação, realizo sala de parto de forma humanizada e atendo recém-nascidos com todo o suporte necessário para a família.",
      bulletPoints: [
        "Acompanhamento durante a gestação",
        "Sala de parto humanizada",
        "Atendimento ao recém-nascido",
        "Suporte à família nos primeiros momentos"
      ],
    },
  ];

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-primary bg-[#FAF0FF] px-4 py-1.5 rounded-full border border-brand-primary/10">
            Minhas Áreas de Dedicação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] leading-tight">
            Especialidades Médicas{" "}
            <span className="text-brand-primary block md:inline text-serif-elegant">
              com foco no seu filho
            </span>
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto font-normal">
            Três especialidades complementares para dar suporte completo à família, desde a gestação e primeiros instantes de vida até o crescimento pleno.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {specialtiesList.map((spec, index) => (
            <div
              key={index}
              className={`flex flex-col h-full bg-[#FFFFFF] rounded-3xl border border-brand-primary/15 hover:border-brand-primary/45 p-6 lg:p-8 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 relative group overflow-hidden ${
                index === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full" : ""
              }`}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary/80" />

              {/* Specialty Badge */}
              <div className="mb-4">
                <span className="text-[10px] font-bold text-brand-primary/80 uppercase tracking-widest bg-brand-bg-light px-2.5 py-1 rounded-md">
                  {spec.badge}
                </span>
              </div>

              {/* Icon Container with Turquiose Glow */}
              <div className="mb-6 flex mt-1">
                <div className="p-3.5 rounded-2xl bg-brand-secondary/20 border border-brand-secondary/30 shadow-xs relative">
                  <div className="absolute inset-0 rounded-2xl bg-brand-secondary/15 animate-pulse filter blur-xs" />
                  {spec.icon}
                </div>
              </div>

              {/* Specialty Title */}
              <h3 className="font-serif text-2xl font-bold text-[#2D2D2D] mb-3 group-hover:text-brand-primary transition-colors">
                {spec.title}
              </h3>

              {/* Description */}
              <p className="text-[#5D5D5D] text-sm md:text-base leading-relaxed mb-6 flex-grow font-normal">
                {spec.description}
              </p>

              {/* Core Deliverables / Bullet points */}
              <ul className="space-y-2.5 mb-8 border-t border-brand-primary/10 pt-5">
                {spec.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start text-xs text-[#555555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 mr-2 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Action Trigger inside Card */}
              <button
                onClick={handleCTA}
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-brand-bg-light hover:bg-[#FAF0FF] text-brand-primary hover:text-brand-primary font-semibold text-sm transition-all duration-300 border border-brand-primary/10 group-hover:border-brand-primary/30 space-x-2 group/btn cursor-pointer"
              >
                <span>Saber mais sobre {spec.title}</span>
                <ArrowRight className="w-4 h-4 text-brand-primary group-hover/btn:translate-x-1 transform transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
