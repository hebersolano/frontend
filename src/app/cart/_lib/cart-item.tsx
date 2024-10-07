import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CartItem({ product }: { product: Product }) {
  const { removeItem } = useCartStore();
  const image = product.images[0];

  return (
    <li className="flex cursor-pointer border-b py-6">
      <Link href={"/product/" + product.slug}>
        <Image
          className="h-24 w-24 overflow-hidden rounded-md sm:h-32 sm:w-auto"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
      </Link>
      <div className="flex flex-1 justify-between px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <div className="flex items-center justify-between gap-3 text-sm">
            <p className="rounded-full bg-foreground px-2 py-1 text-background">
              {product.origin}
            </p>
            <p className="rounded-full bg-primary px-2 py-1 text-background">
              {product.roast}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={removeItem.bind(null, product.id)}
          variant="outline"
          className="rounded-full p-2"
        >
          <X size={20} />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
