import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Wevtex | Agence web & applications à Casablanca",
  description: "Découvrez Wevtex, agence web basée à Casablanca : sites rapides, boutiques en ligne, SEO et automatisation pour les entreprises au Maroc et à l'international.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos de Wevtex | Agence web & applications à Casablanca",
    description: "Une agence web et applications basée à Casablanca, au service de clients au Maroc et à l'international.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
