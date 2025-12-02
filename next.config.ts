import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */

  // Bundle optimization
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },
};

export default withBundleAnalyzer(nextConfig);
