import { IData } from "../../types/IData";

export const getUniqueColors = (products: IData.IProduct[]): string[] => {
  const productsColors = products.map((product) => product.color);

  const uniqueColors = new Set(productsColors);

  return [...uniqueColors];
};

export const createFilteredColors = (
  uniqueColors: string[],
  selectedColors: string[] | string,
): IData.IFilteredColors[] => {
  let colorsArray: string[] = [];
  if (!Array.isArray(selectedColors)) {
    colorsArray = [selectedColors];
  } else {
    colorsArray = selectedColors;
  }

  const filteredColors = uniqueColors.map((uniqueColor, index) => {
    const selectedColor = colorsArray.filter(
      (selectedColor) => selectedColor === uniqueColor,
    );

    if (selectedColor.length === 0) {
      return { id: index + 1, name: uniqueColor, active: false };
    }

    return { id: index + 1, name: uniqueColor, active: true };
  });

  return filteredColors;
};
