# protractor-build-verification-testreport

Build verification test (Smoke testing ,Confidence testing, Sanity testing) is done by testers before accepting a new build. Build verification test is also one of the most cost-effective method for identifying and fixing defects in software.

**protractor-build-verification-testreport** provides a Node.js module used to generate readability HTML test report based on Protractor environment.  If Protractor is an equipment in your build verification test process, **protractor-build-verification-testreport** could help you doing test report tasks effectively.

![Logo](https://github.com/vorachet/attanomat-protractor-screenshot/raw/master/demo.gif)

## Install

```
npm install protractor-build-verification-testreport@latest -save-dev
```

If you never install Protractor, you may need the additional steps below

```
npm install -g protractor
sudo webdriver-manager update
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
  directConnect: true,
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

You need Selenium and Protractor

```
wget https://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.1.jar
java -jar selenium-server-standalone-2.53.1.jar
```

```
sudo npm install -g protractor
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
            /screenshots
              spec0_passed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201910.html
              spec1_passed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201913.html
              spec2_failed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201916.html
```

### Information in the file

Filename pattern
```
{SpecID}_{TestStatus}_{OSPlatform}_{BrowserName}_{BrowserVersion}_{DateTime}.html
```

Filename examples

```
spec0_passed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201910.html
spec1_passed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201913.html
spec2_failed_Mac OS X_chrome_59.0.3071.115_2017-08-05 201916.html
```

### Example HTML content

The content consists of two parts
 1. Test information including TestDate, SpecStatus, SpecDescription, SpecFullName, Platform, and Browser.
 2. Screenshort using base64 image inline

![Logo](https://github.com/vorachet/protractor-build-verification-testreport/raw/master/exampleReport.png)

o attach the test report into your software configuration management software.


Project page is available at [http://vorachet.github.io/protractor-build-verification-testreport](http://vorachet.github.io/protractor-build-verification-testreport)
