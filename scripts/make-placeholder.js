/* One-off: generate a warm placeholder image for the Manifesto photo card.
   Replace public/images/manifesto-studio.jpg with a real photo (same name)
   and no code changes are needed. */
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..", "public", "images", "manifesto-studio.jpg");
const W = 720;
const H = 900;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#241913"/>
      <stop offset="0.55" stop-color="#7c3613"/>
      <stop offset="1" stop-color="#f0631f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.3" cy="0.25" r="0.7">
      <stop offset="0" stop-color="#ffb27a" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#ffb27a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
</svg>`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 86 })
  .toFile(OUT)
  .then((info) => console.log(`wrote ${OUT} — ${info.width}x${info.height}`));
