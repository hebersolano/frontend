"use client";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locale/i18n";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <SiteHeader />
          <main className="min-h-noHeader">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}
