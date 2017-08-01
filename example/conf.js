const verTestReport = require('../index.js');
const config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
    //screencapture does not support headless option
    //chromeOptions: {
    //    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //}
  },
  framework: 'jasmine2',
  specs: ['spec.js'],
  onPrepare: verTestReport.onPrepare,
};

exports.config = config;