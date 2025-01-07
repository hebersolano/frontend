import { useTranslations } from "next-intl";
import { Icons } from "@/components/icons";

export function useShopMenuI18n() {
  const t = useTranslations("siteHeader.desktopNav.shopMenu");

  const shopMenuItems: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: t("groundRoastedCoffee.label"),
      href: "/cafe-molido",
      description: t("groundRoastedCoffee.description"),
    },
    {
      title: t("roastedCoffeeBeans.label"),
      href: "/cafe-tostado",
      description: t("roastedCoffeeBeans.description"),
    },
    {
      title: t("greenCoffeeBeans.label"),
      href: "/cafe-en-grano",
      description: t("greenCoffeeBeans.description"),
    },
    {
      title: t("microlotCoffee.label"),
      href: "/green-coffee",
      description: t("microlotCoffee.description"),
    },
    {
      title: t("offers.label"),
      href: "/offers",
      description: t("offers.description"),
    },
    {
      title: t("accessories.label"),
      href: "/accessories",
      description: t("accessories.description"),
    },
  ];

  return shopMenuItems;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  items?: NavItem[];
}

export function useMobileMenuI18n() {
  const t = useTranslations("siteHeader.mobileNav");

  const navConfig: NavItem[] = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("shop.label"),
      href: "/shop",
      items: [
        {
          title: t("shop.groundRoastedCoffee"),
          href: "/ground-roasted-coffee",
        },
        {
          title: t("shop.roastedCoffeeBeans"),
          href: "/shop",
        },
        {
          title: t("shop.greenCoffeeBeans"),
          href: "/shop-dd",
        },
        {
          title: t("shop.microlotCoffee"),
          href: "/docs/theming",
        },
        {
          title: t("shop.offers"),
          href: "/docs/dark-mode",
        },
        {
          title: t("shop.accessories"),
          href: "/docs/cli",
          label: "Updated",
        },
      ],
    },
    {
      title: t("aboutUs"),
      href: "/about-us",
    },
    {
      title: t("contact"),
      href: "/contact",
    },
  ];

  return navConfig;
}
