import axios from "axios";
import { getAccessToken } from "@/hooks/auth-store";

// axios instance to fetch from client side
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.headers.Authorization) return config;
  const token = getAccessToken();
  if (!token) return config;
  api.defaults.headers.common["Authorization"] = "Bearer " + token;
  config.headers.Authorization = "Bearer " + token;
  return config;
});

// axios instance when generating static params
export const apiStatic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});
