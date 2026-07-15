import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "/dist",
  assetPrefix: "/dist/assets",
};

export default nextConfig;
