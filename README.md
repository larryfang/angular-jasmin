# AngularJS + Karma + Protractor + Jasmine

## This sample project demonstrate how to work with Angular with Karma including running unit test via Jasmine and E2E test.

## Pre-Installation 
Install `npm`:
```
npm install -g karma
npm install -g protractor
```
##Unit Test
```
karma start
```
**Note: karma will find the default configuration file karma.conf.js which will run
unit test
## E2E Test
```
node server.js
karma start karma-e2e-conf.js
```

## TODO

To improve E2E test via its new package and support via webdriver API.


