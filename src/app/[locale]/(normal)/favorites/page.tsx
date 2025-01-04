"use client";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import FavoriteItem from "./_lib/favorite-item";
import { HeadingH1 } from "@/components/ui/typography";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bookmark } from "lucide-react";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "@/components/ui/button";

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

function FavoritesPage() {
  const { favoriteItems, favoriteLength } = useFavoriteStore();
  return (
    <div className="min-h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-12 sm:p-24">
        <div className="mb-8">
          <HeadingH1>Favoritos</HeadingH1>
        </div>
        <div>
          <div>
            <ul className="divide-y divide-solid">
              {favoriteLength <= 0 ? (
                <EmptyAlert />
              ) : (
                favoriteItems.map((item) => (
                  <FavoriteItem key={item.id} product={item} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
