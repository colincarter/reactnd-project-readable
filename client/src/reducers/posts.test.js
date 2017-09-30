import posts from "./posts";
import { ADD_COMMENT } from "../constants";

describe("posts reducer", () => {
  it("adds a comment to a post", () => {
    const state = [{ id: "1", comments: [] }];
    const comment = { parentId: "1" };
    const expected = [{ id: "1", comments: [comment] }];
    expect(posts(state, { type: ADD_COMMENT, comment: comment })).toEqual(
      expected
    );
  });
});
