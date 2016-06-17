const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const concat = lazyReq('gulp-concat');
const rename = lazyReq('gulp-rename');
const size = lazyReq('gulp-size');
const uglify = lazyReq('gulp-uglify');
const removeLines = lazyReq('gulp-remove-lines');
const runSequence = lazyReq('run-sequence');

const config = require('../../config').optimize.js;

gulp().task('optimize:js', (cb) => {
  runSequence()([
      'optimize:js:head',
      'optimize:js:footer'
    ],
    cb
  );
});

gulp().task('optimize:js:head', () => {
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
});

gulp().task('optimize:js:footer', () => {
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
});