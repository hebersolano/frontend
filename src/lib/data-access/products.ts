import type { Req } from "@/types/content-type";
import { Product } from "@/types/product";
import { isAxiosError } from "axios";
import { api } from "../axios";
import { handleAxiosError } from "../error-utils";

export async function getProductBySlug(slug: string) {
  try {
    const res = await api.get<Req<Product[]>>("/products", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "images",
      },
    });

    return res.data?.data?.[0];
  } catch (error) {
    if (isAxiosError(error)) {
      handleAxiosError(error);
    } else throw error;
  }
}

export async function getFeaturedProducts() {
  try {
    const res = await api.get<Req<Product[]>>("/products", {
      params: {
        "filters[isFeatured][$eq]": "true",
        "pagination[pageSize]": "3",
        populate: "*",
      },
    });

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      handleAxiosError(error);
    } else throw error;
  }
}

export async function getProductByCategory(slug: string = "all") {
  try {
    const params = {
      populate: "images",
    };
    if (slug !== "all")
      Object.assign(params, { "filters[category][slug][$eq]": slug });

    const res = await api.get<Req<Product[]>>("/products", {
      params,
    });

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      handleAxiosError(error);
    } else throw error;
  }
}
