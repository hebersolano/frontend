import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Page } from "./_lib/types";

async function NotFound({ params }: Page) {
  const res = await params;
  if (!res) return null;
  const locale = res.locale;
  setRequestLocale(locale);
  console.log(">>>NotFound page locale", locale);
  const t = await getTranslations("notFound");

  return (
    <div className="h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background">
        <div className="p-12 sm:p-24">
          <h1 className="mb-2 scroll-m-20 font-serif text-4xl font-semibold leading-loose tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mb-4 text-muted-foreground">{t("description")}</p>
          <Link className={buttonVariants()} href="/">
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
