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
  setLoading,
}): ReactElement => {
  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  const updateRatingsFilter = async (ratings: number[]): Promise<void> => {
    const queryString = transformQueries({
      color: selectedColors,
      rating: ratings,
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
        ratings.map(String) ?? "",
      );

      setLoading(false);
      setProducts(filteredProducts);
      setSelectedRatings(ratings);
      setRatings(filteredRatings);
    } catch (error: unknown) {
      const {
        message,
        errorCode,
        error: isError,
      } = error as { message: string; error: boolean; errorCode: number };
      setLoading(false);
      console.log(message, errorCode, isError);
    }
  };

  const filterProductByRating = async (
    rateId: string,
    isChecked: boolean,
  ): Promise<void> => {
    setLoading(true);

    const id = rateId[rateId.length - 1];
    let newSelectedRatings: number[] = [];
    if (isChecked) {
      newSelectedRatings = [...selectedRatings, +id];
    } else {
      newSelectedRatings = selectedRatings.filter((rate) => rate !== +id);
    }

    await updateRatingsFilter(newSelectedRatings);
  };

  const clearSelectedRatings = async (): Promise<void> => {
    setLoading(true);
    await updateRatingsFilter([]);
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
        <button
          type="reset"
          onClick={clearSelectedRatings}
          className="self-start"
        >
          <P fontColor="dark" fontSize="md" fontWeight="normal" classes="mt-2">
            CLEAR
          </P>
        </button>
      </div>
    </Box>
  );
};

export default RatingFilter;
