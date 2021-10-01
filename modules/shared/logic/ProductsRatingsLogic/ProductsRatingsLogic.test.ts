import {
  getUniqueRatings,
  createFilteredRatings,
} from "./ProductsRatingsLogic";

const mockedProduct = {
  price: 100,
  name: "Handcrafted Cotton Keyboard",
  image: "http://placeimg.com/640/480/cats",
  currency: "USD",
  releaseDate: "2021-09-23T08:15:36.195Z",
  categoryId: 2,
  color: "black",
};

describe("getUniqueRatings", () => {
  it("should return unique ratings from the given products array", () => {
    const products = [
      { id: 1, rating: 2, ...mockedProduct },
      { id: 2, rating: 5, ...mockedProduct },
      { id: 3, rating: 3, ...mockedProduct },
      { id: 4, rating: 2, ...mockedProduct },
      { id: 5, rating: 5, ...mockedProduct },
      { id: 6, rating: 1, ...mockedProduct },
    ];

    const uniqueRatings = getUniqueRatings(products);

    const expectedRatings = [2, 5, 3, 1];

    expect(uniqueRatings).toEqual(expectedRatings);
  });
});

describe("createFilteredRatings", () => {
  it("should return array of active and inactive ratings", () => {
    const uniqueRatings = [2, 5, 3, 1];
    const selectedRatings = ["3", "5"];

    const filteredRatings = createFilteredRatings(
      uniqueRatings,
      selectedRatings,
    );

    const expectedRatings = [
      { id: 1, rating: 2, active: false },
      { id: 2, rating: 5, active: true },
      { id: 3, rating: 3, active: true },
      { id: 4, rating: 1, active: false },
    ];

    expect(filteredRatings).toEqual(expectedRatings);
  });

  it("should return array of active and inactive ratings even if we passed only one selected rate", () => {
    const uniqueRatings = [2, 5, 3, 1];
    const selectedRatings = "3";

    const filteredRatings = createFilteredRatings(
      uniqueRatings,
      selectedRatings,
    );

    const expectedRatings = [
      { id: 1, rating: 2, active: false },
      { id: 2, rating: 5, active: false },
      { id: 3, rating: 3, active: true },
      { id: 4, rating: 1, active: false },
    ];

    expect(filteredRatings).toEqual(expectedRatings);
  });
});
