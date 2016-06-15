var lazyReq = require('lazy-req')(require);
var gulp = require('gulp');
var runSequence = lazyReq('run-sequence')();
var sourcemaps = lazyReq('gulp-sourcemaps')();
var concat = lazyReq('gulp-concat')();
var uglify = lazyReq('gulp-uglify')();
var removelines = lazyReq('gulp-remove-lines')();
var notify = lazyReq('gulp-notify')();
var browsersync = lazyReq('browser-sync')();
var plumber = lazyReq('gulp-plumber')();
var config = require('../../config').scripts;

gulp.task('scripts', (cb) => {
  runSequence(
    [
      'scripts:head',
      'scripts:vendor',
      'scripts:app'
    ],
    cb
  );
});

gulp.task('scripts:app', ['clean:scripts:app'], () => {
  return gulp.src(config.app.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('scripts:vendor', ['clean:scripts:vendor'], () => {
  return gulp.src(config.vendor.src)
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('scripts:head', ['clean:scripts:head'], () => {
  return gulp.src(config.head.src)
    .pipe(plumber())
    .pipe(concat('head.js'))
    .pipe(gulp.dest(config.dest));
});
