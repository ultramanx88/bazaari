/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output for Vercel
  output: 'standalone',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
  
  // Minimal webpack config
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' };
    return config;
  },
  
  // Generate build ID
  generateBuildId: () => 'bazaari-' + Date.now(),
};

module.exports = nextConfig;