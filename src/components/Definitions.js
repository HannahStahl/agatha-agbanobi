import React from 'react';
import content from '../content.json';

const Definitions = () => (
  <div>
    <h1>Organizational Leadership Defined</h1>
    {content.definitions.map((definition) => <p key={definition}>{definition}</p>)}
  </div>
);

export default Definitions;
