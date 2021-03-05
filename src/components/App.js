import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import { Layout } from "./Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
