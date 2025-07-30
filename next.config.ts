import type { NextConfig } from "next";
module.exports = {
  experimental: {
    swcPlugins: [],
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
