const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp')();
const cleanCSS = lazyReq('gulp-clean-css')();
const base64 = lazyReq('gulp-base64')();
const size = lazyReq('gulp-size')();
const rename = lazyReq('gulp-rename')();
const gmq = lazyReq('gulp-group-css-media-queries')();
const config = require('../../config');

/**
 * Run base64 on the css, then minify it and write .min.css files
 * Don't optimize .min.css files (@todo should be cleaned before)
 */
gulp.task('optimize:css', () => {
  return gulp.src(config.optimize.css.src)
    .pipe(base64(config.base64.options))
    .pipe(gmq())
    .pipe(cleanCSS(config.optimize.css.options))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.optimize.css.dest))
    .pipe(size());
});