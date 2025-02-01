import { AuthUserResponse, UserResponse } from "@/types/user";
import { isAxiosError } from "axios";
import { z } from "zod";
import { api } from "../axios";
import {
  AuthFormType,
  ChangePasswordTypes,
  ProfileFormValues,
} from "../form-schemas";
import { handleAxiosError } from "../error-utils";

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

export async function changePassword(data: ChangePasswordTypes) {
  try {
    const res = await api.post<AuthUserResponse>("/auth/change-password", data);

    api.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      handleAxiosError(error);
    } else throw error;
  }
}
