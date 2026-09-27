"use client";

import { useEffect, useState } from "react";
import { useLocale } from "./locale";
import { WHATSAPP_URL } from "@/lib/site-links";

/**
 * The two controls that follow the page: WhatsApp, always there, and back to
 * top, which appears once there is something to come back from.
 *
 * Rendered from the footer so it lands inside .wevtex on every page.
 */

const T = {
  fr: {
    whatsapp: "Écrire sur WhatsApp",
    top: "Remonter en haut de la page",
    text: "Bonjour Wevtex, j'aimerais parler de mon projet.",
  },
  en: {
    whatsapp: "Message us on WhatsApp",
    top: "Back to top",
    text: "Hello Wevtex, I'd like to talk about my project.",
  },
};

export function FloatingActions() {
  const t = T[useLocale()];
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="float-actions">
      <button
        type="button"
        className={showTop ? "float-btn float-top is-in" : "float-btn float-top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t.top}
        // Hidden from the tab order until it is on screen, so the keyboard does
        // not stop on a button nobody can see.
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <a
        className="float-btn float-wa"
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.text)}`}
        target="_blank"
        rel="noopener"
        aria-label={t.whatsapp}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24z" />
        </svg>
      </a>
    </div>
  );
}
