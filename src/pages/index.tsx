import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { Typography } from "components/Typography";
import { Link } from "components/Link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <Link href="#about">About</Link>
          <Link href="#career">Career</Link>
          <Link href="#projects">Projects</Link>
        </Header>
        <Button>Button</Button>
        <Typography fontFamily="primary">Typography</Typography>
      </main>
    </div>
  );
};

export default Home;
