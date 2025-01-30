import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
    // domains: ['avatars.githubusercontent.com',], // Add other domains if necessary
  },
};

export default nextConfig;
