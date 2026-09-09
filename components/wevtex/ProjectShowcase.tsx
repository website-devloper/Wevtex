import { PROJECTS_ORDERED } from "@/lib/projects-data";

/**
 * Every delivered project, laid out open.
 *
 * The homepage index is an accordion because it sits between other sections
 * and has to stay short. This page exists only for the work, so nothing is
 * hidden behind a click: screenshot, result, stack and a link to the live
 * site are all visible at once.
 *
 * Rows alternate which side the screenshot sits on, so the eye is not walking
 * down one straight edge for ten items.
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function ProjectShowcase() {
  return (
    <div className="pj-list">
      {PROJECTS_ORDERED.map((p) => (
        <article className="pj-row reveal" key={p.slug}>
          <a
            className="pj-shot"
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvrir le site ${p.title}`}
            style={{ backgroundImage: `url(${p.screenshot})` }}
          />

          <div className="pj-body">
            <div className="pj-meta">
              <span>{p.category}</span>
              <span className="pj-dot" aria-hidden />
              <span>{p.year}</span>
            </div>

            <h2 className="pj-title">{p.title}</h2>
            <p className="pj-desc">{p.description}</p>

            <ul className="pj-stack">
              {p.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="pj-metric">
              <span className="pj-metric-n">{p.metricValue}</span>
              <span className="pj-metric-l">{p.metricLabel}</span>
            </div>

            <a className="pj-visit" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
              Voir le site web
              {ARROW}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
