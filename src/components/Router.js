import React from "react";
import { Switch, Route } from "react-router-dom";

import Splash from "./Splash";
import Intro from "./Intro";
import About from "./About";
import EventsContainer from "./EventsContainer";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/intro" component={Intro} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={EventsContainer} />
    </Switch>
  );
};

export default Router;
