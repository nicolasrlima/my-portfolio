import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import Portuguese from "../locales/pt.json";
import English from "../locales/en.json";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  let messages;
  if (locale === "pt") {
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
