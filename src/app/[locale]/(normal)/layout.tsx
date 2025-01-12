import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { setCachedLocale } from "@/i18n/get-translations";
import { ThemeProvider } from "next-themes";
import { Layout } from "../_lib/types";

export default async function AppLayout({ params, children }: Layout) {
  const locale = (await params).locale;
  setCachedLocale(locale);

  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <SiteHeader />
        <main className="">{children}</main>
        <SiteFooter />
      </ThemeProvider>
    </>
  );
}
