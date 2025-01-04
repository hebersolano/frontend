import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

function FavoriteItem({ product }: { product: Product }) {
  const { removeFavoriteItem } = useFavoriteStore();
  const { addItem } = useCartStore();

  const image = product.images[0];

  return (
    <li className="flex py-6">
      <Link href={"/product/" + product.slug}>
        <Image
          className="aspect-square h-24 w-24 cursor-pointer overflow-hidden rounded-md object-cover sm:h-32 sm:w-auto"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
      </Link>
      <div className="flex flex-1 justify-between px-6">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl">
              {product.productName}
            </h2>
            <p className="text-xl font-bold">{formatPrice(product.price)}</p>
          </div>
          {/* <div className="space-x-2 text-sm">
            <p className="inline rounded-full bg-foreground px-2 py-1 text-background">
              {product.origin}
            </p>
            <p className="inline rounded-full bg-primary px-2 py-1 text-background">
              {product.roast}
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="ml-auto">
          <Button
            onClick={removeFavoriteItem.bind(null, product.documentId)}
            variant="outline"
            className="w-fit rounded-full p-2"
          >
            <X size={20} />
          </Button>
        </div>
        <div className="">
          <Button
            onClick={addItem.bind(null, { ...product, quantity: 1 })}
            className="rounded-full"
          >
            Añadir al carrito
          </Button>
        </div>
      </div>
    </li>
  );
}

export default FavoriteItem;
