import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RatingFilter from "./RatingFilter";
import * as mockedFilters from "./mockedFilters";

describe("RatingFilter", () => {
  it("should render 5 rates", () => {
    const changeValHandler = jest.fn();

    render(
      <RatingFilter
        ratings={mockedFilters.mockedRatings}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");
    expect(ratesCheckboxes).toHaveLength(5);
  });

  it("should render 2 selected rates and 3 unchecked rates", () => {
    const changeValHandler = jest.fn();

    render(
      <RatingFilter
        ratings={mockedFilters.mockedRatings}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");

    expect(ratesCheckboxes[0]).toBeChecked();
    expect(ratesCheckboxes[1]).not.toBeChecked();
    expect(ratesCheckboxes[2]).toBeChecked();
  });

  it("should call updateProductFilters once when click on one rate", () => {
    const changeValHandler = jest.fn();

    render(
      <RatingFilter
        ratings={mockedFilters.mockedRatings}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");

    userEvent.click(ratesCheckboxes[3]);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });

  it("should call updateProductFilters once when click on reset rates button", () => {
    const changeValHandler = jest.fn();

    render(
      <RatingFilter
        ratings={mockedFilters.mockedRatings}
        selectedColors={mockedFilters.mockedSelectedColors}
        selectedRatings={mockedFilters.mockedSelectedRatings}
        prices={mockedFilters.mockedPrices}
        updateProductFilters={changeValHandler}
      />,
    );

    const resetButton = screen.getByTestId("reset-rates");

    userEvent.click(resetButton);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });
});
