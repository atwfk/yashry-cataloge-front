import React from "react";
import Product from "./Product";
import renderer from "react-test-renderer";

describe("Product", () => {
  it("should render single product", () => {
    const product = {
      id: 1,
      name: "Handcrafted Cotton Keyboard",
      image: "http://placeimg.com/640/480/cats",
      color: "black",
      price: 614,
      currency: "USD",
      releaseDate: "2021-09-23T08:15:36.195Z",
      categoryId: 2,
      rating: 4,
    };

    const tree = renderer
      .create(
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
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
