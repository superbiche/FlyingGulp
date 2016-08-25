var lazyReq = require('lazy-req')(require);
var gulp = require('gulp');
var watch = require('gulp-watch');
var browsersync = require('browser-sync');
var runSequence = lazyReq('run-sequence');
var isLocked = require('../../util/checkWatchLock');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync:development'],  (cb) => {
  watch(config.sass, () => {
    if (!isLocked()) {
      runSequence()('sass');
    }
  });

  watch(config.scripts.app, () => {
    if (!isLocked()) {
      runSequence()('scripts:app', 'jshint', browsersync.reload);
    }
  });

  watch(config.scripts.head, () => {
    if (!isLocked()) {
      runSequence()('scripts:head', browsersync.reload);
    }
  });

  watch(config.scripts.vendor, () => {
    if (!isLocked()) {
      runSequence()('scripts:vendor', browsersync.reload);
    }
  });

  watch(config.images, () => {
    if (!isLocked()) {
      runSequence()('images', browsersync.reload);
    }
  });

  watch(config.vectors, () => {
    if (!isLocked()) {
      runSequence()('copy:iconFonts', browsersync.reload);
    }
  });

  watch(config.fonts, () => {
    if (!isLocked()) {
      runSequence()('copy:fonts:development', browsersync.reload);
    }
  });

  watch(config.sprites, () => {
    if (!isLocked()) {
      runSequence()('sprites', browsersync.reload);
    }
  });

  watch(config.templates, () => {
    if (!isLocked()) {
      browsersync.reload();
    }
  });
});