"use client";

/** Wevtex — About. Ported from .design-wevtex/project/about.html */

import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";

const VALUES = [
  { n: "i", h: <>Measure in <em>revenue</em>,<br />not pixels.</>, p: "Every project starts with the same question: what business outcome will this move? If we can't connect the work to a number you care about, we'll tell you — and we won't take the engagement." },
  { n: "ii", h: <>Senior people<br />only.</>, p: "No juniors handed your account. The team that pitches you is the team that ships. Average tenure on staff: 8 years. Average years in the industry: 12. That seniority is the product." },
  { n: "iii", h: <>Twelve engagements<br />a year. <em>Never more.</em></>, p: "We cap engagements deliberately. It's the only way to keep response times under four hours, demo cycles weekly, and the team fresh enough to do their best work for you." },
  { n: "iv", h: <>Independent. Profitable.<br />Not for sale.</>, p: "No outside investors. No exit pressure. We answer to two stakeholders: our clients and our team. That structure lets us say no to bad-fit projects and yes to the right ones." },
];

const TEAM = [
  { i: "YB", n: "Yassine Benali", r: "Founder · Strategy", d: 1 },
  { i: "RM", n: "Rania M'rabet", r: "Founder · Design", d: 2 },
  { i: "OS", n: "Omar Saidi", r: "Founder · Engineering", d: 3, dark: true },
  { i: "LF", n: "Lina Farah", r: "Tech Lead · Web", d: 4 },
  { i: "TS", n: "Tomás Silva", r: "Tech Lead · Desktop", d: 1 },
  { i: "AK", n: "Aïcha Khattabi", r: "Design Lead", d: 2, dark: true },
  { i: "NV", n: "Nadia Vela", r: "SEO & CRO", d: 3 },
  { i: "+7", n: "…and 7 more", r: "Engineers · designers · ops", d: 4, more: true },
];

const TIMELINE = [
  { y: "2019", h: "Founded", p: "Three operators, one shared frustration with template agencies. First three engagements that year." },
  { y: "2021", h: "First Desktop Ship", p: "Expanded into native software — Tauri & Electron — to serve clients beyond the browser." },
  { y: "2023", h: "100 Ships", p: "Crossed 100 production launches. Started capping engagements to twelve a year." },
  { y: "2025", h: "Studio of 14", p: "Team grows. Remote-first formalized. Process documented and published openly." },
  { y: "2026", h: "Today", p: "240+ ships. 40+ industries. Profitable. Independent. Still here for the work." },
];

export default function AboutPage() {
  useReveal();
  return (
    <div className="wevtex">
      <SiteHeader current="about" />

      {/* HERO */}
      <section className="theme-dark page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; About</div>
            <h1>A workshop —<br />not a <em>factory.</em></h1>
            <p className="lead">
              Wevtex is a tight-knit studio of senior product engineers, designers and strategists. Independent since 2019. Remote-first by design. We take on twelve engagements a year — never more — so each one gets the team&apos;s full attention.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Founded</span><div className="val">2019 · Casablanca</div></div>
              <div><span className="label">Team</span><div className="val">14 humans · 4 continents</div></div>
              <div><span className="label">Ownership</span><div className="val">Independent · profitable</div></div>
              <div><span className="label">Engagements / yr</span><div className="val">12 — by design</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="theme-cream manifesto">
        <div className="container">
          <div className="manifesto-grid reveal">
            <div className="manifesto-meta">
              <span className="eyebrow">// 01 — Origin</span>
              <div className="num">2019</div>
              <span className="caption">Founded in Casablanca<br />by three former operators</span>
            </div>
            <h2>
              We started Wevtex because we<br />
              were tired of agencies that<br />
              treated <em>craft</em> like a cost center<br />
              and clients like a backlog.
            </h2>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="theme-dark" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 02 — Principles</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>What we<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>stand for.</span></h2>
            </div>
            <p className="lead">
              Four convictions that show up in every brief, every pull request, and every slack message we send a client.
            </p>
          </div>
          <div className="values-list reveal">
            {VALUES.map((v, i) => (
              <div className="value-row" key={i}>
                <div className="num">{v.n}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 03 — The team</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Fourteen humans.<br /><span className="serif" style={{ color: "var(--accent)" }}>Zero handoffs.</span></h2>
            </div>
            <p className="lead">
              Strategy, design, engineering — under one roof, one Slack, one P&amp;L. Add a photo to a face below; or just say hi.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className={m.dark ? "team-card dark reveal" : "team-card reveal"} data-delay={m.d} key={i}>
                <div className="team-photo">
                  <div className="initials">{m.i}</div>
                  <div className="placeholder">{m.more ? "// More" : "// Photo"}</div>
                </div>
                <div className="team-info">
                  <div className="name">{m.n}</div>
                  <div className="role">{m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="theme-dark" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 04 — Timeline</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Seven years.<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>240 ships.</span></h2>
            </div>
            <p className="lead">A short history of what we&apos;ve built — and what we&apos;ve learned.</p>
          </div>
          <div className="timeline reveal">
            {TIMELINE.map((t, i) => (
              <div className="timeline-item" style={{ background: "var(--bg-1)", borderColor: "var(--hairline-d)" }} key={i}>
                <div className="year">{t.y}</div>
                <h5 style={{ color: "var(--ink-on-dark)" }}>{t.h}</h5>
                <p style={{ color: "var(--ink-on-dark-2)" }}>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-cream cta" style={{ color: "var(--ink-on-cream)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent" style={{ color: "var(--accent)" }}>// 05 — Work with us</span>
            <h2 style={{ marginTop: 28, color: "var(--ink-on-cream)" }}>Let&apos;s build<br />your <em>next thing.</em></h2>
            <p className="lead" style={{ color: "var(--ink-on-cream-2)" }}>
              We&apos;re booking projects for Q3. If you&apos;ve got a brief that needs senior craft and honest measurement, we&apos;d love to hear it.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">
                Start a Project
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
              </a>
              <a href="/portfolio" className="btn btn-outline">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
