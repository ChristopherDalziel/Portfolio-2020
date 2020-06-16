import projectReducer from "../../reducers/projects";
import projects from "../fixtures/projects";

test("Should set default state", () => {
  const state = projectReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
