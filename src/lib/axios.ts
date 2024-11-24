// import { Axios } from "axios";
// import useUserStore from "@/hooks/use-user-store";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

// api.interceptors.request.use(function (config) {
//   console.time("red");
//   const { jwt } = useUserStore();
//   // Do something before request is sent
//   console.log(jwt);
//   config.headers.Authorization = "Bearer ";
//   console.timeEnd("red");
//   return config;
// });
