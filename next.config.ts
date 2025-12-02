import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Bundle optimization
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },

  // Enable webpack bundle analyzer in development
  webpack: (config, { dev, isServer }) => {
    // Bundle analyzer
    if (process.env.ANALYZE === "true") {
      const withBundleAnalyzer = require("@next/bundle-analyzer")({
        enabled: true,
      });
      return withBundleAnalyzer(config);
    }

    return config;
  },
};

export default nextConfig;
