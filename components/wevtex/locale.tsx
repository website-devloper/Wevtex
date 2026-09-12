"use client";

/**
 * The page's language, for client components.
 *
 * Each root layout (app/(fr), app/(en)) wraps the page in a LocaleProvider,
 * so a component reads its language with useLocale() instead of receiving it
 * through every prop. The default is French: a component rendered outside a
 * provider behaves exactly as it did before the English version existed.
 */

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { localize } from "@/lib/i18n-paths";

const LocaleContext = createContext<Locale>("fr");

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Internal links in the page's language: "/contact" -> "/en/contact" on English pages. */
export function useLp() {
  const locale = useLocale();
  return (path: string) => localize(path, locale);
}
