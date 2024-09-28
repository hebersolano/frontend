export const shopMenuItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Café tostado molido",
    href: "/shop",
    description: "Una selecta variedad de cafés para todos los gustos",
  },
  {
    title: "Café en grano",
    href: "/shop",
    description: "Café tostado en grano para los entuciastas",
  },
  {
    title: "Café verder",
    href: "/shop",
    description: "Café de la mejor calidad para exportación",
  },
  {
    title: "Lotes de café",
    href: "/shop",
    description: "Buscas lotes únicos, somos proveedores de café para tiendas",
  },
  {
    title: "Ofertas",
    href: "/shop",
    description: "Ofertas y descuentos especiales",
  },
  {
    title: "Equipo y accesorios ",
    href: "/shop",
    description: "Lo mejor en equipo para preparar cafe",
  },
];

import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  items?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavsConfig {
  mainNav: NavItem[];
}

export const navConfig: NavsConfig = {
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Tienda",
      href: "/shop",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          label: "Updated",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
      ],
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
};
