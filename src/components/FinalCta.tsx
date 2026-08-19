import { waLink, WA_MESSAGES } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function FinalCta() {
  return (
    <section id="contato" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-green/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-green/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-6xl tracking-wide leading-[0.95] text-brand-white text-balance">
          Sua transformação começa com um treino agendado
        </h2>
        <p className="mt-5 text-base sm:text-lg text-brand-gray/85 leading-relaxed">
          Fale agora com o MF Studio pelo WhatsApp e agende sua avaliação
          física. Vagas com horário limitado.
        </p>
        <a
          href={waLink(WA_MESSAGES.avaliacao)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green text-brand-black text-base sm:text-lg font-semibold px-8 py-4 hover:brightness-110 transition"
        >
          <MessageCircle size={22} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
