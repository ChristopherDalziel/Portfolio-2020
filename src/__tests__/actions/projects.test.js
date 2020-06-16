import thunk from "redux-thunk";
import {
  createProject,
  startCreateProject,
  setProjects,
  startSetProjects,
} from "../../actions/projects";
import projects from "../fixtures/projects";
import database from "../../firebase/firebase";

const uid = "ThisIsMyTestUID";
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
  const projectData = {};
  projects.forEach(({ id, name, description, technology, url }) => {
    (projectData[id] = name), description, technology, url;
  });
  database
    .ref(`users/${uid}/projects`)
    .set(projectData)
    .then(() => {
      done();
    });
});

test("Should set up create project action with provided values", () => {
  const action = createProject(projects[0]);
  expect(action).toEqual({
    type: "CREATE_PROJECT",
    project: projects[0],
  });
});
