import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { servicePath } from '@/lib/site-links';
import { SERVICE_SLUGS } from '@/lib/services-data';
import { INDUSTRY_SLUGS } from '@/lib/industries-data';
import { CITY_SLUGS } from '@/lib/cities-data';
import { PROJECT_SLUGS, projectPath } from '@/lib/projects-data';
import { postPath } from '@/lib/blog-data';
import { getPosts } from '@/lib/content';
import { localize } from '@/lib/i18n-paths';

type Page = {
  /** The French path; the English one is derived from it (lib/i18n-paths.ts). */
  path: string;
  lastModified: Date;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const POSTS = await getPosts('fr');
  const now = new Date();

  const staticPages: Page[] = [
    { path: '/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { path: '/tarifs', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { path: '/agence-developpement-ia-maroc', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { path: '/portfolio', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { path: '/faq', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { path: '/confidentialite', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { path: '/mentions-legales', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: Page[] = SERVICE_SLUGS.map((slug) => ({
    path: servicePath(slug),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryPages: Page[] = INDUSTRY_SLUGS.map((slug) => ({
    path: `/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  /* City landing pages sit at the root so the URL is the keyword. They target
     the strongest local terms, so they rank just under the homepage. */
  const cityPages: Page[] = CITY_SLUGS.map((slug) => ({
    path: `/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const projectPages: Page[] = PROJECT_SLUGS.map((slug) => ({
    path: projectPath(slug),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  /* Posts carry their own dates, so lastModified is the real one rather
     than the build time. */
  const postPages: Page[] = POSTS.map((p) => ({
    path: postPath(p.slug),
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  /* Every page is listed in both languages, and each entry names its twin
     (hreflang fr / en / x-default), so Google reads the language pairs from
     the sitemap as well as from the pages themselves. */
  const url = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;
  return [...staticPages, ...servicePages, ...industryPages, ...cityPages, ...projectPages, ...postPages].flatMap((p) => {
    const fr = url(p.path);
    const en = url(localize(p.path, 'en'));
    const alternates = { languages: { fr, en, 'x-default': fr } };
    const base = { lastModified: p.lastModified, changeFrequency: p.changeFrequency, priority: p.priority, alternates };
    return [
      { url: fr, ...base },
      { url: en, ...base },
    ];
  });
}
