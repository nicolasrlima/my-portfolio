import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import { Logo } from "icons/Logo";
import HeaderContent from "templates/HeaderContent/HeaderContent";
import Cover from "templates/Cover/Cover";

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
        <Cover />
      </main>
    </div>
  );
};

export default Home;
