var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var jshint = lazyReq('gulp-jshint');
var stylish = lazyReq('jshint-stylish');
var config = require('../../config').jshint;

/**
 * Check JavaScript sytax with JSHint
 */
gulp().task('jshint', () => {
  return gulp().src(config.src)
    .pipe(jshint()())
    .pipe(jshint().reporter(stylish()));
});