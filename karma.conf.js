module.exports = function (config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // karma-babel-preprocessor settings
    // tell it to use babel-preset-es2015
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency Level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // settings for the karma-coverage reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // list of files to exclude
    exclude: [],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jspm',
      'jasmine'
    ],

    jspm: {
      // Edit this to your needs
      config: 'client/config.js',
      packages: 'client/jspm_packages/',
      loadFiles: [
        'client/**/*.unit-test.js'
      ],
      serveFiles: [
        'client/**/*.js'
      ]
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG 
    logLevel: config.LOG_INFO,

    plugins: [
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-jasmine',
      'karma-jspm',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    // web server port
    port: 9876,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/{*.js, !jspm_packages{,/**}}': ['babel'],
      'client/modules/**/!(*.unit-test).js': ['babel', 'coverage']
    },

    // set up proxies so the test server will be able to find our files
    proxies: {
      '/client/': '/base/client/',
      '/jspm_packages/': '/base/client/jspm_packages'
    },

    // test results reporter to use
    // possibe values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'coverage',
      'spec'
    ],

    // Continuous Integration mode
    // if true Karma captures browsers, runs the tests and exits
    singleRun: true,

    // set up thhe spec reporter - I just want to see the "expected x to equal y" output in errors
    specReporter: {
      maxLogLines: 1,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false
    }
  });
}