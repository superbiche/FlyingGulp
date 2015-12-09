var lazyReq = require('lazy-req')(require);
var gulp = lazyReq('gulp');
var changed = lazyReq('gulp-changed');
var imagemin = lazyReq('gulp-imagemin');
var config = require('../../config').images;
var imageMinConfig = require('../../config').optimize.images;

gulp().task('images', function (cb) {
  return gulp().src(config.src)
    .pipe(changed()(config.dest))
    .pipe(imagemin()(imageMinConfig.options))
    .pipe(gulp().dest(config.dest));
  cb;
});
