import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useAddSearchParam() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const addSearchParam = useCallback(
    function (name: string, value: string) {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      router.push(pathname + "?" + params.toString());
    },
    [pathname, router, searchParams],
  );

  return {
    addSearchParam,
    searchParams,
    router,
    pathname,
  };
}
