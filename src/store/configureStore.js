import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import projectReducer from "../reducers/projects";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
