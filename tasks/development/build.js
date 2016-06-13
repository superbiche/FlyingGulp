var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp')();
var runSequence = lazyReq('run-sequence')();

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', (cb) => {
  runSequence(
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