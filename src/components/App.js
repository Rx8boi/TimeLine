import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import { Layout } from "./Layout";
import NavBar from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { withLDProvider } from 'launchdarkly-react-client-sdk';

const App = () => {
  return (
    <div>
      <NavBar />
      <Layout>
        <Router />
      </Layout>
      <Jumbotron />
    </div>
  );
};

export default  withLDProvider({
  clientSideID: '62449ecdda9d4a14dc88b82c',
  user: {
      "key": "sdk-9bb4bf2a-35d9-4bfe-a8a1-b474f5caf0d8",
      "name": "Charles Butler",
      "email": "charles.butler@accenturefederal.com"
  }
})(App);
