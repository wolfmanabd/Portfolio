import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", 
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", 
      },
      {
        protocol: "https",
        hostname: "s.wordpress.com",
      },
      { 
        protocol: "https", 
        hostname: "cdn.jsdelivr.net" 
      },
      { 
        protocol: "https", 
        hostname: "raw.githubusercontent.com" 
      },
      { 
        protocol: "https", 
        hostname: "upload.wikimedia.org" 
      },
      { 
        protocol: "https", 
        hostname: "avatars.githubusercontent.com" 
      },
      { 
        protocol: "https", 
        hostname: "raw.githubusercontent.com" 
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      }
    ],
  },
};

export default nextConfig;
