import { IData } from "../../types/IData";

export const getProductsByPrice = (
  products: IData.IProduct[],
  minPrice?: number,
  maxPrice?: number,
): IData.IProduct[] => {
  if (!minPrice && !maxPrice) {
    return products;
  }

  const filreredProducts = products.filter((product) => {
    if (minPrice && !maxPrice) {
      return product.price > minPrice;
    }

    if (!minPrice && maxPrice) {
      return product.price < maxPrice;
    }

    if (minPrice && maxPrice) {
      return product.price > minPrice && product.price < maxPrice;
    }
  });

  return filreredProducts;
};
