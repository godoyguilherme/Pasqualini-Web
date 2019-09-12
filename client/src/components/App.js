import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import DashApp from "./DashApp";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login/Login";

import "antd/dist/antd.css";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={DashApp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
