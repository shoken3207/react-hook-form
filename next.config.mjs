/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["source.unsplash.com", "picsum.photos"], // 使用するホストを追加
  },
};

export default nextConfig;
