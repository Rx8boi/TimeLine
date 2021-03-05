import React from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import About from "./About";
import EventsContainer from "./EventsContainer";
import Splash from "./Splash";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/splash" component={Splash} />
      <Route exact path="/" component={Intro} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={EventsContainer} />
    </Switch>
  );
};

export default Router;
