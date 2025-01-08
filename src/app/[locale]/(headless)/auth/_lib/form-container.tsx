"use client";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import LoadingPage from "@/app/[locale]/loading";
import { useAddSearchParam } from "@/hooks/little-hooks";
import AuthenticationForm from "./auth-form";
import OathButton from "./oauth-auth-button";

type AuthFormModeT = "signup" | "login" | null;

function AuthFormContainer() {
  const t = useTranslations("auth.formContainer");
  const { addSearchParam, searchParams } = useAddSearchParam();

  const mode = searchParams.get("m") as AuthFormModeT;

  const content = {
    login: {
      link: {
        label: t("login.link"),
        link: "?m=signup",
      },
      heading: t("login.heading"),
      subheading: t("login.subheading"),
    },
    signup: {
      link: {
        label: t("signUp.link"),
        link: "?m=login",
      },
      heading: t("signUp.heading"),
      subheading: t("signUp.subheading"),
    },
  };

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
              {content[mode].subheading}
            </p>
          </div>

          <AuthenticationForm mode={mode} />

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
