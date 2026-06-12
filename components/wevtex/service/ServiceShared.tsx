import React from "react";

export const I = { sw: 1.6, lc: "round" as const, lj: "round" as const };

export const svg = (children: React.ReactNode, vb = "0 0 24 24") => (
  <svg viewBox={vb} fill="none" stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj}>{children}</svg>
);

export const ICON = {
  edit: svg(<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
  shield: svg(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  chart: svg(<><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></>),
  code: svg(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  cart: svg(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></>),
  target: svg(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>),
  layers: svg(<><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>),
  spark: svg(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /></>),
  cube: svg(<><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>),
  wrench: svg(<><path d="M14 7a4 4 0 0 1-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5z" /></>),
  pen: svg(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" /><circle cx="11" cy="11" r="2" /></>),
  search: svg(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  rocket: svg(<><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15l-3-3a16 16 0 0 1 9-9 6 6 0 0 1-9 9z" /><path d="M9 12H4s.5-3 2-4 5 0 5 0" /></>),
  headset: svg(<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 0 1-3 3h-2" /></>),
  building: svg(<><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" /></>),
  blog: svg(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></>),
  store: svg(<><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9v11h18V9" /><path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0M9 20v-6h6v6" /></>),
  woo: svg(<><path d="M2.5 5h19a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8.4l-3.6 3v-3H2.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /><path d="M5 8.6l1.3 4 1.5-3.3 1.5 3.3 1.3-4" /><path d="M13 8.6l1.3 4 1.5-3.3 1.5 3.3 1.3-4" /></>),
  wordpressCircle: svg(<><path stroke="var(--vermilion)" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path stroke="var(--vermilion)" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M16 8L13 16M13 16L10.5 10M13 16L10 16.5M8 8L10.5 16M10.5 16L12.5 16"/></>),
  phpBox: svg(<><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth={I.sw}/><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M7 10L7 14M7 10C8.5 10 8.5 12 7 12M11 10L11 14M11 12L13 12M13 10L13 14M17 10V14M17 10C18.5 10 18.5 12 17 12"/></>),
  db: svg(<><ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth={I.sw}/><path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" stroke="currentColor" strokeWidth={I.sw}/><path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth={I.sw}/></>),
  brush: svg(<><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M20.5 3.5C20.5 3.5 21.5 5 19.5 7L13.5 13C12.5 14 11 14.5 10 14L8 16L6 14L4 12L6 10L5.5 8.5C5 7.5 5.5 6 6.5 5L12.5 11L18.5 5C20.5 3 20.5 3.5 20.5 3.5Z"/></>),
  cubes: svg(<><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M12 3L20 7.5L12 12L4 7.5L12 3Z"/><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M20 7.5V16.5L12 21V12M12 21L4 16.5V7.5L12 12"/></>),
  stripeBox: svg(<><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth={I.sw}/><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M14 9.5C14 8.5 13 8 12 8C10.5 8 10 9 10 10C10 11.5 14 11.5 14 13C14 14.5 13 15.5 11.5 15.5C10 15.5 9.5 14.5 9.5 14.5"/></>),
  figma: svg(<><path stroke="currentColor" strokeWidth={I.sw} strokeLinecap={I.lc} strokeLinejoin={I.lj} d="M9 16C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10C10.6569 10 12 11.3431 12 13C12 14.6569 10.6569 16 9 16ZM9 16V22M9 16C10.6569 16 12 17.3431 12 19C12 20.6569 10.6569 22 9 22M15 10C13.3431 10 12 11.3431 12 13C12 14.6569 13.3431 16 15 16C16.6569 16 18 14.6569 18 13C18 11.3431 16.6569 10 15 10ZM15 10C16.6569 10 18 8.65685 18 7C18 5.34315 16.6569 4 15 4C13.3431 4 12 5.34315 12 7C12 8.65685 13.3431 10 15 10ZM15 10H9M9 10C7.34315 10 6 8.65685 6 7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7C12 8.65685 10.6569 10 9 10Z"/></>),
  acfGrid: svg(<><rect x="3" y="3" width="7" height="7" rx="1.4" /><rect x="14" y="3" width="7" height="7" rx="1.4" /><rect x="3" y="14" width="7" height="7" rx="1.4" /><rect x="14" y="14" width="7" height="7" rx="1.4" /></>),
  window: svg(<><rect x="3" y="4.5" width="18" height="15" rx="2" /><path d="M3 9h18M6.4 6.8h.01M9 6.8h.01" /></>),
  refresh: svg(<><path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 4.5V9h-4.5" /></>),
};

export const OUTCOME = [ICON.edit, ICON.shield, ICON.chart];
export const FEATURE = [ICON.target, ICON.code, ICON.edit, ICON.cart, ICON.layers, ICON.shield, ICON.spark, ICON.cube];
export const TECH = [ICON.wordpressCircle, ICON.cubes, ICON.cart, ICON.pen];

export const TECH_CHIP_ICON = (chip: string) => {
  const k = chip.toLowerCase();
  if (k.includes("wordpress")) return ICON.wordpressCircle;
  if (k.includes("php")) return ICON.phpBox;
  if (k.includes("mysql")) return ICON.db;
  if (k.includes("theme")) return ICON.brush;
  if (k.includes("acf")) return ICON.acfGrid;
  if (k.includes("woo")) return ICON.woo;
  if (k.includes("stripe")) return ICON.stripeBox;
  if (k.includes("figma")) return ICON.figma;
  return null;
};

export const PROCESS = [ICON.search, ICON.pen, ICON.code, ICON.rocket, ICON.headset];
export const SECTOR = [ICON.building, ICON.blog, ICON.store, ICON.cart];

export const TAG_ICON = (t: string, i: number) => {
  const k = t.toLowerCase();
  if (k.includes("wordpress")) return ICON.wordpressCircle;
  if (k.includes("theme") || k.includes("layout")) return ICON.window;
  if (k.includes("design") || k.includes("ui") || k.includes("figma")) return ICON.layers;
  if (k.includes("seo") || k.includes("rank") || k.includes("chart")) return ICON.chart;
  if (k.includes("maint") || k.includes("support") || k.includes("care") || k.includes("24")) return ICON.refresh;
  if (k.includes("commerce") || k.includes("shop") || k.includes("store") || k.includes("payment") || k.includes("stripe") || k.includes("invent")) return ICON.cart;
  if (k.includes("speed") || k.includes("fast") || k.includes("perf") || k.includes("starter")) return ICON.rocket;
  if (k.includes("secur") || k.includes("shield")) return ICON.shield;
  if (k.includes("code") || k.includes("api") || k.includes("dev") || k.includes("next") || k.includes("react") || k.includes("type")) return ICON.code;
  if (k.includes("crm") || k.includes("dashboard") || k.includes("internal") || k.includes("saas")) return ICON.layers;
  return [ICON.spark, ICON.target, ICON.code, ICON.pen][i % 4];
};

export const FEATURE_ICON = (title: string, checks: string[], i: number) => {
  const k = (title + " " + checks.join(" ")).toLowerCase();
  if (/woocommerce/.test(k)) return ICON.woo;
  if (/(theme|design|brand|bespoke|layout|figma)/.test(k)) return ICON.pen;
  if (/(perform|fast|speed|caching|web vital|optimis|optimiz|load)/.test(k)) return ICON.rocket;
  if (/(secur|ssl|firewall|malware|protect)/.test(k)) return ICON.shield;
  if (/(backup|restore|version|copy|copies)/.test(k)) return ICON.layers;
  if (/(host|server|cdn|uptime|infrastructure|staging)/.test(k)) return ICON.cube;
  if (/(support|care|help|priority|response)/.test(k)) return ICON.headset;
  if (/(commerce|shop|cart|checkout|product|payment|store|coupon|order)/.test(k)) return ICON.cart;
  if (/(edit|content|dashboard|cms|media|publish)/.test(k)) return ICON.edit;
  if (/(seo|rank|search|traffic|keyword)/.test(k)) return ICON.chart;
  if (/(analyt|report|data|insight|metric)/.test(k)) return ICON.chart;
  if (/(code|dev|api|integrat|build|custom develop)/.test(k)) return ICON.code;
  if (/(strateg|goal|convert|conversion|target|focus)/.test(k)) return ICON.target;
  if (/(workflow|automat|maintain|update)/.test(k)) return ICON.wrench;
  return FEATURE[i % FEATURE.length];
};

export const Clock = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></svg>
);

export const Check = () => (
  <span className="sd-check" aria-hidden>
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
  </span>
);

export const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span className={`sd-eyebrow${light ? " light" : ""}`}><span className="sd-eb-dot" /><span className="sd-eb-line" />{children}</span>
);

export function Heading({ as = "h2", text, em = [], className = "" }: { as?: "h1" | "h2"; text: string; em?: string[]; className?: string }) {
  const Tag = as;
  const norm = (w: string) => w.replace(/[.,—–'’&]/g, "");
  const emSet = new Set(em.map(norm));
  const isEm = (w: string) => emSet.has(norm(w));
  return (
    <Tag className={`sd-h ${className}`}>
      {text.split("\n").map((line, li, lines) => (
        <span className="sd-line" key={li}>
          {line.split(" ").map((w, wi, arr) => (
            <span key={wi}>{isEm(w) ? <em className="sd-em">{w}</em> : w}{wi < arr.length - 1 ? " " : ""}</span>
          ))}
          {li < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}

export const ArrowR = ({ s = 16 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export function pickEm(title: string): string[] {
  const words = title.replace(/[.,]/g, "").split(" ");
  return words.length ? [words[words.length - 1]] : [];
}
