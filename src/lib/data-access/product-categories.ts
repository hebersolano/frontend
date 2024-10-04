import { Category } from "@/types/Product";
import { api } from "../axios";

export async function getProductCategories() {
  const res = await api.get("/categories", {
    params: {
      populate: "image",
    },
  });

  return res.data.data;
}

export async function getProductCategoryBySlug(slug: string) {
  const res = await api.get("/categories", {
    params: { "filters[slug][$eq]": slug },
  });

  return res.data.data?.[0] as Category;
}

export async function getProductCategoriesSlug() {
  const res = await api.get("/categories", {
    params: {
      fields: "slug",
    },
  });

  return res.data.data;
}
