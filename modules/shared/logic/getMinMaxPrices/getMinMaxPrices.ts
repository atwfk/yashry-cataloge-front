import { IData } from "../../types/IData";

export const getMinMaxPrices = (products: IData.IProduct[]): number[] => {
  const productPrices = products.map((product) => product.price);

  const minPrice = Math.min(...productPrices);
  const maxPrice = Math.max(...productPrices);

  return [minPrice, maxPrice];
};
