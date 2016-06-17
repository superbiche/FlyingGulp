const lazyReq = require('lazy-req')(require);
const gulp = require('gulp');
const watch = require('gulp-watch');
const browsersync = require('browser-sync');
const runSequence = lazyReq('run-sequence');

const config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync:development'],  (cb) => {
  watch(config.sass, () => {
    runSequence()('sass');
  });

  watch(config.scripts.app, () => {
    runSequence()('scripts:app', 'jshint', browsersync.reload);
  });

  watch(config.scripts.head, () => {
    runSequence()('scripts:head', browsersync.reload);
  });

  watch(config.scripts.vendor, () => {
    runSequence()('scripts:vendor', browsersync.reload);
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