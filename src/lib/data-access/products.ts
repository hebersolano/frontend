import { api } from "../axios";

export async function getFeaturedProducts() {
  const res = await api.get(
    "/products?filters[isFeatured][$eq]=true&pagination[pageSize]=3&populate=images",
  );
  return res.data.data;
}

export async function getProductCategories() {
  const res = await api.get("/categories?populate=image");
  return res.data.data;
}
