# attanomat-protractor-screenshot

## Install 

Install attanomat-protractor-screenshot into your node_modules

```
npm install attanomat-protractor-screenshot --save 
```

Configure attanomat-protractor-screenshot into your Protractor config file

```
var attanomatProtractorScreenshot = require('attanomat-protractor-screenshot');

var config = {
  ...
  onPrepare: attanomatProtractorScreenshot.onPrepare,
};

exports.config = config;
```

## Learning by example 

### Spec example 

Protractor config file and spec example are provided in example folder. 

```
  example
     conf.js
     spec.js
```

### Run test
```
$ cd example
$ protractor conf.js
```

### The generated test report

After you successfully run the spec example, you should get "3 specs, 1 failure" and a new folder named "screenshots" will be created after the Protractor job is done. The spec example intentially writes test cases for 2 passed and 1 failed. 

The screenshots folder consists of a collection of HTML and PNG files. The number of the files depends on the number of your specs. Each spec will generate one HTML test report. With this example, attanomat-protractor-screenshot will generate 3 HTML files. 

```
  example
     conf.js
     spec.js
     screenshot
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

![Logo](https://github.com/vorachet/attanomat-protractor-screenshot/raw/master/example.png)

## Doing Build verification test with attanomat-protractor-screenshot

Build verification testSmoke testing (Smoke testing ,Confidence testing, Sanity testing) is done by testers before accepting a new build. It is also one of the most cost-effective method for identifying and fixing defects in software.  

attanomat-protractor-screenshot offers a very small node.js module to generate readability E2E test report. The generated HTML files will be saved in the screenshots folder appendly. The content of the report is adequate for precise communication among developers and testers.  You can choose to attach the generate test report in your software configuration management software. 


