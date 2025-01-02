import home from "./es-pages/home";
import aboutUs from "./es-pages/about-us";

export default {
  localeSwitcher: {
    locale: "{locale, select, es {Spanish} en {English} other {Unknown}}",
  },
  notFound: {
    title: "Página no encontrada",
    description: "Lo sentimos, la página que buscas no existe.",
    button: "Volver al inicio",
  },
  home,
  aboutUs,
} as const;
