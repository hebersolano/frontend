import { toast } from "@/hooks/use-toast";
import { AuthUserResponse, UserResponse } from "@/types/user";
import { isAxiosError } from "axios";
import { z } from "zod";
import { api } from "../axios";
import { AuthFormType, ProfileFormValues } from "../form-schemas";

const RegistrationData = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export async function registerUser(data: AuthFormType) {
  try {
    const res = await api.post<AuthUserResponse>(
      "auth/local/register",
      RegistrationData.parse(data),
    );

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
    }

    if (error instanceof Error) console.error("Error", error.message);
    else console.error(error);
  }
}

export async function loginUser(data: AuthFormType) {
  try {
    const res = await api.post<AuthUserResponse>("auth/local", {
      identifier: data.email,
      password: data.password,
    });

    api.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;

    const meRes = await api.get<UserResponse>("/users/me/", {
      params: { populate: "*" },
    }); // fetch all user data

    console.log("me data:", meRes.data);
    res.data.user = meRes.data;

    return res.data;
  } catch (error: unknown) {
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
    }
  }
}

export async function updateUser(data: ProfileFormValues) {
  try {
    const res = await api.put<UserResponse>("/user/me", {
      data,
    });

    return res.data;
  } catch (error: unknown) {
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
    }
  }
}
