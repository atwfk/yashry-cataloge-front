import { IData } from "@modules/shared/types/IData";

declare namespace IPriceFilter {
  export interface IProps {
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

export { IPriceFilter };
