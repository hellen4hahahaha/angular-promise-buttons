// wallaby.conf.js
// for frontend

module.exports = function() {
  return {
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/es6-promise/es6-promise.js',
      // endbower
      'bower_components/es6-promise/es6-promise.auto.js',

      // modules first
      'src/**/_*.js',
      // all the rest of the files
      'src/**/*.js',
      // exclude tests
      { pattern: 'src/**/*spec.js', ignore: true }
    ],
    tests: [
      'src/**/*spec.js'
    ],
    preprocessors: {}
  }
};
