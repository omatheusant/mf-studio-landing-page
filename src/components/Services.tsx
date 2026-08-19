import SectionHeading from "./SectionHeading";
import { UserRound, ClipboardList, UsersRound, Check } from "lucide-react";

const AVALIACAO_ITEMS = [
  "Anamnese",
  "Composição corporal",
  "Testes físicos",
  "Mobilidade",
  "Flexibilidade",
  "Força",
  "Definição de metas",
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Como trabalhamos com você"
          description="Três frentes, um só propósito: fazer você evoluir com segurança e consistência."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Treinamento Personalizado */}
          <div className="rounded-2xl border border-white/10 bg-brand-black/40 p-7 sm:p-8 flex flex-col">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-green/15 text-brand-green">
              <UserRound size={22} />
            </span>
            <h3 className="mt-6 font-display text-2xl sm:text-3xl tracking-wide text-brand-white">
              Treinamento Personalizado
            </h3>
            <p className="mt-3 text-brand-gray/80 leading-relaxed">
              Treinos desenvolvidos exclusivamente para cada aluno,
              respeitando seus objetivos e limitações. Você treina sozinho
              com o professor, no seu ritmo.
            </p>
          </div>

          {/* Avaliação Física */}
          <div className="rounded-2xl border border-brand-green/30 bg-brand-green/[0.06] p-7 sm:p-8 flex flex-col relative">
            <span className="absolute -top-3 left-7 rounded-full bg-brand-green text-brand-black text-xs font-bold px-3 py-1 tracking-wide">
              O PONTO DE PARTIDA
            </span>
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-green/15 text-brand-green">
              <ClipboardList size={22} />
            </span>
            <h3 className="mt-6 font-display text-2xl sm:text-3xl tracking-wide text-brand-white">
              Avaliação Física
            </h3>
            <p className="mt-3 text-brand-gray/80 leading-relaxed">
              Todo aluno passa por uma avaliação completa antes de treinar.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {AVALIACAO_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-brand-white/90"
                >
                  <Check size={14} className="text-brand-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Grupos Pequenos */}
          <div className="rounded-2xl border border-white/10 bg-brand-black/40 p-7 sm:p-8 flex flex-col">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-green/15 text-brand-green">
              <UsersRound size={22} />
            </span>
            <h3 className="mt-6 font-display text-2xl sm:text-3xl tracking-wide text-brand-white">
              Grupos Pequenos
            </h3>
            <p className="mt-3 text-brand-gray/80 leading-relaxed">
              Turmas reduzidas que oferecem maior atenção do professor e
              excelente custo-benefício. Motivação em grupo, cuidado
              individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
