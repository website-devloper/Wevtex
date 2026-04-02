/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
};

export default nextConfig;
