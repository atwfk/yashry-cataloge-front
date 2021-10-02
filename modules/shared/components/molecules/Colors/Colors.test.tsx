import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Colors from "./Colors";

const colors = [
  { id: 1, name: "red", active: true },
  { id: 2, name: "black", active: false },
  { id: 3, name: "aqua", active: true },
];

describe("Colors", () => {
  it("should render three colors", () => {
    const changeValHandler = jest.fn();

    render(<Colors colors={colors} filterProductByColor={changeValHandler} />);

    const checkboxes = screen.getAllByTestId("checkbox");
    expect(checkboxes).toHaveLength(3);
  });

  it("should render 2 checked colors and one unchecked color", () => {
    const changeValHandler = jest.fn();

    render(<Colors colors={colors} filterProductByColor={changeValHandler} />);

    const checkboxes = screen.getAllByTestId("checkbox");

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).toBeChecked();
  });

  it("should call filterProductByColor once", () => {
    const changeValHandler = jest.fn();

    render(<Colors colors={colors} filterProductByColor={changeValHandler} />);

    const checkboxes = screen.getAllByTestId("checkbox");

    userEvent.click(checkboxes[1]);
    expect(changeValHandler).toHaveBeenCalledTimes(1);
  });
});
