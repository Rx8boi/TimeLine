import React from "react";
import { TimeBg as Time, Container } from "react-bootstrap";
import styled from "styled-components";
import timeImage from "../assets/timeImage.jpg";

const Styles = styled.div``;

export const TimeBg = () => (
  <Styles>
    <Time fluid className="time">
      <div className="overlay"></div>
      <Container>
        <h1>Timeline App</h1>
      </Container>
    </Time>
  </Styles>
);
