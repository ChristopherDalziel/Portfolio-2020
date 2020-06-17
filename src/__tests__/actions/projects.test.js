import configureMockStore from "redux-mock-store";
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
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const projectData = {};
  projects.forEach(({ id, name, description, technology, githubUrl, url }) => {
    (projectData[id] = name), description, technology, githubUrl, url;
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

test("Should add test project to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const projectData = {
    name: "another test project",
    description: "i just want a project that I can test",
    technology: "xbox one",
    githubUrl: "there is no url",
    url: "hmmm",
  };
  store
    .dispatch(startCreateProject(projectData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "CREATE_PROJECT",
        project: {
          id: expect.any(String),
          ...projectData,
        },
      });

      // Check if the data was saved to the database
      return database
        .ref(`users/${uid}/projects/${actions[0].project.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(projectData);
      done();
    });
});

test("Should add project with default values to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const projectDefaults = {
    name: "",
    description: "",
    technology: "",
    githubUrl: "",
    url: "",
  };
  store
    .dispatch(startCreateProject({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "CREATE_PROJECT",
        project: {
          id: expect.any(String),
          ...projectDefaults,
        },
      });
      return database
        .ref(`users/${uid}/projects/${actions[0].project.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(projectDefaults);
      done();
    });
});

test("Should setup set project action object with data", () => {
  const action = setProjects(projects);
  expect(action).toEqual({ type: "SET_PROJECTS", projects });
});

// Test now fails, returns empty
test("Should fetch projects from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetProjects()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_PROJECTS",
      projects,
    });
    done();
  });
});
