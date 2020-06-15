import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config';

const Home = () => (
  <>
    <img src={`${config.publicCloudfrontURL}/template-home.jpg`} alt={config.businessName} className="home-page-image" />
    <div>
      <h1>Business Name</h1>
      <p>Tagline tagline tagline tagline tagline.</p>
      <a href="/programs"><Button size="lg" variant="outline-dark">Call to action</Button></a>
    </div>
  </>
);

export default Home;
