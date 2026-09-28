import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RealisationView } from "@/components/wevtex/RealisationView";
import { projectPathEn } from "@/lib/projects-data";
import { getProject, getProjects, getProjectSlugs } from "@/lib/content";
import { languageAlternates } from "@/lib/i18n-paths";
import { JsonLd, breadcrumb, creativeWorkSchema } from "@/components/seo/JsonLd";

/** /en/portfolio/[slug] — one delivered project, in English. */

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProjectSlugs("en")).map((slug) => ({ slug }));
}

/* The three projects after this one, in the portfolio's order. */
async function neighbours(slug: string) {
  const all = await getProjects("en");
  const idx = all.findIndex((x) => x.slug === slug);
  return [1, 2, 3].map((n) => all[(idx + n) % all.length]).filter((x) => x.slug !== slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug, "en");
  if (!p) return {};
  const title = `${p.title}: ${p.category} built in Morocco | WEVTEX`;
  const path = projectPathEn(p.slug);
  return {
    title: { absolute: title },
    description: p.metaDescription,
    keywords: [p.title, p.category.toLowerCase(), ...p.stack.map((s) => s.toLowerCase())],
    alternates: { canonical: path, languages: languageAlternates(`/realisations/${p.fr}`) },
    openGraph: {
      title,
      description: p.metaDescription,
      url: path,
      type: "article",
      locale: "en_US",
      images: [{ url: p.screenshot, alt: `${p.title}, ${p.category.toLowerCase()} built by Wevtex` }],
    },
  };
}

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProject(slug, "en");
  if (!p) notFound();
  const path = projectPathEn(p.slug);

  return (
    <>
      <JsonLd
        data={creativeWorkSchema({
          name: p.title,
          description: p.description,
          path,
          liveUrl: p.liveUrl,
          image: p.screenshot,
          year: p.year,
          keywords: p.stack,
          genre: p.category,
          locale: "en",
        })}
      />
      <JsonLd
        data={breadcrumb(
          [
            { name: "Portfolio", path: "/en/portfolio" },
            { name: p.title, path },
          ],
          "en",
        )}
      />
      <RealisationView project={p} neighbours={await neighbours(p.slug)} />
    </>
  );
}
