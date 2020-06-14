import thunk from "redux-thunk";
import {
  createProject,
  startCreateProject,
  setProjects,
  startSetProjects,
} from "../../actions/projects";

import projects from "../fixtures/projects";

import database from "../../firebase/firebase";

beforeEach((done) => {
  const projectData = {};
  projects.forEach(({ id, name, description, technology, url }) => {
    (projectData[id] = name), description, technology, url;
  });
  database
    .ref(`users/${uid}/projects`)
    .set(expensesData)
    .then(() => {
      done();
    });
});
