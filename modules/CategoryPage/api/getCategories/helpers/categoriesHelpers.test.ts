import { mockedCategories } from "../mockedCategories";
import { addCategory } from "./getCategoriesHelpers";

describe("addCategory", () => {
  it("should return new array with the new added category", () => {
    const newCategories = addCategory(mockedCategories, {
      id: 0,
      name: "all",
      image: "http://placeimg.com/640/480/city",
    });

    const expectedData = [
      {
        id: 0,
        name: "all",
        image: "http://placeimg.com/640/480/city",
      },
      ...mockedCategories,
    ];

    expect(newCategories).toEqual(expectedData);
  });
});
