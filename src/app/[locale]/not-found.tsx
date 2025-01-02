import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AppLayout from "./(normal)/layout";

export default function NotFound() {
  return (
    <AppLayout>
      <div className="h-noHeader bg-accent py-24">
        <div className="mx-auto w-full max-w-screen-xl bg-background">
          <div className="p-12 sm:p-24">
            <h1 className="scroll-m-20 font-serif text-4xl font-semibold leading-loose tracking-tight lg:text-5xl">
              Page Not Found
            </h1>
            <p className="mb-6 text-muted-foreground">
              Could not find requested resource
            </p>
            <Link className={buttonVariants()} href="/">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
