"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { changePasswordSchema, ChangePasswordTypes } from "@/lib/form-schemas";
import { changePassword } from "@/lib/data-access/auth-access";
import { toastAlert } from "@/lib/error-utils";
import { getInitAuthStore } from "@/hooks/auth-store";

const initAuthStore = getInitAuthStore();

function ChangePasswordForm() {
  const form = useForm<ChangePasswordTypes>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
    },
  });

  async function onSubmit(values: ChangePasswordTypes) {
    try {
      console.log(values);
      const data = await changePassword(values);
      if (!data) throw new Error("No response");
      initAuthStore(data.user, data.jwt);
    } catch (error) {
      console.log(error);
      toastAlert("Sorry, something went wrong. Please try again");
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">{"Change Password"}</h3>
        <p className="text-sm text-muted-foreground">
          {"Change your user password"}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old password</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Validate password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ChangePasswordForm;
