import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
// import { getCurrentLocale, getI18n } from "@/locales/server";

export default async function NotFound() {
  // const locale = await getCurrentLocale();
  // console.log("not found locale", locale);
  // const t = await getI18n();
  console.log("not found page");

  return (
    <html>
      <body>
        <div className="h-noHeader bg-accent py-24">
          <div className="mx-auto w-full max-w-screen-xl bg-background">
            <div className="p-12 sm:p-24">
              <h1 className="scroll-m-20 font-serif text-4xl font-semibold leading-loose tracking-tight lg:text-5xl">
                {/* {t("notFound.title")} */}
              </h1>
              <p className="mb-6 text-muted-foreground">
                {/* {t("notFound.description")} */}
              </p>
              <Link className={buttonVariants()} href={"/"}>
                {/* {t("notFound.button")} */}
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
