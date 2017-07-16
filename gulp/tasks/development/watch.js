var lazyReq = require('lazy-req')(require);
var gulp = require('gulp');
var watch = require('gulp-watch');
var browsersync = require('browser-sync');
var runSequence = lazyReq('run-sequence');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync:development'],  (cb) => {
  watch(config.sass, () => {
    runSequence()('sass');
  });

  watch(config.webpack.src, () => {
    runSequence()('webpack');
    //runSequence()('', browsersync.reload);
  });

  watch(config.images, () => {
    runSequence()('images', browsersync.reload);
  });

  watch(config.vectors, () => {
    runSequence()('copy:iconFonts', browsersync.reload);
  });

  watch(config.fonts, () => {
    runSequence()('copy:fonts:development', browsersync.reload);
  });

  watch(config.sprites, () => {
    runSequence()('sprites', browsersync.reload);
  });

  watch(config.templates, () => {
    browsersync.reload();
  });
});