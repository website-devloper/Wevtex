"use client";


import { useTheme } from "@/app/ThemeContext";
/** Wevtex — Case Study. Ported from .design-wevtex/project/case-study.html */

import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";

export default function CaseStudyPage() {
  const { isDark } = useTheme();

  useReveal();
  return (
    <div className={`wevtex ${isDark ? 'mode-dark' : 'mode-light'}`}>
      <SiteHeader current="work" />

      {/* HERO */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} page-hero`} style={{ paddingBottom: 0 }}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb">
              <a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp;
              <a href="/portfolio" style={{ color: "inherit" }}>Work</a> &nbsp;/&nbsp; Global E-Commerce
            </div>
            <h1>Global <em>E-Commerce</em><br />platform.</h1>
            <p className="lead">
              A 50K-SKU electronics retailer trapped on a 12-year-old Magento stack. Slow, brittle, and bleeding conversions. We rebuilt it headless in fourteen weeks — and the numbers told the rest of the story.
            </p>
          </div>

          <div className="case-cover reveal" style={{ marginBottom: -100 }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 80% at 50% 20%, rgba(217,74,26,0.25), transparent 70%)" }}></div>
            <div style={{ position: "absolute", inset: "6% 8%", background: "var(--bg-paper)", borderRadius: 10, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ height: 32, background: "rgba(28,20,16,0.04)", borderBottom: "1px solid rgba(28,20,16,0.06)", display: "flex", alignItems: "center", padding: "0 14px", gap: 6 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(28,20,16,0.18)" }}></span>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(28,20,16,0.18)" }}></span>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(28,20,16,0.18)" }}></span>
                <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(28,20,16,0.5)", background: "rgba(28,20,16,0.06)", padding: "3px 10px", borderRadius: 4 }}>globale-store.com</span>
              </div>
              <div style={{ padding: "40px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", height: "calc(100% - 32px)" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 16 }}>// NEW · ELECTRONICS</div>
                  <div style={{ fontSize: 56, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: 8 }}>Engineered<br /><span className="serif" style={{ color: "var(--accent)" }}>for speed.</span></div>
                  <div style={{ height: 6, width: "60%", background: "var(--ink-on-cream-2)", borderRadius: 2, marginTop: 18 }}></div>
                  <div style={{ height: 6, width: "45%", background: "var(--ink-on-cream-2)", borderRadius: 2, marginTop: 8 }}></div>
                  <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
                    <div style={{ padding: "10px 22px", borderRadius: 999, background: "var(--accent)", color: "#fff", fontSize: 12 }}>Shop now →</div>
                    <div style={{ padding: "10px 22px", borderRadius: 999, border: "1px solid var(--ink-on-cream-2)", color: "var(--ink-on-cream)", fontSize: 12 }}>Browse</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div style={{ aspectRatio: "1", borderRadius: 10, background: "linear-gradient(135deg, #d94a1a, #8a2d08)" }}></div>
                  <div style={{ aspectRatio: "1", borderRadius: 10, background: "var(--ink-on-cream)" }}></div>
                  <div style={{ aspectRatio: "1", borderRadius: 10, background: "rgba(28,20,16,0.08)" }}></div>
                  <div style={{ aspectRatio: "1", borderRadius: 10, background: "var(--accent)" }}></div>
                </div>
              </div>
            </div>
            <div className="case-cover-meta" style={{ color: "rgba(255,220,200,0.5)" }}>// shipped 14.may.2026 · 14-week engagement</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={isDark ? "theme-dark" : "theme-cream"} style={{ padding: "160px 0 0" }}>
        <div className="container">
          <div className="case-stats reveal">
            <div className="case-stat">
              <div className="num">+47<em>%</em></div>
              <div className="label">Conversion lift · 90 days</div>
            </div>
            <div className="case-stat">
              <div className="num">0.8<em>s</em></div>
              <div className="label">P95 checkout · was 3.2s</div>
            </div>
            <div className="case-stat">
              <div className="num">50<em>K</em></div>
              <div className="label">SKUs migrated · zero downtime</div>
            </div>
            <div className="case-stat">
              <div className="num">14<em>w</em></div>
              <div className="label">Total engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} case-section`}>
        <div className="container">
          <div className="case-section-grid reveal">
            <span className="label">// 01 — The brief</span>
            <div>
              <h3>The team was busy maintaining yesterday, not building <em>tomorrow.</em></h3>
              <p>
                GlobalE had grown faster than their stack. A heavily-customized Magento install — once a competitive advantage — had become a productivity tax. Every release took two days. Checkout was slow enough that mobile users abandoned at a 78% rate. The technical leadership was spending all their time on infrastructure, not on the things that move the business.
              </p>
              <p>
                The mandate from the CEO was direct: rebuild for speed, do it without breaking holiday traffic, and give the team a stack they can iterate on for the next ten years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} case-section`}>
        <div className="container">
          <div className="case-section-grid reveal">
            <span className="label">// 02 — The approach</span>
            <div>
              <h3>Headless commerce —<br />but <em>quietly.</em></h3>
              <p>
                We took the data layer that worked (Magento as a product source-of-truth) and unbundled everything else. New storefront in Next.js, edge-rendered on Vercel. New checkout in Stripe-native React. Search by Algolia. Image pipeline through Cloudflare. The team kept their familiar admin; the customer got a brand-new experience.
              </p>
              <p>
                Migration ran in parallel — we rebuilt category by category, with feature flags routing traffic gradually. By week 12 we were serving 30% of traffic from the new stack. By week 14, 100% — and the old one was decommissioned on a Tuesday afternoon with no customer noticing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} case-section`}>
        <div className="container">
          <div className="case-section-grid reveal">
            <span className="label">// 03 — The result</span>
            <div>
              <h3>What 0.8 seconds<br />is <em>worth.</em></h3>
              <p>
                Checkout latency dropped from 3.2s to 0.8s at the 95th percentile. Mobile abandonment fell from 78% to 41%. Conversion rate lifted 47% in the first 90 days — and held. Average order value went up 18% as the new product detail pages improved cross-sell.
              </p>
              <p>
                Beyond the numbers: the engineering team ships features now. Their deploy cadence went from twice a week to twice a day. They&apos;ve added internationalization, a B2B portal, and a subscription program in the six months since launch — all using the same infrastructure we set up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} case-quote`}>
        <div className="container">
          <div className="reveal">
            <p className="quote">&ldquo;We didn&apos;t just get a faster site. We got our engineering team back.&rdquo;</p>
            <div className="author">— Saadia Vence · Founder, GlobalE</div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className={isDark ? "theme-dark" : "theme-cream"} style={{ padding: "80px 0" }}>
        <div className="container">
          <a className="case-next reveal" href="/case-study">
            <div>
              <div className="label">// Previous case</div>
              <h4>Lumen <em>Studio</em></h4>
            </div>
            <div className="arrow">
              <svg width="20" height="20" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3L3 9M3 9V4M3 9H8" transform="rotate(180 6 6)" /></svg>
            </div>
            <div></div>
          </a>
          <a className="case-next reveal" href="/case-study" style={{ borderTop: 0, paddingTop: 0 }}>
            <div></div>
            <div className="arrow">
              <svg width="20" height="20" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="label">// Next case</div>
              <h4>Reserve<em>.co</em></h4>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// Your project</span>
            <h2 style={{ marginTop: 28 }}>Got a brief<br />like <em>this one?</em></h2>
            <p className="lead">
              We&apos;re accepting new projects globally. Send the rough shape — we&apos;ll come back within 4 hours.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">Start a Project →</a>
              <a href="/portfolio" className="btn btn-outline">More Case Studies</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
