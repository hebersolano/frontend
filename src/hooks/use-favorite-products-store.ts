import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface FavoriteProductsState {
  favoriteItems: Product[];
  favoriteLength: number;
  addFavoriteItem: (data: Product) => void;
  removeFavoriteItem: (id: number) => void;
  removeAllFavorites: () => void;
}

const useFavoriteStore = create<FavoriteProductsState>()(
  persist(
    (set, get) => ({
      favoriteItems: [],
      favoriteLength: 0,

      addFavoriteItem(data) {
        const { favoriteItems: currentItems } = get();
        const existingItem = currentItems.some((item) => item.id === data.id);

        if (existingItem) {
          toast({
            title: "El producto ya existe en favoritos",
          });
          return;
        }

        set({
          favoriteItems: [...currentItems, data],
          favoriteLength: currentItems.length + 1,
        });
        toast({ title: "Producto añadido a favoritos" });
      },

      removeFavoriteItem(id) {
        const { favoriteItems: currentItems } = get();
        set({
          favoriteItems: [...currentItems.filter((item) => item.id !== id)],
          favoriteLength: currentItems.length - 1,
        });
        toast({ title: "Producto eliminado de favoritos" });
      },

      removeAllFavorites() {
        set({ favoriteItems: [] });
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useFavoriteStore;
