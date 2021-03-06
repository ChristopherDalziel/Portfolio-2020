import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import MobileNav from "../components/MobileNav";
import NavComponent from "../components/Nav";
import FooterComponent from "../components/Footer";

import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import PortfolioPage from "../components/pages/PortfolioPage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import AdminPage from "../components/pages/AdminPage";
import CreateProjectPage from "../components/pages/CreateProjectPage";

import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <NavComponent />
      <MobileNav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <PrivateRoute path="/createProject" component={CreateProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <FooterComponent />
    </Router>
  );
};

export default AppRouter;
