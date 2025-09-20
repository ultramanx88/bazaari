/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid build issues
  swcMinify: true,
  
  // Skip static optimization for problematic pages
  experimental: {
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
  
  // Minimal webpack config
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' };
    return config;
  },
};

module.exports = nextConfig;