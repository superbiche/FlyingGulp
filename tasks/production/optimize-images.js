const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const imagemin = lazyReq('gulp-imagemin');
const size = lazyReq('gulp-size');

const config = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp().task('optimize:images', () => {
  return gulp().src(config.src)
    .pipe(gulp().dest(config.dest))
    .pipe(size()());
});