import { IData } from "@modules/shared/types/IData";

declare namespace IColors {
  export interface IProps {
    colors: IData.IFilteredColors[];
    filterProductByColor: (colorName: string, isChecked: boolean) => void;
  }
}

export { IColors };
