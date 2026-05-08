import type { Configuration } from 'webpack';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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
