import SectionHeading from "./SectionHeading";
import { Check } from "lucide-react";

const ITEMS = [
  "Atendimento personalizado",
  "Avaliação física completa",
  "Treinos individualizados",
  "Acompanhamento constante",
  "Ambiente organizado e exclusivo",
  "Horários agendados",
  "Número reduzido de alunos por horário",
  "Equipamentos modernos",
  "Profissionais qualificados",
  "Foco em saúde, desempenho e qualidade de vida",
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nosso diferencial"
          title="O que faz do MF Studio um lugar diferente"
          description="Não é sobre lotar a sala. É sobre cada aluno ter o espaço, o tempo e a atenção que precisa para evoluir de verdade."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-brand-black/40 px-5 py-4"
            >
              <span className="shrink-0 grid place-items-center h-7 w-7 rounded-full bg-brand-green text-brand-black">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-sm sm:text-base text-brand-white/90 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
