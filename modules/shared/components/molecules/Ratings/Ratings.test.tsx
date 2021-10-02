import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Ratings from "./Ratings";

const ratings = [
  { id: 1, rating: 1, active: true },
  { id: 2, rating: 2, active: false },
  { id: 3, rating: 3, active: true },
];

describe("Ratings", () => {
  it("should render three Rates", () => {
    const changeValHandler = jest.fn();

    render(
      <Ratings ratings={ratings} filterProductByRating={changeValHandler} />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");
    expect(ratesCheckboxes).toHaveLength(3);
  });

  it("should render 2 checked rates and one unchecked rate", () => {
    const changeValHandler = jest.fn();

    render(
      <Ratings ratings={ratings} filterProductByRating={changeValHandler} />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");

    expect(ratesCheckboxes[0]).toBeChecked();
    expect(ratesCheckboxes[1]).not.toBeChecked();
    expect(ratesCheckboxes[2]).toBeChecked();
  });

  it("should call filterProductByRating once", () => {
    const changeValHandler = jest.fn();

    render(
      <Ratings ratings={ratings} filterProductByRating={changeValHandler} />,
    );

    const ratesCheckboxes = screen.getAllByTestId("rate-checkbox");

    userEvent.click(ratesCheckboxes[1]);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });
});
