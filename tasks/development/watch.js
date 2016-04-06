var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var watch = lazyReq('gulp-watch');
var browsersync = lazyReq('browser-sync');
var runSequence = lazyReq('run-sequence');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp().task('watch', ['browsersync:development'], function () {
  watch()(config.sass, function() {
    runSequence()(['sass']);
  });

  watch()(config.scripts.app, function() {
    runSequence()(['scripts:app', 'jshint']);
  });

  watch()(config.scripts.head, function() {
    runSequence()(['scripts:head']);
  });

  watch()(config.scripts.vendor, function() {
    runSequence()(['scripts:vendor']);
  });

  watch()(config.scripts.scriptsMap, function() {
    runSequence()(['scripts']);
  });

  watch()(config.images, function() {
    runSequence()(['images']);
  });

  watch()(config.vectors, function() {
    runSequence()(['copy:iconFonts']);
  });

  watch()(config.fonts, function() {
    runSequence()(['copy:fonts:development']);
  });

  watch()(config.sprites, function() {
    runSequence()(['sprites']);
  });

  watch()(config.templates, function() {
    browsersync().reload();
  });
});