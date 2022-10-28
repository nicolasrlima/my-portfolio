import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { Typography } from "components/Typography";
import { Link } from "components/Link";
import { Logo } from "icons/Logo";

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
          <Link href="#about">About</Link>
          <Link href="#career">Career</Link>
          <Link href="#now">Now</Link>
          <Link href="#contact">Contact</Link>
          <Button>Resume</Button>
        </Header>
        <Button>Button</Button>
        <Typography fontFamily="primary">Typography</Typography>
      </main>
    </div>
  );
};

export default Home;
