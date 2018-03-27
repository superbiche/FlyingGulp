const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const base64 = require('gulp-base64')
const size = require('gulp-size')
const rename = require('gulp-rename')
const gmq = require('gulp-group-css-media-queries')
const config = require('../../config')

/**
 * Run base64 on the css, then minify it and write .min.css files
 * Don't optimize .min.css files (@todo should be cleaned before)
 */
gulp.task('optimize:css', () => {
  return gulp
    .src(config.optimize.css.src)
    .pipe(base64(config.base64.options))
    .pipe(gmq())
    .pipe(cleanCSS(config.optimize.css.options))
    .pipe(gulp.dest(config.optimize.css.dest))
    .pipe(size())
})
