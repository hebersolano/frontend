// import { Axios } from "axios";
import axios from "axios";

const config = { url: process.env.NEXT_PUBLIC_API_URL };
console.log(config);

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
