import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { notFound } from "next/navigation";
import { RealisationView } from "@/components/wevtex/RealisationView";
import { projectPath } from "@/lib/projects-data";
import { getProject, getProjects, getProjectSlugs } from "@/lib/content";
import { JsonLd, breadcrumb, creativeWorkSchema } from "@/components/seo/JsonLd";

/**
 * /realisations/[slug] — one delivered project.
 *
 * Built only from projects-data: the description, stack, result and live URL
 * the owner already stands behind. No invented brief, no invented quote.
 */

export const dynamicParams = false;

/* The three projects after this one, in the portfolio's order. */
async function neighbours(slug: string) {
  const all = await getProjects("fr");
  const idx = all.findIndex((x) => x.slug === slug);
  return [1, 2, 3].map((n) => all[(idx + n) % all.length]).filter((x) => x.slug !== slug);
}

export async function generateStaticParams() {
  return (await getProjectSlugs("fr")).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug, "fr");
  if (!p) return {};
  const title = `${p.title} : ${p.category} réalisé au Maroc | WEVTEX`;
  const path = projectPath(p.slug);
  return {
    title: { absolute: title },
    description: p.metaDescription,
    keywords: [p.title, p.category.toLowerCase(), ...p.stack.map((s) => s.toLowerCase())],
    alternates: { canonical: path, languages: languageAlternates(path) },
    openGraph: {
      title,
      description: p.metaDescription,
      url: path,
      type: "article",
      images: [{ url: p.screenshot, alt: `${p.title}, ${p.category.toLowerCase()} réalisé par Wevtex` }],
    },
  };
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await getProject(slug, "fr");
  if (!p) notFound();
  const path = projectPath(p.slug);

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
        })}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Réalisations", path: "/portfolio" },
          { name: p.title, path },
        ])}
      />
      <RealisationView project={p} neighbours={await neighbours(p.slug)} />
    </>
  );
}
