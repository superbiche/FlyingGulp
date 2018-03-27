const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', cb => {
  runSequence(
    'clean:all:production',
    'build',
    ['optimize:css', 'optimize:images', 'webpack:production'],
    cb,
  )
})
