declare namespace IData {
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
}

export { IData };
