var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var runSequence = lazyReq('run-sequence')();

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', (cb) => {
  runSequence(
    'clean:all',
    'build', [
      'copy:fonts',
      'optimize:css',
      'webpack:production',
      'optimize:images'
    ],
    cb
  );
});
