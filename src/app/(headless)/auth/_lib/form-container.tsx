"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UserRegistrationForm } from "./user-auth-form";
import OathButton from "./oauth-auth-button";
import LoadingPage from "@/app/loading";
import { ArrowLeft } from "lucide-react";

const content = {
  login: {
    link: {
      label: "Registrate",
      link: "?m=signup",
    },
    heading: "Bienvenido de nuevo",
    subheadig: "Ingresa tus datos para continuar",
    Oauth: {
      btnLabel: "Registrate",
    },
  },
  signup: {
    link: {
      label: "Ingresar",
      link: "?m=login",
    },
    heading: "Crea tu cuenta",
    subheadig: "Ingresa los datos para crear tu cuenta",
  },
};

type AuthFormModeT = "signup" | "login" | null;

function AuthFormContainer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("m") as AuthFormModeT;
  const { replace } = useRouter();

  function addSearchParam(name: string, value: string) {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(pathname + "?" + params.toString());
  }

  useEffect(() => {
    if (mode === "signup" || mode === "login") return;
    addSearchParam("m", "login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mode || (mode !== "signup" && mode !== "login")) return <LoadingPage />;

  return (
    <>
      <Link
        href={content[mode].link.link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "fixed right-4 top-4",
        )}
      >
        {content[mode].link.label}
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "fixed left-4 top-4 lg:hidden",
        )}
      >
        <ArrowLeft height={4} width={4} />
      </Link>

      {/* form container */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {content[mode].heading}
            </h1>
            <p className="text-sm text-muted-foreground">
              {content[mode].subheadig}
            </p>
          </div>

          <UserRegistrationForm mode={mode} />

          <OathButton isLoading={false} />

          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
    </>
  );
}

export default AuthFormContainer;
