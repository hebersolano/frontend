import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { ThemeProvider } from "next-themes";
import { RootLayoutProps } from "../_lib/types";

export default async function AppLayout({ children }: RootLayoutProps) {
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
