// Karma configuration
module.exports = function (config) {
  const istanbul = require('browserify-istanbul');
  const isparta = require('isparta');

  config.set({

    // Frameworks to use
    frameworks: ['browserify', 'jasmine'],

    // List of files / patterns to load in the browser
    files: ['src/app/**/*.js'],

    // Exclude app.js to avoid conflicts with document.getElementById
    exclude: ['src/app/app.js'],

    // Plugins to use
    plugins: [
      'karma-browserify',
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    // Test results reporter to use
    // Possible values: 'dots', 'progress'
    reporters: ['spec', 'coverage'],

    // Processors before test
    preprocessors: {
      'src/app/**/*.js': ['browserify']
    },

    // Browserify configuration
    browserify: {
      debug: true,
      transform: [istanbul({instrumenter: isparta}), 'babelify']
    },

    // Optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Web server port
    port: 9876,

    // Start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // If true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
