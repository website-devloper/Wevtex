/**
 * Single source of truth for the site's canonical origin.
 *
 * The domain (wevtex.com) is chosen but NOT bought/deployed yet. When it's live,
 * set NEXT_PUBLIC_SITE_URL in the host env — or change the fallback below (one line).
 * No trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://wevtex.com"
).replace(/\/$/, "");

/** Build an absolute URL from a path: abs("/about") -> "https://wevtex.com/about". */
export const abs = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
