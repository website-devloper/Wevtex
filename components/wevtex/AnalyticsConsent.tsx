"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

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

  useEffect(() => {
    setChoice(readChoice());
    setReady(true);
  }, []);

  function decide(v: Choice) {
    writeChoice(v);
    setChoice(v);
  }

  if (!ready) return null;

  return (
    <>
      {gaId && choice === "granted" ? <GoogleAnalytics gaId={gaId} /> : null}

      {choice === null && (
        <div className="cc-bar" role="dialog" aria-label="Mesure d'audience">
          <div className="cc-inner">
            <p className="cc-text">
              Nous aimerions mesurer l&apos;audience du site pour savoir quelles pages
              vous sont utiles. Rien n&apos;est chargé tant que vous n&apos;avez pas
              accepté, et nous ne faisons aucune publicité ciblée.{" "}
              <a href="/confidentialite">En savoir plus</a>
            </p>
            <div className="cc-actions">
              <button type="button" className="cc-btn cc-refuse" onClick={() => decide("denied")}>
                Refuser
              </button>
              <button type="button" className="cc-btn cc-accept" onClick={() => decide("granted")}>
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
