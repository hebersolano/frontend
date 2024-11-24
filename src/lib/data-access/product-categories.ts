import { Category } from "@/types/product";
import { api, apiStatic } from "../axios";

export async function getProductCategories() {
  const res = await api.get("/categories", {
    params: {
      populate: "image",
    },
  });

  return res.data.data;
}

export async function getProductCategoryBySlug(
  slug: string,
): Promise<Category> {
  const res = await api.get("/categories", {
    params: { "filters[slug][$eq]": slug },
  });

  return res.data.data?.[0];
}

export async function getProductCategoriesSlug() {
  const res = await apiStatic.get("/categories", {
    params: {
      fields: "slug",
    },
  });

  return res.data.data;
}
