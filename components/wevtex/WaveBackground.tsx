"use client";

import { motion } from "framer-motion";

/**
 * Layered SVG waves that drift horizontally at different speeds — a calm,
 * oceanic motion background. Each tile is seamless (start/end y match), so
 * a two-tile strip animated by -50% loops without a visible seam.
 */

// One seamless wave tile, 1200 wide. Starts and ends at y=70.
const WAVE_D =
  "M0,70 C150,120 300,20 480,70 C660,120 810,20 990,70 C1110,105 1170,55 1200,70 " +
  "L1200,320 L0,320 Z";

type Layer = {
  fill: string;
  duration: number;
  direction: 1 | -1;
  bottom: string;
  height: string;
  blur: number;
};

const LAYERS: Layer[] = [
  { fill: "rgba(255,170,120,0.040)", duration: 38, direction: -1, bottom: "0%", height: "62%", blur: 6 },
  { fill: "rgba(240,99,31,0.055)", duration: 27, direction: 1, bottom: "0%", height: "50%", blur: 5 },
  { fill: "rgba(255,140,82,0.075)", duration: 19, direction: -1, bottom: "0%", height: "38%", blur: 4 },
];

function WaveLayer({ fill, duration, direction, bottom, height, blur }: Layer) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom,
        height,
        filter: `blur(${blur}px)`,
      }}
    >
      <motion.div
        style={{ display: "flex", width: "200%", height: "100%" }}
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            style={{ width: "50%", height: "100%", display: "block" }}
          >
            <path d={WAVE_D} fill={fill} />
          </svg>
        ))}
      </motion.div>
    </div>
  );
}

export function WaveBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {LAYERS.map((l, i) => (
        <WaveLayer key={i} {...l} />
      ))}
    </div>
  );
}
