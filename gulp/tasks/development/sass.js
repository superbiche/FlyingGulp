const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', () => {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    //.pipe(sourcemaps.write('./'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dest))

});