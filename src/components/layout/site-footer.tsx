import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";
import { getTranslations } from "next-intl/server";
import { getSiteConfig } from "@/config/siteConfig";

async function SiteFooter() {
  const siteConfig = await getSiteConfig();
  const t = await getTranslations("siteFooter");

  return (
    <footer className="bg-[#09090B] text-neutral-100">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 text-sm">
        {/* top */}
        <div className="grid grid-cols-1 gap-12 pb-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* section 01 */}
          <div className="space-y-6">
            <div className="mt-2 flex w-36 flex-col items-center gap-4">
              <Icons.iconLogo className="h-12 w-12" />
              <Icons.upperLogo className="h-4" />
            </div>

            <p className="text-balance leading-7">
              {t("section01.businessDescription")}
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.facebook}
                className="hover:text-primary"
                target="_blank"
              >
                <Icons.facebook className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className="hover:text-primary"
                target="_blank"
              >
                <Icons.instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* section 2 */}
          <div className="space-y-6">
            <h1 className="text-lg font-medium">{t("section02.title")}</h1>
            <div className="flex flex-col gap-4">
              <Link
                href={siteConfig.phones.HN.link}
                className="hover:text-primary"
              >
                HN: {siteConfig.phones.HN.label}
              </Link>
              <Link
                href={siteConfig.phones.USA.link}
                className="hover:text-primary"
              >
                USA: {siteConfig.phones.USA.label}
              </Link>
              <Link
                href={siteConfig.mails[0].link}
                className="hover:text-primary"
              >
                {siteConfig.mails[0].label}
              </Link>
              <Link
                href={siteConfig.links.googleMap}
                className="hover:text-primary"
                target="_blank"
              >
                8600 Nw South River Drive #227,
                <br /> Medley, FL 33166
              </Link>
            </div>
          </div>

          {/* section 3 */}
          <div className="">
            <h1 className="text-lg font-medium">{t("section03.title")}</h1>

            <div className="mt-6 space-y-4">
              <p>{t("section03.businessHours.0")}</p>
              <p>{t("section03.businessHours.1")}</p>
              <p>{t("section03.businessHours.2")}</p>

              <div className="">
                <span className="font-medium">
                  {t("section03.payments.title")}
                </span>
                <div className="mt-2 flex gap-3">
                  <Image
                    src="/icons/paypal.png"
                    alt=""
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/icons/mastercard.png"
                    alt=""
                    width={40}
                    height={20}
                  />
                  <Image src="/icons/visa.png" alt="" width={40} height={20} />
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="space-y-6 lg:block">
            <h1 className="text-lg font-medium">{t("section04.title")}</h1>
            <div className="flex flex-col gap-4">
              <Link href="/about-us" className="hover:text-primary">
                {t("section04.links.0")}
              </Link>
              <Link href="/people" className="hover:text-primary">
                {t("section04.links.1")}
              </Link>
              <Link href="/blog" className="hover:text-primary">
                {t("section04.links.2")}
              </Link>
              <Link href="/shop" className="hover:text-primary">
                {t("section04.links.3")}
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <Separator className="bg-gray-400" />
        <div className="flex flex-col items-center justify-between gap-8 py-6 text-sm md:flex-row">
          <p>
            {new Date().getFullYear()} | Torrecaf
            <span className="text-primary">he</span>&copy;
          </p>
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <span className="mr-4 text-muted-foreground">
                {t("bottom.lang")}
              </span>
              <span className="font-medium">ES | EN</span>
            </div>
            <div>
              <span className="mr-4 text-muted-foreground">
                {t("bottom.currency")}
              </span>
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
