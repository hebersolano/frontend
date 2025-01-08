import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import AppLayout from "./(normal)/layout";
import { getTranslations } from "next-intl/server";

async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <AppLayout>
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
    </AppLayout>
  );
}

export default NotFound;
