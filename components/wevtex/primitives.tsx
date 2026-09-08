import type { ReactNode, CSSProperties } from "react";

/**
 * Shared design primitives.
 *
 * Distinct sections come from composing these differently, not from rewriting
 * a section shell each time. Everything visual lives here so the whole site
 * stays consistent: tone (background value), spacing rhythm, the eyebrow, the
 * heading emphasis devices, and the card faces.
 */

/* ------------------------------------------------------------------ Section */

export type Tone = "light" | "paper" | "ink";
export type Spacing = "tight" | "normal" | "loose";

/**
 * Owns a section's background value and vertical rhythm. `tone` is how the
 * page composes light against dark without duplicating markup — roughly a
 * third of the page should be `ink`, and no more than two `light`/`paper`
 * sections should run before the next dark anchor.
 */
export function Section({
  tone = "light",
  spacing = "normal",
  className = "",
  id,
  style,
  children,
}: {
  tone?: Tone;
  spacing?: Spacing;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section id={id} style={style} className={`sec sec-${tone} sec-sp-${spacing} ${className}`.trim()}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ Eyebrow */

/** Mono uppercase label with the small lime tick. */
export function Eyebrow({
  children,
  align = "left",
  className = "",
}: {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <span className={`eyebrow ${align === "center" ? "line-eyebrow-center" : "line-eyebrow"} ${className}`.trim()}>
      {children}
    </span>
  );
}

/* ------------------------------------------------- Emphasis devices + heading */

/** The lime highlight sitting behind a word. */
export function Marker({ children }: { children: ReactNode }) {
  return <em className="hl-line">{children}</em>;
}

/** A hand-drawn underline. Used sparingly, so emphasis is not one device everywhere. */
export function HandUnderline({ children }: { children: ReactNode }) {
  return (
    <em className="hl-hand">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden focusable="false">
        <path d="M2 8.5C34 4.2 78 2.6 118 4.1c26 1 54 3.4 80 5.6" />
      </svg>
    </em>
  );
}

/** Ink weight against a lighter run of text, no colour or highlight. */
export function WeightEm({ children }: { children: ReactNode }) {
  return <em className="hl-weight">{children}</em>;
}

/**
 * `device` decides how the emphasised word is treated, so headings down a page
 * are not all marked the same way.
 */
export function SectionHeading({
  as: Tag = "h2",
  device = "marker",
  className = "",
  style,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  device?: "marker" | "weight" | "underline" | "none";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Tag className={`h-section h-em-${device} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ Surface */

/**
 * The card primitive, in three faces:
 *   bordered — a visible rule, for grids that should read as one system
 *   filled   — fill plus a soft shadow and no border, for quotes
 *   ghost    — no container at all, where a section should breathe
 */
export function Surface({
  variant = "bordered",
  as: Tag = "div",
  className = "",
  style,
  children,
  ...rest
}: {
  variant?: "bordered" | "filled" | "ghost";
  as?: "div" | "article" | "li";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & Record<string, unknown>) {
  return (
    <Tag className={`surface surface-${variant} ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------- InkBackdrop */

/**
 * Depth for the ink sections. A flat #101112 fill reads as generated, so both
 * variants share a static film grain over the base, and add one quiet layer:
 *
 *   spotlight — a soft radial pool of light behind a centred statement
 *   data      — no glow; vertical hairlines that make a strip read as engineered
 *
 * Static by design: nothing here animates, so reduced-motion needs no special
 * case.
 */
export function InkBackdrop({ variant = "spotlight" }: { variant?: "spotlight" | "data" }) {
  return (
    <>
      <span className="ink-grain" aria-hidden />
      {variant === "spotlight" && <span className="ink-spotlight" aria-hidden />}
    </>
  );
}
