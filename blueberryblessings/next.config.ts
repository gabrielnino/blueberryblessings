import type { NextConfig } from "next";

// Trigger a fresh Vercel build after setting the Root Directory to 'blueberryblessings'
const nextConfig: NextConfig = {
  devIndicators: false, // Disables all default Next.js development badges/indicators
};

export default nextConfig;
