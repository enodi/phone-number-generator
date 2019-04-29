import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
