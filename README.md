# AngularJS + Karma + Protractor + Jasmine

 This sample project demonstrate how to work with Angular with Karma including running unit test via Jasmine and E2E test.

## Pre-Installation 
Please Install `npm` first
```
npm install -g karma
npm install -g protractor
```
##Introduction
This project consists of a sample single page AngularJs application which can be found on index.html.
* It has a unit test spec  under tests/unit folder
* It has an E2E test spec under tests/e2e folder
* The above 2 tests are both run and configured via Karma
* AngularJS is moving towards Protractor which is based on WebDriverJS
  and not compatible with Karma. Therefore I also include a protector
test case under tests/protractor folder
 
##Unit Test
```
karma start
```
**Note: karma will find the default configuration file karma.conf.js which will run
unit test**
## E2E Test with Karma
```
node server.js
karma start karma-e2e-conf.js
```
##E2E Test with Protractor
```
./selenium/start
cd tests/protractor
protractor conf.js
```



