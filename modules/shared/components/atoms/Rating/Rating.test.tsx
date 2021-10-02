import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rating from "./Rating";

describe("Testing Rating with snapshot", () => {
  it("should render inactive Rating component", () => {
    const tree = renderer
      .create(
        <Rating
          rating={3}
          active={false}
          filterProductByRating={(): string => {
            return "test";
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render active Rating component", () => {
    const tree = renderer
      .create(
        <Rating
          rating={3}
          active={true}
          filterProductByRating={(): string => {
            return "test";
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Testing Rating with RTL", () => {
  it("Expect Rating checkbox not to be checked when we pass active={false}", () => {
    render(
      <Rating
        rating={3}
        active={false}
        filterProductByRating={(): string => {
          return "test";
        }}
      />,
    );

    const rateCheckbox = screen.getByTestId("rate-checkbox");
    expect(rateCheckbox).not.toBeChecked();
  });

  it("Expect Rating checkbox to be checked when we pass active={true}", () => {
    render(
      <Rating
        rating={3}
        active={true}
        filterProductByRating={(): string => {
          return "test";
        }}
      />,
    );

    const rateCheckbox = screen.getByTestId("rate-checkbox");
    expect(rateCheckbox).toBeChecked();
  });

  it("Expect filterProductByRating to be called once", () => {
    const handleChange = jest.fn();
    render(
      <Rating rating={3} active={false} filterProductByRating={handleChange} />,
    );

    const rateCheckbox = screen.getByTestId("rate-checkbox");

    userEvent.click(rateCheckbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
