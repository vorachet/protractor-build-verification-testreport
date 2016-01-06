'use strict';

var fs = require('fs');

var ProtractorBuildVerificationTestReport = function() {
};

ProtractorBuildVerificationTestReport.prototype.onPrepare = function() {
    jasmine.getEnv().addReporter({
          specDone: function(result) {
            var screenshotDir = './screenshots';  
            browser.takeScreenshot().then(function(base64png) {
              browser.getCapabilities().then(function(s) { 

                var testResultOnEachSpec = {
                  specStatus: result.status || 'undefined',
                  specDescription: result.description || 'undefined',
                  specFullName: result.fullName || 'undefined',
                  platform: s.caps_.platform || 'undefined',
                  browser: s.caps_.browserName|| 'undefined',
                  version: s.caps_.version || 'undefined',
                };

                var testDate = new Date();

                var imageFileName = testResultOnEachSpec.specStatus + '_' +
                                    testResultOnEachSpec.platform + '_' + 
                                    testResultOnEachSpec.browser + '_' + 
                                    testResultOnEachSpec.version + '_' + 
                                    testDate; 
                var screenshotFilePath = screenshotDir + '/' + imageFileName + '.png';

                var description = '<html>\n' + 
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
                  '\t\t<p><b>SpecStatus</b> = ' + testResultOnEachSpec.specStatus + '</p>\n' + 
                  '\t\t<p><b>SpecDescription</b> = ' + testResultOnEachSpec.specDescription + '</p>\n' + 
                  '\t\t<p><b>SpecFullName</b> = ' +  testResultOnEachSpec.specFullName + '</p>\n' + 
                  '\t\t<p><b>Platform</b> = ' + testResultOnEachSpec.platform + '</p>\n' + 
                  '\t\t<p><b>Browser</b> = ' + testResultOnEachSpec.browser + ' ' + testResultOnEachSpec.version + '</p>\n' + 
                  '\t\t<h3>Screenshot</h3>\n' +
                  '\t\t<img src="data:image/png;base64,' + base64png + '"/>' +
                  '\t</body>\n' +
                  '</html>';
                var descriptionFileName = imageFileName;
                var screenshotDescriptionFilePath = screenshotDir + '/' + descriptionFileName + '.html';
                
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
