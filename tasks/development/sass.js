const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const plumber = lazyReq('gulp-plumber');
const sass = lazyReq('gulp-sass');
const filter = lazyReq('gulp-filter');
const autoprefixer = lazyReq('gulp-autoprefixer');
const sourcemaps = lazyReq('gulp-sourcemaps');

const config = require('../../config');

gulp().task('sass', () => {
  // Prevent reading sourcemaps to autoprefix them or make sourcemaps of sourcemaps
  var sassFilter = filter()(['*.css', '!*.map']);

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