import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter, { history } from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/configureStore";
import { startSetProjects } from "./actions/projects";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";

const store = configureStore();

// const state = store.getState();

store.dispatch(startSetProjects());

const wrappedApplication = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(wrappedApplication, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Only run if user is logged in
    store.dispatch(login(user.uid));
    store.dispatch(startSetProjects()).then(() => {
      renderApp();
      if (history.location.pathname === "/login") {
        history.push("/createproject");
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetProjects()).then(() => {
      renderApp();
    });
  }
});

// store.dispatch(startSetProjects()).then(() => {
//   renderApp();
// });

// ReactDOM.render(wrappedApplication, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
