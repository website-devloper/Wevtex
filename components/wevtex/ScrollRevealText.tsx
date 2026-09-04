/**
 * Staggered word reveal. Two modes:
 *  - "load":   plays once on mount (use for the hero).
 *  - "scroll": plays once when scrolled into view (use for sections).
 *
 * Driven entirely by CSS keyframes plus a per-word animation-delay. "load"
 * needs no JS at all, so the hero heading is legible even if the bundle never
 * arrives; "scroll" waits for the `.in` class that the existing
 * IntersectionObserver (useReveal / HomeClient) already adds.
 */

const STAGGER = 0.08; // seconds between words
const DELAY = 0.1;    // seconds before the first word

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
  const Tag = as;

  const cls = [className, "srt", mode === "load" ? "srt-load" : "srt-scroll"]
    .filter(Boolean)
    .join(" ");

  // Stagger runs across the whole heading, not per line.
  let wordIndex = 0;

  return (
    <Tag className={cls} style={style}>
      {lines.map((line, li) => (
        <span className="srt-line" key={li}>
          {line.map((w, wi) => {
            const delay = DELAY + wordIndex * STAGGER;
            wordIndex += 1;
            return (
              <span key={wi}>
                <span className="srt-word" style={{ animationDelay: `${delay.toFixed(2)}s` }}>
                  {isEm(w) ? <Em word={w} emClassName={emClassName} emStyle={emStyle} /> : w}
                </span>
                {wi < line.length - 1 ? " " : null}
              </span>
            );
          })}
          {li < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
