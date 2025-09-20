/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation completely
  output: 'standalone',
  
  // Skip static optimization
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['styled-jsx'],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  },
  
  // Webpack config to handle styled-jsx
  webpack: (config, { isServer }) => {
    config.infrastructureLogging = { level: 'error' };
    
    // Completely exclude styled-jsx from server builds
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'styled-jsx': 'styled-jsx',
        'styled-jsx/style': 'styled-jsx/style'
      });
    }
    
    return config;
  },
  
  // Custom page extensions to avoid conflicts
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Generate build ID
  generateBuildId: () => 'bazaari-' + Date.now(),
};

module.exports = nextConfig;