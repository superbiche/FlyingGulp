const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const changed = lazyReq('gulp-changed');

const config = require('../../config').copy;

/**
 * Copy fonts to dist folder
 */
gulp().task('copy:fonts:production', () => {
  return gulp().src(config.fonts.production.src)
    .pipe(changed()(config.fonts.production.dest))
    .pipe(gulp().dest(config.fonts.production.dest))
});