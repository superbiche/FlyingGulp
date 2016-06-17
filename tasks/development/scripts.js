const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const runSequence = lazyReq('run-sequence');
const sourcemaps = lazyReq('gulp-sourcemaps');
const concat = lazyReq('gulp-concat');
const uglify = lazyReq('gulp-uglify');
const removelines = lazyReq('gulp-remove-lines');
const notify = lazyReq('gulp-notify');
const browsersync = lazyReq('browser-sync');
const plumber = lazyReq('gulp-plumber');

const config = require('../../config').scripts;

gulp().task('scripts', (cb) => {
  runSequence()(
    [
      'scripts:head',
      'scripts:vendor',
      'scripts:app'
    ],
    cb
  );
});

gulp().task('scripts:app', ['clean:scripts:app'], () => {
  return gulp().src(config.app.src)
    .pipe(plumber()())
    .pipe(sourcemaps().init())
    .pipe(concat()('app.js'))
    .pipe(uglify()())
    .pipe(sourcemaps().write('./'))
    .pipe(gulp().dest(config.dest));
});

gulp().task('scripts:vendor', ['clean:scripts:vendor'], () => {
  return gulp().src(config.vendor.src)
    .pipe(plumber()())
    .pipe(concat()('vendor.js'))
    .pipe(gulp().dest(config.dest));
});

gulp().task('scripts:head', ['clean:scripts:head'], () => {
  return gulp().src(config.head.src)
    .pipe(plumber()())
    .pipe(concat()('head.js'))
    .pipe(gulp().dest(config.dest));
});
