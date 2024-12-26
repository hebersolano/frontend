import { Toaster } from "@/components/ui/toaster";
import LocalesProvider from "@/locales/locales-provider";
import { getStaticParams } from "@/locales/server";
import { LOCALES } from "@/locales/types";
import { setStaticParamsLocale } from "next-international/server";
import "./globals.css";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLocale({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: (typeof LOCALES)[number] }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  console.log("layout locale", locale, LOCALES.includes(locale));
  if (!LOCALES.includes(locale)) redirect("/es");
  setStaticParamsLocale(locale);

  return (
    <>
      <LocalesProvider locale={locale}>{children}</LocalesProvider>
      <Toaster />
    </>
  );
}
