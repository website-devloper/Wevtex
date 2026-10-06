/**
 * Starts the site with the dashboard pointed at GitHub, so the one-time setup
 * that creates the GitHub App can run.
 *
 *   npm run cms:setup
 *
 * Exists because `KEYSTATIC_STORAGE=github npm run dev` only works in a bash
 * shell: PowerShell and cmd read it as a command name, so the variable never
 * reaches Next and the dashboard quietly starts in local mode, with no setup
 * screen in sight.
 *
 * Keystatic allows the App to be created in development only, which is why this
 * runs `next dev` rather than a build.
 */

import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

const port = process.argv[2] ?? "3000";

/**
 * Next refuses to start a second dev server for a project — on any port, not
 * just this one — and records the running one in .next/dev/lock. Without this
 * check the command appears to work, the override never takes effect, and you
 * land on the ordinary dashboard wondering where the setup went.
 */
function runningServer() {
  try {
    const lock = JSON.parse(readFileSync(".next/dev/lock", "utf8"));
    process.kill(lock.pid, 0); // throws when the process is gone
    return lock;
  } catch {
    return null;
  }
}

const running = runningServer();
if (running) {
  console.error(
    [
      "",
      `  A dev server for this project is already running on port ${running.port}.`,
      "",
      "  Next will not start a second one, on any port, so the setup would never",
      "  load and you would land on the ordinary dashboard instead.",
      "",
      "  Stop it first — Ctrl+C in its terminal, or:",
      `      taskkill /PID ${running.pid} /F`,
      "",
      "  then run  npm run cms:setup  again.",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

console.log(
  [
    "",
    "  Dashboard setup",
    "  ───────────────",
    `  1. Wait for the server, then open  http://localhost:${port}/keystatic`,
    "  2. Follow the prompt to create the GitHub App on your account.",
    "  3. GitHub sends you back and the four KEYSTATIC_* values are written",
    "     into .env automatically. Copy them into your host, then redeploy.",
    "",
    "  If the page asks you to sign in rather than to create an App, the App",
    "  already exists: sign in, and copy the values from .env to your host.",
    "",
  ].join("\n"),
);

const child = spawn("npx", ["next", "dev", "-p", port], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, KEYSTATIC_STORAGE: "github" },
});

child.on("exit", (code) => process.exit(code ?? 0));
