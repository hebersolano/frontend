import { getRequestConfig } from "next-intl/server";
import { getMessages } from "./get-translations";

export default getRequestConfig(async () => {
  const locale = "es";

  return {
    locale,
    messages: await getMessages(locale),
  };
});
