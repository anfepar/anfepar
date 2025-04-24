import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/michelle-felipe",
        destination: "https://wedding-template-v1.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
