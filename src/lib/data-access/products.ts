import type { Enum } from "@/types/content-type";
import { api } from "../axios";
import { Product } from "@/types/Product";

export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await api.get("/products", {
    params: {
      "filters[slug][$eq]": slug,
      "populate[images]": "*",
      // "populate[category][fields]": "slug",
    },
  });

  return res.data?.data?.[0];
}

export async function getProductsSlug() {
  const res = await api.get("/products", {
    params: {
      fields: "slug",
    },
  });

  return res.data.data;
}

export async function getFeaturedProducts() {
  const res = await api.get("/products", {
    params: {
      "filters[isFeatured][$eq]": "true",
      "pagination[pageSize]": "3",
      populate: "*",
    },
  });

  return res.data.data;
}

export async function getProductByCategory(slug: string): Promise<Product[]> {
  const res = await api.get("/products", {
    params: {
      "filters[category][slug][$eq]": slug,
      "populate[images]": "*",
      // "populate[category][fields]": "slug",
    },
  });

  return res.data.data;
}

type ProductFields = {
  origin: Enum;
  roast: Enum;
};

export async function getProductFields(): Promise<ProductFields> {
  const res = await api.get(
    "/content-type-builder/content-types/api::product.product",
  );

  const { origin, roast } = res.data?.data?.schema?.attributes;
  return { origin, roast };
}
