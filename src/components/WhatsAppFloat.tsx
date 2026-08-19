import { WA_MESSAGES, waLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 grid place-items-center h-14 w-14 rounded-full bg-brand-green text-brand-black shadow-lg shadow-black/40 hover:brightness-110 hover:scale-105 transition"
    >
      <MessageCircle size={26} fill="currentColor" className="text-brand-black" />
    </a>
  );
}
