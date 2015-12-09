var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var runSequence = lazyReq('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp().task('build', function (cb) {
  runSequence()(
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