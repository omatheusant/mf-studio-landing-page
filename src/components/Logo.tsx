import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const FULL_LOGO_CANDIDATES = ["logo.svg", "logo.png", "logo.webp"];
const ICON_LOGO_CANDIDATES = [
  "logo-icon.svg",
  "logo-icon.png",
  "logo-icon.webp",
];

function findFile(candidates: string[]) {
  for (const file of candidates) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) {
      return `/${file}`;
    }
  }
  return null;
}

export default function Logo({
  className = "",
  size = "default",
  variant = "full",
}: {
  className?: string;
  size?: "default" | "large";
  variant?: "full" | "icon";
}) {
  const logoSrc =
    variant === "icon"
      ? findFile(ICON_LOGO_CANDIDATES) ?? findFile(FULL_LOGO_CANDIDATES)
      : findFile(FULL_LOGO_CANDIDATES);

  if (logoSrc) {
    const isLarge = size === "large";
    const isIcon = variant === "icon" && logoSrc.includes("logo-icon");
    const ratio = isIcon ? 948 / 582 : 1079 / 832;
    const height = isLarge ? 216 : 108;
    return (
      <span className={`inline-flex items-center ${className}`}>
        <Image
          src={logoSrc}
          alt="MF Studio"
          width={Math.round(height * ratio)}
          height={height}
          className={
            isLarge
              ? "h-32 sm:h-40 md:h-48 w-auto object-contain"
              : "h-12 w-auto object-contain"
          }
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={`font-display tracking-wide leading-none inline-flex items-baseline gap-1.5 ${className}`}
    >
      <span className="text-2xl sm:text-3xl text-brand-white">MF</span>
      <span className="text-2xl sm:text-3xl text-brand-green">STUDIO</span>
    </span>
  );
}
