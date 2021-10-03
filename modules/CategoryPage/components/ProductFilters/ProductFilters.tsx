import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IData } from "@modules/shared/types/IData";
import Products from "@modules/shared/components/organisms/Products/Products";
import ColorFilter from "@modules/shared/components/organisms/ColorFilter/ColorFilter";
import RatingFilter from "@modules/shared/components/organisms/RatingFilter/RatingFilter";
import PriceFilter from "@modules/shared/components/organisms/PriceFilter/PriceFilter";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";
import { getProductsByPrice } from "@modules/shared/logic/getProductsByPrice/getProductsByPrice";
import { createFilteredColors } from "@modules/shared/logic/productsColorsLogic/productsColorsLogic";
import { createFilteredRatings } from "@modules/shared/logic/ProductsRatingsLogic/ProductsRatingsLogic";
import { useRouter } from "next/router";

const ProductFilters: FC<IData.IProps> = ({ data }): ReactElement => {
  const [products, setProducts] = useState(data.products);
  const [colors, setColors] = useState(data.colors);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [ratings, setRatings] = useState(data.ratings);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState({
    min: data.prices.min,
    max: data.prices.max,
    from: data.prices.from,
    to: data.prices.to,
  });

  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  const updateProductFilters = async (
    updatedSelectedColors: string[],
    updatedSelectedRatings: number[],
    updatedPrices: IData.IPrices,
  ): Promise<void> => {
    setLoading(true);

    const queryString = transformQueries({
      color: updatedSelectedColors,
      rating: updatedSelectedRatings,
    });

    try {
      const newProducts = await getProducts(categoryId, queryString);

      const filteredProducts = getProductsByPrice(
        newProducts,
        updatedPrices.from,
        updatedPrices.to,
      );

      const filteredColors = createFilteredColors(
        data.uniqueColors,
        updatedSelectedColors ?? "",
      );

      const filteredRatings = createFilteredRatings(
        data.uniqueRatings,
        updatedSelectedRatings.map(String) ?? "",
      );

      setLoading(false);
      setProducts(filteredProducts);
      setSelectedColors(updatedSelectedColors);
      setColors(filteredColors);
      setSelectedRatings(updatedSelectedRatings);
      setRatings(filteredRatings);
      setPrices({ ...prices, from: updatedPrices.from, to: updatedPrices.to });
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

  return (
    <div className="flex justify-center p-4">
      <div className="mr-6">
        <div className="sticky h-screen overflow-y-scroll inset-0 space-y-3">
          <div>
            <PriceFilter
              selectedColors={selectedColors}
              selectedRatings={selectedRatings}
              prices={prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
          <div>
            <ColorFilter
              colors={colors}
              selectedColors={selectedColors}
              selectedRatings={selectedRatings}
              prices={prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
          <div>
            <RatingFilter
              ratings={ratings}
              selectedColors={selectedColors}
              selectedRatings={selectedRatings}
              prices={prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Products products={products} loading={loading} />
      </div>
    </div>
  );
};

export default ProductFilters;
