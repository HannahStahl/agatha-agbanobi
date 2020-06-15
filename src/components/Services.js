import React from 'react';
import content from '../content.json';

const Services = () => (
  <div>
    <h1>What We Offer</h1>
    {content.services.map((service) => <p key={service}>{service}</p>)}
  </div>
);

export default Services;
