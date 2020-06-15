const dev = {
  apiURL: 'https://dlnum6f7kj.execute-api.us-east-1.amazonaws.com/dev',
  cloudfrontBaseURL: 'https://d1ljva6zkf6zjh.cloudfront.net',
  emailURL: 'https://c0mrk8va37.execute-api.us-east-1.amazonaws.com/dev/email/send',
  emailAddress: 'hannahstahl14@gmail.com',
  userID: 'us-east-1:0c9864e8-7db2-45fc-9c5a-ed2c11e2d9cf',
};

const prod = {
  apiURL: 'https://lbe32id9hg.execute-api.us-east-1.amazonaws.com/prod',
  cloudfrontBaseURL: 'https://d1esxin5o90ebg.cloudfront.net',
  emailURL: 'https://aiikn63n03.execute-api.us-east-1.amazonaws.com/prod/email/send',
  emailAddress: 'agatha.agbanobi@gmail.com',
  userID: 'us-east-1:e51b2b71-8b21-46c0-a302-6f3b84783041', // Change to Agatha's user ID
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  cloudfrontURL: `${config.cloudfrontBaseURL}/${config.userID}`,
  publicCloudfrontURL: 'https://d17jmxltsx3ffm.cloudfront.net',
  businessName: 'Business Name', // Change to Agatha's business name
  ...config,
};
