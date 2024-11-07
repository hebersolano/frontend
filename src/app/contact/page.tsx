import PageTitle from "@/components/page-title";
import ContactInfo from "./_lib/contact-info";
import ContactForm from "./_lib/contact-form";

function ContactPage() {
  return (
    <>
      <PageTitle title="Contáctanos" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
