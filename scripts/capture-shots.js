/* Full-page captures for the hover-scroll frames on the homepage.
 *
 *   npm i -D playwright && npx playwright install chromium
 *   node scripts/capture-shots.js
 *
 * Produces public/images/work/<slug>.webp — one tall capture per project,
 * 1440px wide, which .wk-shot scrolls from top to bottom on hover.
 *
 * Height is capped at CROP_RATIO viewports. An uncapped capture of a long
 * landing page can run 12000px, and the hover then crawls through it at a
 * speed nobody reads; four screens is enough to show the page has depth.
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
const CROP_RATIO = 4;
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
         have actually rendered — otherwise the capture is full of blanks
         where the real site shows content. Then back to the top, because a
         sticky header photographs itself mid-page otherwise. */
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 250));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(600);

      const png = await page.screenshot({ fullPage: true, type: "png" });

      const img = sharp(png);
      const { height } = await img.metadata();
      const maxH = VIEWPORT_H * CROP_RATIO;
      const out = path.join(OUT_DIR, `${slug}.webp`);

      await (height > maxH
        ? img.extract({ left: 0, top: 0, width: WIDTH, height: maxH })
        : img
      )
        .webp({ quality: QUALITY })
        .toFile(out);

      const kb = Math.round(fs.statSync(out).size / 1024);
      console.log(`${slug}: ${WIDTH}x${Math.min(height, maxH)} — ${kb}KB`);
    } catch (err) {
      console.error(`${slug}: failed — ${err.message}`);
    }
  }

  await browser.close();
}

main();
