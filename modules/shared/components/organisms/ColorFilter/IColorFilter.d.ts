import { IData } from "@modules/shared/types/IData";

declare namespace IColorFilter {
  export interface IProps {
    colors: IData.IFilteredColors[];
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

export { IColorFilter };
