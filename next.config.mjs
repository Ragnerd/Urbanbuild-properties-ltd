/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // disables Lightning CSS
  },
  typescript: {
    ignoreDevErrors: true, // ignore TS errors during dev
  },
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during builds
  },
};

export default nextConfig;
