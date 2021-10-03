import { IData } from "@modules/shared/types/IData";

declare namespace IRatingFilter {
  export interface IProps {
    ratings: IData.IFilteredStars[];
    selectedColors: string[];
    selectedRatings: number[];
    prices: IData.IPrices;
    updateProductFilters: (
      selectedColors: string[],
      selectedRatings: number[],
      prices: IData.IPrices,
    ) => void;
  }
}

export { IRatingFilter };
