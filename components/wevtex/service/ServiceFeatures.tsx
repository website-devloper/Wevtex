import React from "react";
import type { FeatureSection } from "../../../lib/services-data";
import { Eyebrow, Heading, Check, FEATURE_ICON } from "./ServiceShared";

export function ServiceFeatures({ 
  featureSections 
}: { 
  featureSections?: FeatureSection[] 
}) {
  if (!featureSections || featureSections.length === 0) return null;

  return (
    <>
      {featureSections.map((fs, si) => {
        const numbered = si === 1; // "Maintained & secure" style
        return (
          <section className={`sd-section sd-features${numbered ? " numbered" : ""}`} key={si}>
            <span className="sd-motif sd-motif-tr soft" aria-hidden></span>
            <div className="container">
              <div className="sd-head reveal">
                <div className="sd-eyebrow-wrap">
                  <Eyebrow>{fs.eyebrow}</Eyebrow>
                </div>
                <Heading text={fs.title} em={fs.titleEm || []} />
                {fs.subtitle && <p className="sd-sub">{fs.subtitle}</p>}
              </div>
              <div className="sd-grid-2 reveal">
                {fs.cards.map((c, ci) => {
                  const iconContent = FEATURE_ICON(c.title, c.checks, si * 4 + ci);
                  const isNumIcon = typeof iconContent === "string";

                  return (
                    <div className={`sd-card ${numbered ? "sd-mcard" : "sd-fcard"}`} key={ci}>
                      {numbered ? (
                        <>
                          <div className="sd-num lg">{String(ci + 1).padStart(2, "0")}</div>
                          <div className="sd-mcard-body">
                            <div className="sd-fhead">
                              <span className="sd-plain-icon">{iconContent}</span>
                              <h4>{c.title}</h4>
                            </div>
                            <ul className="sd-checks">
                              {c.checks.map((ch, chi) => (
                                <li key={chi}>
                                  <Check />
                                  {ch}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className={`sd-icon-circle${isNumIcon ? " num" : ""}`}>
                            {iconContent}
                          </span>
                          <div className="sd-card-body">
                            <h4>{c.title}</h4>
                            <p className="sd-card-desc">{c.desc}</p>
                            <ul className="sd-checks">
                              {c.checks.map((ch, chi) => (
                                <li key={chi}>
                                  <Check />
                                  {ch}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
