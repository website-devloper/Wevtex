/**
 * Wevtex site header — shared across the homepage and all inner pages.
 * Ported from the Claude Design handoff (.design-wevtex/project/*.html).
 */

type Current = "services" | "about" | "work" | "reviews" | "contact";

export function SiteHeader({ current }: { current?: Current }) {
  const navClass = (key: Current) => (current === key ? "current" : undefined);
  return (
    <header className="site-header" id="siteHeader">
      <a href="/" className="brand">
        <span className="brand-mark"></span>
        <span>wevtex<sup>™</sup></span>
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="/services" className={navClass("services")}>Services</a></li>
          <li><a href="/about" className={navClass("about")}>About</a></li>
          <li><a href="/portfolio" className={navClass("work")}>Work</a></li>
          <li><a href="/#testimonials" className={navClass("reviews")}>Reviews</a></li>
          <li><a href="/contact" className={navClass("contact")}>Contact</a></li>
        </ul>
      </nav>
      <div className="nav-cta">
        <span className="status-pill"><span className="pulse"></span>Booking Q3 · 14 slots</span>
        <a href="/contact" className="btn btn-primary">
          Let&apos;s Talk
          <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 9L9 3M9 3H4M9 3V8" />
          </svg>
        </a>
      </div>
    </header>
  );
}
