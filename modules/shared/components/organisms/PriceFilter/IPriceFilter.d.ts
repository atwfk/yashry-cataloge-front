import { IData } from "@modules/shared/types/IData";

declare namespace IPriceFilter {
  export interface IProps {
    selectedColors: string[];
    selectedRatings: number[];
    prices: IData.IPrices;
    setPrices: (prices: IData.IPrices) => void;
    setProducts: (products: IData.IProduct[]) => void;
    setLoading: (loading: boolean) => void;
  }
}

export { IPriceFilter };
