const lazyReq = require('lazy-req')(require);
const gulp = require('gulp');
const watch = require('gulp-watch');
const bs = lazyReq('browser-sync');
const runSequence = lazyReq('run-sequence');

const config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync:development'],  (cb) => {
  watch(config.sass, () => {
    runSequence()('sass');
  });

  watch(config.typescript, () => {
    runSequence()('typescript');
  });

  watch(config.images, () => {
    runSequence()('images');
  });

  watch(config.vectors, () => {
    runSequence()('copy:iconFonts');
  });

  watch(config.fonts, () => {
    runSequence()('copy:fonts:development');
  });

  watch(config.sprites, () => {
    runSequence()('sprites', bs().reload);
  });

  watch(config.templates, () => {
    bs().reload();
  });
});