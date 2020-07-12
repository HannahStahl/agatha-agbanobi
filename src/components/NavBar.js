import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const getLogo = (devicePixelRatio) => {
  if (devicePixelRatio === 3) return 'logo_3x.png';
  if (devicePixelRatio === 2) return 'logo_2x.png';
  return 'logo.png';
};

const NavBar = () => (
  <Navbar expand="lg" position="top">
    <img src={getLogo(window.devicePixelRatio)} alt="Home" className="logo" />
  </Navbar>
);

export default NavBar;
