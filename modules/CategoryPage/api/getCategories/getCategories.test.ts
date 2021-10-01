import axios from "axios";
import { getCategories } from "./getCategories";
import { mockedCategories } from "./mockedCategories";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getCategories", () => {
  it("should return array of categories in success case", async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockedCategories,
      status: 200,
      statusText: "ok",
      headers: "any",
      config: {},
    });

    const categories = await getCategories();

    const expectedData = [
      {
        id: 0,
        name: "All",
        image: "http://placeimg.com/640/480/city",
      },
      ...mockedCategories,
    ];

    expect(categories).toEqual(expectedData);
  });

  it("Should reject Network Error if there's not a response cames from axios", async () => {
    mockedAxios.get.mockRejectedValue({ message: "Network Error" });

    try {
      await getCategories();
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
      await getCategories();
    } catch (error: unknown) {
      const expectedData = {
        error: true,
        message: "Cannot Find any category",
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
      await getCategories();
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
