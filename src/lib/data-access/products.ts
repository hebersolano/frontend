import { api } from "../axios";

export async function getFeaturedProducts() {
  const res = await api.get(
    "/products?filters[isFeatured][$eq]=true&pagination[pageSize]=2&populate=images",
  );
  console.log(res, "fetcher res");
  return res.data;
}
