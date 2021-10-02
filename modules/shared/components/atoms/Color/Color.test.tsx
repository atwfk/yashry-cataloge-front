import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

describe("Testing Color with snapshot", () => {
  it("should render inactive Color component", () => {
    const tree = renderer
      .create(
        <Color
          name="red"
          active={false}
          filterProductByColor={(): string => {
            return "test";
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render active Color component", () => {
    const tree = renderer
      .create(
        <Color
          name="red"
          active={true}
          filterProductByColor={(): string => {
            return "test";
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Testing Color with RTL", () => {
  it("Expect color checkbox not to be checked when we pass active={false}", () => {
    render(
      <Color
        name="red"
        active={false}
        filterProductByColor={(): string => {
          return "test";
        }}
      />,
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("Expect color checkbox to be checked when we pass active={true}", () => {
    render(
      <Color
        name="red"
        active={true}
        filterProductByColor={(): string => {
          return "test";
        }}
      />,
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("Expect filterProductByColor to be called once", () => {
    const handleChange = jest.fn();
    render(
      <Color name="red" active={false} filterProductByColor={handleChange} />,
    );

    const checkbox = screen.getByTestId("checkbox");

    userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
