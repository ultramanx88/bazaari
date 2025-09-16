/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@bazaari/shared', '@bazaari/ui'],
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'your-image-domain.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
};

module.exports = nextConfig;