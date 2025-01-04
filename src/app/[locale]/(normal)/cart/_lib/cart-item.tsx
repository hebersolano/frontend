import QuantitySelector from "@/components/store/quantity-selector";
import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import type { ProductCartItem } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

function CartItem({ product }: { product: ProductCartItem }) {
  const [quantity, setQuantity] = useState(() => product.quantity);
  const { removeItem, updateQuantity } = useCartStore();
  const image = product.images[0];

  useEffect(() => {
    if (product.quantity === quantity) return;
    updateQuantity(product.documentId, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <li className="flex gap-6 border-b py-4">
      <Link href={"/product/" + product.slug}>
        <Image
          className="aspect-square h-24 w-24 cursor-pointer overflow-hidden rounded-md object-cover sm:w-auto"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
      </Link>
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="scroll-m-20 text-xl font-medium tracking-tight lg:text-2xl">
            {product.productName}
          </h2>
          <p className="text-xl font-bold text-muted-foreground">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-right">
            <Button
              onClick={removeItem.bind(null, product.id)}
              variant="outline"
              className="rounded-full p-2"
            >
              <X size={20} />
            </Button>
          </div>
          <QuantitySelector
            size="sm"
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
