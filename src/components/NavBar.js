import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" className={window.location.pathname === '/' ? 'navbar-transparent' : ''}>
    <Navbar.Brand href="/">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/concepts">Principles</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
        <Nav.Item>
          <Nav.Link href="/submit-rfp">
            <Button size="lg" variant="outline-dark">Submit RFP</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
