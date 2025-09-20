/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static export to avoid styled-jsx issues
  output: 'standalone',
  
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    domains: ['localhost', 'your-image-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
  
  // Disable experimental features that might cause issues
  experimental: {
    serverComponentsExternalPackages: ['styled-jsx'],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Disable webpack deprecation warnings
    config.infrastructureLogging = {
      level: 'error',
    };
    
    // Exclude styled-jsx from optimization
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;