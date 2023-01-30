import { SupportedLanguages } from "./types";
import { useRouter } from "next/router";

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
