import { ProductCartItem } from "@/types/product";
import { useMemo } from "react";

export function useTotalPrice(items: ProductCartItem[]) {
  return useMemo(
    () => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
    [items],
  );
}
