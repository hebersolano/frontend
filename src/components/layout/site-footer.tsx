import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";

function SiteFooter() {
  return (
    <footer className="mt-24 bg-secondary px-4 py-16 text-sm">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* top */}
        <div className="flex flex-col justify-between md:flex-row">
          {/* left */}
          <div className="flex flex-col gap-8 md:w-1/2 lg:w-1/4">
            <div className="flex w-36 flex-col items-center gap-4">
              <Icons.iconLogo className="h-14 w-14" />
              <Icons.upperLogo className="h-4" />
            </div>

            <p>
              Somos una empresa familiar dedicada al tostado artesanal de café y
              a la exportación de microlotes de café verde de altura.
            </p>
            <div className="flex gap-4">
              <Link href="" className="hover:text-primary">
                <Facebook
                  width={16}
                  height={16}
                  fill="currentColor"
                  stroke="none"
                />
              </Link>
              <Link href="" className="hover:text-primary">
                <Instagram width={16} height={16} />
              </Link>
              <Link href="" className="hover:text-primary">
                <Youtube width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* center */}
          <div className="hidden w-1/2 justify-evenly lg:flex">
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-medium">Contacto</h1>
              <div className="flex flex-col gap-4">
                <Link href="tel:+50433713912" className="hover:text-primary">
                  HN: +504 3371 3912
                </Link>
                <Link href="tel:+17372917017" className="hover:text-primary">
                  USA: +1 737 343 5512
                </Link>
                <Link
                  href="mailto:bherreracafesanluis@yahoo.com"
                  className="hover:text-primary"
                >
                  bherreracafesanluis@yahoo.com
                </Link>
                <Link href="/">
                  8600 Nw South River Drive #227,
                  <br /> Medley, FL 33166
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-medium">COMPANY</h1>
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
          {/* right */}
          <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
            <h1>SUBSCRIBE</h1>
            <p>
              Be the first to get the latest news aobut trends, promotions, and
              much more!
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email Address"
                className="w-3/4 p-4"
              />
              <button className="w-1/4 bg-primary text-foreground">JOIN</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image src="/discover.png" alt="" width={40} height={20} />
              <Image src="/skrill.png" alt="" width={40} height={20} />
              <Image src="/paypal.png" alt="" width={40} height={20} />
              <Image src="/mastercard.png" alt="" width={40} height={20} />
              <Image src="/visa.png" alt="" width={40} height={20} />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p>&#64;2024 Ana&apos;s Shop</p>
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
