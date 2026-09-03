import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations & études de cas | Agence web Wevtex",
  description: "Découvrez nos réalisations : boutiques en ligne, plateformes SaaS, systèmes de réservation et sites vitrines qui convertissent, au Maroc et à l'international.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Réalisations & études de cas | Agence web Wevtex",
    description: "Nos réalisations : boutiques en ligne, SaaS, systèmes de réservation et sites vitrines, au Maroc et à l'international.",
    url: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
