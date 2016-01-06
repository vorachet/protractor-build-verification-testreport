var verTestReport = require('../index.js');
/* Use require('protractor-build-verification-testreport) if you installed protractor-build-verification-testreport via npm */

var config = {
  seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  specs: ['spec.js'],
  onPrepare: verTestReport.onPrepare,
};

exports.config = config;