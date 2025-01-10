import { cache } from "react";

const e = cache(function () {
  return { locale: void 0 };
});

function getCachedRequestLocale() {
  return e().locale;
}
function setCachedRequestLocale(t) {
  e().locale = t;
}
