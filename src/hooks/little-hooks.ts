import { ProductCartItem } from "@/types/product";

export function getTotalPrice(items: ProductCartItem[]) {
  return items.reduce((prev, curr) => {
    console.log(prev + curr.price * curr.quantity);
    return prev + curr.price * curr.quantity;
  }, 0);
}
