import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Services web & digitaux au Maroc | WEVTEX" },
  description: "Création de sites, boutiques en ligne, applications, SEO, publicité, logiciels et chatbots WhatsApp au Maroc. Prix clairs en DH.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services web & digitaux au Maroc | WEVTEX",
    description: "Création de sites sur mesure, boutiques en ligne, SEO, automatisation et design pour les entreprises au Maroc et à l'international.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
