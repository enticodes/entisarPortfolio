import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/service", destination: "/" },
      { source: "/services", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/skill", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/project", destination: "/" },
      { source: "/clients", destination: "/" },
      { source: "/client", destination: "/" },
      { source: "/contact", destination: "/" },
      { source: "/home", destination: "/" },
    ];
  },
};

export default nextConfig;
