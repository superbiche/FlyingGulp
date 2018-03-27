const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const config = require('../../config').svg;
/**
 * Generate fonts with gulp-iconfont
 */
gulp.task('svg', (cb) => {
  return gulp.src(config.src)
    .pipe(svgSprite(config.svgSprite))
    .on('error', function (error) {
      console.log(error)
    })
    .pipe(gulp.dest(config.dest));
});