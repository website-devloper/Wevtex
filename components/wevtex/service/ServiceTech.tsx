import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, TECH_GROUP_ICON, TECH_CHIP_ICON } from "./ServiceShared";

export function ServiceTech({ service }: { service: Service }) {
  if (!service.tech) return null;

  return (
    <section className="sd-section sd-tech bg-dark">
      <svg className="sd-tech-bg" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.03" d="M400 0C400 0 450 150 600 150C750 150 800 0 800 0C800 0 750 150 750 300C750 450 800 600 800 600C800 600 650 550 500 550C350 550 300 700 300 700C300 700 350 550 350 400C350 250 300 100 300 100Z" fill="currentColor" />
        <circle opacity="0.02" cx="600" cy="200" r="300" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        <circle opacity="0.03" cx="600" cy="200" r="200" stroke="currentColor" strokeWidth="1" />
        <path opacity="0.04" d="M600 50 L600 350 M450 200 L750 200 M494 94 L706 306 M494 306 L706 94" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap">
            <Eyebrow>Technologies</Eyebrow>
          </div>
          <Heading text={service.tech.title} em={service.tech.titleEm || []} />
          {service.tech.subtitle && <p className="sd-sub">{service.tech.subtitle}</p>}
        </div>
        <div className="sd-grid-4 reveal">
          {service.tech.groups.map((g, i) => (
            <div className="sd-card sd-techcard" key={i}>
              <div className="sd-techcard-top">
                <div className="sd-num sm">{String(i + 1).padStart(2, "0")}</div>
                <span className="sd-plain-icon">{TECH_GROUP_ICON(g.label, g.items)}</span>
              </div>
              <span className="sd-divider"></span>
              <span className="sd-techcard-label">{g.label}</span>
              {g.desc && <p className="sd-techcard-desc">{g.desc}</p>}
              <div className="sd-chips">
                {g.items.map((it) => {
                  const ChipIcon = TECH_CHIP_ICON(it);
                  return (
                    <span className="sd-chip" key={it}>
                      {ChipIcon && <span className="sd-chip-ic">{ChipIcon}</span>}
                      {it}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
