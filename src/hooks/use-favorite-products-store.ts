import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface FavoriteProductsState {
  favoriteItems: Product[];
  favoriteLength: number;
  isFavoriteItem(productId: string): boolean;
  addFavoriteItem: (data: Product) => void;
  removeFavoriteItem: (productId: string) => void;
  removeAllFavorites: () => void;
}

const useFavoriteStore = create<FavoriteProductsState>()(
  persist(
    (set, get) => ({
      favoriteItems: [],
      favoriteLength: 0,

      isFavoriteItem(productId: string) {
        const { favoriteItems: currentItems } = get();
        const isFavorite = currentItems.some(
          (item) => item.documentId === productId,
        );
        return isFavorite;
      },

      addFavoriteItem(data) {
        const { favoriteItems: currentItems } = get();
        const existingItem = currentItems.some(
          (item) => item.documentId === data.documentId,
        );

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

      removeFavoriteItem(productId) {
        const { favoriteItems: currentItems } = get();
        set({
          favoriteItems: [
            ...currentItems.filter((item) => item.documentId !== productId),
          ],
          favoriteLength: currentItems.length - 1,
        });
        toast({ title: "Producto eliminado de favoritos" });
      },

      removeAllFavorites() {
        set({ favoriteItems: [], favoriteLength: 0 });
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useFavoriteStore;
