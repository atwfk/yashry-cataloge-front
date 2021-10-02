import { IData } from "@modules/shared/types/IData";

declare namespace IRatingFilter {
  export interface IProps {
    setProducts: (products: IData.IProduct[]) => void;
    ratings: IData.IFilteredStars[];
    setRatings: (ratings: IData.IFilteredStars[]) => void;
    uniqueRatings: number[];
    selectedColors: string[];
    selectedRatings: number[];
    setSelectedRatings: (selectedRatings: number[]) => void;
    prices: IData.IPrices;
    setLoading: (loading: boolean) => void;
  }
}

export { IRatingFilter };
