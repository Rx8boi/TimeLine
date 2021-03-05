import React from "react";

import Router from "./Router";
import EventsContainer from "./EventsContainer";

const App = () => {
  return (
    <div>
      <EventsContainer />
      <Router />
    </div>
  );
};

export default App;
