import React from "react";
import { Switch, Route } from "react-router-dom";

import Repository from "../pages/Repository";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" exact component={Repository} />
  </Switch>
);

export default Routes;
