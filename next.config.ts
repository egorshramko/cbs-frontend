import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'standalone',

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
