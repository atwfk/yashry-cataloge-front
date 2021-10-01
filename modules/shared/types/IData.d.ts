declare namespace IData {
  export interface IProps {
    data: {
      products: IProduct[];
      uniqueColors: string[];
      colors: IFilteredColors[];
      uniqueRatings: number[];
      ratings: IFilteredStars[];
      prices: IPrices;
    };
  }
  export interface IProduct extends ICategory {
    color: string;
    price: number;
    currency: string;
    releaseDate: string;
    categoryId: number;
    rating: number;
  }

  export interface ICategory {
    id: number;
    name: string;
    image: string;
  }

  export interface IFilteredColors {
    id: number;
    name: string;
    active: boolean;
  }

  export interface IFilteredStars {
    id: number;
    rating: number;
    active: boolean;
  }

  export interface IPrices {
    min: number;
    max: number;
    from: number;
    to: number;
  }
}

export { IData };
