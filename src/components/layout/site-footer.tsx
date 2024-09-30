import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { siteConfig } from "@/config/siteConfig";

function SiteFooter() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 text-sm">
        {/* top */}
        <div className="flex flex-col justify-between gap-6 pb-6 sm:flex-row md:gap-12">
          {/* section 1 */}
          <div className="space-y-6 sm:w-1/2 md:w-1/2 lg:w-1/4">
            <div className="mt-2 flex w-36 flex-col items-center gap-4">
              <Icons.iconLogo className="h-12 w-12" />
              <Icons.upperLogo className="h-4" />
            </div>

            <p className="text-balance">
              Somos una empresa familiar dedicada al tostado artesanal de café y
              a la exportación de microlotes de café verde de altura.
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.facebook}
                className="hover:text-primary"
                target="_blank"
              >
                <Facebook
                  width={18}
                  height={18}
                  fill="currentColor"
                  stroke="none"
                />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className="hover:text-primary"
                target="_blank"
              >
                <Instagram width={18} height={18} />
              </Link>
            </div>
          </div>

          {/* section 2 */}
          <div className="space-y-6 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h1 className="text-lg font-medium">Contacto</h1>
            <div className="flex flex-col gap-4">
              <Link
                href={siteConfig.phones.HN.link}
                className="hover:text-primary"
              >
                HN: {siteConfig.phones.HN.label}
              </Link>
              <Link
                href={siteConfig.phones.USA.link}
                className="hover:text-primary"
              >
                USA: {siteConfig.phones.USA.label}
              </Link>
              <Link
                href={siteConfig.mails[0].link}
                className="hover:text-primary"
              >
                {siteConfig.mails[0].label}
              </Link>
              <Link
                href={siteConfig.links.googleMap}
                className="hover:text-primary"
                target="_blank"
              >
                8600 Nw South River Drive #227,
                <br /> Medley, FL 33166
              </Link>
            </div>
          </div>

          {/* section 3 */}
          <div className="sm:hidden md:block md:w-1/3 lg:w-1/4">
            <h1 className="text-lg font-medium">Horario</h1>

            <div className="mt-6 space-y-4">
              <p>Lunes a Viernes — 8AM – 5PM</p>
              <p>Sábado — 8AM – 4PM</p>
              <p>Domingo — Cerrado</p>

              <div className="">
                <span className="font-medium">Secure Payments</span>
                <div className="mt-2 flex gap-3">
                  <Image src="/paypal.png" alt="" width={40} height={20} />
                  <Image src="/mastercard.png" alt="" width={40} height={20} />
                  <Image src="/visa.png" alt="" width={40} height={20} />
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="hidden space-y-6 lg:block lg:w-1/4">
            <h1 className="text-lg font-medium">Links</h1>
            <div className="flex flex-col gap-4">
              <Link href="" className="hover:text-primary">
                About Us
              </Link>
              <Link href="" className="hover:text-primary">
                Careers
              </Link>
              <Link href="" className="hover:text-primary">
                Affiliates
              </Link>
              <Link href="" className="hover:text-primary">
                Blog
              </Link>
              <Link href="" className="hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-border py-6 text-sm md:flex-row">
          <p>
            {new Date().getFullYear()} | Torrecaf
            <span className="text-primary">he</span>&copy;
          </p>
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <span className="mr-4 text-muted-foreground">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div>
              <span className="mr-4 text-muted-foreground">Currency</span>
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
