import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import config from '../config';
import content from '../content.json';

const cards = content['home-cards'];
const photos = [1, 2, 3, 4, 5, 6, 7];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home-page-content-block home-page-section-1">
        {photos.map((index) => (
          <img
            key={index}
            src={`${config.publicCloudfrontURL}/agbanobi-leader-${index}.png`}
            alt="Optimal Leader"
            className={`home-page-bubble-photo bubble-${index}`}
          />
        ))}
        <h1 className="home-page-header">
          <img src="logo-empty.png" alt="Optimal Leadership" className="home-page-logo" />
          PTIMAL LEADERSHIP
        </h1>
        <h3>Your Pathway to Leading Diverse, Thriving Teams</h3>
        <div
          className="down-arrow"
          onClick={() => {
            document.getElementById('home-page-section-2').scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          <div className="down-arrow-line" />
          <img className="down-arrowhead" src="arrowhead-down.svg" alt="Learn more" />
        </div>
      </div>
      <Fade bottom cascade>
        <div className="home-page-content-block home-page-section-2" id="home-page-section-2">
          {cards.map((card, index) => (
            <div
              key={card.header}
              className={`home-page-card home-page-card-${index + 1}`}
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
      <div className="home-page-content-block home-page-section-3" id="home-page-section-3">
        <NavLink to="/about" className="learn-more-link">
          <h2>Learn more</h2>
          <div className="home-page-right-arrow">
            <div className="home-page-right-arrow-line" />
            <img
              className="home-page-right-arrowhead"
              src="arrowhead-right-purple.svg"
              alt="Learn more"
            />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
