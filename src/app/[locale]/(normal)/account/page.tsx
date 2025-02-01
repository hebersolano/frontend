import { Separator } from "@/components/ui/separator";
import { getTranslations } from "@/i18n/get-translations";
import { Page } from "../../_lib/types";
import Profile from "./_lib/profile";
import ThemeSelector from "./_lib/theme-selector";

export default async function AccountPage({ params }: Page) {
  const locale = (await params).locale;
  const t = await getTranslations("account", locale);

  return (
    <div className="flex flex-grow flex-col space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t("profile.title")}</h3>
        <p className="text-sm text-muted-foreground">
          {t("profile.description")}
        </p>
      </div>
      <Profile />

      <Separator />
      <div>
        <h3 className="text-lg font-medium">{t("theme.title")}</h3>
        <p className="text-sm text-muted-foreground">
          {t("theme.description")}
        </p>
      </div>
      <ThemeSelector />
    </div>
  );
}
