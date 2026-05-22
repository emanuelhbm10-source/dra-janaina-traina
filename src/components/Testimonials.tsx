import { Quote, Star, MessageCircle } from "lucide-react";
import { triggerConversionAndGetUrl } from "../config";

interface TestimonialCardProps {
  quote: string;
  author: string;
  childDetails: string;
  tag: string;
  initials: string;
}

export default function Testimonials() {
  const handleCTA = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const reviewsList: TestimonialCardProps[] = [
    {
      tag: "Intensivista Pediátrica",
      quote:
        "Dra. Janaína foi um anjo nas nossas vidas! Meu pequeno Arthur nasceu prematuro e o cuidado e conhecimento dela como intensivista pediátrica nos deu toda a segurança que precisávamos em Sinop. Uma profissional incrível, paciente e extremamente humana.",
      author: "Mariana S.",
      childDetails: "Mãe do Arthur (3 meses)",
      initials: "MA",
    },
    {
      tag: "Pneumologia Infantil / Asma",
      quote:
        "Minha filha Clara vivia com crises de asma e tosse crônica nas mudanças de tempo. Depois que começamos o tratamento com a Dra. Janaína, a qualidade de vida da minha filha mudou completamente! Ela respira super bem e as crises sumiram.",
      author: "Camila R.",
      childDetails: "Mãe da Clara (4 anos)",
      initials: "CC",
    },
    {
      tag: "Pediatria / Consulta Geral",
      quote:
        "O atendimento é maravilhoso! A Dra. Janaína não tem pressa nenhuma na consulta, examina meu bebê minuciosamente, tira todas as minhas dúvidas e explica tudo sobre as vacinas. O consultório é impecável e acolhedor.",
      author: "Juliana M.",
      childDetails: "Mãe do Theo (8 meses)",
      initials: "JT",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-primary bg-brand-bg-light px-4 py-1.5 rounded-full border border-brand-primary/10">
            Relatos do Coração
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] leading-tight">
            O carinho de quem{" "}
            <span className="text-brand-primary block sm:inline text-serif-elegant">
              confia sua joia mais preciosa
            </span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Histórias reais de mães que encontraram segurança técnica e amparo humano no atendimento da Dra. Janaína.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviewsList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-[#F5EEFF]/80 hover:bg-[#F5EEFF] rounded-3xl p-6 md:p-8 border border-brand-primary/10 hover:border-brand-primary/25 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Turquoise Aspas (Quotes) */}
              <div className="absolute top-6 right-8 text-[#7EECED]/60 group-hover:text-[#7EECED] transition-colors">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Specialization validation Tag */}
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-white text-brand-primary px-3 py-1.5 rounded-md border border-brand-primary/10">
                  {item.tag}
                </span>
              </div>

              {/* Star rating block */}
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Patient Review text */}
              <p className="text-[#3D3D3D] text-sm md:text-base leading-relaxed italic mb-8 flex-grow font-normal">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Reviewer / Mother avatar & details footprint */}
              <div className="flex items-center space-x-3.5 border-t border-brand-primary/10 pt-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-secondary/40 to-brand-primary/30 border border-white flex items-center justify-center font-bold text-xs text-brand-primary">
                  {item.initials}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-base font-bold text-[#2D2D2D]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#666666] font-medium">
                    {item.childDetails}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Encouraging micro-CTA */}
        <div className="mt-16 text-center max-w-xl mx-auto rounded-2xl bg-brand-bg-light/50 border border-brand-primary/15 p-6 shadow-xs">
          <p className="text-[#4D4D4D] text-sm font-semibold mb-3">
            Adicione o nome do seu filho à nossa galeria de sorrisos saudáveis!
          </p>
          <button
            onClick={handleCTA}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-primary text-white font-medium text-sm hover:bg-brand-primary/95 transition-all space-x-2 cursor-pointer shadow-md shadow-brand-primary/10"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Agendar Consulta</span>
          </button>
        </div>

      </div>
    </section>
  );
}
