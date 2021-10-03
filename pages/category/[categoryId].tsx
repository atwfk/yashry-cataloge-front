import type { GetServerSideProps } from "next";
import type { FC, ReactElement } from "react";
import Head from "next/head";
import CategoryPage from "@modules/CategoryPage/pages/CategoryPage";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";
import { IData } from "@modules/shared/types/IData";
import { getProductsByPrice } from "@modules/shared/logic/getProductsByPrice/getProductsByPrice";
import {
  createFilteredColors,
  getUniqueColors,
} from "@modules/shared/logic/productsColorsLogic/productsColorsLogic";
import {
  createFilteredRatings,
  getUniqueRatings,
} from "@modules/shared/logic/ProductsRatingsLogic/ProductsRatingsLogic";
import { getMinMaxPrices } from "@modules/shared/logic/getMinMaxPrices/getMinMaxPrices";

const Category: FC<IData.IProps> = ({ data }): ReactElement => {
  // if (data.error) {
  //   return <div>{error.message}</div>;
  // }
  return (
    <div>
      <Head>
        <title>category | E-commerce</title>
      </Head>
      <CategoryPage data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, params } = context;
  const { categoryId } = params as { categoryId: string };
  const { from, to, name } = query as {
    from: string;
    to: string;
    name: string;
  };
  const queryString = transformQueries(query);

  try {
    const data = await getProducts(categoryId, queryString);

    const filteredProducts = getProductsByPrice(data, +from, +to);

    const uniqueColors = getUniqueColors(filteredProducts);
    const filteredColors = createFilteredColors(
      uniqueColors,
      query.colors ?? "",
    );

    const uniqueRatings = getUniqueRatings(filteredProducts);
    const sortedRatings = uniqueRatings.sort();
    const filteredRatings = createFilteredRatings(
      sortedRatings,
      query.rating ?? "",
    );

    const minMaxPrice = getMinMaxPrices(filteredProducts);

    return {
      props: {
        data: {
          products: filteredProducts,
          uniqueColors,
          colors: filteredColors,
          uniqueRatings: sortedRatings,
          ratings: filteredRatings,
          prices: {
            min: minMaxPrice[0],
            max: minMaxPrice[1],
            from: from ?? minMaxPrice[0],
            to: to ?? minMaxPrice[1],
          },
        },
        category: name,
      },
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

export default Category;
