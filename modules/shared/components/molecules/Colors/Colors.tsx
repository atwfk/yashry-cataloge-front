import React from "react";
import type { FC, ReactElement } from "react";
import Color from "../../atoms/Color/Color";
import { IColors } from "./IColors";

const Colors: FC<IColors.IProps> = ({
  colors,
  filterProductByColor,
}): ReactElement => {
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          active={color.active}
          name={color.name}
          filterProductByColor={filterProductByColor}
        />
      ))}
    </div>
  );
};

export default Colors;
