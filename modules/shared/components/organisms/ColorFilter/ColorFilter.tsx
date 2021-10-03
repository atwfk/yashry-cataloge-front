import React from "react";
import type { FC, ReactElement } from "react";
import Colors from "../../molecules/Colors/Colors";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import { IColorFilter } from "./IColorFilter";

const ColorFilter: FC<IColorFilter.IProps> = ({
  colors,
  selectedColors,
  selectedRatings,
  prices,
  updateProductFilters,
}): ReactElement => {
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

    await updateProductFilters(newSelectedColors, selectedRatings, prices);
  };

  const clearSelectedColors = async (): Promise<void> => {
    await updateProductFilters([], selectedRatings, prices);
  };

  return (
    <Box>
      <div className="pt-4 px-4 flex flex-col self-start">
        <P fontColor="dark" fontSize="lg" fontWeight="bold" classes="mb-2">
          COLORS
        </P>
        <Colors colors={colors} filterProductByColor={filterProductByColor} />
        <button
          type="reset"
          onClick={clearSelectedColors}
          className="self-start"
          data-testid="reset-colors"
        >
          <P fontColor="dark" fontSize="md" fontWeight="normal" classes="mt-2">
            CLEAR
          </P>
        </button>
      </div>
    </Box>
  );
};

export default ColorFilter;
