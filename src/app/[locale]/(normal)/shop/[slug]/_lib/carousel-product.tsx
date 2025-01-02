import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { Image as ImageT } from "@/types/product";
import Image from "next/image";

function CarouselProduct({ images }: { images: ImageT[] }) {
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id} className="">
              <Image
                className="overflow-hidden rounded-lg border"
                src={process.env.NEXT_PUBLIC_API_URL + image.url}
                alt={image.alternativeText || "product image image"}
                height={image.height}
                width={image.width}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
