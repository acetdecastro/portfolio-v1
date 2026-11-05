import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-render every page so the portfolio can be hosted on any static host.
  // Remove this option if a future page needs server actions or request-time data.
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
