import PageTitle from "@/components/page-title";
import ContactInfo from "./_lib/contact-info";
import ContactForm from "./_lib/contact-form";
import SectionHeader from "@/components/section-header";
import { Metadata } from "next";
import { Page } from "../../_lib/types";
import { getTranslations, setCachedLocale } from "@/i18n/get-translations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.contact");
  return {
    title: t("title"),
  };
}

async function ContactPage({ params }: Page) {
  const locale = (await params).locale;
  setCachedLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageTitle title={t("pageTitle")} />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />

          {/* form */}
          <div className="md:mx-16">
            <div className="mx-auto max-w-[500px] rounded-xl border px-6 py-12 shadow-sm">
              <SectionHeader
                title={t("contactForm.header.title")}
                description={t("contactForm.header.description")}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
