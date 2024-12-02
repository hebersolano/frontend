"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/auth-store";
import { ImageUp, Mail, Pen, User } from "lucide-react";
import Link from "next/link";

function Profile() {
  const user = useUserData();
  return (
    <section className="">
      <div className="relative flex flex-wrap gap-6 rounded-md border p-8">
        <Link
          href="/profile/config"
          className="absolute right-3 top-3 rounded-full bg-gray-100 p-2"
        >
          <Pen className="h-4 w-4" />
        </Link>

        {/* profile photo */}
        <div className="">
          <div className="relative flex w-full justify-center">
            <Link
              href="/profile/config"
              className="absolute -bottom-3 -right-0 z-10 rounded-full bg-gray-100 p-2"
            >
              <ImageUp className="h-4 w-4" />
            </Link>
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
