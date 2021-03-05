import React from "react";
import { Container } from "react-bootstrap";

export const Layout = (props) => (
  //Bootstrap component to render everything in the middle of the screen, etc.
  <Container>{props.children}</Container>
);
