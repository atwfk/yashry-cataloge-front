import React from "react";
import { render, screen } from "@testing-library/react";
import Stars from "./Stars";

describe("Stars", () => {
  it("should render 3 filled stars and 2 not filled", () => {
    render(<Stars rating={3} />);

    const filledStars = screen.getAllByTestId("filled-stars");
    const notFilledStars = screen.getAllByTestId("not-filled-stars");

    expect(filledStars).toHaveLength(3);
    expect(notFilledStars).toHaveLength(2);
  });
});
