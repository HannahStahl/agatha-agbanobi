import React from 'react';
import config from '../config';

const Programs = ({ programs }) => (
  <div className="programs-page-content">
    <h1>
      Help your workplace learn about diversity and inclusion through convenient online programs.
    </h1>
    <div className="programs">
      {programs.map((program) => (
        <div key={program.itemId} className="program">
          <img
            src={`${config.cloudfrontURL}/${program.photos[0].photoName}`}
            alt={program.itemName}
            className="program-img"
          />
          <div className="program-text">
            <h3>{program.itemName}</h3>
            <p>{program.itemDescription}</p>
            <a href={program.itemLink} target="_blank" rel="noopener noreferrer">
              Sign up for the course
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Programs;
