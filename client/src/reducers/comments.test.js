import comments from "./comments";
import { ADD_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from "../constants";

describe("comments reducer", () => {
  it("adds a comment to a post", () => {
    const state = { "1": [] };
    const comment = { parentId: "1", body: "A comment" };
    const expected = { "1": [comment] };
    expect(comments(state, { type: ADD_COMMENT, comment: comment })).toEqual(
      expected
    );
  });

  it("updates a comment", () => {
    const comment = { id: "11", parentId: "1", body: "comment" };
    const state = { "1": [comment] };
    const updatedComment = { id: "11", parentId: "1", body: "updated" };

    expect(
      comments(state, {
        type: UPDATE_COMMENT,
        comment: updatedComment
      })
    ).toEqual({ "1": [updatedComment] });
  });

  it("removes a comment", () => {
    const comment = { id: "11", parentId: "1", body: "comment" };
    const state = { "1": [comment] };

    expect(
      comments(state, {
        type: REMOVE_COMMENT,
        comment
      })
    ).toEqual({ "1": [] });
  });
});
