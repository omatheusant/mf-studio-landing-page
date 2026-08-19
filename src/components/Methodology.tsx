import SectionHeading from "./SectionHeading";
import { Search, NotebookPen, Radar, LineChart } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Avaliar",
    desc: "Entender o aluno antes de iniciar qualquer treinamento.",
  },
  {
    icon: NotebookPen,
    title: "Planejar",
    desc: "Montar um programa individualizado, sob medida para você.",
  },
  {
    icon: Radar,
    title: "Acompanhar",
    desc: "Corrigir, motivar e ajustar constantemente, treino a treino.",
  },
  {
    icon: LineChart,
    title: "Evoluir",
    desc: "Resultados consistentes através da progressão adequada.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nossa metodologia"
          title="Quatro pilares. Um método comprovado."
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-white/10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative text-center lg:text-left">
                <div className="mx-auto lg:mx-0 relative z-10 grid place-items-center h-14 w-14 rounded-full bg-brand-green text-brand-black font-display text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <Icon className="mx-auto lg:mx-0 mt-5 text-brand-green" size={24} />
                <h3 className="mt-3 font-display text-2xl tracking-wide text-brand-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-brand-gray/75 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
