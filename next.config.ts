import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888',
        pathname: '/**',
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
