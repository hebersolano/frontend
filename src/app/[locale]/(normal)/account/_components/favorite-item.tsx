import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function FavoriteItem({ product }: { product: Product }) {
  const t = useTranslations("favorites.favoriteItem");
  const { removeFavoriteItem } = useFavoriteStore();
  const { addItem } = useCartStore();

  const image = product.images[0];

  return (
    <li className="flex max-w-xl flex-col space-y-3 rounded-lg border p-6 sm:flex-row sm:space-y-0 sm:p-3">
      <Link href={"/product/" + product.slug} className="sm:mr-3">
        <Image
          className="aspect-square w-full cursor-pointer overflow-hidden rounded-md object-cover sm:h-28 sm:w-28"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
      </Link>
      <div className="flex flex-col justify-between sm:mr-auto sm:py-1">
        <h2 className="scroll-m-20 text-lg font-medium tracking-tight lg:text-xl">
          {product.productName}
        </h2>
        <p className="text-lg text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
      <div className="flex justify-between sm:flex-col-reverse sm:items-end sm:py-1">
        <Button
          onClick={addItem.bind(null, { ...product, quantity: 1 })}
          size="sm"
          className="rounded-full"
        >
          {t("btns.addToCart")}
        </Button>
        <Button
          onClick={removeFavoriteItem.bind(null, product.documentId)}
          variant="outline"
          size="sm"
          className="w-fit rounded-full p-2"
        >
          <X size={16} />
        </Button>
      </div>
    </li>
  );
}

export default FavoriteItem;
