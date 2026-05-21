import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services | Web Dev, App Dev, SEO, Hosting & Support | Wevtex",
  description: "Explore Wevtex's comprehensive IT services including custom Web Development, App Development, Advanced SEO & GEO targeting, Secure Hosting, and Technical IT Support.",
  openGraph: {
    title: "IT Services | Web Dev, App Dev, SEO, Hosting & Support | Wevtex",
    description: "Explore Wevtex's comprehensive IT services including custom Web Development, App Development, Advanced SEO & GEO targeting, Secure Hosting, and Technical IT Support.",
    url: 'https://wevtex.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
