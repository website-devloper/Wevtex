import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, Check, SECTOR_ICON } from "./ServiceShared";

export function ServiceSectors({ service }: { service: Service }) {
  if (!service.sectors) return null;

  return (
    <section className="sd-section sd-sectors">
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap">
            <Eyebrow>By sector</Eyebrow>
          </div>
          <Heading text={service.sectors.title} em={service.sectors.titleEm || []} />
          {service.sectors.subtitle && <p className="sd-sub">{service.sectors.subtitle}</p>}
        </div>
        <div className="sd-grid-2 reveal">
          {service.sectors.groups.map((g, i) => (
            <div className="sd-card sd-scard" key={i}>
              <span className="sd-icon-circle lg">{SECTOR_ICON(g.label)}</span>
              <div className="sd-card-body">
                <h4>{g.label}</h4>
                <span className="sd-divider"></span>
                <ul className="sd-checks">
                  {g.cases.map((c, ci) => (
                    <li key={ci}>
                      <Check />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
