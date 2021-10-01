import React from "react";
import type { FC, ReactElement } from "react";
import type { IData } from "../../../../shared/types/IData";
import Product from "../../molecules/Product/Product";
import styles from "./Products.module.css";

const products: FC<{ products: IData.IProduct[] }> = ({
  products,
}): ReactElement => {
  return (
    <div className={styles.products}>
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
