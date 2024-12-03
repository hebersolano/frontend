import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUp, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEventHandler } from "react";
import { api } from "@/lib/axios";
import { useUserData } from "@/hooks/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AvatarForm() {
  return (
    <div className="flex w-full justify-center">
      <Dialog>
        <div className="relative">
          <DialogTrigger>
            <button className="absolute -bottom-3 -right-0 z-10 rounded-full bg-gray-100 p-2">
              <ImageUp className="z-20 h-4 w-4" />
            </button>
          </DialogTrigger>
          <Avatar className="h-24 w-24">
            <AvatarImage
              className="h-24 w-24"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback className="h-24 w-24">
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
        </div>
        <UpdateAvatarDialog />
      </Dialog>
    </div>
  );
}

export default AvatarForm;

function UpdateAvatarDialog() {
  const user = useUserData();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (!user) return;
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("ref", "plugin::users-permissions.user");
    formData.append("refId", `${user.id}`);
    formData.append("field", "profile");

    api.post("/upload", formData).then((res) => console.log("upload res", res));
  };

  return (
    <DialogContent>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Profile Photo</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="file" name="files" />
            <Button type="submit" value="Submit">
              Update
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </DialogContent>
  );
}
