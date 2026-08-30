import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // 서지민 - 제가 쓰고 싶은 사진 접속 사이트를 지정해보았는데, 경로 추가하지 말고 이미지 업로드 해서 할까요?
      {
        protocol: "https",
        hostname: "img.onnada.com",
      },
    ],
  },
};

export default nextConfig;
