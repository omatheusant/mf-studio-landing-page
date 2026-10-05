import { waLink, WA_MESSAGES } from "@/lib/site";
import { ArrowRight, CalendarCheck2, Users, Target } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* glow decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] sm:h-[720px] sm:w-[720px] rounded-full bg-brand-green/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <div className="flex justify-center">
          <Logo size="large" />
        </div>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-brand-green uppercase">
          Studio de treinamento personalizado
        </span>

        <h1 className="mt-6 font-display text-[15vw] leading-[0.88] sm:text-7xl md:text-8xl tracking-wide text-brand-white text-balance">
          Transformando vidas
          <br />
          através do <span className="text-brand-green">movimento</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-xl text-brand-gray/90 leading-relaxed text-balance">
          Muito mais do que uma academia. Um espaço pensado para quem busca
          saúde, qualidade de vida e resultados reais — com atendimento
          individualizado, turmas reduzidas e horário marcado.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink(WA_MESSAGES.avaliacao)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green text-brand-black text-base font-semibold px-7 py-3.5 w-full sm:w-auto hover:brightness-110 transition"
          >
            Agende sua avaliação física
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-brand-white text-base font-semibold px-7 py-3.5 w-full sm:w-auto hover:border-brand-green hover:text-brand-green transition"
          >
            Ver planos e horários
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          {[
            {
              icon: Target,
              title: "Treino individualizado",
              desc: "Programa único, feito para o seu objetivo e sua limitação.",
            },
            {
              icon: Users,
              title: "Turmas reduzidas",
              desc: "Poucos alunos por horário. Atenção real do professor.",
            },
            {
              icon: CalendarCheck2,
              title: "Horário agendado",
              desc: "Você treina no seu horário, sem imprevisto e sem fila.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <Icon className="text-brand-green" size={22} />
              <p className="mt-3 font-semibold text-brand-white">{title}</p>
              <p className="mt-1 text-sm text-brand-gray/75 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
