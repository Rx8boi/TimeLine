import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import timeImage from "../assets/timeImage.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialLogo from "./svg/Svg";
import Logo from "./svg/Logo";

const Styles = styled.div`
  .jumbotron {
    background: url(${timeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    width: 100%;
    position: relative;
    z-index: -2;
    bottom: -9vh;
  }

  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .foot {
    text-align: right;
    color: white;
    display: inline-block;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col>
            <h2> Connect with me:</h2>
            <p>
              <SocialLogo />
            </p>
          </Col>
          <Col>
            <span className="social"></span>
          </Col>
          <Col>
            <span className="foot">
              <h1>
                <Logo />
              </h1>
              <p>A place to update & store events of your life</p>
            </span>
          </Col>
        </Row>
      </Container>
    </Jumbo>
  </Styles>
);
