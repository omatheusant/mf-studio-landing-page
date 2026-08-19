const WORDS = ["saúde", "prevenção", "autoestima", "bem-estar", "qualidade de vida"];

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <span className="inline-block text-brand-green text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          Por que escolher o MF Studio
        </span>
        <h2 className="font-display text-3xl sm:text-5xl tracking-wide leading-tight text-brand-white text-balance">
          Exercício físico não é só estética e performance.
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-3">
          {WORDS.map((word) => (
            <span
              key={word}
              className="font-display text-2xl sm:text-4xl tracking-wide text-brand-green"
            >
              É {word}.
            </span>
          ))}
        </div>

        <p className="mt-10 text-base sm:text-lg text-brand-gray/85 leading-relaxed max-w-2xl mx-auto">
          Nosso objetivo é fazer parte da transformação de cada aluno.
        </p>
      </div>
    </section>
  );
}
