import { categories } from "./categories";
import { ADD_CATEGORIES, ADD_CATEGORY } from "../constants";

describe("categories reducer", () => {
  it("adds categories", () => {
    const state = [];
    const expectedState = [{ name: "name", path: "name" }];

    expect(
      categories(state, {
        type: ADD_CATEGORIES,
        categories: [{ name: "name", path: "name" }]
      })
    ).toEqual(expectedState);
  });

  it("adds a single category", () => {
    const state = [{ name: "name", path: "name" }];
    const expectedState = [
      { name: "blah", path: "blah" },
      { name: "name", path: "name" }
    ];

    expect(
      categories(state, {
        type: ADD_CATEGORY,
        category: "blah"
      })
    ).toEqual(expectedState);
  });

  it("does not add the category if it exists already", () => {
    const state = [{ name: "name", path: "name" }];
    const expectedState = [{ name: "name", path: "name" }];

    expect(
      categories(state, {
        type: ADD_CATEGORY,
        category: "name"
      })
    ).toEqual(expectedState);
  });
});
