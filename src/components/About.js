import React from 'react';
import content from '../content.json';
import config from '../config';

const AboutArrow = ({ paragraph, index }) => {
  const leftOrRight = index % 2 === 0 ? 'right' : 'left';
  return (
    <div className={`about-arrow ${leftOrRight}-arrow`}>
      <h1 className="about-page-section-header">{paragraph.header}</h1>
      <div className="about-arrow-line" />
      <img
        className="about-arrowhead"
        src={`arrowhead-${leftOrRight}.svg`}
        alt={paragraph.header}
      />
    </div>
  );
};

const About = () => (
  <>
    <div className="about-page-banner">
      <img src={`${config.publicCloudfrontURL}/agbanobi-about-0.jpg`} alt={config.businessName} />
      <h2 className="about-page-banner-text">{content['about-banner']}</h2>
    </div>
    <div className="about-page-content">
      {content.about.map((paragraph, index) => (
        <div key={paragraph.header} className="about-page-section">
          <div className="about-page-content-block">
            {(index % 2 === 0 || window.innerWidth <= 957) && (
              <div className="about-img">
                {window.innerWidth > 957 && <AboutArrow paragraph={paragraph} index={index} />}
                <img
                  src={`${config.publicCloudfrontURL}/agbanobi-about-${index + 1}.jpg`}
                  alt={config.businessName}
                  className="about-photo"
                />
              </div>
            )}
            <div className={`about-text${index % 2 === 1 && window.innerWidth > 957 ? ' right-aligned' : ''}`}>
              <h1 className="about-page-section-header">{paragraph.header}</h1>
              <p>{paragraph.text}</p>
            </div>
            {(index % 2 === 1 && window.innerWidth > 957) && (
              <div className="about-img">
                <AboutArrow paragraph={paragraph} index={index} />
                <img
                  src={`${config.publicCloudfrontURL}/agbanobi-about-${index + 1}.jpg`}
                  alt={config.businessName}
                  className="about-photo"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default About;
