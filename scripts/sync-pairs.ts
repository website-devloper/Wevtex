/**
 * Writes lib/post-pairs.json from the content files: French slug -> English slug.
 *
 * Runs before every build (see the "prebuild" script). The pairing used to be a
 * map maintained by hand in lib/i18n-paths.ts, which meant a post added from the
 * dashboard had no English twin as far as the site was concerned, and the build
 * failed. Now the pairKey on each entry is the source of truth.
 *
 * The result is plain JSON so lib/i18n-paths.ts can be imported by client
 * components, which cannot read the filesystem.
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";

const reader = createReader(process.cwd(), config);

async function main() {
  const [fr, en] = await Promise.all([reader.collections.posts.all(), reader.collections.postsEn.all()]);

  const byKey = new Map<string, string>();
  for (const { slug, entry } of en) byKey.set((entry as any).pairKey, slug);

  const pairs: Record<string, string> = {};
  const missing: string[] = [];

  for (const { slug, entry } of fr) {
    const key = (entry as any).pairKey;
    const match = byKey.get(key);
    if (!match) {
      missing.push(`  "${slug}" (clé "${key}") has no English version`);
      continue;
    }
    pairs[slug] = match;
    byKey.delete(key);
  }
  for (const [key, slug] of byKey) missing.push(`  "${slug}" (clé "${key}") has no French version`);

  if (missing.length) {
    console.error("\nEvery post needs a version in both languages, paired by its translation key:\n");
    console.error(missing.join("\n"));
    console.error("\nOpen the post in the dashboard and set the same translation key on both.\n");
    process.exit(1);
  }

  const sorted = Object.fromEntries(Object.entries(pairs).sort(([a], [b]) => a.localeCompare(b)));
  const out = join(process.cwd(), "lib", "post-pairs.json");
  writeFileSync(out, JSON.stringify(sorted, null, 2) + "\n", "utf8");
  console.log(`lib/post-pairs.json — ${Object.keys(sorted).length} posts paired`);
}

main();
