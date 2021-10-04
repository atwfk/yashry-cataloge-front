declare namespace IProductFilters {
  export interface IProductsState {
    products: IData.IProduct[];
    colors: IData.IFilteredColors[];
    selectedColors: string[];
    ratings: IData.IFilteredStars[];
    selectedRatings: number[];
    prices: IData.IPrices;
  }
}

export { IProductFilters };
