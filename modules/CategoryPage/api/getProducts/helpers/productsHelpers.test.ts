import { getUrl } from "./getProductsHelpers";

describe("getUrl", () => {
  it("should return string contains categoryId and queries", () => {
    const url = getUrl("1", "color=red&color=white");

    const expectedUrl = "?categoryId=1&color=red&color=white";

    expect(url).toEqual(expectedUrl);
  });

  it("should return string contains queries", () => {
    const url = getUrl(undefined, "color=red&color=white");

    const expectedUrl = "?color=red&color=white";

    expect(url).toEqual(expectedUrl);
  });

  it("should return string contains categoryId", () => {
    const url = getUrl("5", "");

    const expectedUrl = "?categoryId=5&";

    expect(url).toEqual(expectedUrl);
  });
});
