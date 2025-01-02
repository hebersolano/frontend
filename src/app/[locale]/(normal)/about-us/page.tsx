import PageTitle from "@/components/page-title";
import BusinessBiography from "./_lib/business-biography";
import BusinessValues from "./_lib/business-values";
import Staff from "./_lib/staff";
import { getScopedI18n } from "@/intl/server";

async function AboutUsPage() {
  const t = await getScopedI18n("aboutUs");

  return (
    <>
      <PageTitle title={t("pageTitle")} />
      <BusinessBiography />
      <BusinessValues />
      <Staff />
    </>
  );
}

export default AboutUsPage;
