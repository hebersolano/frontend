export const shopMenuItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Café tostado molido",
    href: "/cafe-molido",
    description: "Una selecta variedad de cafés para todos los gustos",
  },
  {
    title: "Café en grano",
    href: "/cafe-tostado",
    description: "Café tostado en grano para los entuciastas",
  },
  {
    title: "Café verder",
    href: "/cafe-en-grano",
    description: "Café de la mejor calidad para exportación",
  },
  {
    title: "Lotes de café",
    href: "/green-coffee",
    description: "Buscas lotes únicos, somos proveedores de café para tiendas",
  },
  {
    title: "Ofertas",
    href: "/offers",
    description: "Ofertas y descuentos especiales",
  },
  {
    title: "Equipo y accesorios ",
    href: "/accessories",
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
          title: "Café tostado molido",
          href: "/shop",
        },
        {
          title: "Café en grano",
          href: "/shop",
        },
        {
          title: "Café verde",
          href: "/shop",
        },
        {
          title: "Lotes de café",
          href: "/docs/theming",
        },
        {
          title: "Equipo y accesorios",
          href: "/docs/dark-mode",
        },
        {
          title: "Ofertas",
          href: "/docs/cli",
          label: "Updated",
        },
      ],
    },
    {
      title: "Sobre nosotros",
      href: "/about-us",
    },
    {
      title: "Contacto",
      href: "/contact",
    },
  ],
};
