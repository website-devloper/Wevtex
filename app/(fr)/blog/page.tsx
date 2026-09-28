import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { BlogIndexView } from "@/components/wevtex/BlogIndexView";
import { postPath } from "@/lib/blog-data";
import { getPosts } from "@/lib/content";
import { toCard } from "@/lib/blog-utils";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { abs, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Blog | Conseils Site Web, SEO & IA au Maroc | WEVTEX" },
  description:
    "Prix d'un site au Maroc, choix d'une agence, SEO, chatbots WhatsApp : des réponses claires, chiffrées, écrites par un studio de Casablanca.",
  keywords: ["blog marketing digital", "conseils site web", "conseils SEO", "blog Wevtex"],
  alternates: { canonical: "/blog", languages: languageAlternates("/blog") },
  openGraph: {
    title: "Blog | Conseils Site Web, SEO & IA au Maroc | WEVTEX",
    description:
      "Prix, délais, SEO, automatisation : des réponses claires et chiffrées pour les entreprises marocaines.",
    url: "/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  // Written in the dashboard, read from content/ at build time.
  const posts = await getPosts("fr");
  /* The index as a Blog entity listing its posts, so crawlers see the set
     rather than only the individual articles. */
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${abs("/blog")}#blog`,
    name: "Blog Wevtex",
    url: abs("/blog"),
    inLanguage: "fr",
    publisher: { "@id": `${SITE_URL}#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: abs(postPath(p.slug)),
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={breadcrumb([{ name: "Blog", path: "/blog" }])} />
      <BlogIndexView posts={posts.map(toCard)} />
    </>
  );
}
