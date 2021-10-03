declare namespace IPriceInput {
  export interface IProps {
    minPrice: number;
    maxPrice: number;
    from: number;
    to: number;
    updateMinPrice: (minPrice: string) => void;
    updateMaxPrice: (maxPrice: string) => void;
  }
}

export { IPriceInput };
