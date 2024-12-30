import home from "./es-pages/home";
import aboutUs from "./es-pages/about-us";

export default {
  notFound: {
    title: "Página no encontrada",
    description: "Lo sentimos, la página que buscas no existe.",
    button: "Volver al inicio",
  },
  home,
  aboutUs,
} as const;
