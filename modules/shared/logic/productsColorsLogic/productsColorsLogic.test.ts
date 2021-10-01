import { getUniqueColors, createFilteredColors } from "./productsColorsLogic";

const mockedProduct = {
  price: 100,
  name: "Handcrafted Cotton Keyboard",
  image: "http://placeimg.com/640/480/cats",
  currency: "USD",
  releaseDate: "2021-09-23T08:15:36.195Z",
  categoryId: 2,
  rating: 4,
};

describe("getUniqueColors", () => {
  it("should return unique colors from the given products array", () => {
    const products = [
      { id: 1, color: "black", ...mockedProduct },
      { id: 2, color: "black", ...mockedProduct },
      { id: 3, color: "cyan", ...mockedProduct },
      { id: 4, color: "silver", ...mockedProduct },
      { id: 5, color: "gold", ...mockedProduct },
      { id: 6, color: "silver", ...mockedProduct },
    ];

    const uniqueColors = getUniqueColors(products);

    const expectedColors = ["black", "cyan", "silver", "gold"];

    expect(uniqueColors).toEqual(expectedColors);
  });
});

describe("createFilteredColors", () => {
  it("should return array of active and inactive colors", () => {
    const uniqueColors = ["red", "white", "black", "green"];
    const selectedColors = ["red", "green", "accent"];

    const filteredColors = createFilteredColors(uniqueColors, selectedColors);

    const expectedColors = [
      { id: 1, name: "red", active: true },
      { id: 2, name: "white", active: false },
      { id: 3, name: "black", active: false },
      { id: 4, name: "green", active: true },
    ];

    expect(filteredColors).toEqual(expectedColors);
  });

  it("should return array of active and inactive colors even if we passed only one selected color", () => {
    const uniqueColors = ["red", "white", "black", "green"];
    const selectedColors = "red";

    const filteredColors = createFilteredColors(uniqueColors, selectedColors);

    const expectedColors = [
      { id: 1, name: "red", active: true },
      { id: 2, name: "white", active: false },
      { id: 3, name: "black", active: false },
      { id: 4, name: "green", active: false },
    ];

    expect(filteredColors).toEqual(expectedColors);
  });
});
