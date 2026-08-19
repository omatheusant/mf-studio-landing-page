import Logo from "./Logo";
import { NAV_LINKS, WA_MESSAGES, waLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-brand-gray/70 leading-relaxed">
              Muito mais do que uma academia. Um espaço pensado para quem
              busca saúde, qualidade de vida e resultados reais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <p className="text-sm font-semibold text-brand-white mb-3">
                Navegação
              </p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-gray/70 hover:text-brand-green transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-brand-white mb-3">
                Contato
              </p>
              <a
                href={waLink(WA_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-gray/70 hover:text-brand-green transition-colors"
              >
                <MessageCircle size={16} />
                (77) 98115-5641
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-gray/50">
            © {new Date().getFullYear()} MF Studio. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-brand-gray/50">
            Feito para transformar vidas através do movimento.
          </p>
        </div>
      </div>
    </footer>
  );
}
