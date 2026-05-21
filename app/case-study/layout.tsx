import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Wevtex Enterprise Solutions",
  description: "Read how Wevtex transforms businesses worldwide with high-performance web development, mobile apps, advanced SEO, and managed IT support.",
  openGraph: {
    title: "Case Studies | Wevtex Enterprise Solutions",
    description: "Read how Wevtex transforms businesses worldwide with high-performance web development, mobile apps, advanced SEO, and managed IT support.",
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
