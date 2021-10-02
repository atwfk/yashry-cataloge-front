declare namespace IColor {
  export interface IProps {
    name: string;
    active: boolean;
    filterProductByColor: (colorName: string, isChecked: boolean) => void;
  }
}

export { IColor };
