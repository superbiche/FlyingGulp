const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const jshint = lazyReq('gulp-jshint');
const stylish = lazyReq('jshint-stylish');

const config = require('../../config').jshint;

gulp().task('jshint', () => {
  return gulp().src(config.src)
    .pipe(jshint()())
    .pipe(jshint().reporter(stylish()));
});