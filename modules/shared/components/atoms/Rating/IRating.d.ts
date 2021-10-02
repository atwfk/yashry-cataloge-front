declare namespace IRating {
  export interface IProps {
    rating: number;
    active: boolean;
    filterProductByRating: (Rate: string, isChecked: boolean) => void;
  }
}

export { IRating };
