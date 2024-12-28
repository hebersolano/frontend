import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { LOCALES } from "@/locales/types";
import { setStaticParamsLocale } from "next-international/server";
import { ThemeProvider } from "next-themes";

export default async function AppLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: (typeof LOCALES)[number] }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  await setStaticParamsLocale(locale);
  console.log("nolmal layout locale", locale);

  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <SiteHeader />
        <main className="min-h-noHeader">{children}</main>
        <SiteFooter />
      </ThemeProvider>
    </>
  );
}
