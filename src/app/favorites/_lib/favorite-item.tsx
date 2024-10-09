import { Button } from "@/components/ui/button";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FavoriteItem({ product }: { product: Product }) {
  const { removeFavoriteItem } = useFavoriteStore();
  const image = product.images[0];

  return (
    <li className="flex border-b py-6">
      <Link href={"/product/" + product.slug}>
        <Image
          className="h-24 w-24 cursor-pointer overflow-hidden rounded-md sm:h-32 sm:w-auto"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
      </Link>
      <div className="flex flex-1 justify-between px-6">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="font-bold">{formatPrice(product.price)}</p>
          </div>
          <div className="space-x-2 text-sm">
            <p className="inline rounded-full bg-foreground px-2 py-1 text-background">
              {product.origin}
            </p>
            <p className="inline rounded-full bg-primary px-2 py-1 text-background">
              {product.roast}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="ml-auto">
          <Button
            onClick={removeFavoriteItem.bind(null, product.id)}
            variant="outline"
            className="w-fit rounded-full p-2"
          >
            <X size={20} />
          </Button>
        </div>
        <div className="">
          <Button className="rounded-full">Añadir al carrito</Button>
        </div>
      </div>
    </li>
  );
}

export default FavoriteItem;
