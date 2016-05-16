var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var runSequence = lazyReq('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp().task('build:production', (cb) => {
  runSequence()(
    'clean:all:production',
    'build', [
      'copy:fonts:production',
      'optimize:css',
      'optimize:js',
      'optimize:images'
    ],
    cb
  );
});
