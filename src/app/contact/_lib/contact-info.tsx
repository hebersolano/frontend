import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/siteConfig";
import { LucidePhone, MailIcon, MapPin } from "lucide-react";
import Link from "next/link";

function ContactInfo() {
  const { phones, mails, address } = siteConfig;
  return (
    <div className="mx-6 space-y-12">
      <div className="mb-6 space-y-4">
        <div className="flex flex-1 flex-row items-center gap-4">
          <p className="text-nowrap font-serif text-xl font-bold">
            Información de Contácto
          </p>
          <Separator className="w-full shrink" />
        </div>
        <div className="group flex gap-6">
          <LucidePhone className="fill-foreground stroke-none group-hover:fill-secondary" />
          <Link
            href={phones.USA.link}
            className="text-muted-foreground group-hover:text-secondary"
          >
            {phones.USA.label}
          </Link>
        </div>
        <div className="group flex gap-6">
          <LucidePhone className="fill-foreground stroke-none group-hover:fill-secondary" />
          <Link
            href={phones.HN.link}
            className="text-muted-foreground group-hover:text-secondary"
            target="_blank"
          >
            {phones.HN.label}
          </Link>
        </div>
        {mails.map((mail) => (
          <div key={mail.label} className="group flex gap-6">
            <MailIcon className="fill-foreground stroke-background group-hover:fill-secondary" />
            <Link
              href={mail.link}
              target="_blank"
              className="text-muted-foreground group-hover:text-secondary"
            >
              {mail.label}
            </Link>
          </div>
        ))}
      </div>
      {/* map */}
      <div>
        <div className="mb-6 flex flex-1 flex-row items-center gap-4">
          <p className="text-nowrap font-serif text-xl font-bold">Ubicación</p>
          <Separator className="w-full shrink" />
        </div>
        <div className="space-y-4">
          <iframe
            className="w-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.267742563516!2d-87.41284458895838!3d14.753939913403247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f5b948d4d87bb%3A0xc99d4a7e228ed601!2sCaf%C3%A9%20San%20Luis!5e0!3m2!1ses-419!2shn!4v1730775708397!5m2!1ses-419!2shn"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            title="8600 Nw South River Drive, Hialeah, FL 33166"
            aria-label="8600 Nw South River Drive, Hialeah, FL 33166"
          ></iframe>
          <div className="group flex gap-6">
            <MapPin className="fill-foreground stroke-background group-hover:fill-secondary" />
            <Link
              href={address.HN.link}
              className="text-muted-foreground group-hover:text-secondary"
              target="_blank"
            >
              {address.HN.label}
            </Link>
          </div>
          <div className="group flex gap-6">
            <MapPin className="fill-foreground stroke-background group-hover:fill-secondary" />
            <Link
              href={address.USA.link}
              className="text-muted-foreground group-hover:text-secondary"
              target="_blank"
            >
              {address.USA.label}
            </Link>
          </div>
        </div>
      </div>

      {/* social links */}
      <div>
        <div className="mb-6 flex flex-1 flex-row items-center gap-4">
          <p className="text-nowrap font-serif text-xl font-bold">
            Redes Sociales
          </p>
          <Separator className="w-full shrink" />
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.facebook}
            className="hover:text-secondary"
            target="_blank"
          >
            <Icons.facebook className="h-8 w-8" />
          </Link>
          <Link
            href={siteConfig.links.instagram}
            className="hover:text-secondary"
            target="_blank"
          >
            <Icons.instagram className="h-8 w-8" />
          </Link>
          <Link
            href={siteConfig.links.linkedIN}
            className="hover:text-secondary"
            target="_blank"
          >
            <Icons.linkedIn className="h-8 w-8" />
          </Link>
          <Link
            href={siteConfig.links.whapsapp}
            className="hover:text-secondary"
            target="_blank"
          >
            <Icons.whatsapp className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
