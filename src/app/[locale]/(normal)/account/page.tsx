import { Separator } from "@/components/ui/separator";
import ThemeSelector from "./_components/theme-selector";
import Profile from "./_components/profile";
import { getTranslations } from "next-intl/server";

export default async function AccountPage() {
  const t = await getTranslations("account");

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
