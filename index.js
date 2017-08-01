'use strict';

const fs = require('fs');

const ProtractorBuildVerificationTestReport = function() {
};

ProtractorBuildVerificationTestReport.prototype.onPrepare = function() {
    jasmine.getEnv().addReporter({
          specDone: function(result) {
            var screenshotDir = './screenshots';
            browser.takeScreenshot().then(function(base64png) {
              browser.getCapabilities().then(function(capabilities) {
                /*
                Exampel Capabilities object
                Capabilities {
                  'acceptSslCerts' => true,
                  'applicationCacheEnabled' => false,
                  'browserConnectionEnabled' => false,
                  'browserName' => 'chrome',
                  'chrome' => { chromedriverVersion: '2.31.488774 (7e15618d1bf16df8bf0ecf2914ed1964a387ba0b)',
                  userDataDir: '/var/folders/2t/2j0qmw7s7j55r8bqk55qp_600000gn/T/.org.chromium.Chromium.BQP8w2' },
                  'cssSelectorsEnabled' => true,
                  'databaseEnabled' => false,
                  'handlesAlerts' => true,
                  'hasTouchScreen' => false,
                  'javascriptEnabled' => true,
                  'locationContextEnabled' => true,
                  'mobileEmulationEnabled' => false,
                  'nativeEvents' => true,
                  'networkConnectionEnabled' => false,
                  'pageLoadStrategy' => 'normal',
                  'platform' => 'Mac OS X',
                  'rotatable' => false,
                  'setWindowRect' => true,
                  'takesHeapSnapshot' => true,
                  'takesScreenshot' => true,
                  'unexpectedAlertBehaviour' => '',
                  'version' => '59.0.3071.115',
                  'webStorageEnabled' => true }
                */
                const testResultOnEachSpec = {
                  specId: result.id || 'undefined',
                  specStatus: result.status || 'undefined',
                  specDescription: result.description || 'undefined',
                  specFullName: result.fullName || 'undefined',
                  platform: capabilities.get('platform') || 'undefined',
                  browser: capabilities.get('browserName') || 'undefined',
                  version: capabilities.get('version') || 'undefined',
                };

                const color = testResultOnEachSpec.specStatus === 'passed' ? 'green' : 'red';
                const testDate = new Date();

                const imageFileName = testResultOnEachSpec.specId + '_' +
                                    testResultOnEachSpec.specStatus + '_' +
                                    testResultOnEachSpec.platform + '_' +
                                    testResultOnEachSpec.browser + '_' +
                                    testResultOnEachSpec.version + '_' +
                                    testDate;

                console.log("imageFileName", imageFileName)
                const screenshotFilePath = screenshotDir + '/' + imageFileName + '.png';

                const description = '<html>\n' +
                  '\t<head>\n' +
                  '\t\t<title>' + imageFileName + '</title>\n' +
                  '\t\t<style type="text/css">\n' +
                  '\t\t  body {\n' +
                  '\t\t\t  padding: 50px;\n' +
                  '\t\t\t  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;\n' +
                  '\t\t\t}\n' +
                  '\t\t\ta {\n' +
                  '\t\t\t  color: #00B7FF;\n' +
                  '\t\t\t}\n' +
                  '\t\t</style>\n' +
                  '\t</head>\n' +
                  '\t<body>\n' +
                  '\t\t<p><b>TestDate</b> = ' + testDate + '</p>\n' +
                  '\t\t<p><b>SpecID</b> = ' + testResultOnEachSpec.specID + '</p>\n' +
                  '\t\t<p style="color:' + color + '"><b>SpecStatus</b> = ' + testResultOnEachSpec.specStatus + '</p>\n' +
                  '\t\t<p><b>SpecDescription</b> = ' + testResultOnEachSpec.specDescription + '</p>\n' +
                  '\t\t<p><b>SpecFullName</b> = ' +  testResultOnEachSpec.specFullName + '</p>\n' +
                  '\t\t<p><b>Platform</b> = ' + testResultOnEachSpec.platform + '</p>\n' +
                  '\t\t<p><b>Browser</b> = ' + testResultOnEachSpec.browser + ' ' + testResultOnEachSpec.version + '</p>\n' +
                  '\t\t<h3>Screenshot</h3>\n' +
                  '\t\t<img src="data:image/png;base64,' + base64png + '"/>' +
                  '\t</body>\n' +
                  '</html>';
                const descriptionFileName = imageFileName;
                const screenshotDescriptionFilePath = screenshotDir + '/' + descriptionFileName + '.html';

                      if (!fs.existsSync(screenshotDir)){
                          fs.mkdirSync(screenshotDir);
                      }

                      fs.writeFileSync(screenshotDescriptionFilePath, description);
                      console.log('New test report has been created at ' +
                                      screenshotDescriptionFilePath);
                });
            });
          }
    });
}

module.exports = new ProtractorBuildVerificationTestReport();
module.exports.ProtractorBuildVerificationTestReport = ProtractorBuildVerificationTestReport;
