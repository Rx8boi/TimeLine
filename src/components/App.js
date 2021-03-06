import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import { Layout } from "./Layout";
import NavBar from "./NavBar";
import { Jumbotron } from "./Jumbotron";

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
