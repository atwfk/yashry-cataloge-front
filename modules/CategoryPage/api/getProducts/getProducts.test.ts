import axios from "axios";
import { getProducts } from "./getProducts";
import { mockedProducts } from "./mockedProducts";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getProducts", () => {
  it("should return array of products in success case", async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockedProducts,
      status: 200,
      statusText: "ok",
      headers: "any",
      config: {},
    });

    const products = await getProducts(undefined, "");

    const expectedData = mockedProducts;

    expect(products).toEqual(expectedData);
  });

  it("Should reject Network Error if there's not a response cames from axios", async () => {
    mockedAxios.get.mockRejectedValue({ message: "Network Error" });

    try {
      await getProducts(undefined, "");
    } catch (error: unknown) {
      const expectedData = { error: true, message: "Network Error" };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });

  it("Should reject Error object with custom message if client did recognized the status code", async () => {
    mockedAxios.get.mockRejectedValue({
      response: { status: 404, statusText: "not found" },
    });

    try {
      await getProducts(undefined, "");
    } catch (error: unknown) {
      const expectedData = {
        error: true,
        message: "Cannot Find any products",
        errorCode: 404,
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });

  it("Should reject Error object and return same message if client did not recognized the status code", async () => {
    mockedAxios.get.mockRejectedValue({
      response: { status: 401, statusText: "Unauthorized" },
    });

    try {
      await getProducts(undefined, "");
    } catch (error: unknown) {
      const expectedData = {
        error: true,
        message: "Unauthorized",
        errorCode: 401,
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });
});
