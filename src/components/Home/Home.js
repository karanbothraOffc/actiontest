import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Home.css";
function Home() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://www.shriramgi.com/images/logo.jpg"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
