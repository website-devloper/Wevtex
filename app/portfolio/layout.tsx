import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Wevtex Global IT Agency",
  description: "View our selected work. We build scalable SaaS platforms, headless e-commerce, native mobile apps, and high-converting marketing sites for clients in the US, UK, and worldwide.",
  openGraph: {
    title: "Portfolio & Case Studies | Wevtex Global IT Agency",
    description: "View our selected work. We build scalable SaaS platforms, headless e-commerce, native mobile apps, and high-converting marketing sites for clients in the US, UK, and worldwide.",
    url: 'https://wevtex.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
