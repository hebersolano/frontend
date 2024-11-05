export const siteConfig = {
  name: "Torrecafhe",
  url: "https://localhost:3000",
  ogImage: "https://localhost:3000/og.jpg",
  description: "Proveedor de café desde Honduras para el mundo.",
  links: {
    facebook: "https://www.facebook.com/cafesanluishn",
    instagram: "https://www.instagram.com/cafesanluishn/",
    googleMap: "https://g.page/cafesanluis?share",
    linkedIN: "https://www.linkedin.com/company/torrecafhe/",
  },
  phones: {
    HN: { label: "+504 3371 3912", link: "tel:+50433713912" },
    USA: { label: "+1 737 343 5512", link: "tel:+17372917017" },
  },
  address: {
    HN: {
      label: "Barrio Bella Vista, San Luis, Comayagua, HN",
      link: "https://maps.app.goo.gl/pxtjpTVG2zWXRCor5",
    },
    USA: {
      label: "8600 Nw South River Drive #227, FL 33166",
      link: "#",
    },
  },
  mails: [
    {
      label: "bherreracafesanluis@yahoo.com",
      link: "mailto:bherreracafesanluis@yahoo.com",
    },
    {
      label: "herrerabrayanflores@gmail.com",
      link: "mailto:herrerabrayanflores@gmail.com",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
