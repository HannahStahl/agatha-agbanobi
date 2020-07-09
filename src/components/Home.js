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
      <div className="home-page-content-block home-page-section-3">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us">{content['about-us']}</p>
        <Fade bottom cascade>
          <div className="home-page-cards">
            {cards.map((card, index) => (
              <NavLink
                key={card.header}
                className="home-page-card"
                to={card.link}
              >
                <div className="home-page-card-text">
                  <img
                    src={`${config.publicCloudfrontURL}/agbanobi-about-us-${index + 1}.jpg`}
                    alt="Optimal Leadership"
                    className="about-us-photo"
                  />
                  <h3>{card.header}</h3>
                  <p>{card.text}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </Fade>
      </div>
      <div className="home-page-content-block home-page-section-5">
        <div className="circle gold" />
        <div>Insert consultation form here.</div>
      </div>
    </div>
  );
};

export default Home;
