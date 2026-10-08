/**
 * The shape of a réalisation.
 *
 * The projects themselves live in content/fr/projects and content/en/projects,
 * written in the dashboard at /keystatic and read by lib/content.ts. Only the
 * type and the two URL helpers stay here, because the views and the pages both
 * depend on them.
 *
 * Screenshots live at /images/work/<slug>/<slug>.webp — Keystatic keeps an
 * entry's assets in a folder named after it, and the dashboard uploads into the
 * same folder.
 */

export type Project = {
  title: string;
  slug: string;
  clientUrl: string;
  liveUrl: string;
  category: string;
  year: number;
  featured: boolean;
  order: number;
  description: string;
  stack: string[];
  metricValue: string;
  metricLabel: string;
  screenshot: string;
  metaDescription: string;
};

/** The French page for a project. */
export const projectPath = (slug: string) => `/realisations/${slug}`;

/** The English page for a project; its slug is the English one. */
export const projectPathEn = (slug: string) => `/en/portfolio/${slug}`;
