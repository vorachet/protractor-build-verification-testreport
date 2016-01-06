var attanomatProtractorScreenshot = require('../index.js'); 
/* Use require('attanomat-protractor-screenshot') if you installed attanomat-protractor-screenshot via npm */

var config = {
  seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  specs: ['spec.js'],
  onPrepare: attanomatProtractorScreenshot.onPrepare,
};

exports.config = config;