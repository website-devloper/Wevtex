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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },

  experimental: {
    // Tree-shake barrel imports so only the used icons/motion primitives ship.
    optimizePackageImports: ["swiper", "react-awesome-reveal"],
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
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
