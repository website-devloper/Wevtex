/**
 * Copies the dashboard's four values from .env up to Vercel.
 *
 *   vercel login            (once, if the CLI says the token is invalid)
 *   npm run cms:push-env
 *   npm run cms:push-env -- --replace     (when a key is already set there)
 *
 * The web form refuses a key that already exists, which is easy to hit after a
 * first attempt and reads only as a red box. This says which keys are already
 * set and can replace them.
 */

import { readFileSync, existsSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";

const KEYS = [
  "KEYSTATIC_GITHUB_CLIENT_ID",
  "KEYSTATIC_GITHUB_CLIENT_SECRET",
  "KEYSTATIC_SECRET",
  "NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG",
];
const TARGETS = ["production", "preview"];
const replace = process.argv.includes("--replace");

function readEnv() {
  const values = {};
  for (const file of [".env.local", ".env"]) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
      if (m && values[m[1]] === undefined) values[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
  return values;
}

const vercel = (args, input) =>
  spawnSync("npx", ["vercel", ...args], { input, encoding: "utf8", shell: true });

const who = vercel(["whoami"]);
if (who.status !== 0) {
  console.error(
    [
      "",
      "  The Vercel CLI is not signed in on this machine.",
      "",
      "      vercel login",
      "",
      "  then run this again.",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

const env = readEnv();
const missing = KEYS.filter((k) => !env[k]);
if (missing.length) {
  console.error(`\n  Not in .env yet: ${missing.join(", ")}\n  Run  npm run cms:check  first.\n`);
  process.exit(1);
}

console.log(`\n  Signed in as ${who.stdout.trim()} — pushing to ${TARGETS.join(" and ")}\n`);

let failures = 0;
for (const key of KEYS) {
  for (const target of TARGETS) {
    if (replace) vercel(["env", "rm", key, target, "--yes"]);
    const res = vercel(["env", "add", key, target], env[key] + "\n");
    const already = /already exists/i.test(res.stderr ?? "");
    if (res.status === 0) {
      console.log(`  ✓ ${key} → ${target}`);
    } else if (already) {
      console.log(`  • ${key} → ${target} already set (run with --replace to overwrite)`);
    } else {
      failures++;
      console.log(`  ✗ ${key} → ${target}: ${(res.stderr ?? "").trim().split("\n")[0]}`);
    }
  }
}

console.log(
  failures
    ? "\n  Some failed — see above.\n"
    : "\n  Done. Redeploy for them to take effect:  vercel --prod\n",
);
