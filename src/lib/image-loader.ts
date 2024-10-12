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
  return (
    process.env.NEXT_PUBLIC_CLOUDINARY_URL +
    `/f_auto/c_scale,w_${width}/q_${quality}/${src}`
  );
  //return `https://res.cloudinary.com/demo/image/upload/f_auto/c_scale,w_${width}/q_${quality}/${src}`;
}
