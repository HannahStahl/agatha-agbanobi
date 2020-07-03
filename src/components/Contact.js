import React, { useState, useEffect } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import config from '../config';

const Contact = () => {
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
    <div className="contact-page">
      <h1 className="contact-header">Get in touch.</h1>
      <div className="contact-page-content">
        <div className="contact-form">
          <p className="contact-note">
            For more information about our consulting services and programs,
            please send us a note below. We will respond to your inquiry as soon as possible.
          </p>
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
        <div className="contact-details">
          <div className="contact-method">
            <p><i className="fas fa-envelope" /></p>
            <a href="mailto:email.address@gmail.com">email.address@gmail.com</a>
          </div>
          <div className="contact-method">
            <p><i className="fas fa-phone-alt" /></p>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-method">
            <p><i className="fas fa-map-marker-alt" /></p>
            <p>
              Optimal Leadership LLC
              <br />
              123 Address St.
              <br />
              Austin, TX 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
