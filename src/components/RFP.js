import React, { useState } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import config from '../config';

const RFP = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [revenue, setRevenue] = useState('');
  const [files, setFiles] = useState([]);
  const [comments, setComments] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const updateValue = (e, updateFcn) => {
    updateFcn(e.target.value);
    setButtonText('Submit');
  };

  const validateForm = () => (
    name.length > 0
    && email.length > 0
    && companyName.length > 0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Submitting...');
    fetch(config.emailURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        message: comments,
        userEmail: email,
        clientEmail: config.emailAddress,
        siteDomain: window.location.origin,
      }),
    }).then((response) => response.json()).then((json) => {
      if (json.MessageId) {
        setButtonText('Submitted!');
        setName('');
        setTitle('');
        setEmail('');
        setPhone('');
        setLocation('');
        setCompanyName('');
        setIndustry('');
        setRevenue('');
        setFiles([]);
        setComments('');
      } else {
        setButtonText('Submit');
        window.alert(`Oops! An error occurred with our request form. Please send an email directly to ${config.emailAddress}.`);
      }
    });
  };

  return (
    <div className="rfp-page">
      <h1 className="rfp-header">Submit a request for proposal.</h1>
      <div className="rfp-page-content">
        <div className="rfp-form">
          <p className="rfp-note">
            Thank you for your interest in our services!
            Please fill out the form below to help us understand your needs.
          </p>
          <h4>First, tell us about you.</h4>
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="name">
              <FormControl
                autoFocus
                type="text"
                placeholder="First and last name"
                value={name}
                onChange={(e) => updateValue(e, setName)}
              />
            </FormGroup>
            <FormGroup controlId="title">
              <FormControl
                type="text"
                placeholder="Job title"
                value={title}
                onChange={(e) => updateValue(e, setTitle)}
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormControl
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => updateValue(e, setEmail)}
              />
            </FormGroup>
            <FormGroup controlId="phone">
              <FormControl
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => updateValue(e, setPhone)}
              />
            </FormGroup>
            <FormGroup controlId="location">
              <FormControl
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => updateValue(e, setLocation)}
              />
            </FormGroup>
            <h4>Next, tell us about your company.</h4>
            <FormGroup controlId="companyName">
              <FormControl
                type="text"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => updateValue(e, setCompanyName)}
              />
            </FormGroup>
            <FormGroup controlId="industry">
              <FormControl
                type="text"
                placeholder="Industry"
                value={industry}
                onChange={(e) => updateValue(e, setIndustry)}
              />
            </FormGroup>
            <FormGroup controlId="revenue">
              <FormControl
                type="text"
                placeholder="Yearly revenue"
                value={revenue}
                onChange={(e) => updateValue(e, setRevenue)}
              />
            </FormGroup>
            <h4>Anything else you&apos;d like to share?</h4>
            <FormGroup controlId="files">
              <FormControl
                type="file"
                multiple
                placeholder="Files"
                value={files}
                onChange={(e) => updateValue(e, setFiles)}
              />
            </FormGroup>
            <FormGroup controlId="comments">
              <FormControl
                rows={3}
                as="textarea"
                placeholder="Comments"
                value={comments}
                onChange={(e) => updateValue(e, setComments)}
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
    </div>
  );
};

export default RFP;
