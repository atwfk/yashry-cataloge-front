import React from "react";
import renerer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Stars from "./Stars";

describe("Stars", () => {
  it("should render 3 filled stars and 2 not filled", () => {
    render(<Stars rating={3} active={false} />);

    const filledStars = screen.getAllByTestId("filled-stars");
    const notFilledStars = screen.getAllByTestId("not-filled-stars");

    expect(filledStars).toHaveLength(3);
    expect(notFilledStars).toHaveLength(2);
  });

  it("should render yello stars when we pass active={false}", () => {
    const tree = renerer.create(<Stars rating={3} active={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render dark stars when we pass active={true}", () => {
    const tree = renerer.create(<Stars rating={3} active />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
