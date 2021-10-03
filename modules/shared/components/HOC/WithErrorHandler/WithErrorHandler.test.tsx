import React from "react";
import { render, screen } from "@testing-library/react";
import WithErrorHandler from "./WithErrorHandler";
import type { IDataTests } from "./IDataTests";

describe("WithErrorHandler", () => {
  it("Should Render component, when it recieves successfull data", () => {
    const successData = {
      category: "kids",
    };

    const mockComponent = jest.fn(
      <T extends IDataTests.IDataSucccess>({ data }: T) => {
        return <div>{data.category}</div>;
      },
    );

    const Component = WithErrorHandler(mockComponent);
    render(<Component data={successData} />);

    expect(mockComponent).toBeCalled();

    const category = screen.getByText(successData.category);
    expect(category).toBeInTheDocument();
  });

  it("Should Render the error component when it recieves error data", () => {
    const errorData = {
      error: true,
      errorCode: 404,
      message: "not Found",
    };

    const mockComponent = jest.fn(
      <T extends IDataTests.IDataError>({ data }: T) => {
        return <div>{data.message}</div>;
      },
    );

    const Component = WithErrorHandler(mockComponent);
    render(<Component data={errorData} />);

    const errorMessage = screen.getByText(errorData.message);

    expect(errorMessage).toBeInTheDocument();
  });
});
