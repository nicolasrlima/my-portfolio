import About from "templates/About";
import Cover from "templates/Cover";
import Head from "next/head";
import HeaderWithContent from "templates/HeaderWithContent";
import type { NextPage } from "next";

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
        <HeaderWithContent />
        <Cover />
        <About />
      </main>
    </div>
  );
};

export default Home;
