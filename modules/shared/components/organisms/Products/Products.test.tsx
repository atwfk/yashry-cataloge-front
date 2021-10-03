import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "./Products";
import { mockedProducts } from "./mockedProducts";

describe("Products", () => {
  it("should render 4 products", () => {
    render(<Products products={mockedProducts} loading={false} />);

    const products = screen.getAllByTestId("product");
    const loader = screen.queryByTestId("loader");
    const notFoundProducts = screen.queryByTestId("not-found-products");

    expect(products).toHaveLength(4);
    expect(loader).not.toBeInTheDocument();
    expect(notFoundProducts).not.toBeInTheDocument();
  });

  it("should render loading div when passing loading={true}", () => {
    render(<Products products={[]} loading={true} />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });

  it("should display no products found when we passing empty products array", () => {
    render(<Products products={[]} loading={false} />);

    const notFoundProducts = screen.queryByTestId("not-found-products");

    expect(notFoundProducts).toBeInTheDocument();
  });
});
