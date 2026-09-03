import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Études de cas | Solutions entreprise Wevtex",
  description: "Découvrez comment Wevtex transforme les entreprises : sites performants, applications mobiles, SEO avancé et infogérance.",
  openGraph: {
    title: "Études de cas | Solutions entreprise Wevtex",
    description: "Découvrez comment Wevtex transforme les entreprises : sites performants, applications mobiles, SEO avancé et infogérance.",
    url: 'https://wevtex.com/case-study',
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
