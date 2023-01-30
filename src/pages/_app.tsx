import type { AppProps } from "next/app";
import English from "../locales/en";
import GlobalStyle from "../styles/GlobalStyle";
import { IntlProvider } from "react-intl";
import Portuguese from "../locales/pt";
import { SupportedLanguages } from "hooks/useLocale/types";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [shortLocale] = locale
    ? locale.split("-")
    : [SupportedLanguages.ENGLISH];

  let messages;
  if (locale === SupportedLanguages.PORTUGUESE) {
    messages = Portuguese;
  } else {
    messages = English;
  }

  return (
    <>
      <IntlProvider locale={shortLocale} messages={messages}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};
export default MyApp;
