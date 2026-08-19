import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

// Assim que você me enviar o arquivo da logo, salve-o em:
//   public/logo.png  (ou logo.svg)
// Este componente detecta o arquivo automaticamente e passa a exibi-lo
// no lugar do wordmark de texto abaixo — não precisa mexer em mais nada.
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
          width={160}
          height={48}
          className="h-9 w-auto object-contain"
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
