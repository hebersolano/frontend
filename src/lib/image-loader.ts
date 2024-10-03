export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  console.log("loader props", src, width, quality);
  return process.env.NEXT_PUBLIC_API_URL + src;
}
