import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "rickandmortyapi.com",
                pathname:"/api/character/avatar/**"
            }
        ]
    }
};

export default nextConfig;
