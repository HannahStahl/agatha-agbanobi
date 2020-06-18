import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config';

const Home = () => (
  <>
    <img src={`${config.publicCloudfrontURL}/agbanobi-home.jpg`} alt={config.businessName} className="home-page-image" />
    <div className="home-page-content">
      <h1>Insert catchy tagline here.</h1>
      <h3>Insert a lengthier subheader with more detail here.</h3>
      <a href="/about">
        <Button size="lg" variant="outline-dark">
          Learn more
        </Button>
      </a>
    </div>
  </>
);

export default Home;
