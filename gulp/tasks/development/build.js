var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var runSequence = lazyReq('run-sequence')();

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', (cb) => {
  runSequence(
    'clean',
    'sprites',
    'images',
    'copy:iconFonts',
    [
      'sass',
      'webpack',
      'copy:fonts:development'
    ],
    cb
  );
});