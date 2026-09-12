"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "./locale";

/**
 * The one path a lead takes to reach us: validate → POST /api/contact →
 * redirect to /thank-you (where the conversion event fires).
 *
 * Every form on the site goes through this. Nothing may "succeed" locally
 * without the server confirming it — a form that shows a tick and drops the
 * enquiry is worse than one that visibly fails, because nobody finds out.
 *
 * The page's language travels with the lead, so the confirmation email and
 * the thank-you page answer in the language the visitor wrote in.
 */

export type LeadPayload = {
  name: string;
  contact: string;
  message: string;
  business?: string;
  service?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  source?: string;
  topic?: string;
  /** Honeypot — hidden from humans, filled only by bots. */
  hp_token?: string;
};

export type LeadStatus = "idle" | "sending" | "error";

const MSG = {
  fr: {
    generic: "Une erreur est survenue. Essayez plutôt WhatsApp.",
    network: "Erreur réseau. Vérifiez votre connexion ou écrivez-nous sur WhatsApp.",
    incomplete: "Merci d’indiquer votre nom, un moyen de vous joindre et un court message.",
  },
  en: {
    generic: "Something went wrong. Please try WhatsApp instead.",
    network: "Network error. Check your connection or message us on WhatsApp.",
    incomplete: "Please give your name, a way to reach you and a short message.",
  },
};

export function useLeadSubmit({ redirectTo }: { redirectTo?: string } = {}) {
  const router = useRouter();
  const locale = useLocale();
  const msg = MSG[locale];
  const target = redirectTo ?? (locale === "en" ? "/en/thank-you" : "/thank-you");
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [error, setError] = useState("");

  /** Returns true only once the server has accepted the lead. */
  async function submit(payload: LeadPayload): Promise<boolean> {
    if (status === "sending") return false;
    setError("");

    // Mirror the Route Handler's minimums so obvious gaps are caught without a
    // round trip. The server still re-validates — this is convenience, not trust.
    if (
      payload.name.trim().length < 2 ||
      payload.contact.trim().length < 3 ||
      payload.message.trim().length < 5
    ) {
      setStatus("error");
      setError(msg.incomplete);
      return false;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setError(body.error || msg.generic);
        return false;
      }
      router.push(target);
      return true;
    } catch {
      setStatus("error");
      setError(msg.network);
      return false;
    }
  }

  return { status, error, submit, setError, setStatus };
}
