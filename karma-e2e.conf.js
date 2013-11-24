// Karma configuration
// Generated on Sat Nov 09 2013 17:38:01 GMT+1100 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['ng-scenario'],


    // list of files / patterns to load in the browser
//      files: [
//          'tests/lib/angular.js',
//          'app.js',
//          'tests/lib/angular-mocks.js',
//
//          'tests/unit/*.js'
//      ],

      files:[
//      'tests/lib/angular.js',
////      'tests/lib/angular-scenario.js',
//      'app.js',
      'tests/e2e/*.js'
  ],
      plugins : [
          'karma-junit-reporter',
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine',
          'karma-ng-scenario'
      ],

      // list of files to exclude
    exclude: [
      
    ],

     proxies: {
      '/': 'http://localhost:8000'
  },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress','junit'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

      urlRoot: '/_karma_/',


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,


      junitReporter : {
          outputFile: 'test_out/e2e.xml',
          suite: 'e2e'
      }

  });
};
