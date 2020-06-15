import React from 'react';
import config from '../config';

const Programs = ({ programs }) => (
  <div>
    <h1>Our Programs</h1>
    <div className="programs">
      {programs.map((program) => (
        <a
          key={program.itemId}
          href={program.link}
          target="_blank"
          rel="noopener noreferrer"
          className="program"
        >
          <img
            src={`${config.cloudfrontURL}/${program.photos[0].photoName}`}
            alt={program.itemName}
            className="program-img"
          />
          <h3>{program.itemName}</h3>
        </a>
      ))}
    </div>
  </div>
);

export default Programs;
