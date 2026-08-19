export default function Commitment() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-brand-green/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <span className="font-display text-7xl sm:text-8xl text-brand-green/40 leading-none">
          &ldquo;
        </span>
        <p className="mt-2 font-display text-3xl sm:text-5xl leading-[1.05] tracking-wide text-brand-white text-balance">
          Mais do que entregar treinos, nosso compromisso é{" "}
          <span className="text-brand-green">cuidar das pessoas</span>.
        </p>
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-brand-gray/80 leading-relaxed">
          Cada aluno recebe atenção, orientação e incentivo para construir um
          estilo de vida ativo e saudável.
        </p>
      </div>
    </section>
  );
}
