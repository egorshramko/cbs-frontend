import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: String(process.env.NEXT_PUBLIC_API_DOMAIN),
        port: '9000'
      }
    ]
  },


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
