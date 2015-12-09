var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var concat = lazyReq('gulp-concat');
var rename = lazyReq('gulp-rename');
var size = lazyReq('gulp-size');
var uglify = lazyReq('gulp-uglify');
var removeLines = lazyReq('gulp-remove-lines');
var runSequence = lazyReq('run-sequence');
var config = require('../../config').optimize.js;

gulp().task('optimize:js', function (cb) {
  runSequence()([
      'optimize:js:head',
      'optimize:js:footer'
    ],
    cb
  );
});

gulp().task('optimize:js:head', function (cb) {
  return gulp().src(config.head.src)
    .pipe(concat()(config.head.name))
    .pipe(removeLines()({
      'filters': [
        /(\/\/[#@] sourceMappingURL=[^\s'"]*)/
      ]
    }))
    .pipe(uglify()())
    .pipe(rename()({
      suffix: '.min'
    }))
    .pipe(gulp().dest(config.dest))
    .pipe(size()());
  cb();
});

gulp().task('optimize:js:footer', function (cb) {
  return gulp().src(config.footer.src)
    .pipe(uglify()())
    .pipe(concat()(config.footer.name))
    .pipe(removeLines()({
      'filters': [
        /(\/\/[#@] sourceMappingURL=[^\s'"]*)/
      ]
    }))
    .pipe(rename()({
      suffix: '.min'
    }))
    .pipe(gulp().dest(config.dest))
    .pipe(size()());
  cb();
});