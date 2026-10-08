import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

/* ------------------------------------------------------- generated content
 * The dashboard writes YAML under content/; the site reads a few JSON files
 * derived from it — the price table, the contact details, the FR/EN pairs and
 * the service URLs. They are regenerated here rather than only in a "prebuild"
 * script, because a host that runs `next build` directly would skip that step,
 * and an editor's change would never reach the pages. This runs for `next dev`
 * too, so a save shows up on the next refresh.
 */
try {
  execFileSync("npx", ["tsx", "scripts/sync-pairs.ts"], { stdio: "inherit", shell: true });
} catch {
  // The script prints what is wrong and exits non-zero; stop the build here so
  // a broken entry cannot ship as stale data.
  throw new Error("Content could not be generated — see the message above.");
}

/* Service id -> public URL slug. Shared with lib/site-links.ts, so every old
   /services/<id> address 301s to the page that replaced it. */
const SERVICE_URLS = JSON.parse(
  readFileSync(new URL("./lib/service-urls.json", import.meta.url), "utf8"),
);

/* ----------------------------------------------------------------- security
 * Content-Security-Policy: the browser runs scripts only from this site and
 * from Google Tag Manager (analytics, loaded after consent). A script injected
 * from anywhere else is refused, as are plugins, framing by other sites, a
 * rewritten <base> and forms posting elsewhere.
 * 'unsafe-inline' stays for scripts because the pages are static: Next's
 * inline bootstrap cannot carry a per-request nonce without rendering every
 * page on each request, which would cost the speed the site is built on.
 * Dev needs eval and websockets for hot reload, production does not. */
const isProd = process.env.NODE_ENV === "production";
const GOOGLE = "https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com";
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${GOOGLE}`,
  "font-src 'self' data:",
  `connect-src 'self' ${GOOGLE}${isProd ? "" : " ws: wss:"}`,
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

/* The content dashboard is a different kind of page: it runs in the browser
 * and talks straight to GitHub — the API for the content, githubusercontent
 * for avatars — which "connect-src 'self'" forbids. Rather than open the whole
 * site up for one authenticated page, /keystatic gets its own policy and the
 * strict one above stops matching it. Two CSP headers on one response are
 * enforced as their intersection, so these must not overlap. */
const DASHBOARD_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://avatars.githubusercontent.com https://*.githubusercontent.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self' https://api.github.com https://*.githubusercontent.com${isProd ? "" : " ws: wss:"}`,
  "media-src 'self' blob:",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  // Signing in posts to GitHub.
  "form-action 'self' https://github.com",
  "frame-ancestors 'none'",
].join("; ");

const DASHBOARD_HEADERS = [
  { key: "Content-Security-Policy", value: DASHBOARD_CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
];

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Superseded by frame-ancestors in the CSP, kept for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), serial=(), hid=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  images: {
    // Next 16 only honours quality values declared here. 90 keeps the flat
    // colour fields in the transparent service illustrations free of banding.
    qualities: [75, 82, 90],
    // AVIF first (~20% smaller than WebP), WebP as the fallback.
    formats: ["image/avif", "image/webp"],
    // Optimised variants are immutable — cache them for a year.
    minimumCacheTTL: 31536000,
    // No remote hosts: every image is served from this site. An allowed remote
    // host is a host the image optimiser will fetch from on request.
  },

  experimental: {
    // French and English each have their own root layout (app/(fr), app/(en))
    // so every page carries the right <html lang>. With no single root layout,
    // an address that matches no route at all is answered by
    // app/global-not-found.tsx.
    globalNotFound: true,
  },

  async redirects() {
    return [
      // The About page was removed on 2026-09-12. A 301 sends its link equity,
      // and anyone following an old link, to the homepage instead of a 404.
      { source: "/about", destination: "/", statusCode: 301 },
      // The services index was removed on 2026-09-28: the nav opens the
      // dropdown instead, and /tarifs is the page that lists everything.
      { source: "/services", destination: "/tarifs", statusCode: 301 },
      { source: "/en/services", destination: "/en/pricing", statusCode: 301 },
      ...Object.entries(SERVICE_URLS).map(([id, url]) => ({
        source: `/services/${id}`,
        destination: `/${url}`,
        statusCode: 301,
      })),
    ];
  },

  async headers() {
    return [
      {
        // Files in public/ are not fingerprinted by Next, so they default to a
        // short TTL. These are content-stable, so pin them for a year and
        // rename the file when the content changes.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Everything except the dashboard, which has its own policy below.
        source: "/((?!keystatic|api/keystatic).*)",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/keystatic/:path*",
        headers: DASHBOARD_HEADERS,
      },
      {
        source: "/keystatic",
        headers: DASHBOARD_HEADERS,
      },
      {
        source: "/api/keystatic/:path*",
        headers: DASHBOARD_HEADERS,
      },
      {
        // Form responses are per request and must never be cached.
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
