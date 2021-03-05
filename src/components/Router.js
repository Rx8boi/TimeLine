import React from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import About from "./About";
import EventsList from "./EventsList";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={EventsList} />
    </Switch>
  );
};

export default Router;
