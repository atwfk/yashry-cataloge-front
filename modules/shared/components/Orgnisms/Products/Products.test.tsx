import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "./Products";
import { mockedProducts } from "./mockedProducts";

describe("Products", () => {
  it("should render 4 products", () => {
    render(<Products products={mockedProducts} />);

    const products = screen.getAllByTestId("product");

    expect(products).toHaveLength(4);
  });
});
