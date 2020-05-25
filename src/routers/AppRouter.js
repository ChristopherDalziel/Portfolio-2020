import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "../components/Nav";
import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";

import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
