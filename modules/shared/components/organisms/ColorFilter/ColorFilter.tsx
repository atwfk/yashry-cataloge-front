import React from "react";
import type { FC, ReactElement } from "react";
import Colors from "../../molecules/Colors/Colors";
import { IData } from "../../../types/IData";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";

const ColorFilter: FC<{ colors: IData.IFilteredColors[] }> = ({
  colors,
}): ReactElement => {
  const filterProductByColor = (colorId: string, isChecked: boolean): void => {
    console.log(colorId, isChecked);
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
