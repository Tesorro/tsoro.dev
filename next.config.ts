import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'app', 'globals.scss')]
  // },
  reactStrictMode: true,
  poweredByHeader: false,
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
