/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // loader: "custom",
    // loaderFile: "./src/lib/image-loader.ts",
    unoptimized: true,
  },
};

export default nextConfig;
