"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUp, User } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getSetUserData, useUserData } from "@/hooks/auth-store";
import { api } from "@/lib/axios";
import { toastAlert } from "@/lib/error-utils";
import { UserResponse } from "@/types/user";
import { useTranslations } from "next-intl";
import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";

const setUserData = getSetUserData();

function AvatarForm() {
  const [open, setOpen] = useState(false);
  const user = useUserData();

  return (
    <div className="flex w-full justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="relative">
          <DialogTrigger className="group absolute -bottom-3 right-3 z-10 rounded-full bg-gray-100 p-2 shadow">
            <ImageUp className="w-5: z-20 h-5 w-5 stroke-black hover:stroke-primary" />
          </DialogTrigger>
          <Avatar className="h-32 w-32">
            <AvatarImage
              className="h-32 w-32 object-cover"
              src={process.env.NEXT_PUBLIC_API_URL! + user?.profile?.url}
            />
            <AvatarFallback className="h-32 w-32">
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
        </div>

        <UpdateAvatarDialog userId={user?.id} setOpen={setOpen} />
      </Dialog>
    </div>
  );
}

export default AvatarForm;

function UpdateAvatarDialog({
  userId,
  setOpen,
}: {
  userId: number | undefined;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations("account.editAccount.avatarForm");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setIsLoading(true);
      if (!userId) return;
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const file = formData.get("files") as File;
      const fileSize = Number((file.size / 1000).toFixed(2));
      if (fileSize > 500) {
        toastAlert(t("toasts.imgSize"));
        return;
      }
      console.log(fileSize, file);
      formData.append("ref", "plugin::users-permissions.user");
      formData.append("refId", `${userId}`);
      formData.append("field", "profile");

      await api.post("/upload", formData);
      const meRes = await api.get<UserResponse>("/users/me", {
        params: { populate: "*" },
      });
      setUserData(meRes.data);
    } catch (error) {
      console.error("error uploading profile", error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("title")}</DialogTitle>
        <DialogDescription>{t("description")}</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="file" name="files" />
        <div className="">
          <Button
            disabled={isLoading}
            type="submit"
            value="Submit"
            className="mr-4"
          >
            {t("btns.upload")}
          </Button>
          <DialogClose
            type="button"
            disabled={isLoading}
            className={buttonVariants({ variant: "outline" })}
          >
            {t("btns.close")}
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  );
}
