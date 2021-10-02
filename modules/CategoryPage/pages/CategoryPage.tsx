import React from "react";
import type { FC, ReactElement } from "react";
import Products from "@modules/shared/components/organisms/Products/Products";
import { IData } from "@modules/shared/types/IData";
import Categories from "../components/Categories/Categories";

const CategoryPage: FC<{ data: IData.IProduct[] }> = ({
  data,
}): ReactElement => {
  return (
    <>
      <Categories />
      <Products products={data} />
    </>
  );
};

export default CategoryPage;
