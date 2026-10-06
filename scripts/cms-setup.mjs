/**
 * Creates the GitHub App the dashboard signs in with, and writes its three
 * values into .env.
 *
 *   npm run cms:setup
 *
 * Runs on its own: no dev server, no environment variable, no mode switching.
 * Keystatic's own setup screen only appears when the dashboard is started in
 * github mode, and Next refuses to run a second dev server for a project, so
 * reaching it meant stopping whatever was already running and restarting with
 * a variable set — three things to get right before anything could happen.
 *
 * This submits the same App manifest Keystatic submits and exchanges the code
 * the same way (POST /app-manifests/{code}/conversions), so the App that comes
 * out is the one the dashboard expects.
 */

import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";

const REPO = { owner: "website-devloper", name: "Wevtex" };
const SITE = (process.argv.find((a) => a.startsWith("--site="))?.slice(7) ?? "https://wevtex.com").replace(/\/$/, "");
const PORT = Number(process.argv.find((a) => a.startsWith("--port="))?.slice(7) ?? 7391);
const LOCAL = `http://localhost:${PORT}`;

/* The App must be able to sign people in from every address the dashboard is
   served at: this helper, the dev server, and the live site. */
const manifest = {
  name: `${REPO.owner} Keystatic`,
  url: `${SITE}/keystatic`,
  public: true,
  redirect_url: `${LOCAL}/created`,
  callback_urls: [
    `${SITE}/api/keystatic/github/oauth/callback`,
    "http://localhost:3000/api/keystatic/github/oauth/callback",
    "http://127.0.0.1:3000/api/keystatic/github/oauth/callback",
  ],
  request_oauth_on_install: true,
  default_permissions: { contents: "write", metadata: "read", pull_requests: "read" },
};

const page = (title, body) => `<!doctype html>
<html lang="fr"><meta charset="utf-8"><title>${title}</title>
<style>
  body { font: 16px/1.6 system-ui, sans-serif; margin: 0; display: grid; place-items: center;
         min-height: 100vh; background: #1c2a08; color: #fff; }
  .card { background: #22330c; border: 1px solid rgba(198,242,78,.2); border-radius: 12px;
          padding: 32px 36px; max-width: 560px; }
  h1 { font-size: 22px; margin: 0 0 12px; }
  code { background: rgba(0,0,0,.3); padding: 2px 6px; border-radius: 4px; font-size: 14px; }
  button { font: inherit; font-weight: 700; background: #c6f24e; color: #1c2a08; border: 0;
           border-radius: 8px; padding: 12px 22px; cursor: pointer; }
  .muted { opacity: .75; font-size: 14px; }
</style>
<div class="card">${body}</div>`;

/** Appends the values to .env without disturbing what is already in it. */
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

const server = createServer(async (req, res) => {
  const url = new URL(req.url, LOCAL);

  if (url.pathname === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(
      page(
        "Créer l'application GitHub",
        `<h1>Créer l'application GitHub</h1>
         <p>GitHub va vous demander de confirmer. L'application est créée sur votre compte,
            pour le dépôt <code>${REPO.owner}/${REPO.name}</code>.</p>
         <form method="post" action="https://github.com/settings/apps/new">
           <input type="hidden" name="manifest" value='${JSON.stringify(manifest).replace(/'/g, "&apos;")}'>
           <button type="submit">Continuer vers GitHub</button>
         </form>
         <p class="muted">Pour une organisation, ouvrez plutôt
            <code>github.com/organizations/VOTRE-ORG/settings/apps/new</code>.</p>`,
      ),
    );
  }

  if (url.pathname === "/created") {
    const code = url.searchParams.get("code");
    if (!code) {
      res.writeHead(400, { "content-type": "text/html; charset=utf-8" });
      return res.end(page("Erreur", "<h1>Code manquant</h1><p>Relancez <code>npm run cms:setup</code>.</p>"));
    }

    const response = await fetch(`https://api.github.com/app-manifests/${code}/conversions`, {
      method: "POST",
      headers: { Accept: "application/vnd.github+json", "User-Agent": "wevtex-cms-setup" },
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`\n  GitHub refused the exchange (${response.status}): ${detail.slice(0, 200)}\n`);
      res.writeHead(500, { "content-type": "text/html; charset=utf-8" });
      return res.end(page("Erreur", "<h1>GitHub a refusé</h1><p>Voir le terminal.</p>"));
    }

    const app = await response.json();
    writeEnv({
      KEYSTATIC_GITHUB_CLIENT_ID: app.client_id,
      KEYSTATIC_GITHUB_CLIENT_SECRET: app.client_secret,
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: app.slug,
    });

    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(
      page(
        "C'est fait",
        `<h1>Application créée</h1>
         <p>Les valeurs sont écrites dans <code>.env</code>. Il reste une étape&nbsp;:
            installez l'application sur le dépôt.</p>
         <p><a style="color:#c6f24e" href="https://github.com/apps/${app.slug}/installations/new" target="_blank">
            Installer sur ${REPO.owner}/${REPO.name}</a></p>
         <p class="muted">Ensuite, copiez les quatre lignes de <code>.env</code> dans les
            réglages de votre hébergeur et redéployez.</p>`,
      ),
    );

    console.log(
      [
        "",
        "  ✓ App created and written to .env",
        `      name  ${app.name}`,
        `      slug  ${app.slug}`,
        "",
        "  Two things left:",
        `    1. Install it on the repo:  https://github.com/apps/${app.slug}/installations/new`,
        "    2. Copy the four KEYSTATIC_* lines from .env into your host, then redeploy.",
        "",
        "  Check anytime with:  npm run cms:check",
        "",
      ].join("\n"),
    );
    setTimeout(() => server.close(() => process.exit(0)), 500);
    return;
  }

  res.writeHead(404).end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(
    [
      "",
      "  Dashboard setup — creating the GitHub App",
      "  ─────────────────────────────────────────",
      `  Opening ${LOCAL} …`,
      "  If the browser does not open, paste that address yourself.",
      "",
      "  Nothing else needs to be running: this does not use the dev server.",
      "",
    ].join("\n"),
  );
  spawn(process.platform === "win32" ? "start" : "open", [LOCAL], { shell: true, stdio: "ignore" });
});
