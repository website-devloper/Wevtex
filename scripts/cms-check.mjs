/**
 * Says whether the dashboard is ready to save on the deployed site.
 *
 *   npm run cms:check
 *
 * Reads .env and .env.local the way Next does, and reports which of the four
 * values are present — so "is it set up?" has an answer that is not a guess.
 */

import { readFileSync, existsSync } from "node:fs";

const KEYS = [
  ["KEYSTATIC_GITHUB_CLIENT_ID", "GitHub App → Client ID"],
  ["KEYSTATIC_GITHUB_CLIENT_SECRET", "GitHub App → Generate a new client secret"],
  ["NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG", "the last part of github.com/apps/…"],
  ["KEYSTATIC_SECRET", "generated for you — already filled in"],
];

/** Later files do not override earlier ones, matching Next's precedence. */
function readEnv() {
  const values = {};
  for (const file of [".env.local", ".env"]) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
      if (!match) continue;
      const [, key, raw] = match;
      if (values[key] === undefined) values[key] = raw.trim().replace(/^["']|["']$/g, "");
    }
  }
  return values;
}

const env = readEnv();
const files = [".env", ".env.local"].filter((f) => existsSync(f));

console.log(`\n  Files read: ${files.length ? files.join(", ") : "none found"}\n`);

let missing = 0;
for (const [key, where] of KEYS) {
  const value = env[key];
  const ok = !!value;
  if (!ok) missing++;
  const shown = ok ? (key === "NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" ? value : `set (${value.length} chars)`) : "—";
  console.log(`  ${ok ? "✓" : "✗"} ${key.padEnd(38)} ${shown}`);
  if (!ok) console.log(`      ${where}`);
}

if (env.KEYSTATIC_SECRET && env.KEYSTATIC_SECRET.length < 32) {
  console.log("\n  KEYSTATIC_SECRET must be at least 32 characters.");
  missing++;
}

console.log(
  missing === 0
    ? "\n  Ready. Copy these four lines into your host's environment settings\n  and redeploy — the dashboard will then save from wevtex.com.\n"
    : `\n  ${missing} still missing. Open https://github.com/settings/apps — if your App\n  is listed, take the values from it; if nothing is listed, run npm run cms:setup.\n`,
);
