/**
 * @type {import('next').NextConfig}
 */
 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Disable automatic image optimization (required for static exports)
    },
    basePath: isProd ? '/portfolio-app' : '',
    assetPrefix: isProd ? '/portfolio-app/' : '',
  };
  
  module.exports = nextConfig;
  