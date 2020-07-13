import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import config from '../config';
import content from '../content.json';

const cards = content['home-cards'];

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateValue = (e, updateFcn) => {
    updateFcn(e.target.value);
    setButtonText('Send');
  };

  const validateForm = () => name.length > 0 && email.length > 0 && message.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    fetch(config.emailURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        message,
        userEmail: email,
        clientEmail: config.emailAddress,
        siteDomain: window.location.origin,
      }),
    }).then((response) => response.json()).then((json) => {
      if (json.MessageId) {
        setButtonText('Sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setButtonText('Send');
        window.alert(`Oops! An error occurred with our contact form. Please send an email directly to ${config.emailAddress}.`);
      }
    });
  };

  return (
    <div className="home-page-content">
      <div className="home-page-content-block home-page-section-1">
        <img
          src={`${config.publicCloudfrontURL}/agbanobi-landing.png`}
          alt="Optimal Leadership"
          className="landing-page-img"
        />
        <Fade><div className="photo-overlay" /></Fade>
        <Fade>
          <div className="home-intro">
            <h1 className="home-header">{content['home-header']}</h1>
            <p>{content['home-intro']}</p>
            <Button
              size="lg"
              variant="outline-dark"
              onClick={() => {
                document.getElementById('home-page-section-5').scrollIntoView();
              }}
            >
              Contact Us
            </Button>
          </div>
        </Fade>
      </div>
      <div className="home-page-content-block home-page-section-2">
        <Fade>
          <div className="home-bio">
            <img
              src={`${config.publicCloudfrontURL}/agbanobi-bio.png`}
              alt="Agatha Agbanobi"
              className="bio-photo"
            />
            <h1 className="home-tagline">{content['home-tagline']}</h1>
            {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Fade>
      </div>
      <div className="home-page-content-block home-page-section-3">
        <h1 className="home-section-header">Let us help!</h1>
        <p className="about-us">{content['about-us']}</p>
        <Fade bottom cascade>
          <div className="home-page-cards">
            {cards.map((card, index) => (
              <div
                key={card.header}
                className="home-page-card"
              >
                <div className="home-page-card-text">
                  <img
                    src={`${config.publicCloudfrontURL}/agbanobi-about-us-${index + 1}.jpg`}
                    alt="Optimal Leadership"
                    className="about-us-photo"
                  />
                  <h4>{card.header}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <div className="home-page-content-block home-page-section-5" id="home-page-section-5">
        <h1 className="home-section-header">Let&apos;s get started!</h1>
        <a href="https://calendly.com/optimalleadership/30min">
          <Button size="lg" variant="outline-dark" className="home-page-schedule-consult">
            Schedule a free consultation
          </Button>
        </a>
        <p>or send me an email. I will reply within one business day.</p>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="name">
            <FormControl
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => updateValue(e, setName)}
            />
          </FormGroup>
          <FormGroup controlId="email">
            <FormControl
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={(e) => updateValue(e, setEmail)}
            />
          </FormGroup>
          <FormGroup controlId="message">
            <FormControl
              rows={10}
              as="textarea"
              placeholder="Your message"
              value={message}
              onChange={(e) => updateValue(e, setMessage)}
            />
          </FormGroup>
          <Button
            block
            type="submit"
            size="lg"
            variant="outline-dark"
            disabled={!validateForm()}
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
