import { Separator } from "@/components/ui/separator";
import { getTranslations, setCachedLocale } from "@/i18n/get-translations";
import type { Metadata } from "next";
import { Layout } from "../../_lib/types";
import { SidebarNav } from "./_components/sidebar-nav";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.account");
  return {
    title: t("title"),
  };
}

export default async function AccountLayout({ params, children }: Layout) {
  const locale = (await params).locale;
  setCachedLocale(locale);
  const t = await getTranslations("account");

  const sidebarNavItems = [
    {
      title: t("accountNav.dashboard"),
      href: "/account",
    },
    {
      title: t("accountNav.favorites"),
      href: "/account/favorites",
    },
    {
      title: t("accountNav.orders"),
      href: "/account/orders",
    },
    {
      title: t("accountNav.profile"),
      href: "/account/edit-account",
    },
  ];

  return (
    <div className="min-h-noHeader bg-accent py-8 md:py-16">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-12 sm:p-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            {t("pageTitle")}
          </h2>
          <p className="text-muted-foreground">{t("pageDescription")}</p>
        </div>
        <Separator className="my-4 md:my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="relative lg:-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
            <Separator
              orientation="vertical"
              className="absolute -right-2 top-0 hidden lg:block"
            />
          </aside>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
