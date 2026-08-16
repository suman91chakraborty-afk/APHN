/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static HTML export
  },
  eslint: {
    // Ignore ESLint errors during production build (prevents unescaped quotes, etc. from failing build)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript type-checking errors during production build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
