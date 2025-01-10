"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { HeadingH2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorPage");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <HeadingH2>{t("title")}</HeadingH2>
      <br />
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t("btn")}
      </Button>
    </div>
  );
}

export default Error;
