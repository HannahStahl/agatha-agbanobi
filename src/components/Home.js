import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config';
import content from '../content.json';

const intro = content.home;
const cards = content['home-cards'];

const Home = () => (
  <>
    <img src={`${config.publicCloudfrontURL}/agbanobi-home.jpg`} alt={config.businessName} className="home-page-image" />
    <div className="home-page-overlay" />
    <div className="home-page-content-block home-page-section-1">
      <h1>Insert catchy tagline here.</h1>
      <h3>Insert a lengthier subheader with more detail here.</h3>
      <Button
        size="lg"
        variant="outline-dark"
        onClick={() => {
          document.getElementById('home-page-section-2').scrollIntoView({
            behavior: 'smooth',
          });
        }}
      >
        Learn more
      </Button>
    </div>
    <div className="home-page-content-block home-page-section-2" id="home-page-section-2">
      <img src={`${config.publicCloudfrontURL}/agbanobi-about-1.jpg`} alt={config.businessName} />
      <div className="home-page-intro">
        <h2>Insert another tagline statement here.</h2>
        <p>{intro}</p>
        <a href="/about">
          <Button size="lg" variant="outline-dark">
            Continue reading
          </Button>
        </a>
      </div>
    </div>
    <div className="home-page-content-block home-page-section-3">
      {cards.map((card) => (
        <div key={card.header} className="home-page-card" onClick={() => { window.location.pathname = card.link; }}>
          <div className="home-page-card-text">
            <h2>{card.header}</h2>
            <p>{card.text}</p>
          </div>
          <div className="home-page-card-text-hidden">
            <h2>{card.header}</h2>
            <p>{card.text}</p>
          </div>
          <i className={`fas fa-${card.icon}`} />
        </div>
      ))}
    </div>
  </>
);

export default Home;
