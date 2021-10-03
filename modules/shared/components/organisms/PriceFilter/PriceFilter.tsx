import React from "react";
import type { FC, ReactElement } from "react";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import PriceInput from "../../atoms/PriceInput/PriceInput";
import { IPriceFilter } from "./IPriceFilter";

const PriceFilter: FC<IPriceFilter.IProps> = ({
  selectedColors,
  selectedRatings,
  prices,
  updateProductFilters,
}): ReactElement => {
  const updateMinPrice = (minPrice: string): void => {
    updateProductFilters(selectedColors, selectedRatings, {
      ...prices,
      from: +minPrice,
    });
  };

  const updateMaxPrice = (maxPrice: string): void => {
    updateProductFilters(selectedColors, selectedRatings, {
      ...prices,
      to: +maxPrice,
    });
  };

  const clearPrices = (): void => {
    updateProductFilters(selectedColors, selectedRatings, {
      ...prices,
      from: prices.min,
      to: prices.max,
    });
  };

  return (
    <Box>
      <div className="pt-4 px-4 flex flex-col self-start">
        <P fontColor="dark" fontSize="lg" fontWeight="bold" classes="mb-2">
          PRICES
        </P>
        <PriceInput
          minPrice={prices.min}
          maxPrice={prices.max}
          updateMaxPrice={updateMaxPrice}
          updateMinPrice={updateMinPrice}
          from={prices.from}
          to={prices.to}
        />
        <button type="reset" onClick={clearPrices} className="self-start">
          <P fontColor="dark" fontSize="md" fontWeight="normal" classes="mt-2">
            CLEAR
          </P>
        </button>
      </div>
    </Box>
  );
};

export default PriceFilter;
