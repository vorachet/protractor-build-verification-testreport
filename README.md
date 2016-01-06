# protractor-build-verification-testreport

Build verification test (Smoke testing ,Confidence testing, Sanity testing) is done by testers before accepting a new build. Build verification test is also one of the most cost-effective method for identifying and fixing defects in software.  

**protractor-build-verification-testreport** provides a Node.js module used to generate readability HTML test report based on Protractor environment.  If Protractor is an equipment in your build verification test process, **protractor-build-verification-testreport** could help you doing test report tasks effectively.

![Logo](https://github.com/vorachet/attanomat-protractor-screenshot/raw/master/demo.gif)

## Install 

```
npm install protractor-build-verification-testreport --save 
```

## Configure

Your Protractor config file:
```
var verTestReport = require('protractor-build-verification-testreport');
var config = {
  ...
  onPrepare: verTestReport.onPrepare,
};

exports.config = config;
```

The Protractor config file example provided in project
```
var verTestReport = require('protractor-build-verification-testreport);
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
```
## Learning by example 

### Spec example 

Protractor config file and spec example are provided in example folder. 

```
<YourNodeProject>
  ... 
  /node_modules
      /protractor-build-verification-testreport
          /example/
            conf.js
            spec.js
```

### Run test
```
$ cd <YourNodeProject>
$ cd node_modules/protractor-build-verification-testreport/example
$ protractor conf.js
```

### The generated test report

After you successfully run the spec example, you should get "3 specs, 1 failure" and a new folder named "screenshots" will be created after the Protractor job is done. The spec example intentially writes test cases for 2 passed and 1 failed. 

The screenshots folder consists of a collection of generated HTML files. The number of the HTML files depends on the number of your specs. Each spec will generate one HTML test report. With this example, protractor-build-verification-testreport will generate 3 HTML files. 

```
<YourNodeProject>
  ... 
  /node_modules
      /protractor-build-verification-testreport
          /example/
             conf.js
             spec.js
             /screenshot
                  failed_LINUX_chrome_47.0.2526.106_Wed Jan 01 2016 16:33:17 GMT+0700 (ICT).html
                  passed_LINUX_chrome_47.0.2526.106_Wed Jan 01 2016 16:33:11 GMT+0700 (ICT).html
                  passed_LINUX_chrome_47.0.2526.106_Wed Jan 01 2016 16:33:14 GMT+0700 (ICT).html
```

### Information in the file

Filename pattern
```
{TestStatus}_{OSPlatform}_{BrowserName}_{BrowserVersion}_{DateTime}.html
```
Example filenames
```
failed_LINUX_chrome_47.0.2526.106_Wed Jan 01 2016 16:33:17 GMT+0700 (ICT).html
passed_LINUX_chrome_47.0.2526.106_Wed Jan 01 2016 16:33:11 GMT+0700 (ICT).html
```

### Example HTML content

The content consists of two parts
 1. Test information including TestDate, SpecStatus, SpecDescription, SpecFullName, Platform, and Browser.
 2. Screenshort using base64 image inline

![Logo](https://github.com/vorachet/protractor-build-verification-testreport/raw/master/example.jpg)

## Doing Build verification test with protractor-build-verification-testreport

protractor-build-verification-testreport offers a very small node.js module to generate readability E2E test report. The generated HTML files will be saved in the screenshots folder and you can choose to share the screenshots folder as deployment acceptance criteria among the project team. The content of the report is adequate for precise communication with general web application testing.  You can also choose to attach the test report into your software configuration management software. 


