import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorFilter from "./ColorFilter";
import * as mockedFilters from "./mockedFilters";

describe("ColorFilter", () => {
  it("should render 5 colors", () => {
    const changeValHandler = jest.fn();

    render(
      <ColorFilter
        colors={mockedFilters.mockedColors}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const checkboxes = screen.getAllByTestId("checkbox");
    expect(checkboxes).toHaveLength(5);
  });

  it("should render 4 checked colors and one unchecked color", () => {
    const changeValHandler = jest.fn();

    render(
      <ColorFilter
        colors={mockedFilters.mockedColors}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const checkboxes = screen.getAllByTestId("checkbox");

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[4]).toBeChecked();
  });

  it("should call updateProductFilters once when click on one color checkbox", () => {
    const changeValHandler = jest.fn();

    render(
      <ColorFilter
        colors={mockedFilters.mockedColors}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const checkboxes = screen.getAllByTestId("checkbox");

    userEvent.click(checkboxes[3]);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });

  it("should call updateProductFilters once when click on reset colors button", () => {
    const changeValHandler = jest.fn();

    render(
      <ColorFilter
        colors={mockedFilters.mockedColors}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const resetButton = screen.getByTestId("reset-colors");

    userEvent.click(resetButton);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });
});
