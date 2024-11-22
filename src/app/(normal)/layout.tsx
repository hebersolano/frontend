import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-noHeader relative flex flex-col">{children}</main>
      <SiteFooter />
    </>
  );
}
