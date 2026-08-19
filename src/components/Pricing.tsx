"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { PLANS, SCHEDULES, waLink, WA_MESSAGES } from "@/lib/site";
import { Check, Clock, UserRound } from "lucide-react";

type Schedule = "premium" | "alternativo";

export default function Pricing() {
  const [schedule, setSchedule] = useState<Schedule>("premium");

  return (
    <section id="planos" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha a frequência ideal para você"
          description="Quanto mais frequente o treino, mais rápido e consistente é o resultado. Escolha seu horário e comece."
        />

        {/* Toggle de horário */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="inline-flex rounded-full border border-white/15 bg-brand-black/60 p-1">
            <button
              type="button"
              onClick={() => setSchedule("premium")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                schedule === "premium"
                  ? "bg-brand-green text-brand-black"
                  : "text-brand-gray hover:text-brand-white"
              }`}
            >
              Horários Premium
            </button>
            <button
              type="button"
              onClick={() => setSchedule("alternativo")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                schedule === "alternativo"
                  ? "bg-brand-green text-brand-black"
                  : "text-brand-gray hover:text-brand-white"
              }`}
            >
              Horários Alternativos
            </button>
          </div>

          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-brand-gray/70 text-center max-w-2xl">
            <Clock size={15} className="text-brand-green shrink-0" />
            {SCHEDULES[schedule].join(" · ")}
          </p>
        </div>

        {/* Cards de plano */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan) => {
            const price =
              schedule === "premium" ? plan.premiumPrice : plan.altPrice;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-brand-green text-brand-black ring-2 ring-brand-green"
                    : "border border-white/10 bg-brand-black/40 text-brand-white"
                }`}
              >
                {plan.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-black text-brand-green text-xs font-bold px-3 py-1 tracking-wide whitespace-nowrap">
                    {plan.tag.toUpperCase()}
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-wide">
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-medium ${
                    plan.highlight ? "text-brand-black/70" : "text-brand-gray/70"
                  }`}
                >
                  {plan.frequency}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-lg font-semibold">R$</span>
                  <span className="font-display text-5xl tracking-wide">
                    {price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.highlight ? "text-brand-black/70" : "text-brand-gray/70"
                    }`}
                  >
                    /mês
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    {plan.frequency}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    Avaliação física completa
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    Acompanhamento constante
                  </li>
                </ul>

                <a
                  href={waLink(WA_MESSAGES.planos)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center rounded-full text-sm font-semibold px-5 py-3 transition ${
                    plan.highlight
                      ? "bg-brand-black text-brand-white hover:brightness-125"
                      : "bg-brand-green text-brand-black hover:brightness-110"
                  }`}
                >
                  Quero esse plano
                </a>
              </div>
            );
          })}
        </div>

        {/* Personal Trainer */}
        <div className="mt-6 rounded-2xl border border-brand-green/30 bg-brand-green/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-green/15 text-brand-green shrink-0">
              <UserRound size={22} />
            </span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-brand-white">
                Personal Trainer — Private Class
              </h3>
              <p className="mt-1 text-sm sm:text-base text-brand-gray/80">
                Horários exclusivos e atendimento 100% individual. Dias e
                horários por agendamento.
              </p>
            </div>
          </div>
          <a
            href={waLink(WA_MESSAGES.personal)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-brand-green text-brand-black text-sm font-semibold px-6 py-3 hover:brightness-110 transition whitespace-nowrap"
          >
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
