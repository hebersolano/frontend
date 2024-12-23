/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // loader: "custom",
    // loaderFile: "./src/lib/image-loader.ts",
    unoptimized: true,
  },
  // i18n: {
  //   locales: ["en", "es"],
  //   defaultLocale: "es",
  //   localeDetection: false,
  // },
};

export default nextConfig;
