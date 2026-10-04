import type { NextConfig } from "next";
import { backendUrl } from "./src/shared/lib/backend";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${backendUrl}/api/:path*` }];
  },
};

export default nextConfig;
