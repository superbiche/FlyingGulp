const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', cb => {
  runSequence(
    'clean',
    'sprites',
    'images',
    'svg',
    'eslint',
    ['sass', 'webpack', 'copy:fonts:development'],
    cb,
  )
})
