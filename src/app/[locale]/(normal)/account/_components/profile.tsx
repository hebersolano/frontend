"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/auth-store";
import { Mail, MapPin, Pen, User } from "lucide-react";
import { Link } from "@/i18n/routing";

function Profile() {
  const user = useUserData();

  return (
    <section className="relative flex flex-col justify-center gap-6 py-8 md:flex-row md:justify-start">
      <Link
        href="/account/edit-account"
        className="absolute right-0 top-0 rounded-full bg-muted p-2"
      >
        <Pen className="h-4 w-4" />
      </Link>

      {/* profile photo */}
      <Avatar className="mx-auto h-24 w-24 sm:mx-0">
        <AvatarImage
          className="h-24 w-24 object-cover"
          src={process.env.NEXT_PUBLIC_API_URL! + user?.profile?.url}
        />
        <AvatarFallback className="h-24 w-24">
          <User className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>

      {/* profile details */}
      <div className="mr-8 space-y-1">
        <h3 className="text-xl font-semibold leading-normal">
          {user?.username}
        </h3>

        {user?.info?.firstName && (
          <p className="text-muted-foreground">
            <User className="mr-3 inline h-5 w-5 stroke-primary" />
            {user.info.firstName + " " + user.info.lastName}
          </p>
        )}
        <p className="text-muted-foreground">
          <Mail className="mr-3 inline h-5 w-5 stroke-primary" />
          {user?.email}
        </p>
        {user?.info && (
          <p className="text-muted-foreground">
            <MapPin className="mr-3 inline h-5 w-5 stroke-primary" />
            {user?.info?.address}
          </p>
        )}
      </div>
    </section>
  );
}

export default Profile;
