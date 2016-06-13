var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var imagemin = lazyReq('gulp-imagemin')();
var size = lazyReq('gulp-size')();
var config = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function () {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});