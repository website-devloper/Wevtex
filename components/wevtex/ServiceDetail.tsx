"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import "../../app/service-detail.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import type { Service } from "../../lib/services-data";

const WHATSAPP_URL = "https://wa.me/212687633774";
const I = { sw: 1.6, lc: "round" as const, lj: "round" as const };

/* ---- small reusable icons (generic, keyed by position so any service works) ---- */
const svg = (children: React.ReactNode, vb = "0 0 24 24") => (
  <svg viewBox={vb} fill="none" stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj}>{children}</svg>
);
const ICON = {
  edit: svg(<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
  shield: svg(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  chart: svg(<><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></>),
  code: svg(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  cart: svg(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></>),
  target: svg(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>),
  layers: svg(<><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>),
  spark: svg(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /></>),
  cube: svg(<><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>),
  wrench: svg(<><path d="M14 7a4 4 0 0 1-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5z" /></>),
  pen: svg(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" /><circle cx="11" cy="11" r="2" /></>),
  search: svg(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  rocket: svg(<><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15l-3-3a16 16 0 0 1 9-9 6 6 0 0 1-9 9z" /><path d="M9 12H4s.5-3 2-4 5 0 5 0" /></>),
  headset: svg(<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 0 1-3 3h-2" /></>),
  building: svg(<><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" /></>),
  blog: svg(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></>),
  store: svg(<><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9v11h18V9" /><path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0M9 20v-6h6v6" /></>),
};
const OUTCOME = [ICON.edit, ICON.shield, ICON.chart];
const FEATURE = [ICON.target, ICON.code, ICON.edit, ICON.cart, ICON.layers, ICON.shield, ICON.spark, ICON.cube];
const TECH = [ICON.cube, ICON.wrench, ICON.cart, ICON.pen];
const PROCESS = [ICON.search, ICON.pen, ICON.code, ICON.rocket, ICON.headset];
const SECTOR = [ICON.building, ICON.blog, ICON.store, ICON.cart];

const Check = () => (
  <span className="sd-check" aria-hidden>
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
  </span>
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span className={`sd-eyebrow${light ? " light" : ""}`}><span className="sd-eb-dot" /><span className="sd-eb-line" />{children}</span>
);

function Heading({ as = "h2", text, em = [], className = "" }: { as?: "h1" | "h2"; text: string; em?: string[]; className?: string }) {
  const Tag = as;
  const isEm = (w: string) => em.includes(w.replace(/[.,—–'’&]/g, ""));
  return (
    <Tag className={`sd-h ${className}`}>
      {text.split("\n").map((line, li, lines) => (
        <span className="sd-line" key={li}>
          {line.split(" ").map((w, wi, arr) => (
            <span key={wi}>{isEm(w) ? <em className="sd-em">{w}</em> : w}{wi < arr.length - 1 ? " " : ""}</span>
          ))}
          {li < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}

const ArrowR = ({ s = 16 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export function ServiceDetail({ service }: { service: Service }) {
  const { isDark } = useTheme();
  useReveal();

  return (
    <div className={`wevtex sd ${isDark ? "mode-dark" : "mode-light"}`}>
      <SiteHeader current="services" />

      {/* 1 — HERO */}
      <section className="sd-hero">
        <span className="sd-motif sd-motif-tr" aria-hidden></span>
        <div className="container">
          <div className="sd-hero-inner reveal">
            <div className="sd-eyebrow-wrap center"><Eyebrow>{service.eyebrow}</Eyebrow></div>
            <Heading as="h1" text={service.h1} em={service.h1Em} />
            <p className="sd-sub">{service.intro}</p>
            <div className="sd-hero-btns">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">Get a free quote <ArrowR /></a>
              <a href="/portfolio" className="btn btn-outline">See our work <ArrowR /></a>
            </div>
            <div className="sd-tags">
              {service.tags.map((t) => (
                <span className="sd-tag" key={t}><span className="sd-tag-dot"></span>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 — DEMO */}
      {service.demo && (
        <section className="sd-section sd-demo">
          <span className="sd-motif sd-motif-bl" aria-hidden></span>
          <div className="container">
            <div className="sd-head center reveal">
              <div className="sd-eyebrow-wrap center"><Eyebrow>Demo</Eyebrow></div>
              <Heading text={service.demo.title} em={pickEm(service.demo.title)} />
              {service.demo.subtitle && <p className="sd-sub">{service.demo.subtitle}</p>}
            </div>
            <div className="sd-window reveal">
              <div className="sd-win-bar">
                <span className="sd-tl r"></span><span className="sd-tl y"></span><span className="sd-tl g"></span>
                <span className="sd-win-url">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                  yourbrand.com
                </span>
              </div>
              <div className="sd-win-body">
                <div className="sd-win-nav">
                  <span className="sd-win-logo"><span className="sd-win-mark"></span>ATLAS</span>
                  <span className="sd-win-menu"><a className="on">Home</a><a>About</a><a>Services</a><a>Projects</a><a>Blog</a><a>Contact</a></span>
                  <span className="sd-win-getintouch">Get in touch</span>
                </div>
                <div className="sd-win-hero">
                  <div className="sd-win-copy">
                    <h3 className="sd-win-h">We design digital experiences that <em>drive growth</em></h3>
                    <p className="sd-win-sub">Strategic design, clean code, and performance focused on what matters most.</p>
                    <div className="sd-win-acts"><span className="sd-win-b1">Explore our work</span><span className="sd-win-b2">Learn more about us</span></div>
                  </div>
                  <div className="sd-win-img"></div>
                </div>
                <div className="sd-win-feats">
                  {([["Strategy First", "We start with your goals and build a plan that works.", ICON.spark], ["Pixel Perfect", "Thoughtful design that elevates your brand.", ICON.pen], ["Built to Perform", "Fast, secure, and optimized for search engines.", ICON.rocket]] as const).map(([t, d, ic], fi) => (
                    <div className="sd-win-feat" key={fi}><span className="sd-win-fic">{ic}</span><div className="sd-win-ft"><b>{t}</b><span>{d}</span></div></div>
                  ))}
                </div>
              </div>
            </div>
            {service.demo.caption && <p className="sd-caption reveal">{service.demo.caption}</p>}
          </div>
        </section>
      )}

      {/* 3 — OUTCOMES */}
      <section className="sd-section sd-outcomes">
        <div className="container">
          <div className="sd-head center reveal">
            <div className="sd-eyebrow-wrap center"><Eyebrow>Why it matters</Eyebrow></div>
            <Heading text="The outcomes you get" em={["outcomes"]} />
            <p className="sd-sub">Real results that move your business forward — not just a nicer-looking website.</p>
          </div>
          <div className="sd-grid-3 reveal">
            {service.outcomes.map((o, i) => (
              <div className={`sd-card sd-outcome${i === 1 ? " accent" : ""}`} key={i}>
                <div className="sd-num">{String(i + 1).padStart(2, "0")}<span className="sd-num-line"></span></div>
                <h4>{o.h}</h4>
                <p>{o.p}</p>
                <span className="sd-card-icon">{OUTCOME[i % OUTCOME.length]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5 — FEATURE SECTIONS */}
      {service.featureSections?.map((fs, si) => {
        const numbered = si === 1;
        return (
          <section className={`sd-section sd-features${numbered ? " numbered" : ""}`} key={si}>
            <span className="sd-motif sd-motif-tr soft" aria-hidden></span>
            <div className="container">
              <div className="sd-head reveal">
                <div className="sd-eyebrow-wrap"><Eyebrow>{fs.eyebrow}</Eyebrow></div>
                <Heading text={fs.title} em={fs.titleEm || []} />
                {fs.subtitle && <p className="sd-sub">{fs.subtitle}</p>}
              </div>
              <div className="sd-grid-2 reveal">
                {fs.cards.map((c, ci) => (
                  <div className={`sd-card ${numbered ? "sd-mcard" : "sd-fcard"}`} key={ci}>
                    {numbered ? (
                      <>
                        <div className="sd-num lg">{String(ci + 1).padStart(2, "0")}</div>
                        <div className="sd-card-body">
                          <div className="sd-fhead"><span className="sd-plain-icon">{FEATURE[(si * 4 + ci) % FEATURE.length]}</span><h4>{c.title}</h4></div>
                          <span className="sd-divider"></span>
                          <ul className="sd-checks">{c.checks.map((ch, chi) => (<li key={chi}><Check />{ch}</li>))}</ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="sd-icon-circle">{FEATURE[(si * 4 + ci) % FEATURE.length]}</span>
                        <div className="sd-card-body">
                          <h4>{c.title}</h4>
                          <p className="sd-card-desc">{c.desc}</p>
                          <ul className="sd-checks">{c.checks.map((ch, chi) => (<li key={chi}><Check />{ch}</li>))}</ul>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* 6 — TECH STACK */}
      {service.tech && (
        <section className="sd-section sd-tech">
          <div className="container">
            <div className="sd-head reveal">
              <div className="sd-eyebrow-wrap"><Eyebrow>Technology</Eyebrow></div>
              <Heading text={service.tech.title} em={service.tech.titleEm || []} />
              {service.tech.subtitle && <p className="sd-sub">{service.tech.subtitle}</p>}
            </div>
            <div className="sd-grid-4 reveal">
              {service.tech.groups.map((g, i) => (
                <div className="sd-card sd-techcard" key={i}>
                  <div className="sd-techcard-top">
                    <div className="sd-num sm">{String(i + 1).padStart(2, "0")}</div>
                    <span className="sd-plain-icon">{TECH[i % TECH.length]}</span>
                  </div>
                  <span className="sd-techcard-label">{g.label}</span>
                  <div className="sd-chips">
                    {g.items.map((it) => (<span className="sd-chip" key={it}>{it}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7 — HOW WE WORK */}
      {service.process && (
        <section className="sd-section sd-process">
          <span className="sd-motif sd-motif-br soft" aria-hidden></span>
          <div className="container">
            <div className="sd-head reveal">
              <div className="sd-eyebrow-wrap"><Eyebrow>How it works</Eyebrow></div>
              <Heading text={service.process.title} em={service.process.titleEm || []} />
              {service.process.subtitle && <p className="sd-sub">{service.process.subtitle}</p>}
            </div>
            <div className="sd-grid-process reveal">
              {service.process.steps.map((s, i) => (
                <div className="sd-card sd-step" key={i}>
                  <div className="sd-step-top">
                    <div className="sd-num sm">{s.n}</div>
                    <span className="sd-step-icon">{PROCESS[i % PROCESS.length]}</span>
                  </div>
                  <h4>{s.h}</h4>
                  <ul className="sd-checks">
                    {s.checks.map((ch, ci) => (<li key={ci}><Check />{ch}</li>))}
                  </ul>
                  <span className="sd-dur">{s.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8 — BY SECTOR */}
      {service.sectors && (
        <section className="sd-section sd-sectors">
          <div className="container">
            <div className="sd-head reveal">
              <div className="sd-eyebrow-wrap"><Eyebrow>By sector</Eyebrow></div>
              <Heading text={service.sectors.title} em={service.sectors.titleEm || []} />
              {service.sectors.subtitle && <p className="sd-sub">{service.sectors.subtitle}</p>}
            </div>
            <div className="sd-grid-2 reveal">
              {service.sectors.groups.map((g, i) => (
                <div className="sd-card sd-scard" key={i}>
                  <span className="sd-icon-circle lg">{SECTOR[i % SECTOR.length]}</span>
                  <div className="sd-card-body">
                    <h4>{g.label}</h4>
                    <span className="sd-divider"></span>
                    <ul className="sd-checks">{g.cases.map((c, ci) => (<li key={ci}><Check />{c}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="sd-section sd-faq">
          <div className="container">
            <div className="sd-head reveal">
              <div className="sd-eyebrow-wrap"><Eyebrow>FAQ</Eyebrow></div>
              <Heading text="Questions, answered" em={["answered"]} />
            </div>
            <div className="sd-faq-list reveal">
              {service.faqs.map((f, i) => (
                <details className="sd-faq-item" key={i}>
                  <summary><span>{f.q}</span><span className="sd-faq-plus" aria-hidden></span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="sd-cta theme-dark">
        <span className="sd-motif sd-motif-tr light" aria-hidden></span>
        <span className="sd-motif sd-motif-bl light" aria-hidden></span>
        <div className="container">
          <div className="sd-cta-inner reveal">
            <div className="sd-eyebrow-wrap center"><Eyebrow light>Let&apos;s talk</Eyebrow></div>
            <Heading text={`Ready to start your\n${service.name.toLowerCase()} project?`} em={["project?"]} className="light" />
            <p className="sd-sub light">Tell us what you need on WhatsApp or by email. We reply within a few hours — with honest advice and a clear price, no obligation.</p>
            <div className="sd-hero-btns center">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">Get a free quote <ArrowR /></a>
              <a href="/services" className="btn btn-outline">All services <ArrowR /></a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* derive accent words for the demo title (last word) */
function pickEm(title: string): string[] {
  const words = title.replace(/[.,]/g, "").split(" ");
  return words.length ? [words[words.length - 1]] : [];
}
