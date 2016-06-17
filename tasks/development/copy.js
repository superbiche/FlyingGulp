const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const changed = lazyReq('gulp-changed');

const config = require('../../config').copy;

/**
 * Copy fonts to dist folder
 */
gulp().task('copy:fonts:development', () => {
  return gulp().src(config.fonts.development.src)
    .pipe(changed()(config.fonts.development.dest))
    .pipe(gulp().dest(config.fonts.development.dest));
});

/**
 * Copy generated icon fonts
 */
gulp().task('copy:iconFonts', ['iconfonts'], () => {
  return gulp().src(config.iconFonts.src)
    .pipe(changed()(config.iconFonts.dest))
    .pipe(gulp().dest(config.iconFonts.dest));
});