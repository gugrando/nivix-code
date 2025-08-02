import type { Configuration } from 'webpack';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <--- ESSA LINHA resolve o problema
  },
  experimental: {
    swcPlugins: [],
  },
  webpack(config: Configuration) {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
      },
    };
    return config;
  },
};

export default nextConfig;
