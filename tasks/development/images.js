const lazyReq = require('lazy-req')(require);
const gulp = lazyReq('gulp');
const changed = lazyReq('gulp-changed');
const imagemin = lazyReq('gulp-imagemin');
const pngquant = lazyReq('imagemin-pngquant');
const config = require('../../config').images;
const imageMinConfig = require('../../config').optimize.images;

gulp().task('images', (cb) => {
  return gulp().src(config.src)
    .pipe(changed()(config.dest))
    .pipe(imagemin()(Object.assign(imageMinConfig.options, { use: [pngquant()()] })))
    .pipe(gulp().dest(config.dest));
  cb();
});
