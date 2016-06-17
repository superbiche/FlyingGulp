const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const runSequence = lazyReq('run-sequence');

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
