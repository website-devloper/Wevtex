/* Site captures for the project frames on the homepage.
 *
 *   npm i -D playwright && npx playwright install chromium
 *   node scripts/capture-shots.js
 *
 * Produces public/images/work/<slug>.webp — one 1440x900 capture per project,
 * which .wk-shot displays at the frame's own 16/10 ratio, so the shot fits
 * exactly with nothing cropped.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

/* slug must match the `slug` on the matching WORK entry in HomeClient.tsx —
   that is what names the file the frame looks for. */
const SITES = [
  // { slug: "luxora", url: "https://luxora.store" },
];

const WIDTH = 1440;
const VIEWPORT_H = 900;
const QUALITY = 78;
const OUT_DIR = path.join(__dirname, "..", "public", "images", "work");

async function main() {
  if (SITES.length === 0) {
    console.error("Nothing to capture: add { slug, url } entries to SITES first.");
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    console.error("playwright is missing. Run:\n  npm i -D playwright && npx playwright install chromium");
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: VIEWPORT_H },
    deviceScaleFactor: 1,
  });

  for (const { slug, url } of SITES) {
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

      /* Walk the page once so lazy-loaded images and scroll-reveal sections
         above the fold have actually rendered — a site that animates its hero
         in on load otherwise photographs blank. Then back to the top. */
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 250));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(600);

      /* Viewport only: the frame shows the site above the fold, so a
         full-page capture would just be cropped back down to this. */
      const png = await page.screenshot({ fullPage: false, type: "png" });

      const out = path.join(OUT_DIR, `${slug}.webp`);
      await sharp(png).webp({ quality: QUALITY }).toFile(out);

      const kb = Math.round(fs.statSync(out).size / 1024);
      console.log(`${slug}: ${WIDTH}x${VIEWPORT_H} — ${kb}KB`);
    } catch (err) {
      console.error(`${slug}: failed — ${err.message}`);
    }
  }

  await browser.close();
}

main();
