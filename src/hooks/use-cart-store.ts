import type { ProductCartItem } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface CartState {
  items: ProductCartItem[];
  cartLength: number;
  addItem: (data: ProductCartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartLength: 0,

      addItem(data) {
        const { items: currentItems } = get();
        const existingItem = currentItems.some((item) => item.id === data.id);

        if (existingItem) {
          toast({
            title: "El producto ya existe en el carrito",
          });
          return;
        }

        if (!data.quantity) data.quantity = 1;

        set({
          items: [...currentItems, data],
          cartLength: currentItems.length + 1,
        });
        toast({ title: "Producto añadido al carrito" });
      },

      updateQuantity(id: string, quantity: number) {
        console.log(id, quantity);
        const { items: currentItems } = get();
        const items = currentItems.map((item) =>
          item.documentId === id ? { ...item, quantity } : item,
        );

        set({
          items,
        });
      },

      removeItem(id) {
        const { items: currentItems } = get();
        set({
          items: [...currentItems.filter((item) => item.id !== id)],
          cartLength: currentItems.length - 1,
        });
      },

      removeAll() {
        set({ items: [], cartLength: 0 });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCartStore;
