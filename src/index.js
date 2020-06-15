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
import ApplicationLoading from "./utils/Loading";

const store = configureStore();

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

ReactDOM.render(<ApplicationLoading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  const savedUid = process.env.REACT_APP_FIREBASE_ADMIN_ID;
  if (user && user.uid === savedUid) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetProjects()).then(() => {
      renderApp();
      if (history.location.pathname === "/login") {
        console.log("User logged in!");
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetProjects()).then(() => {
      renderApp();
    });
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
