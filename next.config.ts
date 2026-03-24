import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // This fixes the 404 errors on internal pages
  reactCompiler: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;