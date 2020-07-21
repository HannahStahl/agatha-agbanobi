import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import config from '../config';

const getLogo = (devicePixelRatio) => {
  const logoUrl = `${config.publicCloudfrontURL}/agbanobi-logo`;
  if (devicePixelRatio === 3) return `${logoUrl}_3x.png`;
  if (devicePixelRatio === 2) return `${logoUrl}_2x.png`;
  return `${logoUrl}.png`;
};

const NavBar = () => (
  <Navbar expand="lg" position="top">
    <img src={getLogo(window.devicePixelRatio)} alt="Home" className="logo" />
  </Navbar>
);

export default NavBar;
