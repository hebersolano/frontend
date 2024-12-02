import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
}

export function truncateString(str: string, num: number = 60) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function imgFileToDataURL(imgFile: File): Promise<string | undefined> {
  return new Promise((resolve) => {
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgDataURL = event?.target?.result;
        if (typeof imgDataURL === "string") return resolve(imgDataURL);
        resolve(undefined);
      };

      reader.readAsDataURL(imgFile);
    } catch {
      resolve(undefined);
    }
  });
}
