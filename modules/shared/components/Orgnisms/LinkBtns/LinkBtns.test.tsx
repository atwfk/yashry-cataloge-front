import React from "react";
import { render, screen } from "@testing-library/react";
import LinkBtns from "./LinkBtns";
import { mockedLinks } from "./mockedLinks";

describe("LinkBtns", () => {
  it("should render 3 links", () => {
    render(<LinkBtns links={mockedLinks} />);

    const links = screen.getAllByTestId("link");

    expect(links).toHaveLength(3);
  });
});
