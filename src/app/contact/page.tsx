import { Icons } from "@/components/icons";
import PageTitle from "@/components/page-title";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/siteConfig";
import { LucidePhone, MailIcon, MapPin } from "lucide-react";
import Link from "next/link";

function ContactPage() {
  const { phones, mails } = siteConfig;
  return (
    <>
      <PageTitle title="Contáctanos" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="mx-6 space-y-12">
            <div className="space-y-4">
              <div className="flex flex-row items-center">
                <p className="w-1/5 font-serif text-xl font-bold">
                  Información de Contácto
                </p>
                <Separator className="w-4/5" />
              </div>
              <div className="group flex gap-6">
                <LucidePhone className="fill-foreground stroke-none group-hover:fill-secondary" />
                <Link
                  href={phones.USA.link}
                  className="group-hover:text-secondary"
                >
                  {phones.USA.label}
                </Link>
              </div>
              <div className="group flex gap-6">
                <LucidePhone className="fill-foreground stroke-none group-hover:fill-secondary" />
                <Link
                  href={phones.HN.link}
                  className="group-hover:text-secondary"
                >
                  {phones.HN.label}
                </Link>
              </div>
              {mails.map((mail) => (
                <div key={mail.label} className="group flex gap-6">
                  <MailIcon className="fill-foreground stroke-background group-hover:fill-secondary" />
                  <Link href={mail.link} className="group-hover:text-secondary">
                    {mail.label}
                  </Link>
                </div>
              ))}
              <div className="group flex gap-6">
                <MapPin className="fill-foreground stroke-background group-hover:fill-secondary" />
                <Link
                  href={phones.HN.link}
                  className="group-hover:text-secondary"
                >
                  {phones.HN.label}
                </Link>
              </div>
            </div>
            {/* map */}
            <div>
              <div className="mp-10 flex flex-row items-center">
                <p className="w-2/5 font-serif text-xl font-bold">
                  Encuéntranos
                </p>
                <Separator className="w-3/5" />
              </div>
              <div>
                <iframe
                  className="w-full"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=8600%20Nw%20South%20River%20Drive%2C%20Hialeah%2C%20FL%2033166&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="8600 Nw South River Drive, Hialeah, FL 33166"
                  aria-label="8600 Nw South River Drive, Hialeah, FL 33166"
                ></iframe>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex gap-4">
                <Link
                  href={siteConfig.links.facebook}
                  className="hover:text-primary"
                  target="_blank"
                >
                  <Icons.facebook className="h-8 w-8" />
                </Link>
                <Link
                  href={siteConfig.links.instagram}
                  className="hover:text-primary"
                  target="_blank"
                >
                  <Icons.instagram className="h-8 w-8" />
                </Link>
                <Link
                  href={siteConfig.links.instagram}
                  className="hover:text-primary"
                  target="_blank"
                >
                  <Icons.linkedIn className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
          {/* Form */}
          <div>form</div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
