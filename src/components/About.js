import React from 'react';
import content from '../content.json';
import config from '../config';

const About = () => (
  <div className="about-page-content">
    {content.bio.map((paragraph, index) => (
      <div key={paragraph} className="about-page-content-block">
        {(index % 2 === 0 || window.innerWidth <= 957) && (
          <img src={`${config.publicCloudfrontURL}/agbanobi-about-${index + 1}.jpg`} alt={config.businessName} />
        )}
        <div className="about-text"><p>{paragraph}</p></div>
        {(index % 2 === 1 && window.innerWidth > 957) && (
          <img src={`${config.publicCloudfrontURL}/agbanobi-about-${index + 1}.jpg`} alt={config.businessName} />
        )}
      </div>
    ))}
  </div>
);

export default About;
