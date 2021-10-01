import React from "react";
import type { FC, ReactElement } from "react";
import type { IData } from "../../../../shared/types/IData";
import Product from "../../molecules/Product/Product";

const products: FC<{ products: IData.IProduct[] }> = ({
  products,
}): ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
      {products.map((product) => (
        <div key={product.id} data-testid="product">
          <Product
            price={product.price}
            rating={product.rating}
            id={product.id}
            name={product.name}
            image={product.image}
            color={product.color}
            currency={product.currency}
            releaseDate={product.releaseDate}
            categoryId={product.categoryId}
          />
        </div>
      ))}
    </div>
  );
};

export default products;
