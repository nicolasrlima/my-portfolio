import { useRouter } from "next/router";
import { SupportedLanguages } from "./types";

export const useLocale = () => {
  const { push } = useRouter();
  const changeLocale = (locale: SupportedLanguages) => {
    push("/", "/", {
      locale,
    });
  };

  return {
    changeLocale,
    SupportedLanguages,
  };
};
