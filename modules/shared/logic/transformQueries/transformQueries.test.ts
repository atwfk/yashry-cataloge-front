import { transformQueries } from "./transformQueries";

describe("transformQueries", () => {
  it("should return string of one rating and one color", () => {
    const queries = { color: "red", rating: 4 };

    const queryString = transformQueries(queries);

    const expectedResults = "color=red&rating=4";

    expect(queryString).toEqual(expectedResults);
  });

  it("should return string of one rating", () => {
    const queries = { rating: 4 };

    const queryString = transformQueries(queries);

    const expectedResults = "rating=4";

    expect(queryString).toEqual(expectedResults);
  });

  it("should return string of one color", () => {
    const queries = { color: "red" };

    const queryString = transformQueries(queries);

    const expectedResults = "color=red";

    expect(queryString).toEqual(expectedResults);
  });

  it("should return string of colors array and rating array", () => {
    const queries = { color: ["red", "black", "green"], rating: [4, 5, 2] };

    const queryString = transformQueries(queries);

    const expectedResults =
      "color=red&color=black&color=green&rating=4&rating=5&rating=2";

    expect(queryString).toEqual(expectedResults);
  });

  it("should return string of colors array", () => {
    const queries = { color: ["red", "black", "green"] };

    const queryString = transformQueries(queries);

    const expectedResults = "color=red&color=black&color=green";

    expect(queryString).toEqual(expectedResults);
  });

  it("should return string of rating array", () => {
    const queries = { rating: [4, 5, 2] };

    const queryString = transformQueries(queries);

    const expectedResults = "rating=4&rating=5&rating=2";

    expect(queryString).toEqual(expectedResults);
  });
});
