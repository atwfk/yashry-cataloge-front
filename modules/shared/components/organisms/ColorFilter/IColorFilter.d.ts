import { IData } from "@modules/shared/types/IData";

declare namespace IColorFilter {
  export interface IProps {
    setProducts: (products: IData.IProduct[]) => void;
    colors: IData.IFilteredColors[];
    setColors: (colors: IData.IFilteredColors[]) => void;
    uniqueColors: string[];
    selectedColors: string[];
    setSelectedColors: (selectedColors: string[]) => void;
    selectedRatings: number[];
    prices: IData.IPrices;
    setLoading: (loading: boolean) => void;
  }
}

export { IColorFilter };
