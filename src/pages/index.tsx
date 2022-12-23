import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { Typography } from "components/Typography";
import { Logo } from "icons/Logo";
import HeaderContent from "templates/HeaderContent/HeaderContent";

const Home: NextPage = () => {
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
          <HeaderContent />
        </Header>
        <Button>Button</Button>
        <Typography fontFamily="primary">Typography</Typography>
      </main>
    </div>
  );
};

export default Home;
