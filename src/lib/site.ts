// Dados centrais do site MF Studio.
// Ajuste aqui número de WhatsApp, textos rápidos e tabela de planos.

export const WHATSAPP_NUMBER = "5577981155641"; // (77) 98115-5641

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  default:
    "Olá! Vim pelo site e quero saber mais sobre o MF Studio.",
  avaliacao:
    "Olá! Quero agendar minha avaliação física no MF Studio.",
  planos:
    "Olá! Vi os planos do MF Studio e quero saber qual combina comigo.",
  personal:
    "Olá! Tenho interesse no Personal Trainer / Private Class do MF Studio.",
};

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export type Plan = {
  name: string;
  frequency: string;
  premiumPrice: string;
  altPrice: string;
  highlight?: boolean;
  tag?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Bronze",
    frequency: "2 treinos por semana",
    premiumPrice: "85",
    altPrice: "65",
  },
  {
    name: "Prata",
    frequency: "3 treinos por semana",
    premiumPrice: "95",
    altPrice: "75",
  },
  {
    name: "Ouro",
    frequency: "5 treinos por semana",
    premiumPrice: "120",
    altPrice: "100",
    highlight: true,
    tag: "Mais escolhido",
  },
  {
    name: "Diamante",
    frequency: "6 treinos por semana",
    premiumPrice: "150",
    altPrice: "120",
  },
];

export const SCHEDULES = {
  premium: ["05:00", "06:00", "07:00", "17:00", "18:00", "19:00", "20:00"],
  alternativo: [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ],
};
