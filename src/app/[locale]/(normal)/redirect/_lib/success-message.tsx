import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function SuccessMessage() {
  const t = useTranslations("redirect.successMessage");

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="mt-36 flex flex-col-reverse gap-16 sm:flex-row">
        <div className="flex w-1/2 justify-center sm:min-w-[400px]">
          <Image
            src="/doodles/DrawKit-onlineshopping-Illustration-09.svg"
            alt="success"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
          <p className="my-3">{t("description.0")}</p>
          <p className="my-3">{t("description.1")}</p>
          <p className="my-3">{t("description.2")}</p>
          <Link href="/" className={buttonVariants()}>
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
