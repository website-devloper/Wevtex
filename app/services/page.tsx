"use client";

/** Wevtex — Services. Ported from .design-wevtex/project/services.html */

import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";

export default function ServicesPage() {
  useReveal();
  return (
    <div className="wevtex">
      <SiteHeader current="services" />

      {/* HERO */}
      <section className="theme-dark page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; Services</div>
            <h1>Four capabilities.<br />One <em>expert team.</em></h1>
            <p className="lead">
              We package what we do into four clear practices — but the work flows together. Most engagements use two or three. The biggest ones use all four.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Practices</span><div className="val">4 core · cross-functional</div></div>
              <div><span className="label">Engagement min.</span><div className="val">MAD 300 · monthly retainer</div></div>
              <div><span className="label">Avg. project length</span><div className="val">8 — 14 weeks</div></div>
              <div><span className="label">Tech stack</span><div className="val">Next · Astro · Tauri · TS</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 01 — WEB DEVELOPMENT */}
      <section className="theme-cream service-block">
        <div className="container">
          <div className="service-row reveal">
            <div className="service-text">
              <div className="num">01</div>
              <span className="eyebrow">// Web Development</span>
              <h2 style={{ marginTop: 14 }}>Custom websites,<br />web apps &amp; <em>commerce.</em></h2>
              <p className="lead">
                Marketing sites, SaaS dashboards, e-commerce stacks. We build for performance and conversion — never just for looks.
              </p>
              <ul className="service-checks">
                <li data-num="01">Headless e-commerce — Shopify, Medusa, BigCommerce, or fully custom Stripe stacks.</li>
                <li data-num="02">SaaS products — multi-tenant auth, billing, dashboards, internal admin.</li>
                <li data-num="03">Marketing sites — Next.js + Astro for speed, CMS-driven for editor freedom.</li>
                <li data-num="04">Migrations — replatforming from WordPress, Wix, Webflow, custom legacy.</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Discuss Web Project →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Web</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#fbf6ec" stroke="rgba(28,20,16,0.14)" />
                <rect x="20" y="20" width="280" height="26" rx="10" fill="rgba(28,20,16,0.04)" />
                <circle cx="34" cy="33" r="3" fill="rgba(28,20,16,0.2)" />
                <circle cx="46" cy="33" r="3" fill="rgba(28,20,16,0.2)" />
                <circle cx="58" cy="33" r="3" fill="rgba(28,20,16,0.2)" />
                <rect x="76" y="28" width="120" height="10" rx="2" fill="rgba(28,20,16,0.06)" />
                <text x="40" y="92" fontFamily="Geist" fontSize="20" fontWeight="500" fill="#1c1410">We build</text>
                <text x="40" y="116" fontFamily="Newsreader" fontStyle="italic" fontSize="20" fill="#d94a1a">world-class.</text>
                <rect x="40" y="140" width="160" height="6" rx="2" fill="rgba(28,20,16,0.18)" />
                <rect x="40" y="152" width="120" height="6" rx="2" fill="rgba(28,20,16,0.18)" />
                <rect x="40" y="178" width="80" height="26" rx="13" fill="#d94a1a" />
                <text x="58" y="194" fontFamily="Geist" fontSize="11" fill="#fff">Start →</text>
                <rect x="130" y="178" width="80" height="26" rx="13" fill="none" stroke="rgba(28,20,16,0.3)" />
                <text x="148" y="194" fontFamily="Geist" fontSize="11" fill="#1c1410">Explore</text>
                <rect x="220" y="60" width="60" height="120" rx="6" fill="#1c1410" />
                <rect x="40" y="220" width="240" height="24" rx="4" fill="rgba(28,20,16,0.08)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02 — DESKTOP */}
      <section className="theme-dark service-block">
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">02</div>
              <span className="eyebrow">// Desktop Software</span>
              <h2 style={{ marginTop: 14 }}>Native apps for<br />macOS, Windows &amp; <em>Linux.</em></h2>
              <p className="lead">
                Web is amazing — until you need filesystem access, system tray, native notifications, or just better performance. That&apos;s when desktop wins.
              </p>
              <ul className="service-checks">
                <li data-num="01">Tauri-based — Rust core, web frontend, native binary at &lt;10MB.</li>
                <li data-num="02">Electron when needed — for complex Node-based ecosystems.</li>
                <li data-num="03">Auto-update, code signing, App Store / Microsoft Store distribution.</li>
                <li data-num="04">Cross-platform with shared logic — write once, ship to three OSes.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Discuss Desktop Project →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Desktop</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="40" width="280" height="220" rx="8" fill="#100b0a" stroke="rgba(255,220,200,0.16)" />
                <rect x="20" y="40" width="280" height="22" fill="rgba(255,255,255,0.04)" />
                <circle cx="36" cy="51" r="3" fill="#d94a1a" />
                <circle cx="48" cy="51" r="3" fill="rgba(255,220,200,0.2)" />
                <circle cx="60" cy="51" r="3" fill="rgba(255,220,200,0.2)" />
                <rect x="20" y="62" width="80" height="198" fill="rgba(255,255,255,0.02)" />
                <rect x="30" y="80" width="60" height="18" rx="4" fill="rgba(217,74,26,0.16)" />
                <text x="38" y="92" fontFamily="Geist" fontSize="9" fill="#fdf7f3">★ globale</text>
                <text x="36" y="116" fontFamily="Geist" fontSize="9" fill="rgba(255,220,200,0.5)">reserve.co</text>
                <text x="36" y="132" fontFamily="Geist" fontSize="9" fill="rgba(255,220,200,0.5)">arc-desk</text>
                <text x="36" y="148" fontFamily="Geist" fontSize="9" fill="rgba(255,220,200,0.5)">studio v2</text>
                <text x="116" y="84" fontFamily="Geist" fontSize="14" fill="#fdf7f3">Build target</text>
                <rect x="116" y="98" width="170" height="32" rx="6" fill="rgba(217,74,26,0.14)" stroke="rgba(217,74,26,0.3)" />
                <text x="126" y="118" fontFamily="Geist Mono" fontSize="9" fill="#f0631f">$ build --target=darwin-arm64</text>
                <rect x="116" y="140" width="170" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="116" y="140" width="130" height="5" rx="2" fill="#d94a1a" />
                <text x="116" y="162" fontFamily="Geist Mono" fontSize="8" fill="rgba(255,220,200,0.5)">75% · 12.4s · 4.8mb</text>
                <rect x="116" y="180" width="80" height="64" rx="6" fill="rgba(255,255,255,0.04)" />
                <rect x="206" y="180" width="80" height="64" rx="6" fill="rgba(217,74,26,0.12)" stroke="rgba(217,74,26,0.25)" />
                <text x="226" y="218" fontFamily="Geist" fontSize="20" fontWeight="500" fill="#f0631f">99</text>
                <text x="226" y="232" fontFamily="Geist Mono" fontSize="7" fill="rgba(255,220,200,0.5)">/ 100</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 03 — PERFORMANCE */}
      <section className="theme-cream service-block">
        <div className="container">
          <div className="service-row reveal">
            <div className="service-text">
              <div className="num">03</div>
              <span className="eyebrow">// Performance &amp; Speed</span>
              <h2 style={{ marginTop: 14 }}>Sub-second sites.<br />Real-world <em>fast.</em></h2>
              <p className="lead">
                Page speed is a conversion lever — we treat it like one. Real-user metrics, not lab scores. Median improvement: 3.2s → 0.8s LCP.
              </p>
              <ul className="service-checks">
                <li data-num="01">Audit using real-user data — CrUX, RUM, server logs — not synthetic scores.</li>
                <li data-num="02">Edge rendering — Vercel, Cloudflare Workers, Fly. Sub-50ms global TTFB.</li>
                <li data-num="03">Image, font, script &amp; CSS budgets enforced in CI on every PR.</li>
                <li data-num="04">Monitoring &amp; budgets — Sentry, Datadog, custom dashboards.</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Speed Up My Site →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Performance</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <defs>
                  <linearGradient id="pf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d94a1a" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#d94a1a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#fbf6ec" stroke="rgba(28,20,16,0.14)" />
                <text x="40" y="60" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(28,20,16,0.5)">PERFORMANCE / LCP</text>
                <text x="40" y="100" fontFamily="Geist" fontSize="36" fontWeight="400" fill="#1c1410">0.8</text>
                <text x="90" y="100" fontFamily="Geist" fontSize="16" fill="rgba(28,20,16,0.5)">s</text>
                <text x="40" y="120" fontFamily="Geist Mono" fontSize="9" fill="#d94a1a">↓ 78% vs baseline</text>
                <line x1="40" y1="220" x2="280" y2="220" stroke="rgba(28,20,16,0.1)" />
                <line x1="40" y1="180" x2="280" y2="180" stroke="rgba(28,20,16,0.06)" />
                <line x1="40" y1="150" x2="280" y2="150" stroke="rgba(28,20,16,0.06)" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,130 280,110" fill="url(#pf)" opacity="0.6" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,130 280,110" fill="none" stroke="#d94a1a" strokeWidth="2" />
                <circle cx="280" cy="110" r="4" fill="#d94a1a" />
                <circle cx="280" cy="110" r="9" fill="none" stroke="#d94a1a" opacity="0.4" />
                <text x="40" y="246" fontFamily="Geist Mono" fontSize="8" fill="rgba(28,20,16,0.4)">7 DAYS</text>
                <text x="270" y="246" fontFamily="Geist Mono" fontSize="8" fill="rgba(28,20,16,0.4)" textAnchor="end">TODAY</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 04 — SEO & CRO */}
      <section className="theme-dark service-block">
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">04</div>
              <span className="eyebrow">// SEO &amp; CRO</span>
              <h2 style={{ marginTop: 14 }}>Get found.<br />Then <em>convert.</em></h2>
              <p className="lead">
                Traffic is half the story. We pair technical SEO with rigorous CRO experiments to make sure that traffic translates to revenue.
              </p>
              <ul className="service-checks">
                <li data-num="01">Technical SEO audits, Schema.org, programmatic content systems.</li>
                <li data-num="02">Content strategy — keyword research, topic clusters, editorial calendar.</li>
                <li data-num="03">CRO sprints — hypothesis → A/B test → measurement → ship the winner.</li>
                <li data-num="04">Funnel analytics — Mixpanel, Posthog, segment, with weekly reports.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Grow My Traffic →</a>
            </div>
            <div className="service-visual">
              <span className="label">// SEO &amp; CRO</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#100b0a" stroke="rgba(255,220,200,0.14)" />
                <text x="36" y="56" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(255,220,200,0.5)">KEYWORD RANKINGS</text>
                <rect x="36" y="68" width="248" height="28" rx="6" fill="rgba(217,74,26,0.14)" stroke="rgba(217,74,26,0.3)" />
                <text x="48" y="86" fontFamily="Geist" fontSize="11" fill="#fdf7f3">saas booking system</text>
                <text x="266" y="86" fontFamily="Geist Mono" fontSize="11" fill="#f0631f" textAnchor="end">#1 ↑</text>
                <rect x="36" y="102" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="120" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">desktop agency</text>
                <text x="266" y="120" fontFamily="Geist Mono" fontSize="11" fill="#f0631f" textAnchor="end">#3 ↑</text>
                <rect x="36" y="136" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="154" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">ecommerce conv.</text>
                <text x="266" y="154" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,220,200,0.6)" textAnchor="end">#7 ↑</text>
                <rect x="36" y="170" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="188" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">hire web dev</text>
                <text x="266" y="188" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,220,200,0.6)" textAnchor="end">#9 ↑</text>
                <text x="36" y="232" fontFamily="Geist Mono" fontSize="8" letterSpacing="1" fill="rgba(255,220,200,0.5)">CTR +218% · BOUNCE -34% · LCP 0.8s</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SUMMARY */}
      <section className="theme-cream pricing">
        <div className="container">
          <div className="pricing-head reveal">
            <div>
              <span className="eyebrow">// Engagement</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Two ways to<br /><span className="serif" style={{ color: "var(--accent)" }}>work together.</span></h2>
            </div>
            <p className="lead">
              Pick a project (fixed scope, fixed price) or a retainer (ongoing, monthly cap). Most clients start with a project and roll into a retainer afterward.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pricing-grid">
            <div className="plan reveal" data-delay="1" style={{ background: "var(--bg-paper)", color: "var(--ink-on-cream)", borderColor: "var(--hairline-c)" }}>
              <div className="plan-num" style={{ color: "var(--ink-on-cream-3)" }}>Option A — One-time</div>
              <h3 style={{ color: "var(--ink-on-cream)" }}>Project engagement.</h3>
              <div className="plan-price" style={{ borderBottomColor: "var(--hairline-c)" }}>
                <span className="amount">MAD<br />10K+</span>
              </div>
              <ul className="plan-features" style={{ color: "var(--ink-on-cream-2)" }}>
                <li style={{ color: "var(--ink-on-cream)" }}>Fixed scope, fixed price</li>
                <li style={{ color: "var(--ink-on-cream)" }}>Discovery → design → build → launch</li>
                <li style={{ color: "var(--ink-on-cream)" }}>8—14 week timeline</li>
                <li style={{ color: "var(--ink-on-cream)" }}>30-day post-launch support</li>
                <li style={{ color: "var(--ink-on-cream)" }}>Full ownership on handover</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Start a Project</a>
            </div>
            <div className="plan featured reveal" data-delay="2">
              <div className="plan-num">Option B — Retainer</div>
              <h3>Ongoing partnership — most popular.</h3>
              <div className="plan-price">
                <span className="amount">MAD<br />2K+</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan-features">
                <li>Dedicated hours each month</li>
                <li>Slack channel · 4h response</li>
                <li>SEO/CRO sprints monthly</li>
                <li>Performance &amp; uptime monitoring</li>
                <li>Cancel any month, no questions</li>
              </ul>
              <a href="/contact" className="btn">Discuss Retainer →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-dark cta">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// Ready?</span>
            <h2 style={{ marginTop: 28 }}>Tell us what<br />you&apos;re <em>building.</em></h2>
            <p className="lead">
              Send a brief, jump on a call, or pick a plan above. We respond within 4 hours during business hours.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">Start a Project →</a>
              <a href="/portfolio" className="btn btn-outline">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
