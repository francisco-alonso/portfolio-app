/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Disable automatic image optimization (required for static exports)
    },
  };
  
  module.exports = nextConfig;
  