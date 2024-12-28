const home = {
  hero: { welcome: "Bienbenido {br}a esta comunidad {br}dedicada mi casa" },
  callToAction: {
    subtitle: "Un compromiso con la calidad",
    title: "¡Disfruta de muestra variedad en café!",
    description:
      "Café San Luis es una línea de cafés proveniente de la hermosa región de San Luis, Comayagua, Honduras y que busca satisfacer los gustos mas variados y exiges. Explora toda la variedad que tenemos para ti.",
    button: "Tienda",
  },
  featuredProducts: {
    title: "Productos Destacados",
    description: "Lo que la gente más compra",
    productItem: {
      btns: {
        details: "Detalles",
        addToCart: "Agregar al carrito",
      },
    },
    productCategories: {
      title: "Categorías",
    },
  },
  servicesAndProducts: {
    title: "Productos y Servicios",
    description: "Lo que ofrecemos",
    items: {
      artisanalCoffeeRoasting: {
        title: "Tostado Artesanal de Café",
        description:
          "El método de tostado es tan importante como el café mismo, un tostado artesanal expone las características del café de una manera única e inigualable.",
      },
      microlots: {
        title: "Microlotes de café",
        description:
          "Junto a nuestra red de productores a lo largo de Honduras te brindamos una amplia variedad café con las mejores características de la región.",
      },
      packaging: {
        title: "Empaques",
        description:
          "Te brindamos una amplia variedad de empaques para tus productos. Mantén tus productos lo más frescos posible y destaca entre la competencia.",
      },
    },
    caracteristics: {
      organic: {
        title: "Orgánico",
        description: "Sin aditivos preservantes",
      },
      specialPrices: {
        title: "Precios especiales",
        description: "Para mayoristas",
      },
      ecological: {
        title: "Ecológico",
        description: "Con responsabilidad",
      },
    },
    knowAboutUs: {
      title: "Conoce más sobre nosotros",
      description: "Nuestra misión",
      message: {
        text: "Te doy la bienvenida a esta comunidad de productores y en nombre de todos te agradezco que consideres este proyecto o alguno de nuestros productos y servicios.",
      },
    },
  },
} as const;

export default {
  notFound: {
    title: "Página no encontrada",
    description: "Lo sentimos, la página que buscas no existe.",
    button: "Volver al inicio",
  },
  home,
} as const;
