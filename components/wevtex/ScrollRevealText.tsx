"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Opacity of a word before it is "revealed". */
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

/* ---- scroll-linked word: opacity follows scroll progress ---- */
function ScrollWord({
  word,
  em,
  emClassName,
  emStyle,
  progress,
  range,
}: {
  word: string;
  em: boolean;
  emClassName?: string;
  emStyle?: React.CSSProperties;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [DIM, 1]);
  return (
    <motion.span className="srt-word" style={{ opacity }}>
      {em ? <Em word={word} emClassName={emClassName} emStyle={emStyle} /> : word}
    </motion.span>
  );
}

/* ---- load-triggered word: brightens once when scrolled into view ---- */
const loadWordVariants = {
  hidden: { opacity: DIM },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const loadContainerVariants = {
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
  /** Class applied to emphasized words. */
  emClassName?: string;
  /** Style applied to emphasized words. */
  emStyle?: React.CSSProperties;
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
  /** "scroll" ties brightness to scroll position; "load" plays once on enter. */
  mode?: "scroll" | "load";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const lines = splitLines(text);
  const total = lines.reduce((n, l) => n + l.length, 0);
  const isEm = (w: string) => em.includes(w.replace(/[.,—–'’&]/g, ""));

  if (mode === "load") {
    const MotionTag = motion[as];
    return (
      <MotionTag
        className={className}
        variants={loadContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {lines.map((line, li) => (
          <span className="srt-line" key={li}>
            {line.map((w, wi) => (
              <span key={wi}>
                <motion.span className="srt-word" variants={loadWordVariants}>
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

  const Tag = as;
  let idx = -1;
  return (
    <Tag className={className} style={style}>
      <span ref={ref} style={{ display: "inline" }}>
        {lines.map((line, li) => (
          <span className="srt-line" key={li}>
            {line.map((w, wi) => {
              idx++;
              return (
                <span key={wi}>
                  <ScrollWord
                    word={w}
                    em={isEm(w)}
                    emClassName={emClassName}
                    emStyle={emStyle}
                    progress={scrollYProgress}
                    range={[idx / total, (idx + 1) / total]}
                  />
                  {wi < line.length - 1 ? " " : null}
                </span>
              );
            })}
            {li < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}
