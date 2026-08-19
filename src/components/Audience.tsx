import SectionHeading from "./SectionHeading";
import {
  Flame,
  Dumbbell,
  Activity,
  TrendingUp,
  HeartPulse,
  PersonStanding,
  Hourglass,
  Smile,
} from "lucide-react";

const GOALS = [
  { icon: Flame, label: "Emagrecimento" },
  { icon: Dumbbell, label: "Hipertrofia" },
  { icon: Activity, label: "Condicionamento físico" },
  { icon: TrendingUp, label: "Ganho de força" },
  { icon: HeartPulse, label: "Saúde cardiovascular" },
  { icon: PersonStanding, label: "Melhora da postura" },
  { icon: Hourglass, label: "Longevidade" },
  { icon: Smile, label: "Qualidade de vida" },
];

export default function Audience() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Para quem é o Studio"
          title="Se o seu objetivo é um desses, você está no lugar certo"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {GOALS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-full border border-white/15 hover:border-brand-green/50 bg-white/[0.03] px-5 py-3 transition-colors"
            >
              <Icon size={18} className="text-brand-green shrink-0" />
              <span className="text-sm sm:text-base font-medium text-brand-white/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
