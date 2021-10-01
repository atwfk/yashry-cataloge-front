import React from "react";
import type { FC, ReactElement } from "react";
import Products from "@modules/shared/components/Orgnisms/Products/Products";
import { IData } from "@modules/shared/types/IData";

const CategoryPage: FC<{ data: IData.IProduct[] }> = ({
  data,
}): ReactElement => {
  return (
    <div>
      <Products products={data} />
    </div>
  );
};

export default CategoryPage;
