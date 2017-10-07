import posts from "./posts";
import { ADD_POST } from "../constants";

describe("post reducer", () => {
  it("adds a new post", () => {
    const post = { id: "1", body: "body" };
    expect(posts([], { type: ADD_POST, post })).toEqual([post]);
  });
});
