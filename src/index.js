//react-redux, redux, thunk libraries

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; //window._Redux_devtools replacement
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import { rootReducer } from "./reducers/rootReducer";

//need to create a store for redux => createStore 1. reducer 2. dev tools
//creating store & also saying what we're doing to update (reducer and how we're intercepting / thunk)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
