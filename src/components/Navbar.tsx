"use client";

import { useEffect, useState, type ReactNode } from "react";
import { NAV_LINKS, WA_MESSAGES, waLink } from "@/lib/site";
import { Menu, X } from "lucide-react";

export default function Navbar({ logo }: { logo: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#topo" className="shrink-0">
          {logo}
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-gray">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink(WA_MESSAGES.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-brand-green text-brand-black text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition"
        >
          Agende sua avaliação
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          className="lg:hidden text-brand-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-brand-black border-t border-white/10 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-brand-gray hover:text-brand-green text-base font-medium border-b border-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(WA_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-green text-brand-black text-sm font-semibold px-5 py-3 hover:brightness-110 transition"
          >
            Agende sua avaliação
          </a>
        </div>
      )}
    </header>
  );
}
