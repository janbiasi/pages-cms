import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Support configurable output mode for Docker deployments
  output: process.env.NEXT_OUTPUT_MODE || undefined,
};

export default withBundleAnalyzer(nextConfig);
