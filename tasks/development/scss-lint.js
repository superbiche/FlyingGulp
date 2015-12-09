var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var scsslint = lazyReq('gulp-scss-lint');
var config = require('../../config').scsslint;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp().task('scsslint', function () {
  return gulp().src(config.src)
    .pipe(scsslint()(config.options));
});