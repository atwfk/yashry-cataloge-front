import { IData } from "@modules/shared/types/IData";

declare namespace IRatings {
  export interface IProps {
    ratings: IData.IFilteredStars[];
    filterProductByRating: (Rate: string, isChecked: boolean) => void;
  }
}

export { IRatings };
