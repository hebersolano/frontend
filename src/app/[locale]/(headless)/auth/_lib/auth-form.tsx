"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getInitAuthStore, useIsAuthenticated } from "@/hooks/auth-store";
import { toast } from "@/hooks/use-toast";
import { loginUser, registerUser } from "@/lib/data-access/auth-access";
import { toastAlert } from "@/lib/error-utils";
import { authFormSchemas, AuthFormType } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from "react-hook-form";

type UserAuthFormProps = {
  mode: "login" | "signup";
};

const initAuthStore = getInitAuthStore();

function AuthenticationForm({ mode }: UserAuthFormProps) {
  const t = useTranslations("auth.authenticationForm");
  const { replace } = useRouter();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => replace("/"), 2000);
      toast({ title: t("toasts.alreadyAuthenticated") });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const form = useForm<AuthFormType>({
    resolver: zodResolver(authFormSchemas[mode]),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      validatePassword: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<AuthFormType> = async (formData) => {
    try {
      let data;
      if (mode === "signup") {
        data = await registerUser(formData);
      }

      if (mode === "login") {
        data = await loginUser(formData);
      }

      if (!data) return;
      initAuthStore(data.user, data.jwt);
      toast({ title: t("toasts.welcome") + data.user.username });
      form.reset();
      replace("/");
    } catch (error) {
      console.error("form error:", error);
      toastAlert("Sorry, something went wrong. Please try again");
    }
  };

  const onError: SubmitErrorHandler<AuthFormType> = (error) => {
    console.error("form error", error);
  };

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          autoComplete="off"
          className="space-y-5"
        >
          {mode === "signup" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("username")}</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input autoComplete="none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {mode === "signup" && (
            <FormField
              control={form.control}
              name="validatePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("validatePassword")}</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t("btn." + mode)}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AuthenticationForm;
