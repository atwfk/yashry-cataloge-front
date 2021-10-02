import React from "react";
import type { FC, ReactElement } from "react";
import Colors from "../../molecules/Colors/Colors";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import { IColorFilter } from "./IColorFilter";
import { getProducts } from "@modules/CategoryPage/api/getProducts/getProducts";
import { transformQueries } from "@modules/shared/logic/transformQueries/transformQueries";
import { getProductsByPrice } from "@modules/shared/logic/getProductsByPrice/getProductsByPrice";
import { createFilteredColors } from "@modules/shared/logic/productsColorsLogic/productsColorsLogic";
import { useRouter } from "next/router";

const ColorFilter: FC<IColorFilter.IProps> = ({
  colors,
  setProducts,
  setColors,
  uniqueColors,
  selectedColors,
  setSelectedColors,
  selectedRatings,
  prices,
}): ReactElement => {
  const { query } = useRouter();
  const { categoryId } = query as { categoryId: string };

  const filterProductByColor = async (
    colorId: string,
    isChecked: boolean,
  ): Promise<void> => {
    let newSelectedColors: string[] = [];
    if (isChecked) {
      newSelectedColors = [...selectedColors, colorId];
    } else {
      newSelectedColors = selectedColors.filter((color) => color !== colorId);
    }

    const queryString = transformQueries({
      color: newSelectedColors,
      rating: selectedRatings,
    });

    try {
      const data = await getProducts(categoryId, queryString);

      const filteredProducts = getProductsByPrice(
        data,
        +prices.from,
        +prices.to,
      );

      const filteredColors = createFilteredColors(
        uniqueColors,
        newSelectedColors ?? "",
      );

      setProducts(filteredProducts);
      setSelectedColors(newSelectedColors);
      setColors(filteredColors);
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
          COLORS
        </P>
        <Colors colors={colors} filterProductByColor={filterProductByColor} />
      </div>
    </Box>
  );
};

export default ColorFilter;
