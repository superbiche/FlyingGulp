var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var changed = lazyReq('gulp-changed');
var config = require('../../config').copy;

/**
 * Copy fonts to dist folder
 */
gulp().task('copy:fonts:production', function () {
  return gulp().src(config.fonts.production.src)
    .pipe(changed()(config.fonts.production.dest))
    .pipe(gulp().dest(config.fonts.production.dest))
});

/**
 * Copy generated icon fonts
 */
gulp().task('copy:iconFonts', ['fontcustom'], function () {
  return gulp().src(config.iconFonts.src)
    .pipe(changed()(config.iconFonts.dest))
    .pipe(gulp().dest(config.iconFonts.dest))
});