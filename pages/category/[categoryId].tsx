import type { GetServerSideProps } from "next";
import type { FC, ReactElement } from "react";
import Head from "next/head";
import CategoryPage from "@modules/CategoryPage/pages/CategoryPage";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";
import { IData } from "@modules/shared/types/IData";

const Home: FC<{ data: IData.IProduct[] }> = ({ data }): ReactElement => {
  return (
    <div>
      <Head>
        <title>Category | E-commerce</title>
      </Head>
      <CategoryPage data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, params } = context;
  console.log(query, params);
  const { categoryId } = params as { categoryId: string };

  const queryString = transformQueries(query);

  try {
    const data = await getProducts(categoryId, queryString);

    return {
      props: { data },
    };
  } catch (error: unknown) {
    const {
      message,
      errorCode,
      error: isError,
    } = error as { message: string; error: boolean; errorCode: number };
    return {
      props: { data: { message, errorCode, error: isError } },
    };
  }
};

export default Home;
