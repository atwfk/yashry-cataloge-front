import React from "react";
import Box from "./Box";
import renderer from "react-test-renderer";

describe("Box", () => {
  it("should render Box component with padding and shadow", () => {
    const tree = renderer.create(<Box>normal Text</Box>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
