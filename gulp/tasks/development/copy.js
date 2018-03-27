const gulp = require('gulp')
const changed = require('gulp-changed')
const config = require('../../config').copy

/**
 * Copy fonts to dist folder
 */
gulp.task('copy:fonts:development', () => {
  return gulp
    .src(config.fonts.development.src)
    .pipe(changed(config.fonts.development.dest))
    .pipe(gulp.dest(config.fonts.development.dest))
})
