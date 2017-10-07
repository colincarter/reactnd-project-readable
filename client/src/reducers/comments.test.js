import comments from "./comments";
import { ADD_COMMENT } from "../constants";

describe("comments reducer", () => {
  it("adds a comment to a post", () => {
    const state = { "1": [] };
    const comment = { parentId: "1", body: "A comment" };
    const expected = { "1": [comment] };
    expect(comments(state, { type: ADD_COMMENT, comment: comment })).toEqual(
      expected
    );
  });
});
