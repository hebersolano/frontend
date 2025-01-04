import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";
import { BookHeart, Handshake, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function BusinessValues() {
  const t = await getTranslations("aboutUs.businessValues");

  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-screen-xl px-4 py-24">
        <SectionHeader title="Nuestros Valores" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* value 01 */}
          <div className="space-y-3 rounded-lg border bg-background p-10 shadow-sm">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <BookHeart className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              {t("values.0.title")}
            </h3>
            <p className="leading-7">{t("values.0.description")}</p>
          </div>

          {/* value 02 */}
          <div className="space-y-3 rounded-lg border bg-background p-10 shadow-sm">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Handshake className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              {t("values.1.title")}
            </h3>
            <p className="leading-7">{t("values.1.description")}</p>
          </div>

          {/* value 03 */}
          <div className="space-y-3 rounded-lg border bg-background p-10 shadow-sm">
            <div className="mb-6 w-fit rounded-full bg-secondary p-2">
              <Star className="text-white" />
            </div>
            <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
              {t("values.2.title")}
            </h3>
            <p className="leading-7">{t("values.2.description")}</p>
          </div>
        </div>

        {/* mission */}
        <div className="mt-24 space-y-12">
          <div className="flex flex-col gap-12 md:flex-row">
            <h3 className="basis-1/3 scroll-m-20 text-center font-serif text-2xl font-bold tracking-tight">
              {t("mission.title")}
            </h3>
            <p className="basis-2/3 text-balance leading-7">
              {t("mission.paragraph")}
            </p>
          </div>
          <Separator />
          <div className="flex flex-col gap-12 md:flex-row">
            <h3 className="basis-1/3 scroll-m-20 text-center font-serif text-2xl font-bold tracking-tight">
              {t("vision.title")}
            </h3>
            <p className="basis-2/3 text-balance leading-7">
              {t("vision.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessValues;
