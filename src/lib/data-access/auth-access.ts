import { AuthUserResponse, UserResponse } from "@/types/user";
import { AxiosError, isAxiosError } from "axios";
import { z } from "zod";
import { api } from "../axios";
import { toastAlert } from "../error-utils";
import { AuthFormType, ProfileFormValues } from "../form-schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleAxiosError(error: AxiosError<any, any>) {
  if (error.response) {
    // server responded with a error status code
    console.error("status code error", error.request.status);
    console.error(error.response.data, error.response.headers);

    toastAlert(error.response.data.error.message);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(error.request);
    console.error("The request was made but no response was received");
    toastAlert("Sorry, no response from the server. Please try again");
  }
}

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
      handleAxiosError(error);
    } else throw error;
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
      handleAxiosError(error);
    } else throw error;
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
      handleAxiosError(error);
    } else throw error;
  }
}
