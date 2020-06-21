import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import projectReducer from "../reducers/projects";
import authReducer from "../reducers/auth";
import filterReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectReducer,
      auth: authReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
