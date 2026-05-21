"use client";

/**
 * Wevtex site header — shared across the homepage and all inner pages.
 * Editorial full-width bar: transparent over the hero, turns into a dark
 * blurred bar with a hairline border once the page is scrolled.
 */

import Image from "next/image";
import { useEffect, useState } from "react";

type Current = "services" | "about" | "work" | "reviews" | "contact";

const NAV: { key: Current; label: string; href: string }[] = [
  { key: "services", label: "Services", href: "/services" },
  { key: "about", label: "About", href: "/about" },
  { key: "work", label: "Work", href: "/portfolio" },
  { key: "reviews", label: "Reviews", href: "/#testimonials" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export function SiteHeader({ current }: { current?: Current }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"} id="siteHeader">
      <div className="site-header-inner">
        <a href="/" className="brand" aria-label="Wevtex — home">
          <Image
            className="brand-logo"
            src="/images/logo/wevtex-logo.png"
            alt="Wevtex"
            width={1181}
            height={160}
            priority
          />
        </a>

        <nav>
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.key}>
                <a href={item.href} className={current === item.key ? "current" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <span className="status-pill">
            <span className="pulse"></span>Accepting Global Projects
          </span>
          <a href="/contact" className="btn btn-primary">
            Let&apos;s Talk
            <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 9L9 3M9 3H4M9 3V8" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
