import { Page } from "@/app/[locale]/_lib/types";
import Favorites from "../_lib/favorites";
import { getTranslations } from "@/i18n/get-translations";

export default async function FavoritesPage({ params }: Page) {
  const locale = (await params).locale;
  const t = await getTranslations("account.favorites", locale);

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
