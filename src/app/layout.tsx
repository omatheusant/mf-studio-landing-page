import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MF Studio | Treinamento Personalizado e Studio de Musculação",
  description:
    "Muito mais do que uma academia. Treinos individualizados, avaliação física completa e acompanhamento constante para você transformar sua saúde através do movimento.",
  openGraph: {
    title: "MF Studio | Transformando vidas através do movimento",
    description:
      "Atendimento personalizado, turmas reduzidas e horários agendados. Conheça o Studio MF.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  );
}
