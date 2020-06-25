import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" className={window.location.pathname === '/' ? 'navbar-transparent' : ''}>
    <Navbar.Brand href="/">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/concepts">Concepts</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/courses">Courses</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
