import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import PriceInput from "./PriceInput";

describe("PriceInput snapshots", () => {
  it("should redner PriceInput with correct price values", () => {
    const tree = renderer
      .create(
        <PriceInput
          minPrice={6}
          maxPrice={1000}
          from={50}
          to={150}
          updateMaxPrice={(): boolean => true}
          updateMinPrice={(): boolean => true}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("PriceInput RTL", () => {
  it("should not accept strings when typing in price inputs", () => {
    render(
      <PriceInput
        minPrice={6}
        maxPrice={1000}
        from={50}
        to={150}
        updateMaxPrice={(): boolean => true}
        updateMinPrice={(): boolean => true}
      />,
    );

    const minPriceInput = screen.getByTestId("min-price");
    const maxPriceInput = screen.getByTestId("max-price");

    userEvent.type(minPriceInput, "string");
    userEvent.type(maxPriceInput, "string");

    expect(minPriceInput).toHaveValue(50);
    expect(maxPriceInput).toHaveValue(150);
  });

  it("should accept numbers when typing in price inputs", () => {
    render(
      <PriceInput
        minPrice={6}
        maxPrice={1000}
        from={50}
        to={150}
        updateMaxPrice={(): boolean => true}
        updateMinPrice={(): boolean => true}
      />,
    );

    const minPriceInput = screen.getByTestId("min-price");
    const maxPriceInput = screen.getByTestId("max-price");

    userEvent.clear(minPriceInput);
    userEvent.clear(maxPriceInput);
    userEvent.type(minPriceInput, "300");
    userEvent.type(maxPriceInput, "400");

    expect(minPriceInput).toHaveValue(300);
    expect(maxPriceInput).toHaveValue(400);
  });

  it("should call updateMaxPrice once and updateMinPrice once", () => {
    const updateMinPrice = jest.fn();
    const updateMaxPrice = jest.fn();

    render(
      <PriceInput
        minPrice={6}
        maxPrice={1000}
        from={50}
        to={150}
        updateMaxPrice={updateMaxPrice}
        updateMinPrice={updateMinPrice}
      />,
    );

    const minPriceInput = screen.getByTestId("min-price");
    const maxPriceInput = screen.getByTestId("max-price");

    userEvent.click(minPriceInput);
    userEvent.tab();
    userEvent.click(maxPriceInput);
    userEvent.tab();

    expect(updateMinPrice).toHaveBeenCalledTimes(1);
    expect(updateMaxPrice).toHaveBeenCalledTimes(1);
  });
});
