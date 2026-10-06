/**
 * Finishes a setup whose redirect was missed.
 *
 *   npm run cms:code -- <the code, or the whole localhost URL>
 *
 * GitHub creates the App first and only then redirects back with a one-time
 * code. If nothing is listening on that port — the window was closed, the
 * terminal stopped — the App exists but its credentials were never collected.
 * The code stays valid for about an hour, so it can be exchanged by hand.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { randomBytes } from "node:crypto";

const input = process.argv.slice(2).join(" ").trim();
if (!input) {
  console.error(
    [
      "",
      "  Paste the code, or the whole address you landed on:",
      "",
      "      npm run cms:code -- 128fdc1cba0ca60c1a…",
      '      npm run cms:code -- "http://localhost:7391/created?code=128fdc…"',
      "",
    ].join("\n"),
  );
  process.exit(1);
}

const code = input.includes("code=") ? new URL(input).searchParams.get("code") : input;
if (!code || !/^[a-zA-Z0-9]+$/.test(code)) {
  console.error(`\n  That does not look like a code: ${code ?? input}\n`);
  process.exit(1);
}

function writeEnv(values) {
  const existing = existsSync(".env") ? readFileSync(".env", "utf8") : "";
  let out = existing;
  for (const [key, value] of Object.entries(values)) {
    const line = `${key}=${value}`;
    out = new RegExp(`^${key}=.*$`, "m").test(out)
      ? out.replace(new RegExp(`^${key}=.*$`, "m"), line)
      : `${out.trimEnd()}\n${line}\n`;
  }
  if (!/^KEYSTATIC_SECRET=.+$/m.test(out)) {
    out = `${out.trimEnd()}\nKEYSTATIC_SECRET=${randomBytes(40).toString("hex")}\n`;
  }
  writeFileSync(".env", out.trimStart(), "utf8");
}

const res = await fetch(`https://api.github.com/app-manifests/${code}/conversions`, {
  method: "POST",
  headers: { Accept: "application/vnd.github+json", "User-Agent": "wevtex-cms-setup" },
});

if (!res.ok) {
  const body = await res.text();
  console.error(
    [
      "",
      `  GitHub refused the code (${res.status}).`,
      res.status === 404
        ? "  It has already been used, or the hour it is valid for has passed."
        : `  ${body.slice(0, 200)}`,
      "",
      "  The App itself still exists — GitHub creates it before redirecting. Take",
      "  its values from https://github.com/settings/apps instead:",
      "    · Client ID            shown on the App's page",
      "    · Client secret        press Generate a new client secret",
      "    · Slug                 the end of github.com/apps/<slug>",
      "",
      "  Then put them in .env and run  npm run cms:check",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

const app = await res.json();
writeEnv({
  KEYSTATIC_GITHUB_CLIENT_ID: app.client_id,
  KEYSTATIC_GITHUB_CLIENT_SECRET: app.client_secret,
  NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: app.slug,
});

console.log(
  [
    "",
    "  ✓ Written to .env",
    `      name  ${app.name}`,
    `      slug  ${app.slug}`,
    "",
    "  Two things left:",
    `    1. Install it on the repo:  https://github.com/apps/${app.slug}/installations/new`,
    "    2. Copy the four KEYSTATIC_* lines from .env into your host, then redeploy.",
    "",
    "  Check with:  npm run cms:check",
    "",
  ].join("\n"),
);
