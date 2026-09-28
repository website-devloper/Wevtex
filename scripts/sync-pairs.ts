/**
 * Writes lib/post-pairs.json and lib/project-pairs.json from the content files:
 * French slug -> English slug, for the blog and for the réalisations.
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

  writePairs("post-pairs.json", pairs, "posts");

  // Réalisations: each English entry names its French twin outright, so the
  // pairing is read from that rather than from a key typed on both sides.
  const [frProjects, enProjects] = await Promise.all([
    reader.collections.projects.all(),
    reader.collections.projectsEn.all(),
  ]);

  const projectPairs: Record<string, string> = {};
  const frSlugs = new Set(frProjects.map((p) => p.slug));
  const projectProblems: string[] = [];

  for (const { slug, entry } of enProjects) {
    const twin = (entry as any).frenchProject;
    if (!twin || !frSlugs.has(twin)) {
      projectProblems.push(`  the English project "${slug}" points at "${twin}", which does not exist`);
      continue;
    }
    projectPairs[twin] = slug;
  }
  for (const slug of frSlugs) {
    if (!projectPairs[slug]) projectProblems.push(`  "${slug}" has no English version`);
  }

  if (projectProblems.length) {
    console.error("\nEvery réalisation needs a version in both languages:\n");
    console.error(projectProblems.join("\n"));
    console.error("\nOpen the English one in the dashboard and pick its French version.\n");
    process.exit(1);
  }

  writePairs("project-pairs.json", projectPairs, "projects");
}

function writePairs(file: string, pairs: Record<string, string>, label: string) {
  const sorted = Object.fromEntries(Object.entries(pairs).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(join(process.cwd(), "lib", file), JSON.stringify(sorted, null, 2) + "\n", "utf8");
  console.log(`lib/${file} — ${Object.keys(sorted).length} ${label} paired`);
}

main();
