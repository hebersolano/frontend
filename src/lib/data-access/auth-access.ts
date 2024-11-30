import { z } from "zod";
import { addAuthInterceptor, api } from "../axios";
import { AuthFormType } from "../form-schemas";
import { toast } from "@/hooks/use-toast";
import { AxiosError, isAxiosError } from "axios";

const RegistrationData = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

type RegisterResponse = {
  jwt: string;
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function registerUser(data: AuthFormType) {
  try {
    const res = await api.post<RegisterResponse>(
      "auth/local/register",
      RegistrationData.parse(data),
    );

    addAuthInterceptor();
    api.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        // server responded with a error status code
        console.error(
          error.response.status,
          error.response.data,
          error.response.headers,
        );

        toast({
          title: error.response.data.error.message,
          variant: "destructive",
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      }
      console.error(error.config);
    }

    if (error instanceof Error) console.error("Error", error.message);
    else console.error(error);
  }
}

export function loginUser(data: AuthFormType) {
  return api
    .post<RegisterResponse>("auth/local", {
      identifier: data.email,
      password: data.password,
    })
    .then((res) => {
      addAuthInterceptor();
      api.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;
      return res.data;
    })
    .catch((error: Error | AxiosError) => {
      if (isAxiosError(error)) {
        // Access to config, request, and response
        if (error.response) {
          // server responded with a error status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          toast({
            title: error.response.data.error.message,
            variant: "destructive",
          });
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      }
    });
}
