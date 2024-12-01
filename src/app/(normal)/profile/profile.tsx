"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/auth-store";
import { Mail, MapPin, User } from "lucide-react";

function Profile() {
  const user = useUserData();
  return (
    <section className="">
      <div className="flex flex-wrap gap-6 rounded-xl border p-8">
        <div className="">
          <div className="flex w-full justify-center">
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
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold leading-normal">
            {user?.username}
          </h3>
          <p className="text-muted-foreground">
            <Mail className="mr-3 inline h-5 w-5 stroke-primary" />
            {user?.email}
          </p>
          <p className="text-muted-foreground">
            <Mail className="mr-3 inline h-5 w-5 stroke-primary" />
            {user?.documentId}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
