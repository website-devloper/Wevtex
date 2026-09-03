"use client";

import "../../app/wevtex-home.css";
import "../../app/service-detail.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";

export function ServiceLayoutWrapper({ children }: { children: React.ReactNode }) {
  useReveal();

  return (
    <div className="wevtex sd mode-light">
      <SiteHeader current="services" />
      {children}
      <SiteFooter />
    </div>
  );
}
