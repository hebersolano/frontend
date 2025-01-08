import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function ErrorMessage() {
  const t = useTranslations("redirect.errorMessage");

  return (
    <div className="h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background">
        <div className="p-12 sm:p-24">
          <h1 className="mb-6 scroll-m-20 font-serif text-2xl font-semibold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mb-6 text-muted-foreground">{t("description")}</p>
          <Link className={buttonVariants()} href="/">
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
