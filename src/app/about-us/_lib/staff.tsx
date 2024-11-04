import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Facebook, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Staff() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16">
      <SectionHeader title="Conoce a nuestro equipo" />

      <div className="flex flex-row justify-evenly">
        {/* Brayan Herrera */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="brayan-profile.webp"
              alt="brayan herrera profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">Brayan Herrera</p>
          <p>Gerente General</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=100008243311623"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                href="https://www.linkedin.com/in/brayan-herrera-flores-0544751a4"
                className=""
              >
                <Linkedin className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                href="https://www.linkedin.com/in/brayan-herrera-flores-0544751a4"
                className=""
              >
                <Phone className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Heber Solano */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="heber-profile.webp"
              alt="heber solano profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">Heber Solano</p>
          <p>Administrador</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=100008243311623"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Tony Herrera */}
        <div className="w-fit text-center">
          <div className="mb-3">
            <Image
              src="tony-profile.webp"
              alt="tony herrera profile"
              width={250}
              height={250}
              className="w-40 rounded-full"
            />
          </div>
          <p className="font-serif text-xl font-bold">Tony Herrera</p>
          <p>Maestro Tostador</p>

          <div className="inline-block h-px w-2/3 bg-foreground" />
          <ul className="my-2 flex basis-0">
            <li className="mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=100008243311623"
                className=""
              >
                <Facebook className="w-4 fill-foreground stroke-none hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Staff;
