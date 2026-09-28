/**
 * Reads every entry under content/ through Keystatic's own reader and reports
 * what came back.
 *
 *   npx tsx scripts/check-content.ts
 *
 * Run it after a bulk import or a hand edit: the reader is the contract the
 * site renders from, so anything it cannot parse would fail the build.
 */

import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";

const reader = createReader(process.cwd(), config);

async function main() {
  let problems = 0;

  for (const name of ["posts", "postsEn"] as const) {
    const all = await reader.collections[name].all();
    console.log(`\n${name}: ${all.length} entries`);

    const keywords = new Map<string, string>();
    const pairs = new Map<string, string>();

    for (const { slug, entry } of all) {
      const e = entry as any;

      const seen = keywords.get(e.seo.keyword);
      if (seen) {
        console.log(`  ✗ ${slug} targets the same keyword as ${seen}: "${e.seo.keyword}"`);
        problems++;
      }
      keywords.set(e.seo.keyword, slug);
      pairs.set(e.pairKey, slug);

      try {
        const node = await e.content();
        const tags: string[] = [];
        const walk = (n: any) => {
          if (n?.$$mdtype === "Tag" && n.name) tags.push(n.name);
          (n?.children ?? []).forEach(walk);
        };
        walk(node);
        const custom = tags.filter((t) => ["note", "table", "links"].includes(t));
        if (custom.length) console.log(`  · ${slug}: ${custom.join(", ")}`);
      } catch (err) {
        console.log(`  ✗ ${slug}: content failed to parse — ${(err as Error).message}`);
        problems++;
      }
    }
  }

  // Every French post must have an English twin, and the other way round.
  const fr = await reader.collections.posts.all();
  const en = await reader.collections.postsEn.all();
  const frKeys = new Set(fr.map((e) => (e.entry as any).pairKey));
  const enKeys = new Set(en.map((e) => (e.entry as any).pairKey));
  for (const k of frKeys) if (!enKeys.has(k)) { console.log(`\n  ✗ no English version for "${k}"`); problems++; }
  for (const k of enKeys) if (!frKeys.has(k)) { console.log(`\n  ✗ no French version for "${k}"`); problems++; }

  // Réalisations: every English entry must point at a French one that exists.
  const frProjects = await reader.collections.projects.all();
  const enProjects = await reader.collections.projectsEn.all();
  const frProjectSlugs = new Set(frProjects.map((p) => p.slug));
  console.log(`
projects: ${frProjects.length} FR, ${enProjects.length} EN`);
  for (const { slug, entry } of enProjects) {
    const twin = (entry as any).frenchProject;
    if (!frProjectSlugs.has(twin)) {
      console.log(`  ✗ ${slug} points at "${twin}", which does not exist`);
      problems++;
    }
  }

  for (const name of ["reviews", "clients"] as const) {
    const all = await reader.collections[name].all();
    console.log(`\n${name}: ${all.length} entries`);
  }

  console.log(problems === 0 ? "\nAll good.\n" : `\n${problems} problem(s).\n`);
  if (problems) process.exitCode = 1;
}

main();
