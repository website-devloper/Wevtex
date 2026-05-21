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

      {/* SERVICE 02 — APP DEVELOPMENT */}
      <section className="theme-dark service-block">
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">02</div>
              <span className="eyebrow">// App Development</span>
              <h2 style={{ marginTop: 14 }}>Native &amp; cross-platform<br /><em>mobile experiences.</em></h2>
              <p className="lead">
                Build apps that users actually want to keep. We engineer high-performance mobile applications for iOS and Android that scale natively.
              </p>
              <ul className="service-checks">
                <li data-num="01">React Native &amp; Flutter — fast development, shared logic across platforms.</li>
                <li data-num="02">Native iOS/Android — when you need ultimate performance and hardware access.</li>
                <li data-num="03">App Store Optimization (ASO) &amp; full deployment pipeline management.</li>
                <li data-num="04">Backend integrations — seamless connection to your existing databases and APIs.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Discuss App Project →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Mobile Apps</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="40" width="280" height="220" rx="8" fill="#100b0a" stroke="rgba(255,220,200,0.16)" />
                <rect x="20" y="40" width="280" height="22" fill="rgba(255,255,255,0.04)" />
                <circle cx="36" cy="51" r="3" fill="#d94a1a" />
                <circle cx="48" cy="51" r="3" fill="rgba(255,220,200,0.2)" />
                <circle cx="60" cy="51" r="3" fill="rgba(255,220,200,0.2)" />
                <rect x="20" y="62" width="80" height="198" fill="rgba(255,255,255,0.02)" />
                <rect x="30" y="80" width="60" height="18" rx="4" fill="rgba(217,74,26,0.16)" />
                <text x="38" y="92" fontFamily="Geist" fontSize="9" fill="#fdf7f3">★ iOS Build</text>
                <text x="36" y="116" fontFamily="Geist" fontSize="9" fill="rgba(255,220,200,0.5)">Android APK</text>
                <text x="36" y="132" fontFamily="Geist" fontSize="9" fill="rgba(255,220,200,0.5)">Backend API</text>
                <text x="36" y="148" fontFamily="Geist" fontSize="9" fill="rgba(255,255,255,0.5)">UI Kit</text>
                <text x="116" y="84" fontFamily="Geist" fontSize="14" fill="#fdf7f3">Build target</text>
                <rect x="116" y="98" width="170" height="32" rx="6" fill="rgba(217,74,26,0.14)" stroke="rgba(217,74,26,0.3)" />
                <text x="126" y="118" fontFamily="Geist Mono" fontSize="9" fill="#f0631f">$ expo build:ios --production</text>
                <rect x="116" y="140" width="170" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="116" y="140" width="130" height="5" rx="2" fill="#d94a1a" />
                <text x="116" y="162" fontFamily="Geist Mono" fontSize="8" fill="rgba(255,220,200,0.5)">75% · 42.4s · 18.2mb</text>
                <rect x="116" y="180" width="80" height="64" rx="6" fill="rgba(255,255,255,0.04)" />
                <rect x="206" y="180" width="80" height="64" rx="6" fill="rgba(217,74,26,0.12)" stroke="rgba(217,74,26,0.25)" />
                <text x="226" y="218" fontFamily="Geist" fontSize="20" fontWeight="500" fill="#f0631f">5.0</text>
                <text x="226" y="232" fontFamily="Geist Mono" fontSize="7" fill="rgba(255,220,200,0.5)">/ 5.0 RATING</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 03 — SEO & GEO */}
      <section className="theme-cream service-block">
        <div className="container">
          <div className="service-row reveal">
            <div className="service-text">
              <div className="num">03</div>
              <span className="eyebrow">// SEO &amp; GEO Targeting</span>
              <h2 style={{ marginTop: 14 }}>Dominate search<br />in the <em>US &amp; UK.</em></h2>
              <p className="lead">
                Traffic is half the story. We pair advanced technical SEO with precise GEO-targeting to attract high-intent customers from your key markets.
              </p>
              <ul className="service-checks">
                <li data-num="01">International SEO — hreflang tags, localized content, and regional indexing.</li>
                <li data-num="02">Technical SEO audits, Schema.org (JSON-LD), and programmatic content systems.</li>
                <li data-num="03">GEO-targeting strategies — delivering localized experiences based on user IP.</li>
                <li data-num="04">CRO sprints — turning that high-quality traffic into actual revenue.</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Grow My Traffic →</a>
            </div>
            <div className="service-visual">
              <span className="label">// SEO &amp; GEO</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <defs>
                  <linearGradient id="pf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d94a1a" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#d94a1a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#fbf6ec" stroke="rgba(28,20,16,0.14)" />
                <text x="40" y="60" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(28,20,16,0.5)">GLOBAL TRAFFIC / US &amp; UK</text>
                <text x="40" y="100" fontFamily="Geist" fontSize="36" fontWeight="400" fill="#1c1410">+340</text>
                <text x="130" y="100" fontFamily="Geist" fontSize="16" fill="rgba(28,20,16,0.5)">%</text>
                <text x="40" y="120" fontFamily="Geist Mono" fontSize="9" fill="#d94a1a">↑ 340% vs baseline</text>
                <line x1="40" y1="220" x2="280" y2="220" stroke="rgba(28,20,16,0.1)" />
                <line x1="40" y1="180" x2="280" y2="180" stroke="rgba(28,20,16,0.06)" />
                <line x1="40" y1="150" x2="280" y2="150" stroke="rgba(28,20,16,0.06)" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,110 280,70" fill="url(#pf)" opacity="0.6" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,110 280,70" fill="none" stroke="#d94a1a" strokeWidth="2" />
                <circle cx="280" cy="70" r="4" fill="#d94a1a" />
                <circle cx="280" cy="70" r="9" fill="none" stroke="#d94a1a" opacity="0.4" />
                <text x="40" y="246" fontFamily="Geist Mono" fontSize="8" fill="rgba(28,20,16,0.4)">90 DAYS</text>
                <text x="270" y="246" fontFamily="Geist Mono" fontSize="8" fill="rgba(28,20,16,0.4)" textAnchor="end">TODAY</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 04 — HOSTING & IT SUPPORT */}
      <section className="theme-dark service-block">
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">04</div>
              <span className="eyebrow">// Hosting &amp; IT Support</span>
              <h2 style={{ marginTop: 14 }}>Secure hosting &amp;<br /><em>IT management.</em></h2>
              <p className="lead">
                We don't just build your platform, we maintain it. Enterprise-grade hosting, continuous monitoring, and dedicated IT support so you never worry about uptime.
              </p>
              <ul className="service-checks">
                <li data-num="01">High-availability cloud hosting (AWS, GCP, Vercel) optimized for scale.</li>
                <li data-num="02">Continuous security auditing, SSL management, and automated backups.</li>
                <li data-num="03">Dedicated IT Support — technical triage, bug fixing, and architecture scaling.</li>
                <li data-num="04">SLA guarantees — 99.99% uptime and rapid incident response teams.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Secure Support →</a>
            </div>
            <div className="service-visual">
              <span className="label">// IT Support</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#100b0a" stroke="rgba(255,220,200,0.14)" />
                <text x="36" y="56" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(255,220,200,0.5)">SYSTEM STATUS</text>
                <rect x="36" y="68" width="248" height="28" rx="6" fill="rgba(217,74,26,0.14)" stroke="rgba(217,74,26,0.3)" />
                <text x="48" y="86" fontFamily="Geist" fontSize="11" fill="#fdf7f3">US-East Server Cluster</text>
                <text x="266" y="86" fontFamily="Geist Mono" fontSize="11" fill="#f0631f" textAnchor="end">99.99%</text>
                <rect x="36" y="102" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="120" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">UK-London Edge Node</text>
                <text x="266" y="120" fontFamily="Geist Mono" fontSize="11" fill="#f0631f" textAnchor="end">99.98%</text>
                <rect x="36" y="136" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="154" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">Database Replicas</text>
                <text x="266" y="154" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,220,200,0.6)" textAnchor="end">Healthy</text>
                <rect x="36" y="170" width="248" height="28" rx="6" fill="rgba(255,220,200,0.03)" />
                <text x="48" y="188" fontFamily="Geist" fontSize="11" fill="rgba(255,220,200,0.85)">Support SLA</text>
                <text x="266" y="188" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,220,200,0.6)" textAnchor="end">4h 12m</text>
                <text x="36" y="232" fontFamily="Geist Mono" fontSize="8" letterSpacing="1" fill="rgba(255,220,200,0.5)">ALL SYSTEMS OPERATIONAL · 24/7 MONITORING</text>
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
