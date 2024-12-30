import { title } from "process";

export default {
  pageTitle: "Sobre nosotros",
  businessBiography: {
    paragraph1:
      "Somos una empresa familiar que inicia sus operaciones un verano de 2015 en la remota zona del pueblo de San Luis, Comayagua, Honduras. Café San Luis es un sueño realizado con ardua labor y que representa lo mejor que tiene nuestra tierra para ofrecer al mundo. Siempre tuvimos claro nuestro compromiso con cada etapa del proceso de elaboración artesanal de nuestro café, del que estamos actualmente orgullosos. Hoy contamos con una variada línea de café para todos los gustos y exigencias, para las personas que distinguen y aprecian el buen café. Si eres de esas personas, Café San Luis es para ti.",
    paragraph2:
      "En el 2010, damos comienzo al proyecto como productores de café en la zona de San Luis del departamento de Comayagua, Honduras; cultivando café convencional de altura a 1,425 msnm; manejando las siguientes variedades de café, en híbrido: café 90, lempira, y h27. También café de la línea arábiga en menores dimensiones como ser: catuahí, bourbon y caturra. Procurando siempre el mejor tratado y cuidado a nuestro café en cada proceso.",
  },

  businessValues: {
    values: [
      {
        title: "Integridad",
        description:
          "Siempre hacemos lo correcto. Somos justos con nuestros clientes y genuinos en todos nuestros tratos comerciales.",
      },
      {
        title: "Compromiso",
        description:
          "Escuchamos a nuestros clientes y estamos constantemente aprendiendo y mejorando continuamente.",
      },
      {
        title: "Excelencia",
        description:
          "Escuchamos a nuestros clientes y estamos constantemente aprendiendo y mejorando continuamente.",
      },
    ],

    mission: {
      title: "Misión",
      paragraph:
        "Brindamos un producto bajo estándares de calidad y un servicio personalizado; eficiente y eficaz. Siendo nuestro principal objetivo la satisfacción de nuestros clientes, de modo que estos nos prefieran y recomienden; posicionándonos exitosamente en el mercado con nuestros valores de innovación y liderazgo.",
    },
    vision: {
      title: "Visión",
      paragraph:
        "Alcanzar gran éxito en toda la gama empresarial; industria y comercio. Ganando reconocimiento a nivel nacional e internacional, convirtiéndonos en un referente de calidad y prestigio. Buscando concluir satisfactoriamente cada una de las metas fijadas; a través de la perseverancia y el esmero organizacional; con el fin de convertirnos en una marca líder en el mercado.",
    },
  },
  staff: {
    title: "Nuestro equipo",
    members: [
      { name: "Brayan Herrera", role: "Gerente General" },
      { name: "Heber Solano", role: "Administrador" },
      {
        name: "Tony Herrera",
        role: "Maestro Tostador",
      },
    ],
  },
} as const;
