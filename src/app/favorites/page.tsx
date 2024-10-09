"use client";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import CartItem from "../cart/_lib/cart-item";
import FavoriteItem from "./_lib/favorite-item";

function FavoritesPage() {
  const { favoriteItems, favoriteLength } = useFavoriteStore();
  return (
    <div className="mx-auto max-w-4xl py-4 sm:px-24 sm:py-32">
      <h1 className="sm:text-2xl">Products que te gustan</h1>
      <div>
        <div>
          {favoriteLength <= 0
            ? "No hay productos en la sección de favoritos"
            : favoriteItems.map((item) => (
                <ul key={item.id}>
                  <FavoriteItem product={item} />
                </ul>
              ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
