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
import { getSetUserData, getUserData, useUserData } from "@/hooks/auth-store";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "@/i18n/routing";
import { updateUser } from "@/lib/data-access/auth-access";
import { profileFormSchema, ProfileFormValues } from "@/lib/form-schemas";
import { useTranslations } from "next-intl";
import { toastAlert } from "@/lib/error-utils";
import { shallowCompareObjects } from "@/lib/utils";

// This can come from your database or API.
//TODO: sync user data
const setUserData = getSetUserData();

// default values
async function getDefaultValues() {
  const user = getUserData();
  const defaultValues = {
    firstName: user?.info?.firstName || "",
    lastName: user?.info?.lastName || "",
    username: user?.username || "",
    email: user?.email || "",
    address: user?.info?.address || "",
  };
  return defaultValues;
}

export default function UserDetailsForm() {
  const t = useTranslations("account.editAccount");
  const user = useUserData();
  const router = useRouter();

  const defaultValues = {
    firstName: user?.info?.firstName || "",
    lastName: user?.info?.lastName || "",
    username: user?.username,
    email: user?.email,
    address: user?.info?.address || "",
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: getDefaultValues,
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      if (shallowCompareObjects(data, defaultValues)) {
        toastAlert("No changes made");
        return;
      }
      console.log(data);
      const user = await updateUser(data);
      setUserData(user);
      toast({ title: "Account updated" });
      router.push("/account/edit-account");
    } catch (error) {
      console.error("error update user form:", error);
      toastAlert("Something went wrong, try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("name")}</FormLabel>
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
                <FormLabel>{t("lastName")}</FormLabel>
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
              <FormLabel>{t("username.field")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t("username.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
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
              <FormLabel>{t("deliveryAddress")}</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button type="submit">{t("btns.submit")}</Button>
          <Button variant="outline" onClick={() => form.reset()} type="button">
            {t("btns.reset")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
