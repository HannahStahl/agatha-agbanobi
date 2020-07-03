import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    fixed="top"
    className={window.location.pathname === '/' ? 'navbar-fade-in' : ''}
  >
    <Navbar.Brand as={NavLink} to="/">
      <img src="logo.png" alt="Home" className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Item>
          <Nav.Link eventKey="1" as={NavLink} to="/about" className="underline-on-hover">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" as={NavLink} to="/principles" className="underline-on-hover">Principles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" as={NavLink} to="/services" className="underline-on-hover">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" as={NavLink} to="/blog" className="underline-on-hover">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5" as={NavLink} to="/contact" className="underline-on-hover">Contact</Nav.Link>
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
