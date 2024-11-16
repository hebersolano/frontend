"use client";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import FavoriteItem from "./_lib/favorite-item";
import { HeadingH1 } from "@/components/ui/typography";

function FavoritesPage() {
  const { favoriteItems, favoriteLength } = useFavoriteStore();
  return (
    <div className="mx-auto max-w-4xl py-4">
      <div className="my-8">
        <HeadingH1>Favoritos</HeadingH1>
      </div>
      <div>
        <div>
          <ul className="divide-y divide-solid">
            {favoriteLength <= 0
              ? "No hay productos en la sección de favoritos"
              : favoriteItems.map((item) => (
                  <FavoriteItem key={item.id} product={item} />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
