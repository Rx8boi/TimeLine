import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import timeImage from "../assets/timeImage.jpg";
import Logo from "./svg/Logo";

const Styles = styled.div`
  .navbar {
    background: url(${timeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 100px;
    position: relative;
    background-color: #010002;
  }

  .navbar .navbar-brand {
    color: white;
    display: inline-block;

    &:hover {
      color: #151e25;
    }
  }
  .navbar-background-color,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: #151e25;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/intro">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/events">TimeLine</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
