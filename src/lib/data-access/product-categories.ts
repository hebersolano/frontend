import { Req } from "@/types/content-type";
import { Category } from "@/types/product";
import { isAxiosError } from "axios";
import { api } from "../axios";
import { handleAxiosError } from "../error-utils";

export async function getProductCategories() {
  try {
    const res = await api.get<Req<Category[]>>("/categories", {
      params: {
        populate: "image",
      },
    });

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) handleAxiosError(error);
    throw error;
  }
}

// no in use
export async function getProductCategoryBySlug(slug: string) {
  try {
    const res = await api.get<Req<Category[]>>("/categories", {
      params: { "filters[slug][$eq]": slug },
    });

    return res.data.data?.[0];
  } catch (error) {
    if (isAxiosError(error)) handleAxiosError(error);
    throw error;
  }
}
