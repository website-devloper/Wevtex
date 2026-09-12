import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { servicePath } from '@/lib/site-links';
import { SERVICE_SLUGS } from '@/lib/services-data';
import { INDUSTRY_SLUGS } from '@/lib/industries-data';
import { CITY_SLUGS } from '@/lib/cities-data';
import { PROJECT_SLUGS, projectPath } from '@/lib/projects-data';
import { POSTS, postPath } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/agence-developpement-ia-maroc`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}${servicePath(slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  /* City landing pages sit at the root so the URL is the keyword. They target
     the strongest local terms, so they rank just under the homepage. */
  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECT_SLUGS.map((slug) => ({
    url: `${baseUrl}${projectPath(slug)}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  /* Posts carry their own dates, so lastModified is the real one rather
     than the build time. */
  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${baseUrl}${postPath(p.slug)}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...cityPages, ...projectPages, ...postPages];
}
