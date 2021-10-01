import React from "react";
import LinkBtn from "./LinkBtn";
import renderer from "react-test-renderer";

describe("LinkBtn", () => {
  it("should render link button with active={false}", () => {
    const tree = renderer
      .create(
        <LinkBtn path="/" linkId="1">
          normal text
        </LinkBtn>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render link button with active={true}", () => {
    const tree = renderer
      .create(
        <LinkBtn path="/" linkId="1" active>
          normal text
        </LinkBtn>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
