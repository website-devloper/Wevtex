import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wevtex | Start Your Web or App Project Today",
  description: "Get in touch with Wevtex, a Casablanca-based web & app agency serving Morocco and worldwide. Contact us for websites, online stores, SEO and automation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Wevtex | Start Your Web or App Project Today",
    description: "Casablanca-based web & app agency serving Morocco and worldwide. Contact us for websites, online stores, SEO and automation.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with US/EU clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we target worldwide clients specifically in the USA and UK. We work seamlessly across time zones with all contracts in English and invoicing through Stripe."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Wevtex offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our core services include Web Development, App Development, SEO and GEO targeting, Secure Hosting services, Technical IT services, and comprehensive IT support."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
