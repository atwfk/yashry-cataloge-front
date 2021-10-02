import React from "react";
import type { FC, ReactElement } from "react";
import Ratings from "../../molecules/Ratings/Ratings";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import { IRatingFilter } from "./IRatingFilter";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProductsByPrice } from "@modules/shared/logic/getProductsByPrice/getProductsByPrice";
import { createFilteredRatings } from "@modules/shared/logic/ProductsRatingsLogic/ProductsRatingsLogic";
import { useRouter } from "next/router";

const RatingFilter: FC<IRatingFilter.IProps> = ({
  setProducts,
  ratings,
  setRatings,
  uniqueRatings,
  selectedColors,
  selectedRatings,
  setSelectedRatings,
  prices,
}): ReactElement => {
  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  const filterProductByRating = async (
    rateId: string,
    isChecked: boolean,
  ): Promise<void> => {
    const id = rateId[rateId.length - 1];
    let newSelectedRatings: number[] = [];
    if (isChecked) {
      newSelectedRatings = [...selectedRatings, +id];
    } else {
      newSelectedRatings = selectedRatings.filter((rate) => rate !== +id);
    }

    const queryString = transformQueries({
      color: selectedColors,
      rating: newSelectedRatings,
    });

    try {
      const data = await getProducts(categoryId, queryString);

      const filteredProducts = getProductsByPrice(
        data,
        +prices.from,
        +prices.to,
      );

      const filteredRatings = createFilteredRatings(
        uniqueRatings,
        newSelectedRatings.map(String) ?? "",
      );

      setProducts(filteredProducts);
      setSelectedRatings(newSelectedRatings);
      setRatings(filteredRatings);
    } catch (error: unknown) {
      const {
        message,
        errorCode,
        error: isError,
      } = error as { message: string; error: boolean; errorCode: number };
      console.log(message, errorCode, isError);
    }
  };

  return (
    <Box>
      <div className="pt-4 px-4">
        <P fontColor="dark" fontSize="lg" fontWeight="bold" classes="mb-2">
          RATINGS
        </P>
        <Ratings
          ratings={ratings}
          filterProductByRating={filterProductByRating}
        />
      </div>
    </Box>
  );
};

export default RatingFilter;
