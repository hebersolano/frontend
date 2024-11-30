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
import { getAuthActions } from "@/hooks/auth-store";
import { loginUser, registerUser } from "@/lib/data-access/auth-access";
import { authFormSchemas, AuthFormType } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from "react-hook-form";

type UserAuthFormProps = {
  mode: "login" | "signup";
};

const initAuthStore = getAuthActions("initAuthStore");

export function UserRegistrationForm({ mode }: UserAuthFormProps) {
  const { replace } = useRouter();

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

  const onSubmit: SubmitHandler<AuthFormType> = (formData) => {
    try {
      if (mode === "signup")
        registerUser(formData)
          .then((data) => {
            if (!data) return;
            initAuthStore(data.user, data.jwt);
            replace("/");
          })
          .finally(() => {
            form.reset();
          });

      if (mode === "login")
        loginUser(formData)
          .then((data) => {
            if (!data) return;
            initAuthStore(data.user, data.jwt);
            replace("/");
          })
          .finally(() => {
            form.reset();
          });
    } catch (error) {
      console.error("Error auth-form", error);
    }
  };

  const onError: SubmitErrorHandler<AuthFormType> = (e) => {
    console.error("form err", e);
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
                  <FormLabel>Usuario</FormLabel>
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
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@mail.com"
                    autoComplete="none"
                    {...field}
                  />
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
                <FormLabel>Contraseña</FormLabel>
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
                  <FormLabel>Confirma tu contraseña</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder=""
                      autoComplete="none"
                      {...field}
                    />
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
            Sign In with Email
          </Button>
        </form>
      </Form>
    </div>
  );
}
