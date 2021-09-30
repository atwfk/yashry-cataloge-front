import type { NextPage } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import CategoryPage from "@modules/CategoryPage/CategoryPage";

const Home: NextPage = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <CategoryPage />
    </div>
  );
};

export default Home;
