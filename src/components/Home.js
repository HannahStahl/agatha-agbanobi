import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import config from '../config';
import content from '../content.json';

const cards = content['home-cards'];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page-content">
      <div className="home-page-content-block home-page-section-2">
        <Fade>
          <div className="home-bio">
            <img
              src={`${config.publicCloudfrontURL}/agbanobi-bio.png`}
              alt="Agatha Agbanobi"
              className="bio-photo"
            />
            <h1 className="home-tagline">{content['home-tagline']}</h1>
            {content.bio.map((paragraph) => <p>{paragraph}</p>)}
          </div>
        </Fade>
        <div className="circle navy" />
      </div>
      <Fade bottom cascade>
        <div className="home-page-content-block home-page-section-3">
          {cards.map((card) => (
            <div
              key={card.header}
              className="home-page-card"
              onClick={() => { window.location.pathname = card.link; }}
            >
              <div className="home-page-card-text">
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
              <div className="home-page-card-text-hidden">
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <div className="home-page-content-block home-page-section-5">
        <div className="circle gold" />
        <NavLink to="/about" className="learn-more-link">
          <h2>Learn more</h2>
          <div className="home-page-right-arrow">
            <div className="home-page-right-arrow-line" />
            <img
              className="home-page-right-arrowhead"
              src="arrowhead-right-navy.svg"
              alt="Learn more"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
