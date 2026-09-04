"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * The one path a lead takes to reach us: validate → POST /api/contact →
 * redirect to /thank-you (where the conversion event fires).
 *
 * Every form on the site goes through this. Nothing may "succeed" locally
 * without the server confirming it — a form that shows a tick and drops the
 * enquiry is worse than one that visibly fails, because nobody finds out.
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
  company_url?: string;
};

export type LeadStatus = "idle" | "sending" | "error";

const GENERIC_ERROR = "Une erreur est survenue. Essayez plutôt WhatsApp.";
const NETWORK_ERROR = "Erreur réseau. Vérifiez votre connexion ou écrivez-nous sur WhatsApp.";
const INCOMPLETE = "Merci d’indiquer votre nom, un moyen de vous joindre et un court message.";

export function useLeadSubmit({ redirectTo = "/thank-you" }: { redirectTo?: string } = {}) {
  const router = useRouter();
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
      setError(INCOMPLETE);
      return false;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setError(body.error || GENERIC_ERROR);
        return false;
      }
      router.push(redirectTo);
      return true;
    } catch {
      setStatus("error");
      setError(NETWORK_ERROR);
      return false;
    }
  }

  return { status, error, submit, setError, setStatus };
}
