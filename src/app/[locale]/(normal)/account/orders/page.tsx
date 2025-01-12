import { Page } from "@/app/[locale]/_lib/types";
import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";
import { getTranslations } from "@/i18n/get-translations";

async function SettingsAccountPage({ params }: Page) {
  const locale = (await params).locale;
  const t = await getTranslations("account.orders", locale);

  console.log(locale);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t("title")}</h3>
        <p className="text-sm text-muted-foreground">Tú historial de ordenes</p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}

export default SettingsAccountPage;
