import { redirect } from "next/navigation";

function RedirectLocale() {
  redirect("/en"); // Default locale
}

export default RedirectLocale;
