import React from "react";
import renderer from "react-test-renderer";
import CategoryPage from "./CategoryPage";

describe("CategoryPage", () => {
  it("should render Category Page text", () => {
    const tree = renderer.create(<CategoryPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
