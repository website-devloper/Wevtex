"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useLocale, useLp } from "./locale";

/**
 * Consent gate for analytics.
 *
 * Google Analytics used to load for every visitor the moment NEXT_PUBLIC_GA_ID
 * was set, with no notice and no way to refuse — including for EU visitors,
 * where consent has to come first. Now the script is only mounted once someone
 * has actively accepted.
 *
 * The choice lives in localStorage rather than a cookie, so refusing leaves
 * nothing on the wire at all. Reads are wrapped: private windows and
 * cleared-site-data both throw rather than returning null.
 */

const KEY = "wevtex-analytics-consent";
type Choice = "granted" | "denied";

const T = {
  fr: {
    label: "Mesure d'audience",
    text: "Nous aimerions mesurer l'audience du site pour savoir quelles pages vous sont utiles. Rien n'est chargé tant que vous n'avez pas accepté, et nous ne faisons aucune publicité ciblée.",
    link: "Lire notre politique de confidentialité",
    refuse: "Refuser",
    accept: "Accepter",
  },
  en: {
    label: "Analytics",
    text: "We would like to measure visits to learn which pages are useful to you. Nothing loads until you accept, and we run no targeted advertising.",
    link: "Read our privacy policy",
    refuse: "Decline",
    accept: "Accept",
  },
};

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function writeChoice(v: Choice) {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* Storage unavailable — the choice holds for this page view only. */
  }
}

export function AnalyticsConsent({ gaId }: { gaId?: string }) {
  const [choice, setChoice] = useState<Choice | null>(null);
  // Nothing renders until we have read storage, so the banner never flashes
  // at someone who already answered.
  const [ready, setReady] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);
  const t = T[useLocale()];
  const lp = useLp();

  useEffect(() => {
    setChoice(readChoice());
    setReady(true);
  }, []);

  /* The bar is fixed to the bottom, over the floating WhatsApp button. It
     publishes its height so the buttons can sit above it, and clears it once
     answered. A height guessed in CSS would be wrong the moment the text wraps
     differently — which it does, on a phone and in English. */
  useEffect(() => {
    const el = barRef.current;
    const root = document.documentElement;
    if (!el) {
      root.style.removeProperty("--cc-height");
      return;
    }
    const publish = () => root.style.setProperty("--cc-height", `${Math.round(el.offsetHeight)}px`);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--cc-height");
    };
  }, [choice, ready]);

  function decide(v: Choice) {
    writeChoice(v);
    setChoice(v);
  }

  if (!ready) return null;

  return (
    <>
      {gaId && choice === "granted" ? <GoogleAnalytics gaId={gaId} /> : null}

      {choice === null && (
        <div className="cc-bar" ref={barRef} role="dialog" aria-label={t.label}>
          <div className="cc-inner">
            <p className="cc-text">
              {t.text}{" "}
              <a href={lp("/confidentialite")}>{t.link}</a>
            </p>
            <div className="cc-actions">
              <button type="button" className="cc-btn cc-refuse" onClick={() => decide("denied")}>
                {t.refuse}
              </button>
              <button type="button" className="cc-btn cc-accept" onClick={() => decide("granted")}>
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
