import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "À propos | Agence web à Casablanca | WEVTEX" },
  description: "Wevtex est un studio web et IT à Casablanca : sites, boutiques en ligne, applications et automatisation. Découvrez notre façon de travailler.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos | Agence web à Casablanca | WEVTEX",
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
