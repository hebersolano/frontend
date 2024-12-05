import QuantitySelector from "@/components/store/quantity-selector";
import { TableCell, TableRow } from "@/components/ui/table";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import { ProductCartItem } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProductTableRow({ product }: { product: ProductCartItem }) {
  const [quantity, setQuantity] = useState(() => product.quantity);
  const { removeItem, updateQuantity } = useCartStore();
  const image = product.images[0];

  useEffect(() => {
    if (product.quantity === quantity) return;
    updateQuantity(product.documentId, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <TableRow
      key={product.id}
      className="flex flex-col rounded-md border-x border-b-0 border-t text-right shadow-sm *:border-b last:border-b-0 sm:table-row sm:rounded-none sm:border-0 sm:text-left sm:shadow-none"
    >
      <TableCell className="">
        <button
          onClick={removeItem.bind(null, product.id)}
          className="aspect-square rounded-full border p-1 sm:p-2"
        >
          <X className="h-4 w-4" />
        </button>
      </TableCell>
      <TableCell className="text-center">
        <Link href={"/product/" + product.slug} className="flex justify-center">
          <Image
            className="aspect-square h-24 w-24 cursor-pointer overflow-hidden rounded-sm object-cover sm:w-auto"
            src={process.env.NEXT_PUBLIC_API_URL + image.url}
            alt={image.alternativeText || "product image image"}
            height={image.height}
            width={image.width}
          />
        </Link>
      </TableCell>
      <TableCell className="before:float-left before:font-medium before:text-foreground before:content-['Product:'] sm:before:content-none">
        <Link href={"/product/" + product.slug} className="text-secondary">
          {product.productName}
        </Link>
      </TableCell>
      <TableCell className="before:float-left before:font-medium before:text-foreground before:content-['Precio:'] sm:before:content-none">
        {formatPrice(product.price)}
      </TableCell>
      <TableCell className="before:float-left before:font-medium before:text-foreground before:content-['Cantidad:'] sm:before:content-none">
        <span className="" />
        <QuantitySelector
          size="sm"
          quantity={quantity}
          setQuantity={setQuantity}
          className="ml-auto"
        />
      </TableCell>
      <TableCell className="before:mr-4 before:font-medium before:text-foreground before:content-['Subtotal:'] sm:before:content-none">
        {formatPrice(product.price * quantity)}
      </TableCell>
    </TableRow>
  );
}

export default ProductTableRow;
