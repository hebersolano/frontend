import { Metadata } from "next";

import AuthFormContainer from "./_lib/form-container";
import { Link } from "@/i18n/routing";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative grid h-screen flex-col items-center justify-center px-4 lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* image mosaic */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
              <Icons.iconLogo className="h-6" />
              <span className="hidden lg:inline-block">
                <Icons.upperLogo className="h-4" />
              </span>
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>

        <AuthFormContainer />
      </div>
    </>
  );
}
