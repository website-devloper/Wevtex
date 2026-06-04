"use client";

import { motion } from "framer-motion";

/**
 * Staggered word reveal. Two modes:
 *  - "load":   plays once on mount (use for the hero).
 *  - "scroll": plays once when scrolled into view (use for sections).
 *
 * Implemented with whileInView/animate variants — no per-word useScroll/
 * MotionValue. That keeps client JS light (better INP) and avoids framer-motion's
 * "target ref is defined but not hydrated" error from scroll-linked refs.
 */

const DIM = 0.14;
const EASE = [0.16, 1, 0.3, 1] as const;

type Tag = "h1" | "h2" | "h3" | "p";

/** Split "line one\nline two" into [["line","one"],["line","two"]]. */
function splitLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim().split(/\s+/).filter(Boolean));
}

function Em({ word, emClassName, emStyle }: { word: string; emClassName?: string; emStyle?: React.CSSProperties }) {
  return <em className={emClassName} style={emStyle}>{word}</em>;
}

const wordVariants = {
  hidden: { opacity: DIM },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export function ScrollRevealText({
  text,
  em = [],
  emClassName,
  emStyle,
  as = "p",
  className,
  style,
  mode = "scroll",
}: {
  text: string;
  /** Words to render emphasized (matched ignoring punctuation). */
  em?: string[];
  emClassName?: string;
  emStyle?: React.CSSProperties;
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
  /** "scroll" plays when scrolled into view; "load" plays once on mount. */
  mode?: "scroll" | "load";
}) {
  const lines = splitLines(text);
  const isEm = (w: string) => em.includes(w.replace(/[.,—–'’&]/g, ""));
  const MotionTag = motion[as];

  const animProps =
    mode === "load"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.3 } };

  return (
    <MotionTag className={className} style={style} variants={containerVariants} {...animProps}>
      {lines.map((line, li) => (
        <span className="srt-line" key={li}>
          {line.map((w, wi) => (
            <span key={wi}>
              <motion.span className="srt-word" variants={wordVariants}>
                {isEm(w) ? <Em word={w} emClassName={emClassName} emStyle={emStyle} /> : w}
              </motion.span>
              {wi < line.length - 1 ? " " : null}
            </span>
          ))}
          {li < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </MotionTag>
  );
}
