import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Wevtex Web Agency",
  description: "View our selected work — online stores, SaaS platforms, booking systems and high-converting marketing sites for businesses in Morocco and worldwide.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio & Case Studies | Wevtex Web Agency",
    description: "Selected work: online stores, SaaS, booking systems and marketing sites for clients in Morocco and worldwide.",
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
