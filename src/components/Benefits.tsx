import SectionHeading from "./SectionHeading";
import {
  Zap,
  Flame,
  BrainCircuit,
  Moon,
  Smile,
  TrendingUp,
  Scale,
  HeartHandshake,
  ShieldPlus,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  { icon: Zap, label: "Mais disposição" },
  { icon: Flame, label: "Mais motivação" },
  { icon: BrainCircuit, label: "Redução do estresse" },
  { icon: Moon, label: "Melhora do sono" },
  { icon: Smile, label: "Mais autoestima" },
  { icon: TrendingUp, label: "Aumento da força" },
  { icon: Scale, label: "Redução da gordura corporal" },
  { icon: HeartHandshake, label: "Mais qualidade de vida" },
  { icon: ShieldPlus, label: "Prevenção de doenças" },
  { icon: ShieldCheck, label: "Segurança durante os exercícios" },
];

export default function Benefits() {
  return (
    <section className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Benefícios"
          title="Treinar com a gente significa"
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-brand-black/40 px-4 py-6"
            >
              <span className="grid place-items-center h-12 w-12 rounded-full bg-brand-green/15 text-brand-green">
                <Icon size={22} />
              </span>
              <span className="text-sm font-medium text-brand-white/90 leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
