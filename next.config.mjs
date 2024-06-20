/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'use-credentials',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/*/**',
      },
    ],
  },
};

export default nextConfig;
