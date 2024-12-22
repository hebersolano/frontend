"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getSetUserData, useUserData } from "@/hooks/auth-store";
import { profileFormSchema, ProfileFormValues } from "@/lib/form-schemas";
import AvatarForm from "../_components/avatar-form";
import { updateUser } from "@/lib/data-access/auth-access";
import { useRouter } from "next/navigation";
import { toastAlert } from "@/lib/error-utils";

// This can come from your database or API.
//TODO: sync user data
const setUserData = getSetUserData();

export default function ProfileForm() {
  const user = useUserData();
  const router = useRouter();

  const defaultValues = {
    username: user?.username,
    email: user?.email,
    firstName: user?.info?.firstName || undefined,
    lastName: user?.info?.lastName || undefined,
    address: user?.info?.address || undefined,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      console.log(data);
      const user = await updateUser(data);
      setUserData(user);
      router.push("/profile");
    } catch (error) {
      console.error("error update user form:", error);
      toastAlert("Something went wrong, try again.");
    }
  }

  return (
    <div className="space-y-16">
      <AvatarForm />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Así será como se mostrará tu nombre en la sección de tu cuenta
                  y en las valoraciones
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Address</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update profile</Button>
        </form>
      </Form>
    </div>
  );
}
