import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'hirekarma.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/hirekarma_ui/**',
      },
    ],
  },
};

export default nextConfig;
