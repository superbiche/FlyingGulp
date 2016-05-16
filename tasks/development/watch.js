var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var watch = lazyReq('gulp-watch');
var browsersync = lazyReq('browser-sync');
var runSequence = lazyReq('run-sequence');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp().task('watch', ['browsersync:development'],  (cb) => {
  watch()(config.sass, (cb) => {
    runSequence()('sass', cb);
  });

  watch()(config.scripts.app, (cb) => {
    runSequence()('scripts:app', 'jshint', cb);
  });

  watch()(config.scripts.head, (cb) => {
    runSequence()('scripts:head', cb);
  });

  watch()(config.scripts.vendor, (cb) => {
    runSequence()('scripts:vendor', cb);
  });

  watch()(config.scripts.scriptsMap, (cb) => {
    runSequence()('scripts', cb);
  });

  watch()(config.images, (cb) => {
    runSequence()('images', cb);
  });

  watch()(config.vectors, (cb) => {
    runSequence()('copy:iconFonts', cb);
  });

  watch()(config.fonts, (cb) => {
    runSequence()('copy:fonts:development', cb);
  });

  watch()(config.sprites, (cb) => {
    runSequence()('sprites', cb);
  });

  watch()(config.templates, (cb) => {
    browsersync().reload();
    cb();
  });
});