import { getMinMaxPrices } from "./getMinMaxPrices";

const mockedProduct = {
  color: "black",
  name: "Handcrafted Cotton Keyboard",
  image: "http://placeimg.com/640/480/cats",
  currency: "USD",
  releaseDate: "2021-09-23T08:15:36.195Z",
  categoryId: 2,
  rating: 4,
};

describe("getMinMaxPrices", () => {
  it("should return min and max price from the gived products", () => {
    const products = [
      { id: 1, price: 500, ...mockedProduct },
      { id: 2, price: 700, ...mockedProduct },
      { id: 3, price: 600, ...mockedProduct },
      { id: 4, price: 200, ...mockedProduct },
    ];

    const minMaxPrice = getMinMaxPrices(products);

    const expectedPrices = [200, 700];

    expect(minMaxPrice).toEqual(expectedPrices);
  });
});
