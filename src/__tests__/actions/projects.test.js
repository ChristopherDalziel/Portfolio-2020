import thunk from "redux-thunk";
import {
  createProject,
  startCreateProject,
  setProjects,
  startSetProjects,
} from "../../actions/projects";

import projects from "../fixtures/projects";

import database from "../../firebase/firebase";
