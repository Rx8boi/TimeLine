import React from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import About from "./About";
import EventsContainer from "./EventsContainer";
import Splash from "../components/lottie/Splash";
import NoMatch from "../components/lottie/NoMatch";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={EventsContainer} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Router;
