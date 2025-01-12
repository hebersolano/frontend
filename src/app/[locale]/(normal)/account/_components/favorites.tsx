"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { Link } from "@/i18n/routing";
import { Bookmark } from "lucide-react";
import FavoriteItem from "./favorite-item";
import { useTranslations } from "next-intl";

function EmptyAlert() {
  const t = useTranslations("account.favorites.emptyAlert");

  return (
    <div className="space-y-4">
      <Alert className="border-primary">
        <Bookmark className="h-4 w-4" />
        <AlertTitle>{t("title")}</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          {t("description")}
        </AlertDescription>
      </Alert>
      <Link href="/shop" className={buttonVariants()}>
        {t("btn")}
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
