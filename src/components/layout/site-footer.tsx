import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SiteFooter() {
  return (
    <footer className="mt-24 bg-secondary px-4 py-16 text-sm">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* top */}
        <div className="flex flex-col justify-between md:flex-row">
          {/* left */}
          <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
            <Link href="/">
              <div className="text-2xl tracking-wide">ANA&apos;s</div>
            </Link>
            <p>3252 Widing Way, Central Plaza, Willowbrook, CA 90210, US</p>
            <Link href="/" className="font-semibold hover:text-primary">
              hello@lama.dev
            </Link>
            <Link href="/" className="font-semibold hover:text-primary">
              +1 234 567 890
            </Link>
            <div className="flex gap-6">
              <Link href="" className="hover:text-primary">
                <Facebook width={16} height={16} />
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
              <h1 className="text-lg font-medium">COMPANY</h1>
              <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-medium">COMPANY</h1>
              <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-medium">COMPANY</h1>
              <div className="flex flex-col gap-6">
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
