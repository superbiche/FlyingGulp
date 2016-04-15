var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var changed = lazyReq('gulp-changed');
var config = require('../../config').copy;

/**
 * Copy fonts to dist folder
 */
gulp().task('copy:fonts:development', function () {
  return gulp().src(config.fonts.development.src)
    .pipe(changed()(config.fonts.development.dest))
    .pipe(gulp().dest(config.fonts.development.dest))
});

/**
 * Copy generated icon fonts
 */
gulp().task('copy:iconFonts', ['iconfonts'], function () {
  return gulp().src(config.iconFonts.src)
    .pipe(changed()(config.iconFonts.dest))
    .pipe(gulp().dest(config.iconFonts.dest))
});