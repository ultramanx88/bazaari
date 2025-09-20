/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export to avoid server-side rendering issues
  output: 'export',
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
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
  
  // Generate build ID
  generateBuildId: () => 'bazaari-static-' + Date.now(),
};

module.exports = nextConfig;