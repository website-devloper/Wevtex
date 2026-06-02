"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../../app/ThemeContext";
import { ScrollRevealText } from "./ScrollRevealText";

/* Process steps */
const STEPS = [
  { n: "01", h: "Discover", p: "A quick call to understand your business, your customers and your goals. You get a clear plan before anything starts.", d: "1–2 days" },
  { n: "02", h: "Design", p: "We design your site in the browser and refine it with you — so what you approve is exactly what gets built.", d: "3–5 days" },
  { n: "03", h: "Build", p: "We build a fast, secure, mobile-ready site, with updates every week so you always know where things stand.", d: "1–3 weeks" },
  { n: "04", h: "Launch", p: "We put your site live, test everything, connect analytics and hand it over — with support continuing after launch.", d: "1–2 days" },
];

export function ProcessSection() {
  const { isDark } = useTheme();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const steps = root.querySelectorAll<HTMLElement>(".process-step");
    const processH = root.querySelector<HTMLElement>("#processH");
    const processP = root.querySelector<HTMLElement>("#processP");
    const processProgress = root.querySelector<HTMLElement>("#processProgress");

    const setActive = (i: number) => {
      steps.forEach((s) => s.classList.remove("active"));
      if (steps[i]) steps[i].classList.add("active");
      if (STEPS[i] && processH && processP) {
        processH.textContent = STEPS[i].h;
        processP.textContent = STEPS[i].p;
      }
      if (processProgress && steps[i]) {
        const cur = steps[i];
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
    steps.forEach((s) => {
      io.observe(s);
      const onEnter = () => setActive(parseInt(s.dataset.i || "0", 10));
      s.addEventListener("mouseenter", onEnter);
      cleanups.push(() => s.removeEventListener("mouseenter", onEnter));
    });

    return () => {
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <section ref={ref} className={`${isDark ? "theme-dark" : "theme-cream"} process`}>
      <div className="container">
        <div className="process-head reveal">
          <div>
            <span className="eyebrow">How it works</span>
            <ScrollRevealText
              as="h2"
              className="h-section"
              style={{ marginTop: 24 }}
              text={"From first call\nto live website."}
              em={["live", "website"]}
              emClassName="serif"
              emStyle={{ color: "var(--accent-hot)" }}
            />
          </div>
        </div>

        <div className="process-wrap">
          <div className="process-sticky reveal">
            <div className="process-preview">
              <div className="preview-kicker">Active step</div>
              <h3 id="processH">{STEPS[0].h}</h3>
              <p id="processP">{STEPS[0].p}</p>
            </div>
          </div>

          <div className="process-steps">
            <div className="process-progress"><div className="process-progress-fill" id="processProgress"></div></div>
            {STEPS.map((s, i) => (
              <div className={i === 0 ? "process-step active reveal" : "process-step reveal"} data-i={i} data-delay={i || undefined} key={i}>
                <div className="num">{s.n}</div>
                <div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
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
