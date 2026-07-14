import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    qualities: [70, 75, 100],
  },
};

export default nextConfig;
