import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  // Note: swcMinify is default in Next.js 15+, compress is handled by deployment
  productionBrowserSourceMaps: false,
  
  // Image optimization
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
    // Optimize image sizes
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure quality levels for Next.js 16+
    qualities: [75, 85, 95],
    // Cache optimized images for 365 days
    minimumCacheTTL: 31536000,
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/hirekarma_ui/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
