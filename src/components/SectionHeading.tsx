export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="inline-block text-brand-green text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl tracking-wide leading-[0.95] text-balance ${
          light ? "text-brand-black" : "text-brand-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-brand-black/70" : "text-brand-gray/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
