import React from "react";
import type { FC, ReactElement } from "react";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import PriceInput from "../../atoms/PriceInput/PriceInput";
import { IPriceFilter } from "./IPriceFilter";
import { getProductsByPrice } from "@modules/shared/logic/getProductsByPrice/getProductsByPrice";
import { useRouter } from "next/router";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";

const PriceFilter: FC<IPriceFilter.IProps> = ({
  prices,
  setPrices,
  setProducts,
  selectedColors,
  selectedRatings,
  setLoading,
}): ReactElement => {
  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  const updatePriceFilter = async (from: number, to: number): Promise<void> => {
    const queryString = transformQueries({
      color: selectedColors,
      rating: selectedRatings,
    });

    try {
      const data = await getProducts(categoryId, queryString);

      const filteredProducts = getProductsByPrice(data, from, to);

      setLoading(false);
      setProducts(filteredProducts);
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

  const updateMinPrice = (minPrice: string): void => {
    setLoading(true);
    updatePriceFilter(+minPrice, prices.to);
    setPrices({ ...prices, from: +minPrice });
  };

  const updateMaxPrice = (maxPrice: string): void => {
    setLoading(true);
    updatePriceFilter(prices.from, +maxPrice);
    setPrices({ ...prices, to: +maxPrice });
  };

  const clearPrices = (): void => {
    console.log(prices);
    setLoading(true);
    updatePriceFilter(prices.min, prices.max);
    setPrices({ ...prices, from: prices.min, to: prices.max });
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
