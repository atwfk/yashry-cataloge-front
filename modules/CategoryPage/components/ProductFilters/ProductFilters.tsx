import React, { useState, useEffect } from "react";
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
import withErrorHandler from "@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler";
import { IError } from "@modules/shared/api/IError";
import { toast } from "react-toastify";
import { IProductFilters } from "./IProductFilters";

const ProductFilters: FC<IData.IProps> = ({ data }): ReactElement => {
  const [productsState, setProductsState] =
    useState<IProductFilters.IProductsState>({
      products: [],
      colors: [],
      selectedColors: [],
      ratings: [],
      selectedRatings: [],
      prices: {},
    });
  const [loading, setLoading] = useState(false);

  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  useEffect(() => {
    setProductsState({
      products: data.products,
      colors: data.colors,
      selectedColors: [],
      ratings: data.ratings,
      selectedRatings: [],
      prices: data.prices,
    });
  }, [data]);

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
      setProductsState({
        products: filteredProducts,
        colors: filteredColors,
        selectedColors: updatedSelectedColors,
        ratings: filteredRatings,
        selectedRatings: updatedSelectedRatings,
        prices: {
          ...productsState.prices,
          from: updatedPrices.from,
          to: updatedPrices.to,
        },
      });
    } catch (error: unknown) {
      const { message } = error as IError.IErrorData;
      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="mr-6">
        <div className="sticky h-screen overflow-y-scroll inset-0 space-y-3">
          <div>
            <PriceFilter
              selectedColors={productsState.selectedColors}
              selectedRatings={productsState.selectedRatings}
              prices={productsState.prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
          <div>
            <ColorFilter
              colors={productsState.colors}
              selectedColors={productsState.selectedColors}
              selectedRatings={productsState.selectedRatings}
              prices={productsState.prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
          <div>
            <RatingFilter
              ratings={productsState.ratings}
              selectedColors={productsState.selectedColors}
              selectedRatings={productsState.selectedRatings}
              prices={productsState.prices}
              updateProductFilters={updateProductFilters}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Products products={productsState.products} loading={loading} />
      </div>
    </div>
  );
};

export default withErrorHandler(ProductFilters);
