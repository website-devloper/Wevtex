"use client";

/**
 * Mobile-only sticky action bar.
 *
 * On phones the hero CTAs scroll away within a screen or two and the page is long,
 * so this keeps WhatsApp and the quote form one tap away. Hidden above 768px and
 * held back until the visitor has scrolled past the hero, so it never covers the
 * first impression.
 */

import { useEffect, useState } from "react";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";

export function StickyCta({ whatsappUrl = WHATSAPP_URL }: { whatsappUrl?: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={shown ? "sticky-cta shown" : "sticky-cta"}>
      <a href={whatsappUrl} className="sticky-cta-btn wa" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
          <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
        </svg>
        WhatsApp
      </a>
      <a href={CONTACT_URL} className="sticky-cta-btn primary">
        Demander un devis
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
