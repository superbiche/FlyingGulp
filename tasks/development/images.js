const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const imagemin = lazyReq('gulp-imagemin');
const pngquant = lazyReq('imagemin-pngquant');
const changed = lazyReq('gulp-newer');
const destClean = lazyReq('gulp-dest-clean');
const bs = lazyReq('browser-sync');

const config = require('../../config').images;
const imageMinConfig = require('../../config').optimize.images;

gulp().task('images', () => {
  return gulp().src(config.src)
    .pipe(destClean()(config.dest, [], { force: true }))
    .pipe(changed()(config.dest))
    .pipe(imagemin()(Object.assign(imageMinConfig.options, { use: [pngquant()()] })))
    .pipe(gulp().dest(config.dest))
    .pipe(bs().stream());
});
