"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Fires the GA4 lead conversion exactly once per visit to /thank-you.
 * `generate_lead` is GA4's recommended event for a captured lead — mark it as a
 * Key event (conversion) in GA4: Admin → Events → toggle "Mark as key event".
 *
 * The sessionStorage guard stops a page refresh from double-counting the lead.
 */
export function ConversionTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const KEY = "wevtex_lead_tracked";
    if (sessionStorage.getItem(KEY)) return;

    sendGAEvent("event", "generate_lead", {
      method: "contact_form",
      currency: "MAD",
      value: 1,
    });
    sessionStorage.setItem(KEY, "1");
  }, []);

  return null;
}
