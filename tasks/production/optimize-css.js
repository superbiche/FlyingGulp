var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var minifycss = lazyReq('gulp-minify-css');
var base64 = lazyReq('gulp-base64');
var size = lazyReq('gulp-size');
var rename = lazyReq('gulp-rename');
var gmq = lazyReq('gulp-group-css-media-queries');
var config = require('../../config');
var messages = require('../../config').messages.sass;

/**
 * Run base64 on the css, then minify it and write .min.css files
 * Don't optimize .min.css files (@todo should be cleaned before)
 */
gulp().task('optimize:css', function () {
  return gulp().src(config.optimize.css.src)
    .pipe(base64()(config.base64.options))
    .pipe(gmq()())
    .pipe(minifycss()())
    .pipe(rename()({
      suffix: '.min'
    }))
    .pipe(gulp().dest(config.optimize.css.dest))
    .pipe(size()());
});