/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for deployment
  output: 'standalone',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
  
  // Enable webpack build worker for faster builds
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Optimized webpack config
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations in production
    if (!dev) {
      config.infrastructureLogging = { level: 'error' };
      
      // Enable webpack caching for faster rebuilds
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    return config;
  },
  
  // Generate build ID
  generateBuildId: () => 'bazaari-' + Date.now(),
};

module.exports = nextConfig;