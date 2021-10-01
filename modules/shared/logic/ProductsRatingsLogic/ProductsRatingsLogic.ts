import { IData } from "../../types/IData";

export const getUniqueRatings = (products: IData.IProduct[]): number[] => {
  const productsRatings = products.map((product) => product.rating);

  const uniqueRatings = new Set(productsRatings);

  return [...uniqueRatings];
};

export const createFilteredRatings = (
  uniqueRatings: number[],
  selectedRatings: string[] | string,
): IData.IFilteredStars[] => {
  let ratingsArray: string[] = [];
  if (!Array.isArray(selectedRatings)) {
    ratingsArray = [selectedRatings];
  } else {
    ratingsArray = selectedRatings;
  }

  const filteredRatings = uniqueRatings.map((uniqueRate, index) => {
    const selectedRate = ratingsArray.filter(
      (selectedRate) => +selectedRate === uniqueRate,
    );

    if (selectedRate.length === 0) {
      return { id: index + 1, rating: uniqueRate, active: false };
    }

    return { id: index + 1, rating: uniqueRate, active: true };
  });

  return filteredRatings;
};
