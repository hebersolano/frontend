"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { Link } from "@/i18n/routing";
import { Bookmark } from "lucide-react";
import FavoriteItem from "./favorite-item";

function EmptyAlert() {
  return (
    <div className="space-y-4">
      <Alert className="border-primary">
        <Bookmark className="h-4 w-4" />
        <AlertTitle>Aún no tienes productos favoritos</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          Puedes marcar productos como favoritos desde nuestra tienda
        </AlertDescription>
      </Alert>
      <Link href="/shop" className={buttonVariants()}>
        Ir a la tienda
      </Link>
    </div>
  );
}

function Favorites() {
  const { favoriteItems, favoriteLength } = useFavoriteStore();
  const areFavorites = favoriteLength > 0;

  return (
    <div>
      <div>
        {!areFavorites && <EmptyAlert />}
        {areFavorites && (
          <ul className="space-y-4">
            {favoriteItems.map((item) => (
              <FavoriteItem key={item.id} product={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Favorites;
