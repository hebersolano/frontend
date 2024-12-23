import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { ThemeProvider } from "next-themes";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
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
