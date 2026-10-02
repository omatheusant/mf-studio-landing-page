import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const LOGO_CANDIDATES = ["logo.svg", "logo.png", "logo.webp"];

function findLogoFile() {
  for (const file of LOGO_CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) {
      return `/${file}`;
    }
  }
  return null;
}

export default function Logo({ className = "" }: { className?: string }) {
  const logoSrc = findLogoFile();

  if (logoSrc) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <Image
          src={logoSrc}
          alt="MF Studio"
          width={140}
          height={108}
          className="h-12 w-auto object-contain"
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
