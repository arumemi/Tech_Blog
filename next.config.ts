import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
