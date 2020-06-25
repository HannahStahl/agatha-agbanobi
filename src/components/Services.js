import React from 'react';
import content from '../content.json';
import config from '../config';

const Services = () => (
  <div className="services-page-content">
    {content.services.map((section, index) => (
      <div key={section.header} className={`services-page-section${index % 2 === 1 ? ' colored-section' : ''}`}>
        <div className="services-page-content-block">
          {(index % 2 === 0 || window.innerWidth <= 957) && (
            <img src={`${config.publicCloudfrontURL}/agbanobi-${section.photo}.jpg`} alt={config.businessName} />
          )}
          <div className="services-text">
            <h2 className="services-page-section-header">{section.header}</h2>
            <p>{section.text}</p>
          </div>
          {(index % 2 === 1 && window.innerWidth > 957) && (
            <img src={`${config.publicCloudfrontURL}/agbanobi-${section.photo}.jpg`} alt={config.businessName} />
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Services;
