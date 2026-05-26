import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "stargamepark.com",
        pathname: "/bin/minihome/upload/**",
      },
      {
        protocol: "http",
        hostname: "www.stargamepark.com",
        pathname: "/bin/minihome/upload/**",
      },
    ],
  },
};

export default nextConfig;
