import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sites web, e-commerce, SEO & automatisation | Wevtex",
  description: "Les services Wevtex : création de sites sur mesure, boutiques en ligne, WordPress, ERP, automatisation, chatbots IA, SEO et design UX/UI — pour les entreprises au Maroc et à l'international.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Sites web, e-commerce, SEO & automatisation | Wevtex",
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
