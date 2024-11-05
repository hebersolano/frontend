import PageTitle from "@/components/page-title";
import ContactForm from "./_lib/contact-form";
import ContactInfo from "./_lib/contact-info";

function ContactPage() {
  return (
    <>
      <PageTitle title="Contáctanos" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-24 grid grid-cols-2 gap-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
