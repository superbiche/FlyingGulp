const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const runSequence = lazyReq('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp().task('build', (cb) => {
  runSequence()(
    'bower:install',
    'clean',
    'sprites',
    'images',
    'copy:iconFonts',
    [
      'sass',
      'scripts',
      'copy:fonts:development'
    ],
    cb
  );
});