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

type shallowObject = Record<string, string | undefined>;

export function shallowCompareObjects(
  obj1: shallowObject,
  obj2: shallowObject,
): boolean {
  if (obj1 === obj2) return true;

  if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false;

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (!obj2.hasOwnProperty(key)) return false;
      // Allows to compare obj1[key] and obj2[key] when set to undefined

      if (obj1[key] !== obj2[key]) return false;
      // If they have the same strict value or identity then they are equal
    }
  }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) return false;
    // Allows obj1[key] to be set to undefined
  }

  return true;
}
