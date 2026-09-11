import { readFileSync } from "node:fs";

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
    // Tree-shake barrel imports so only the used icons/motion primitives ship.
    optimizePackageImports: ["swiper", "react-awesome-reveal"],
  },

  async redirects() {
    return Object.entries(SERVICE_URLS).map(([id, url]) => ({
      source: `/services/${id}`,
      destination: `/${url}`,
      statusCode: 301,
    }));
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
        source: "/:path*",
        headers: SECURITY_HEADERS,
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
