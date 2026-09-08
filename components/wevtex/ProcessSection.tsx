"use client";

import { useEffect, useRef } from "react";
import { ScrollRevealText } from "./ScrollRevealText";

/**
 * The method section: a sticky panel showing the active step beside a numbered
 * list that drives it on scroll and hover.
 *
 * Steps and headings are props so the service detail pages can pass their own
 * process rather than duplicating this layout. Service steps carry `checks`
 * (deliverables) instead of prose, so the panel falls back to those.
 */

export type ProcessStep = {
  n: string;
  h: string;
  /** Prose for the active-step panel. */
  p?: string;
  /** Deliverables, as the service pages store them. Used when `p` is absent. */
  checks?: string[];
  d: string;
};

const DEFAULT_STEPS: ProcessStep[] = [
  { n: "01", h: "Cadrage", p: "Un appel pour comprendre votre activité, vos clients et vos objectifs. Vous repartez avec un plan clair avant que quoi que ce soit ne commence.", d: "1–2 jours" },
  { n: "02", h: "Design", p: "Nous concevons votre site et l'affinons avec vous — ce que vous validez est exactement ce qui sera construit.", d: "3–5 jours" },
  { n: "03", h: "Développement", p: "Un site rapide, sécurisé et pensé pour le mobile, avec un point chaque semaine pour que vous sachiez toujours où en est le projet.", d: "1–3 semaines" },
  { n: "04", h: "Mise en ligne", p: "Nous publions le site, testons tout, connectons les statistiques et vous le remettons — avec un accompagnement qui continue après le lancement.", d: "1–2 jours" },
];

type Props = {
  eyebrow?: string;
  title?: string;
  titleEm?: string[];
  subtitle?: string;
  steps?: ProcessStep[];
  /** `ink` gives the section a dark ground, for pages that need a dark anchor. */
  tone?: "cream" | "ink";
};

/** The panel shows prose when a step has it, otherwise its deliverables. */
function proseFor(st: ProcessStep): string {
  if (st.p) return st.p;
  if (st.checks && st.checks.length) return st.checks.join(" · ");
  return "";
}

export function ProcessSection({
  eyebrow = "Notre méthode",
  title = "Du premier appel\nà la mise en ligne.",
  titleEm = ["mise", "en", "ligne."],
  subtitle,
  steps = DEFAULT_STEPS,
  tone = "cream",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>(".process-step");
    const processH = root.querySelector<HTMLElement>("#processH");
    const processP = root.querySelector<HTMLElement>("#processP");
    const processProgress = root.querySelector<HTMLElement>("#processProgress");

    const setActive = (i: number) => {
      nodes.forEach((s) => s.classList.remove("active"));
      if (nodes[i]) nodes[i].classList.add("active");
      if (steps[i] && processH && processP) {
        processH.textContent = steps[i].h;
        processP.textContent = proseFor(steps[i]);
      }
      if (processProgress && nodes[i]) {
        const cur = nodes[i];
        processProgress.style.height = cur.offsetTop + cur.offsetHeight + "px";
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(parseInt((e.target as HTMLElement).dataset.i || "0", 10));
        });
      },
      { threshold: 0.55 }
    );

    const cleanups: Array<() => void> = [];
    nodes.forEach((s) => {
      io.observe(s);
      const onEnter = () => setActive(parseInt(s.dataset.i || "0", 10));
      s.addEventListener("mouseenter", onEnter);
      cleanups.push(() => s.removeEventListener("mouseenter", onEnter));
    });

    return () => {
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [steps]);

  return (
    <section ref={ref} id="process" className={tone === "ink" ? "process process-ink" : "theme-cream process"}>
      <div className="container">
        <div className="process-head reveal">
          <div>
            <span className="eyebrow line-eyebrow">{eyebrow}</span>
            <ScrollRevealText
              as="h2"
              className="h-section"
              style={{ marginTop: 14 }}
              text={title}
              em={titleEm}
              emClassName="hl-line"
            />
            {subtitle && (
              <p className="ic-sub" style={{ maxWidth: "52ch" }}>{subtitle}</p>
            )}
          </div>
        </div>

        <div className="process-wrap">
          <div className="process-sticky reveal">
            <div className="process-preview">
              <div className="preview-kicker">Étape en cours</div>
              <h3 id="processH">{steps[0].h}</h3>
              <p id="processP">{proseFor(steps[0])}</p>
            </div>
          </div>

          <div className="process-steps">
            <div className="process-progress"><div className="process-progress-fill" id="processProgress"></div></div>
            {steps.map((s, i) => (
              <div className={i === 0 ? "process-step active reveal" : "process-step reveal"} data-i={i} data-delay={i || undefined} key={s.n}>
                <div className="num">{s.n}</div>
                <div>
                  <h4>{s.h}</h4>
                  <p>{proseFor(s)}</p>
                </div>
                <div className="duration">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
