import { getProductsByPrice } from "./getProductsByPrice";

const mockedProduct = {
  name: "Handcrafted Cotton Keyboard",
  image: "http://placeimg.com/640/480/cats",
  color: "black",
  currency: "USD",
  releaseDate: "2021-09-23T08:15:36.195Z",
  categoryId: 2,
  rating: 4,
};

describe("getProductsByPrice", () => {
  it("should return products without any filter if we havn't passed min or max price", () => {
    const products = [
      { id: 1, price: 100, ...mockedProduct },
      { id: 2, price: 200, ...mockedProduct },
      { id: 3, price: 500, ...mockedProduct },
    ];

    const filteredProducts = getProductsByPrice(products, undefined, undefined);

    const expectedProducts = products;

    expect(filteredProducts).toEqual(expectedProducts);
  });

  it("should return products filtered only by max price if we havn't passed min price", () => {
    const products = [
      { id: 1, price: 100, ...mockedProduct },
      { id: 2, price: 200, ...mockedProduct },
      { id: 3, price: 500, ...mockedProduct },
    ];

    const filteredProducts = getProductsByPrice(products, undefined, 400);

    const expectedProducts = [
      { id: 1, price: 100, ...mockedProduct },
      { id: 2, price: 200, ...mockedProduct },
    ];

    expect(filteredProducts).toEqual(expectedProducts);
  });

  it("should return products filtered only by min price if we havn't passed max price", () => {
    const products = [
      { id: 1, price: 100, ...mockedProduct },
      { id: 2, price: 200, ...mockedProduct },
      { id: 3, price: 500, ...mockedProduct },
    ];

    const filteredProducts = getProductsByPrice(products, 150, undefined);

    const expectedProducts = [
      { id: 2, price: 200, ...mockedProduct },
      { id: 3, price: 500, ...mockedProduct },
    ];

    expect(filteredProducts).toEqual(expectedProducts);
  });

  it("should return products filtered by min and max price", () => {
    const products = [
      { id: 1, price: 100, ...mockedProduct },
      { id: 2, price: 200, ...mockedProduct },
      { id: 3, price: 500, ...mockedProduct },
    ];

    const filteredProducts = getProductsByPrice(products, 150, 400);

    const expectedProducts = [{ id: 2, price: 200, ...mockedProduct }];

    expect(filteredProducts).toEqual(expectedProducts);
  });
});
