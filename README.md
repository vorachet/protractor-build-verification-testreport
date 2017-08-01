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
                  spec0_passed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:39 GMT+0700 (+07).html
                  spec1_passed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:42 GMT+0700 (+07).html
                  spec2_failed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:44 GMT+0700 (+07).html
```

### Information in the file

Filename pattern
```
{SpecID}_{TestStatus}_{OSPlatform}_{BrowserName}_{BrowserVersion}_{DateTime}.html
```

Filename examples

```
spec0_passed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:39 GMT+0700 (+07).html
spec1_passed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:42 GMT+0700 (+07).html
spec2_failed_Mac OS X_chrome_59.0.3071.115_Tue Aug 01 2017 09:02:44 GMT+0700 (+07).html
```

### Example HTML content

The content consists of two parts
 1. Test information including TestDate, SpecStatus, SpecDescription, SpecFullName, Platform, and Browser.
 2. Screenshort using base64 image inline

![Logo](https://github.com/vorachet/protractor-build-verification-testreport/raw/master/exampleReport.png)

## Doing build verification test with protractor-build-verification-testreport

protractor-build-verification-testreport offers a very small node.js module to generate readability E2E test report. The generated HTML files will be saved in the screenshots folder and you can choose to share the screenshots folder as deployment acceptance criteria among the project team. The content of the report is adequate for precise communication with general web application testing.  You can also choose to attach the test report into your software configuration management software.


## License


The MIT License (MIT)

Copyright (c) 2016 Vorachet Jaroensawas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



Project page is available at [http://vorachet.github.io/protractor-build-verification-testreport](http://vorachet.github.io/protractor-build-verification-testreport)
