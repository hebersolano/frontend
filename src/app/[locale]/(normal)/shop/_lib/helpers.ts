import { Product } from "@/types/product";

export function filterProducts(
  { origin, roast }: Record<string, string>,
  products: Product[],
) {
  return !origin && !roast
    ? products
    : products?.filter((product) => {
        if (origin && roast)
          return product.origin === origin && product.roast === roast;
        if (origin) return product.origin === origin;
        if (roast) return product.roast === roast;
      });
}
