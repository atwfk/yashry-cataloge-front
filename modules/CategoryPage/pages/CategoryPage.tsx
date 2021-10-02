import React from "react";
import type { FC, ReactElement } from "react";
import { IData } from "@modules/shared/types/IData";
import Categories from "../components/Categories/Categories";
import ProductFilters from "../components/ProductFilters/ProductFilters";

const CategoryPage: FC<IData.IProps> = ({ data }): ReactElement => {
  return (
    <>
      <Categories />
      <ProductFilters data={data} />
    </>
  );
};

export default CategoryPage;
