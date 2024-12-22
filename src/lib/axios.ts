import axios, { InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "@/hooks/auth-store";

// axios instance to fetch from client side
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

// axios instance when generating static params
export const apiStatic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

function authInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers.Authorization) return config;
  const token = getAccessToken();
  if (!token) return config;
  api.defaults.headers.common["Authorization"] = "Bearer " + token;
  config.headers.Authorization = "Bearer " + token;
  return config;
}

let interceptorId: number;

export function addAuthInterceptor() {
  interceptorId = api.interceptors.request.use(authInterceptor);
}

addAuthInterceptor();

export function removeAuthInterceptor() {
  api.defaults.headers.common["Authorization"] = undefined;
  api.interceptors.request.eject(interceptorId);
}
