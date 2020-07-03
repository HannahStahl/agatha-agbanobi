import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" className={window.location.pathname === '/' ? 'navbar-transparent' : ''}>
    <Navbar.Brand as={NavLink} to="/">
      <img src="logo.png" alt="Home" className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Item className="rise-on-hover">
          <Nav.Link eventKey="1" as={NavLink} to="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className="rise-on-hover">
          <Nav.Link eventKey="2" as={NavLink} to="/principles">Principles</Nav.Link>
        </Nav.Item>
        <Nav.Item className="rise-on-hover">
          <Nav.Link eventKey="3" as={NavLink} to="/services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item className="rise-on-hover">
          <Nav.Link eventKey="4" as={NavLink} to="/blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item className="rise-on-hover">
          <Nav.Link eventKey="5" as={NavLink} to="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="6" as={NavLink} to="/submit-rfp">
            <Button size="lg" variant="outline-dark">Submit RFP</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
