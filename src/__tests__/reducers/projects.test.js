import projectReducer from "../../reducers/projects";
import projects from "../fixtures/projects";

test("Should set default state", () => {
  const state = projectReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should create a new project", () => {
  const project = {
    id: "4",
    name: "A new project",
    description: "Obviously the latest project",
    technology: "Ruby on Rails",
    githubUrl: "http//fakegithuburl.com",
    url: "Image Url",
  };

  const action = {
    type: "CREATE_PROJECT",
    project,
  };

  const state = projectReducer(projects, action);
  expect(state).toEqual([...projects, project]);
});

test("Should set projects", () => {
  const action = {
    type: "SET_PROJECTS",
    projects: [projects[0]],
  };
  const state = projectReducer(projects, action);
  expect(state).toEqual([projects[0]]);
});
