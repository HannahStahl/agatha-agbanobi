import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config';
import content from '../content.json';

const intro = content.home;
const cards = content['home-cards'];

const Home = () => (
  <>
    <img src={`${config.publicCloudfrontURL}/agbanobi-home.jpg`} alt={config.businessName} className="home-page-image" />
    <div className="photo-overlay" />
    <div className="home-page-content-block home-page-section-1">
      <h1>OPTIMAL LEADERSHIP</h1>
      <h3>Your Pathway to Leading Diverse, Thriving Teams</h3>
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
        <div onClick={() => {
          document.getElementById('home-page-section-3').scrollIntoView({
            behavior: 'smooth',
          });
        }}
        >
          <Button size="lg" variant="outline-dark">
            View our services
          </Button>
        </div>
      </div>
    </div>
    <div className="home-page-content-block home-page-section-3" id="home-page-section-3">
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
