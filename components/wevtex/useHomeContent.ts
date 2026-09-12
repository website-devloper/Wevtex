"use client";

import { FAQS, SERVICES } from "./homeContent";
import { FAQS_EN, SERVICES_EN } from "./homeContent.en";
import { useLocale } from "./locale";

/** The eight services and the home FAQ, in the page's language. */
export function useHomeContent() {
  const en = useLocale() === "en";
  return { SERVICES: en ? SERVICES_EN : SERVICES, FAQS: en ? FAQS_EN : FAQS };
}
