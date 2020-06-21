import getVisibleProjects from "../../selector/projects";
import projects from "../fixtures/projects";

test("Should filter by text value", () => {
  const filters = {
    text: "2",
  };
  const result = getVisibleProjects(projects, filters);
  expect(result).toEqual([projects[1]]);
});
