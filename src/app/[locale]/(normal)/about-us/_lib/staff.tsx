import SectionHeader from "@/components/section-header";
import { getScopedI18n } from "@/intl/server";
import { Facebook, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Staff() {
  const t = await getScopedI18n("aboutUs.staff");
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-24">
      <SectionHeader title={t("title")} />

      <div className="flex flex-col items-center justify-evenly gap-10 lg:flex-row">
        {/* Brayan Herrera */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="/brayan-profile.webp"
              alt="brayan herrera profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">{t("members.0.name")}</p>
          <p>{t("members.0.role")}</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=100008243311623"
                target="_black"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                href="https://www.linkedin.com/in/brayan-herrera-flores-0544751a4"
                target="_black"
                className=""
              >
                <Linkedin className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                href="https://www.linkedin.com/in/brayan-herrera-flores-0544751a4"
                target="_black"
                className=""
              >
                <Phone className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Heber Solano */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="/heber-profile.webp"
              alt="heber solano profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">{t("members.1.name")}</p>
          <p>{t("members.1.role")}</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              <Link
                href="https://www.facebook.com/heber.solano01/"
                target="_black"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Tony Herrera */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="/tony-profile.webp"
              alt="tony herrera profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">{t("members.2.name")}</p>
          <p>{t("members.2.role")}</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              {/* <Link
                href="#"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Staff;
