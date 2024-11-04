import PageTitle from "@/components/page-title";
import BusinessBiography from "./_lib/business-biography";
import BusinessValues from "./_lib/business-values";
import Staff from "./_lib/staff";

function AboutUsPage() {
  return (
    <>
      <PageTitle title="Sobre nosotros" />
      <BusinessBiography />
      <BusinessValues />
      <Staff />
    </>
  );
}

export default AboutUsPage;
