import React from "react";
import P from "./Paragraph";
import renderer from "react-test-renderer";

describe("Paragraph", () => {
  it("should render Paragraph with small text with primary color", () => {
    const tree = renderer
      .create(<P fontSize="sm" fontColor="primary" fontWeight="normal" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render Paragraph with medium text with accent color", () => {
    const tree = renderer
      .create(<P fontSize="md" fontColor="accent" fontWeight="medium" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render Paragraph with large text with error color", () => {
    const tree = renderer
      .create(<P fontSize="lg" fontColor="error" fontWeight="bold" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
