import SectionHeading from "./SectionHeading";
import { Dumbbell, GraduationCap, TrendingUp, Heart, Target } from "lucide-react";

const ITEMS = [
  { icon: Dumbbell, title: "Estrutura moderna" },
  { icon: GraduationCap, title: "Atendimento humanizado" },
  { icon: TrendingUp, title: "Evolução acompanhada" },
  { icon: Heart, title: "Ambiente acolhedor" },
  { icon: Target, title: "Treinos eficientes" },
];

export default function Highlights() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que você encontra aqui"
          title="Uma experiência pensada em cada detalhe"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ITEMS.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group text-center rounded-2xl border border-white/10 hover:border-brand-green/40 bg-white/[0.03] px-5 py-8 transition-colors"
            >
              <span className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-brand-green/15 text-brand-green group-hover:bg-brand-green group-hover:text-brand-black transition-colors">
                <Icon size={26} />
              </span>
              <p className="mt-4 font-semibold text-brand-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
