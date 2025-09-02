import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/crochet-arts',
  assetPrefix: '/crochet-arts'
};

export default nextConfig;
