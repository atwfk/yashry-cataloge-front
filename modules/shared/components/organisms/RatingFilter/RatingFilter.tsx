import React from "react";
import type { FC, ReactElement } from "react";
import Ratings from "../../molecules/Ratings/Ratings";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import { IRatingFilter } from "./IRatingFilter";

const RatingFilter: FC<IRatingFilter.IProps> = ({
  ratings,
  selectedColors,
  selectedRatings,
  prices,
  updateProductFilters,
}): ReactElement => {
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

    await updateProductFilters(selectedColors, newSelectedRatings, prices);
  };

  const clearSelectedRatings = async (): Promise<void> => {
    await updateProductFilters(selectedColors, [], prices);
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
          data-testid="reset-rates"
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
