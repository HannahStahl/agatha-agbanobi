import React from 'react';
import content from '../content.json';
import config from '../config';

const Definitions = () => (
  <div>
    <img
      src={`${config.publicCloudfrontURL}/agbanobi-organizational-leadership.jpg`}
      alt="Organizational Leadership Defined"
      className="definitions-img"
    />
    <div className="photo-overlay" />
    <div className="definitions">
      <h1>Organizational Leadership Defined</h1>
      {content.definitions.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export default Definitions;
