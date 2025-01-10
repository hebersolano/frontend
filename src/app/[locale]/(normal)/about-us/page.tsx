import PageTitle from "@/components/page-title";
import BusinessBiography from "./_lib/business-biography";
import BusinessValues from "./_lib/business-values";
import Staff from "./_lib/staff";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.aboutUs");
  return {
    title: t("title"),
  };
}

async function AboutUsPage() {
  const t = await getTranslations("aboutUs");

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
