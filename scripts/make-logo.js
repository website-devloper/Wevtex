/* One-off: crop the WEVTEX logo JPEG and key out its dark background,
   producing a tight transparent PNG for the navbar. */
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "images", "logo");
const SRC = path.join(dir, "logo 2.jpeg"); // white text on dark bg
const OUT = path.join(dir, "wevtex-logo.png");

(async () => {
  const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    out[j] = r;
    out[j + 1] = g;
    out[j + 2] = b;
    // Alpha from the brightest channel: dark bg -> transparent,
    // white text & orange X -> opaque (orange's R channel is high).
    const m = Math.max(r, g, b);
    let a = ((m - 38) / (95 - 38)) * 255;
    out[j + 3] = Math.max(0, Math.min(255, a));
  }

  const meta = await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(OUT);

  console.log(`wrote ${OUT} — ${meta.width}x${meta.height}`);
})();
