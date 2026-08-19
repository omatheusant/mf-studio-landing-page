import SectionHeading from "./SectionHeading";
import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

const POINTS = [
  {
    icon: HeartPulse,
    title: "Ciência do exercício",
    desc: "Treinos baseados em evidência, pensados para saúde e performance de verdade.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    desc: "Avaliação completa antes de começar. Nenhum treino igual ao outro.",
  },
  {
    icon: Sparkles,
    title: "Experiência exclusiva",
    desc: "Ambiente organizado, acolhedor e pensado para o seu progresso.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Sobre o MF Studio"
              title="Cada aluno é único. O seu treino também deve ser."
              align="left"
            />
            <p className="mt-6 text-base sm:text-lg text-brand-gray/85 leading-relaxed">
              Acreditamos que cada pessoa possui objetivos, limitações e
              necessidades diferentes. Por isso, no MF Studio o atendimento é
              individualizado, baseado na ciência do exercício físico e na
              promoção da saúde.
            </p>
            <p className="mt-4 text-base sm:text-lg text-brand-gray/85 leading-relaxed">
              Nossa missão é proporcionar uma experiência exclusiva, segura e
              motivadora para que você desenvolva hábitos saudáveis e alcance
              seus objetivos de forma sustentável.
            </p>
          </div>

          <div className="lg:col-span-6 grid gap-4">
            {POINTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-brand-green/15 text-brand-green">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-semibold text-brand-white text-lg">
                    {title}
                  </p>
                  <p className="mt-1 text-sm sm:text-base text-brand-gray/75 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
