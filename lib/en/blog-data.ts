/**
 * The English blog: ten posts at /en/blog/<slug>, one per French post, with
 * the same structure (lib/blog-data.ts) and the same writing rules. Prices
 * are {{prix:…}} tokens formatted the English way ("MAD 6,000").
 */

import type { Post } from "../blog-data";
import { fillPricesDeep } from "../pricing";
import { POST_SLUGS_EN } from "../i18n-paths";
import { POSTS_A_EN } from "./blog/posts-a";
import { POSTS_B_EN } from "./blog/posts-b";
import { POSTS_C_EN } from "./blog/posts-c";

export const POSTS_EN: Post[] = fillPricesDeep([...POSTS_A_EN, ...POSTS_B_EN, ...POSTS_C_EN], "en");

export const POST_SLUGS_LIST_EN = POSTS_EN.map((p) => p.slug);

export const getPostEn = (slug: string) => POSTS_EN.find((p) => p.slug === slug);

/** Newest first — the order the index page renders. */
export const POSTS_ORDERED_EN = [...POSTS_EN].sort((a, b) =>
  (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt),
);

/* The English posts must be exactly the ones lib/i18n-paths.ts pairs with a
   French post, related posts must exist, and no two posts may target the same
   keyword. Checked at module load. */
const expected = new Set(Object.values(POST_SLUGS_EN));
for (const p of POSTS_EN) {
  if (!expected.has(p.slug)) throw new Error(`English post ${p.slug} has no French pair in lib/i18n-paths.ts.`);
  for (const r of p.relatedPosts) {
    if (!expected.has(r)) throw new Error(`English post ${p.slug} links to an unknown post ${r}.`);
  }
}
if (POSTS_EN.length !== expected.size) throw new Error("Some French posts have no English version.");
const seen = new Set<string>();
for (const p of POSTS_EN) {
  if (seen.has(p.keyword)) throw new Error(`Two English posts target the same keyword: "${p.keyword}".`);
  seen.add(p.keyword);
}
