import { Enum, Req, Slug } from "@/types/content-type";
import { apiStatic } from "../axios";
import { Product } from "@/types/product";

// fetchers to generate static pages

export async function getProductBySlug(slug: string) {
  const res = await apiStatic.get<Req<Product[]>>("/products", {
    params: {
      "filters[slug][$eq]": slug,
      populate: "images",
    },
  });

  return res.data?.data?.[0];
}

export async function getProductsSlug() {
  const res = await apiStatic.get<Req<Slug[]>>("/products", {
    params: {
      fields: "slug",
    },
  });

  return res.data.data;
}

export async function getProductCategoriesSlug() {
  const res = await apiStatic.get<Req<Slug>>("/categories", {
    params: {
      fields: "slug",
    },
  });

  return res.data.data;
}

type ProductFields = {
  origin: Enum;
  roast: Enum;
};

export async function getProductFields(): Promise<ProductFields> {
  const res = await apiStatic.get(
    "/content-type-builder/content-types/api::product.product",
  );

  const { origin, roast } = res.data?.data?.schema?.attributes;
  return { origin, roast };
}
