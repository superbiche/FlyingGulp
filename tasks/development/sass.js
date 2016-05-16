var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var plumber = lazyReq('gulp-plumber');
var browsersync = lazyReq('browser-sync');
var sass = lazyReq('gulp-sass');
var filter = lazyReq('gulp-filter');
var autoprefixer = lazyReq('gulp-autoprefixer');
var sourcemaps = lazyReq('gulp-sourcemaps');
var config = require('../../config');
var messages = require('../../config').messages.sass;

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp().task('sass', () => {
  // Prevent reading sourcemaps to autoprefix them or make sourcemaps of sourcemaps
  var sassFilter = filter()(['*.css', '!*.map']);

  browsersync().notify(messages.startCompiling);

  return gulp().src(config.sass.src)
    .pipe(plumber()())
    .pipe(sourcemaps().init())
    .pipe(sass()(config.sass.options).on('error', sass().logError))
    .pipe(sourcemaps().write('./'))
    .pipe(sassFilter)
    .pipe(autoprefixer()(config.autoprefixer))
    .pipe(sassFilter.restore())
    .pipe(gulp().dest(config.sass.dest));
});