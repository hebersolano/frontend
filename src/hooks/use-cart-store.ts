import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface CartState {
  items: Product[];
  cartLength: number;
  addItem: (data: Product) => void;
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

        set({
          items: [...currentItems, data],
          cartLength: currentItems.length + 1,
        });
        toast({ title: "Producto añadido al carrito" });
      },

      removeItem(id) {
        const { items: currentItems } = get();
        set({
          items: [...currentItems.filter((item) => item.id !== id)],
          cartLength: currentItems.length - 1,
        });
        toast({ title: "Producto eliminado del carrito" });
      },

      removeAll() {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCartStore;
