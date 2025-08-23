import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'globals.css')]
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, 
    dangerouslyAllowSVG: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/uploads/:path*',
  //       destination: `${process.env.SERVER_URL}/uploads/:path*`
  //     }
  //   ]
  // }
};

export default nextConfig;
