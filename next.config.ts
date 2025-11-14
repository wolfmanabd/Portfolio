import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "images.unsplash.com", // your previous pattern
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", // <-- add this
      },
      {
        protocol: "https",
        hostname: "s.wordpress.com" // used for screenshot fallback in portfolio if desired
      }
    ] 
  },
     
};

export default nextConfig;
