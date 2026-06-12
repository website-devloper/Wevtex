"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import "../../app/service-detail.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";

export function ServiceLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  useReveal();

  return (
    <div className={`wevtex sd ${isDark ? "mode-dark" : "mode-light"}`}>
      <SiteHeader current="services" />
      {children}
      <SiteFooter />
    </div>
  );
}
