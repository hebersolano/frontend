import PageTitle from "@/components/page-title";
import ContactInfo from "./_lib/contact-info";
import ContactForm from "./_lib/contact-form";
import SectionHeader from "@/components/section-header";

function ContactPage() {
  return (
    <>
      <PageTitle title="Contáctanos" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />

          {/* form */}
          <div className="md:mx-16">
            <div className="mx-auto max-w-[500px] rounded-xl border px-6 py-12 shadow-sm">
              <SectionHeader
                title="Envianos un mensaje"
                description="Comparte tus dudas y preguntas con nosotros"
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
