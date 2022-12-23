import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { Typography } from "components/Typography";
import { Link } from "components/Link";
import { Logo } from "icons/Logo";
import { IconButton } from "components/IconButton";
import { Languages } from "icons/Languages";
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "components/DropdownMenu";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  const changeLocale = (locale: string) => {
    push("/", "/", {
      locale,
    });
  };

  return (
    <div>
      <Head>
        <title>Nicolas Lima - Software Engineer</title>
        <meta
          name="description"
          content="I'm a Software Engineer specialized in Front-end engineering and I'm passionate about delivering the best User Experience to the users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header logo={<Logo />}>
          <Link href="#about">
            <FormattedMessage id="header.about" />
          </Link>
          <Link href="#career">
            <FormattedMessage id="header.career" />
          </Link>
          <Link href="#now">
            <FormattedMessage id="header.now" />
          </Link>
          <Link href="#contact">
            <FormattedMessage id="header.contact" />
          </Link>
          <Button>
            <FormattedMessage id="header.resume" />
          </Button>
          <DropdownMenuRoot>
            <DropdownMenuTrigger asChild>
              <IconButton aria-label="Change language" icon={<Languages />} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLocale("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale("es")}>
                Spanish
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale("pt")}>
                Portuguese
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuRoot>
        </Header>
        <Button>Button</Button>
        <Typography fontFamily="primary">Typography</Typography>
      </main>
    </div>
  );
};

export default Home;
