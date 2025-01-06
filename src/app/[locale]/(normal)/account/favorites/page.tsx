import Favorites from "../_components/favorites";
import { getTranslations } from "next-intl/server";

export default async function FavoritesPage() {
  const t = await getTranslations("account.favorites");

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t("secTitle")}</h3>
        <p className="text-sm text-muted-foreground">{t("secDescription")}</p>
      </div>
      <Favorites />
    </div>
  );
}
