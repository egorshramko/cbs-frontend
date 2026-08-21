import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'standalone',
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: true
      }
    ];
  }

};

export default nextConfig;
